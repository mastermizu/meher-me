// Campaign and Portfolio Types
export interface Campaign {
  id: number;
  name: string;
  platform: string;
  industry: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  ctr: string;
  roas: string;
  conversions: string;
  revenue: string;
  goalProgress: number;
  description: string;
  metrics: CampaignMetric[];
  tags: string[];
  duration: string;
  client: string;
  icon: React.ComponentType<any>;
  platformColor: string;
  bgGradient: string;
}

export interface CampaignMetric {
  label: string;
  value: string;
  target: string;
  status: 'exceeding' | 'meeting' | 'below';
}

// Experience and Timeline Types
export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startYear: number;
  endYear: number;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'work' | 'education' | 'certification';
}

// LinkedIn Recommendation Types
export interface LinkedInRecommendation {
  id: number;
  name: string;
  position: string;
  company: string;
  recommendation: string;
  avatar: string;
  connection: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  description?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
}

// Loading and Error States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Filter Types
export type IndustryFilter = 'All Industries' | 'E-commerce' | 'SaaS' | 'B2B' | 'Enterprise';

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
}

// Toast Types
export interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}
