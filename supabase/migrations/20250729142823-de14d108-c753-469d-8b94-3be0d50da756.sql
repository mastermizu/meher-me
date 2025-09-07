-- Fix security warnings

-- 1. Fix function search path for security
CREATE OR REPLACE FUNCTION public.validate_email_format(email_input text)
RETURNS boolean AS $$
BEGIN
  -- Basic email validation regex
  RETURN email_input ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE
SET search_path = public;