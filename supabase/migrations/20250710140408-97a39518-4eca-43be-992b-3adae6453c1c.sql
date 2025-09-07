-- Create activities table for random activity display
CREATE TABLE public.activities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  metric TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read activities (public display)
CREATE POLICY "Anyone can view activities" 
ON public.activities 
FOR SELECT 
USING (true);

-- Insert sample activities
INSERT INTO public.activities (title, description, metric) VALUES
('Campaign Launch', 'Launched new product campaign', '+24% engagement'),
('Content Creation', 'Published viral LinkedIn post', '50K+ views'),
('Strategy Meeting', 'Quarterly planning session', '4 new initiatives'),
('Performance Review', 'Analyzed Q3 metrics', '+15% growth'),
('Client Presentation', 'Pitched to Fortune 500', '$2M deal closed'),
('Team Leadership', 'Led cross-functional team', '100% on-time delivery'),
('Market Research', 'Competitive analysis study', '12 insights gained'),
('Brand Development', 'Refreshed visual identity', '+30% brand recognition'),
('Social Media', 'Instagram growth campaign', '25K new followers'),
('Email Marketing', 'Newsletter optimization', '+45% open rate'),
('SEO Optimization', 'Website traffic boost', '200% organic growth'),
('Analytics Deep-dive', 'Data-driven insights', '8 KPIs improved'),
('Partnership Deal', 'Strategic alliance formed', '3-year contract'),
('Product Launch', 'New feature rollout', '95% user adoption'),
('Training Session', 'Team skill development', '20 people upskilled'),
('Conference Speaking', 'Industry keynote delivered', '500+ attendees'),
('Innovation Workshop', 'Creative problem solving', '12 solutions proposed'),
('Customer Success', 'Retention program launch', '+18% loyalty score'),
('Digital Transformation', 'Process automation', '40% efficiency gain'),
('Thought Leadership', 'Published industry article', '10K+ shares');