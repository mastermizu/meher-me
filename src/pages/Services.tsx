import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadPipeline from "@/components/dashboard/LeadPipeline";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, BarChart3, Mail, Zap } from "lucide-react";

const Services = () => {
  const coreServices = [
    {
      title: "Demand Generation",
      description: "End-to-end demand generation campaigns that drive qualified pipeline",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      features: [
        "Lead Pipeline Management",
        "Multi-channel Campaigns", 
        "Conversion Optimization",
        "Performance Analytics"
      ],
      highlighted: false
    },
    {
      title: "Sales Enablement",
      description: "Tools and strategies to accelerate your sales process",
      icon: <Target className="h-8 w-8" />,
      features: [
        "Sales Process Optimization",
        "Lead Scoring Systems",
        "CRM Integration",
        "Sales Team Training"
      ]
    },
    {
      title: "Marketing Automation",
      description: "Streamlined workflows that nurture leads automatically", 
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Email Automation",
        "Lead Nurturing Flows",
        "Behavioral Triggers",
        "A/B Testing"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance",
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        "Performance Dashboards",
        "ROI Analysis",
        "Campaign Attribution",
        "Custom Reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-poppins text-5xl lg:text-6xl font-bold mb-6">
              Core <span className="text-gradient">Services</span>
            </h1>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive marketing solutions designed to accelerate growth and drive measurable results
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {coreServices.map((service, index) => (
              <Card 
                key={index} 
                className={`border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 ${
                  service.highlighted ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="font-poppins text-2xl">
                        {service.title}
                        {service.highlighted && (
                          <Badge className="ml-3 bg-primary/10 text-primary">
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demand Generation Deep Dive */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold mb-6">
              Demand Generation <span className="text-gradient">Deep Dive</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              Our flagship service delivering end-to-end demand generation with proven results
            </p>
          </div>
        </div>
      </section>

      {/* Lead Pipeline Component */}
      <LeadPipeline />

      <Footer />
    </div>
  );
};

export default Services;