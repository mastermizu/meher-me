-- Secure the activities table: restrict reads to authenticated users only
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

-- Remove existing permissive public-read policy
DROP POLICY IF EXISTS "Users can view published activities" ON public.activities;

-- Allow only authenticated users to read activities
CREATE POLICY "Authenticated users can view activities"
ON public.activities
FOR SELECT
TO authenticated
USING (true);
