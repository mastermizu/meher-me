import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
};

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

// Enhanced rate limiting with more granular controls
const submissionTracker = new Map<string, { count: number; lastSubmission: number; violations: number }>();

function getClientIP(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0] || 
         req.headers.get('x-real-ip') || 
         req.headers.get('cf-connecting-ip') ||
         'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = submissionTracker.get(ip);
  
  if (!record) {
    submissionTracker.set(ip, { count: 1, lastSubmission: now, violations: 0 });
    return false;
  }
  
  // Reset count if more than 1 hour has passed
  if (now - record.lastSubmission > 3600000) {
    submissionTracker.set(ip, { count: 1, lastSubmission: now, violations: record.violations });
    return false;
  }
  
  // Stricter rate limiting: max 3 submissions per hour
  if (record.count >= 3) {
    record.violations++;
    // Temporary ban for repeated violations
    if (record.violations >= 3) {
      return true;
    }
    return true;
  }
  
  record.count++;
  record.lastSubmission = now;
  return false;
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>"/\\&'`]/g, '') // Remove potentially dangerous characters
    .replace(/javascript:/gi, '') // Remove javascript protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 2000); // Limit length
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validateInput(data: ContactSubmission): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  } else if (data.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  if (data.company && data.company.length > 100) {
    errors.push('Company name must be less than 100 characters');
  }
  
  if (data.projectType && data.projectType.length > 100) {
    errors.push('Project type must be less than 100 characters');
  }
  
  if (data.description && data.description.length > 2000) {
    errors.push('Description must be less than 2000 characters');
  }
  
  return { isValid: errors.length === 0, errors };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIP = getClientIP(req);
    const userAgent = req.headers.get('user-agent') || 'unknown';
    
    console.log(`Contact form submission from IP: ${clientIP}, User-Agent: ${userAgent}`);
    
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
        { 
          status: 429, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    const data: ContactSubmission = await req.json();
    
    // Validate input
    const validation = validateInput(data);
    if (!validation.isValid) {
      console.warn(`Invalid contact form data from IP: ${clientIP}, errors: ${validation.errors.join(', ')}`);
      return new Response(
        JSON.stringify({ error: 'Invalid form data', details: validation.errors }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      company: data.company ? sanitizeInput(data.company) : null,
      project_type: data.projectType ? sanitizeInput(data.projectType) : null,
      description: data.description ? sanitizeInput(data.description) : null,
      ip_address: clientIP,
      user_agent: userAgent
    };

    // Insert into database
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert(sanitizedData)
      .select('id')
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to submit contact form' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    const ticketNumber = `TKT-${result.id.slice(-8).toUpperCase()}`;
    
    console.log(`Contact form submitted successfully. Ticket: ${ticketNumber}, IP: ${clientIP}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully',
        ticketNumber
      }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );

  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
};

serve(handler);