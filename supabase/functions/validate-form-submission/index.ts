import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterSubmission {
  email: string;
  name?: string;
}

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  description?: string;
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Rate limiting: Track submissions by IP
const submissionTracker = new Map<string, { count: number; lastSubmission: number }>();

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0] || 
         req.headers.get('x-real-ip') || 
         'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = submissionTracker.get(ip);
  
  if (!record) {
    submissionTracker.set(ip, { count: 1, lastSubmission: now });
    return false;
  }
  
  // Reset count if more than 1 hour has passed
  if (now - record.lastSubmission > 3600000) {
    submissionTracker.set(ip, { count: 1, lastSubmission: now });
    return false;
  }
  
  // Allow max 5 submissions per hour
  if (record.count >= 5) {
    return true;
  }
  
  record.count++;
  record.lastSubmission = now;
  return false;
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>"/\\&]/g, '') // Remove potentially dangerous characters
    .substring(0, 1000); // Limit length
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIP = getClientIP(req);
    
    if (isRateLimited(clientIP)) {
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
        { 
          status: 429, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    const { type, data } = await req.json();

    if (type === 'newsletter') {
      const { email, name }: NewsletterSubmission = data;
      
      if (!validateEmail(email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      const sanitizedEmail = sanitizeInput(email);
      const sanitizedName = name ? sanitizeInput(name) : null;

      const { data: result, error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ 
          email: sanitizedEmail, 
          name: sanitizedName 
        });

      if (error) {
        if (error.code === '23505') { // Duplicate key error
          return new Response(
            JSON.stringify({ error: 'Email already subscribed' }),
            { status: 409, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
          );
        }
        throw error;
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Successfully subscribed to newsletter' }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (type === 'contact') {
      const { name, email, company, projectType, description }: ContactSubmission = data;
      
      if (!name || !email) {
        return new Response(
          JSON.stringify({ error: 'Name and email are required' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      if (!validateEmail(email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email format' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      // For contact forms, we might want to store in a contacts table or send email
      // For now, just validate and return success
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Contact form submitted successfully',
          ticketNumber: `TKT-${Date.now().toString().slice(-6)}`
        }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid submission type' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );

  } catch (error: any) {
    console.error('Validation error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
};

serve(handler);