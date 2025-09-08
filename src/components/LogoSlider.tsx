import React from 'react';
import { Workflow, Settings, Zap, Mail, BarChart3, Search, MessageSquare, Users, Globe, Database, Calendar, FileText, Camera, Code, Smartphone, Cloud, TrendingUp, Target } from "lucide-react";
const LogoSlider = () => {
  const tools = [{
    name: "HubSpot",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Zapier",
    icon: <Zap className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Slack",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "GHL",
    icon: <Users className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "WordPress",
    icon: <Globe className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "Airtable",
    icon: <Database className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Clay",
    icon: <Database className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "Notion",
    icon: <FileText className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "Canva",
    icon: <Camera className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "HTML",
    icon: <Code className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "Mailchimp",
    icon: <Mail className="w-6 h-6" />,
    color: "text-mailchimp-yellow"
  }, {
    name: "Klaviyo",
    icon: <Mail className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "Mautic",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "Amazon SES",
    icon: <Cloud className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Google Ads",
    icon: <Target className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "Google Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "ActiveCampaign",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "ConvertKit",
    icon: <Mail className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Meta Ads",
    icon: <Target className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "Bing Ads",
    icon: <Search className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "TikTok Ads",
    icon: <Target className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "Shopify",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "Brevo",
    icon: <Mail className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "Office 365",
    icon: <FileText className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "Calendly",
    icon: <Calendar className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "Trello",
    icon: <FileText className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Jira",
    icon: <Settings className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "Twilio",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "Manychat",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "OpenAI",
    icon: <Code className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "ElevenLabs",
    icon: <Code className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "Vapi",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Instantly",
    icon: <Mail className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "Lovable",
    icon: <Code className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "Zoho CRM",
    icon: <Users className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Odoo",
    icon: <Settings className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "Mailgun",
    icon: <Mail className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "Apify",
    icon: <Search className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "ClickFunnels",
    icon: <Target className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Salesforce",
    icon: <Users className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "Pipedrive",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "Intercom",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "Typeform",
    icon: <FileText className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "Hotjar",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }, {
    name: "Mixpanel",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-hubspot-blue"
  }, {
    name: "Webflow",
    icon: <Globe className="w-6 h-6" />,
    color: "text-professional-navy"
  }, {
    name: "Unbounce",
    icon: <Globe className="w-6 h-6" />,
    color: "text-hubspot-purple"
  }, {
    name: "Apollo",
    icon: <Search className="w-6 h-6" />,
    color: "text-growth-teal"
  }, {
    name: "ZoomInfo",
    icon: <Users className="w-6 h-6" />,
    color: "text-hubspot-orange"
  }];

  // Duplicate the tools array to create seamless scrolling
  const duplicatedTools = [...tools, ...tools];
  return <section className="py-hubspot-lg bg-gradient-to-r from-light-gray via-clean-white to-light-gray overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <div className="text-center">
          <h3 className="text-hubspot-h3 text-professional-navy mb-2 text-2xl font-medium">
            Expertise Across 180+ Leading Platforms
          </h3>
          <p className="text-hubspot-small text-blue-gray">
            Empowering your marketing success with industry-leading tools
          </p>
        </div>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-clean-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-clean-white to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex space-x-8 animate-scroll-infinite">
          {duplicatedTools.map((tool, index) => <div key={`${tool.name}-${index}`} className="flex items-center space-x-3 bg-gradient-to-br from-clean-white to-light-gray border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap flex-shrink-0">
              <div className={`${tool.color} transition-colors`}>
                {tool.icon}
              </div>
              <span className="font-medium text-professional-navy text-sm">
                {tool.name}
              </span>
            </div>)}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
      __html: `
          .animate-scroll-infinite {
            animation: scroll-left 60s linear infinite;
            width: max-content;
          }
          
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
    }} />
    </section>;
};
export default LogoSlider;