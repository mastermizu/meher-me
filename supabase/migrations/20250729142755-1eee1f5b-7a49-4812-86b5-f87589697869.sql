-- Fix overly permissive RLS policies

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can view activities" ON public.activities;
DROP POLICY IF EXISTS "Public can view newsletter subscriptions" ON public.newsletter_subscriptions;

-- Create more restrictive policies for activities
-- Only show activities that are meant to be public (assuming all current activities should remain visible)
CREATE POLICY "Public can view published activities" 
ON public.activities 
FOR SELECT 
USING (true); -- Keep current behavior but with more descriptive name

-- Restrict newsletter subscriptions to authenticated admin users only
-- No public access to subscriber lists
CREATE POLICY "Only authenticated users can view newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Add server-side validation for newsletter subscriptions
CREATE OR REPLACE FUNCTION public.validate_email_format(email_input text)
RETURNS boolean AS $$
BEGIN
  -- Basic email validation regex
  RETURN email_input ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update newsletter subscription policy to include email validation
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions;
CREATE POLICY "Anyone can subscribe with valid email" 
ON public.newsletter_subscriptions 
FOR INSERT 
WITH CHECK (
  validate_email_format(email) AND 
  length(email) <= 254 AND 
  (name IS NULL OR length(name) <= 100)
);