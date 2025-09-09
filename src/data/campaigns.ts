import { Campaign } from '@/types';
import { 
  ShoppingCart, 
  Target, 
  BarChart3, 
  Users, 
  Mail, 
  Instagram,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

export const campaigns: Campaign[] = [
  {
    id: 1,
    name: "E-Commerce Growth",
    platform: "Google Ads",
    industry: "E-commerce",
    status: "Completed",
    ctr: "8.7%",
    roas: "4.8x",
    conversions: "2,847",
    revenue: "$398K",
    goalProgress: 142,
    description: "Multi-channel paid advertising strategy that exceeded revenue targets through strategic audience targeting and conversion optimization.",
    metrics: [
      {
        label: "Click-Through Rate",
        value: "8.7%",
        target: "5.0%",
        status: "exceeding"
      },
      {
        label: "Return on Ad Spend",
        value: "4.8x",
        target: "3.5x",
        status: "exceeding"
      },
      {
        label: "Cost per Acquisition",
        value: "$45",
        target: "$65",
        status: "below"
      },
      {
        label: "Conversion Rate",
        value: "12.4%",
        target: "8.0%",
        status: "exceeding"
      }
    ],
    tags: ["Google Ads", "Facebook Ads", "CRO"],
    duration: "6 months",
    client: "Fashion E-commerce",
    icon: ShoppingCart,
    platformColor: "hubspot-orange",
    bgGradient: "from-hubspot-orange/10 to-hubspot-orange/5"
  },
  {
    id: 2,
    name: "B2B Lead Gen",
    platform: "HubSpot",
    industry: "B2B",
    status: "Completed",
    ctr: "12.3%",
    roas: "16.4x",
    conversions: "847",
    revenue: "$2.3M",
    goalProgress: 128,
    description: "Comprehensive inbound marketing strategy that generated high-quality leads through content marketing and automation workflows.",
    metrics: [
      {
        label: "Lead Generation",
        value: "847",
        target: "800",
        status: "exceeding"
      },
      {
        label: "Lead Quality Score",
        value: "8.7/10",
        target: "7.0/10",
        status: "exceeding"
      },
      {
        label: "Cost per Lead",
        value: "$89",
        target: "$120",
        status: "below"
      },
      {
        label: "Conversion Rate",
        value: "15.2%",
        target: "10.0%",
        status: "exceeding"
      }
    ],
    tags: ["HubSpot", "Content Marketing", "Automation"],
    duration: "8 months",
    client: "SaaS Company",
    icon: Target,
    platformColor: "hubspot-blue",
    bgGradient: "from-hubspot-blue/10 to-hubspot-blue/5"
  },
  {
    id: 3,
    name: "Enterprise Sales",
    platform: "Salesforce",
    industry: "Enterprise",
    status: "In Progress",
    ctr: "6.8%",
    roas: "13.2x",
    conversions: "89",
    revenue: "$1.2M",
    goalProgress: 78,
    description: "Enterprise-level sales enablement and CRM optimization that improved sales team efficiency and deal closure rates.",
    metrics: [
      {
        label: "Deal Closure Rate",
        value: "34%",
        target: "25%",
        status: "exceeding"
      },
      {
        label: "Sales Cycle Length",
        value: "45 days",
        target: "60 days",
        status: "below"
      },
      {
        label: "Average Deal Size",
        value: "$13.5K",
        target: "$10K",
        status: "exceeding"
      },
      {
        label: "Pipeline Velocity",
        value: "+67%",
        target: "+30%",
        status: "exceeding"
      }
    ],
    tags: ["Salesforce", "Sales Enablement", "CRM"],
    duration: "4 months",
    client: "Enterprise Corp",
    icon: BarChart3,
    platformColor: "growth-teal",
    bgGradient: "from-growth-teal/10 to-growth-teal/5"
  },
  {
    id: 4,
    name: "Social Media Growth",
    platform: "Meta Business",
    industry: "SaaS",
    status: "Completed",
    ctr: "9.2%",
    roas: "5.1x",
    conversions: "1,892",
    revenue: "$264K",
    goalProgress: 156,
    description: "Social media advertising campaign that built brand awareness and drove user acquisition across multiple platforms.",
    metrics: [
      {
        label: "Engagement Rate",
        value: "12.8%",
        target: "8.0%",
        status: "exceeding"
      },
      {
        label: "Follower Growth",
        value: "+28.7K",
        target: "+25K",
        status: "exceeding"
      },
      {
        label: "Cost per Engagement",
        value: "$0.12",
        target: "$0.20",
        status: "below"
      },
      {
        label: "Brand Awareness",
        value: "78%",
        target: "60%",
        status: "exceeding"
      }
    ],
    tags: ["Facebook Ads", "Instagram", "Social Media"],
    duration: "5 months",
    client: "Tech Startup",
    icon: Users,
    platformColor: "mailchimp-yellow",
    bgGradient: "from-mailchimp-yellow/10 to-mailchimp-yellow/5"
  },
  {
    id: 5,
    name: "Email Marketing",
    platform: "Mailchimp",
    industry: "E-commerce",
    status: "Completed",
    ctr: "24.7%",
    roas: "87.3x",
    conversions: "3,247",
    revenue: "$445K",
    goalProgress: 189,
    description: "Automated email marketing sequences that nurtured leads and drove repeat purchases through personalized campaigns.",
    metrics: [
      {
        label: "Open Rate",
        value: "24.7%",
        target: "18.0%",
        status: "exceeding"
      },
      {
        label: "Click Rate",
        value: "8.9%",
        target: "5.0%",
        status: "exceeding"
      },
      {
        label: "Unsubscribe Rate",
        value: "0.3%",
        target: "1.0%",
        status: "below"
      },
      {
        label: "Revenue per Email",
        value: "$78",
        target: "$45",
        status: "exceeding"
      }
    ],
    tags: ["Mailchimp", "Email Automation", "Personalization"],
    duration: "7 months",
    client: "Online Retailer",
    icon: Mail,
    platformColor: "mailchimp-dark",
    bgGradient: "from-mailchimp-dark/10 to-mailchimp-dark/5"
  },
  {
    id: 6,
    name: "Influencer Campaign",
    platform: "Instagram",
    industry: "E-commerce",
    status: "In Progress",
    ctr: "15.6%",
    roas: "4.2x",
    conversions: "1,156",
    revenue: "$178K",
    goalProgress: 92,
    description: "Strategic influencer partnerships that expanded brand reach and drove authentic engagement with target demographics.",
    metrics: [
      {
        label: "Reach",
        value: "1.8M",
        target: "1.5M",
        status: "exceeding"
      },
      {
        label: "Engagement Rate",
        value: "15.6%",
        target: "10.0%",
        status: "exceeding"
      },
      {
        label: "Cost per Reach",
        value: "$0.08",
        target: "$0.12",
        status: "below"
      },
      {
        label: "Brand Sentiment",
        value: "94%",
        target: "85%",
        status: "exceeding"
      }
    ],
    tags: ["Influencer Marketing", "Instagram", "Brand Awareness"],
    duration: "3 months",
    client: "Fashion Brand",
    icon: Instagram,
    platformColor: "hubspot-purple",
    bgGradient: "from-hubspot-purple/10 to-hubspot-purple/5"
  }
];

export const industryFilters = [
  "All Industries",
  "E-commerce", 
  "SaaS", 
  "B2B", 
  "Enterprise"
] as const;
