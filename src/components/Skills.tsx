import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Target, Mail, BarChart3, ArrowRight, CheckCircle, Bot, Zap, Settings, Network, Workflow } from "lucide-react";
const Skills = () => {
  const coreServices = [{
    id: "demand-gen",
    title: "Demand Generation",
    description: "End-to-end demand generation campaigns that drive qualified pipeline",
    icon: <TrendingUp className="w-8 h-8" />,
    accentColor: "border-l-hubspot-orange",
    bgColor: "bg-gradient-to-br from-hubspot-orange/5 to-hubspot-orange/10",
    pipelineStages: [{
      stage: "MQL",
      leadCount: 2847,
      value: "$890K"
    }, {
      stage: "SQL",
      leadCount: 1947,
      value: "$1.2M"
    }, {
      stage: "Opportunity",
      leadCount: 1403,
      value: "$2.8M"
    }],
    conversionRate: "34.2%",
    pipelineValue: "$4.9M"
  }, {
    id: "growth-marketing",
    title: "Growth Marketing",
    description: "Data-driven growth strategies and optimization across all channels",
    icon: <BarChart3 className="w-8 h-8" />,
    accentColor: "border-l-growth-teal",
    bgColor: "bg-gradient-to-br from-growth-teal/5 to-growth-teal/10",
    metrics: [{
      label: "Conversion Rate",
      value: "2.88%",
      change: "YoY"
    }, {
      label: "CAC Reduction",
      value: "45%",
      change: "Improved"
    }, {
      label: "LTV Increase",
      value: "180%",
      change: "Growth"
    }]
  }, {
    id: "email-lifecycle",
    title: "Email Marketing",
    description: "Advanced automation sequences and marketing campaign management",
    icon: <Mail className="w-8 h-8" />,
    accentColor: "border-l-hubspot-orange",
    bgColor: "bg-gradient-to-br from-hubspot-orange/5 to-hubspot-orange/10",
    emailMetrics: [{
      label: "Deliverability",
      value: "88.7%",
      description: "180 days"
    }, {
      label: "Emails Sent",
      value: "6.4M",
      description: "Yearly"
    }, {
      label: "Flow Automation",
      value: "87",
      description: "Completed"
    }]
  }, {
    id: "abm-campaigns",
    title: "Account-Based Marketing",
    description: "Strategic account targeting and personalized engagement campaigns",
    icon: <Target className="w-8 h-8" />,
    accentColor: "border-l-hubspot-blue",
    bgColor: "bg-gradient-to-br from-hubspot-blue/5 to-hubspot-blue/10",
    abmMetrics: [{
      label: "Account Engagement Rate",
      value: "67.4%",
      description: "Target Accounts"
    }, {
      label: "Pipeline Acceleration",
      value: "89 days",
      description: "Faster Close"
    }, {
      label: "Account Penetration",
      value: "78%",
      description: "Multi-Contact"
    }]
  }, {
    id: "campaign-management",
    title: "Campaign Management",
    description: "Multi-channel campaign orchestration and performance optimization",
    icon: <BarChart3 className="w-8 h-8" />,
    accentColor: "border-l-growth-teal",
    bgColor: "bg-gradient-to-br from-growth-teal/5 to-growth-teal/10",
    campaignMetrics: [{
      label: "Campaign ROI",
      value: "340%",
      description: "Average Return"
    }, {
      label: "Cross-Channel Attribution",
      value: "82%",
      description: "Accuracy"
    }, {
      label: "Campaign Optimization",
      value: "45%",
      description: "Performance Lift"
    }]
  }, {
    id: "lifecycle-marketing",
    title: "Lifecycle Marketing",
    description: "Customer journey optimization and retention strategies",
    icon: <TrendingUp className="w-8 h-8" />,
    accentColor: "border-l-hubspot-orange",
    bgColor: "bg-gradient-to-br from-hubspot-orange/5 to-hubspot-orange/10",
    lifecycleMetrics: [{
      label: "Customer Lifetime Value",
      value: "42%",
      description: "CLV Improved"
    }, {
      label: "Retention Rate",
      value: "59.3%",
      description: "12-Month"
    }, {
      label: "Churn Reduction",
      value: "34%",
      description: "YoY Improvement"
    }]
  }, {
    id: "lead-generation",
    title: "Lead Generation",
    description: "Multi-channel lead capture and qualification strategies",
    icon: <CheckCircle className="w-8 h-8" />,
    accentColor: "border-l-hubspot-blue",
    bgColor: "bg-gradient-to-br from-hubspot-blue/5 to-hubspot-blue/10",
    leadGenMetrics: [{
      label: "Lead Volume",
      value: "8.2K",
      description: "Monthly Qualified"
    }, {
      label: "Cost Per Lead",
      value: "$47",
      description: "Blended CPL"
    }, {
      label: "Lead-to-Customer Rate",
      value: "23.8%",
      description: "Conversion"
    }]
  }];
  return <section id="skills" className="py-hubspot-xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-hubspot-orange/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-growth-teal/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-hubspot-blue/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-hubspot-xl">
          <h2 className="text-hubspot-h1 mb-hubspot-md text-professional-navy">
            Core <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-hubspot-body max-w-3xl mx-auto text-blue-gray">
            Demand Generation, Growth Marketing, ABM, Email Marketing, Campaign Management, Lifecycle Marketing & Lead Generation
          </p>
          
          {/* 2025 Performance Status Bar */}
          <div className="bg-gradient-to-r from-hubspot-orange/10 to-growth-teal/10 rounded-lg border border-hubspot-orange/20 p-6 backdrop-blur-sm mt-hubspot-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-hubspot-orange rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-professional-navy">
                  2025 Performance: Active
                </span>
              </div>
              <div className="text-sm text-blue-gray">
                Last updated: Jul 17, 2025
              </div>
            </div>
          </div>
        </div>

        {/* Core Expertise Cards - 3 rows: 2, 3, 3 */}
        <div className="space-y-hubspot-lg">
          
          {/* Row 1: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-hubspot-lg">
            
            {/* AI Automation & Integration */}
            <Card className="hubspot-card hubspot-card-hover border-l-hubspot-blue bg-gradient-to-br from-hubspot-blue/5 to-hubspot-blue/10">
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="text-hubspot-blue">
                    <Bot className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-hubspot-h2 text-lg">AI Automation &amp; Vibe Coding</CardTitle>
                    <p className="text-hubspot-small">Data-driven automation strategies and no-code web app building</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-hubspot-sm">
                  <div className="bg-clean-white border rounded-lg p-hubspot-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-hubspot-small font-medium">Automation Implemented</span>
                      <span className="text-xs text-hubspot-blue">Number</span>
                    </div>
                    <div className="text-2xl font-bold text-hubspot-blue">127</div>
                  </div>
                  
                  <div className="bg-clean-white border rounded-lg p-hubspot-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-hubspot-small font-medium">Time Saved</span>
                      <span className="text-xs text-hubspot-blue">Hours</span>
                    </div>
                    <div className="text-2xl font-bold text-hubspot-blue">2,840</div>
                  </div>
                  
                  <div className="bg-clean-white border rounded-lg p-hubspot-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-hubspot-small font-medium">Process Optimized</span>
                      <span className="text-xs text-hubspot-blue">Percentage</span>
                    </div>
                    <div className="text-2xl font-bold text-hubspot-blue">84%</div>
                  </div>
                  
                  <div className="bg-clean-white border rounded-lg p-hubspot-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-hubspot-small font-medium">Vibe Code Projects</span>
                      <span className="text-xs text-hubspot-blue">Launched</span>
                    </div>
                    <div className="text-2xl font-bold text-hubspot-blue">7</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Demand Generation */}
            <Card className="hubspot-card hubspot-card-hover border-l-hubspot-orange bg-gradient-to-br from-hubspot-orange/5 to-hubspot-orange/10">
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="text-hubspot-orange">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-hubspot-h2 text-lg">Demand Generation</CardTitle>
                    <p className="text-hubspot-small">End-to-end demand generation campaigns that drive qualified pipeline</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-hubspot-sm">
                  <div className="bg-clean-white border rounded-lg p-hubspot-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-hubspot-small font-medium">Lead to SQL Rate</span>
                      <span className="text-xs text-hubspot-orange">Conversion</span>
                    </div>
                    <div className="text-2xl font-bold text-hubspot-orange">34.2%</div>
                  </div>
                  
                  <div className="bg-clean-white border rounded-lg p-hubspot-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-hubspot-small font-medium">Pipeline Value</span>
                      <span className="text-xs text-hubspot-orange">Total</span>
                    </div>
                    <div className="text-2xl font-bold text-hubspot-orange">$4.9M</div>
                  </div>
                  
                  <div className="bg-clean-white border rounded-lg p-hubspot-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-hubspot-small font-medium">MQLs Generated</span>
                      <span className="text-xs text-hubspot-orange">Monthly</span>
                    </div>
                    <div className="text-2xl font-bold text-hubspot-orange">2,847</div>
                  </div>
                  
                  <div className="bg-clean-white border rounded-lg p-hubspot-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-hubspot-small font-medium">Opportunities</span>
                      <span className="text-xs text-hubspot-orange">Active</span>
                    </div>
                    <div className="text-2xl font-bold text-hubspot-orange">1,403</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Row 2: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-hubspot-lg">
            
            {/* Growth Marketing */}
            <Card className={`hubspot-card hubspot-card-hover ${coreServices[1].accentColor} ${coreServices[1].bgColor}`}>
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="text-growth-teal">
                    {coreServices[1].icon}
                  </div>
                  <div>
                    <CardTitle className="text-hubspot-h2 text-lg">{coreServices[1].title}</CardTitle>
                    <p className="text-hubspot-small">{coreServices[1].description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-hubspot-sm">
                  {coreServices[1].metrics.map((metric, idx) => 
                    <div key={idx} className="bg-clean-white border rounded-lg p-hubspot-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-hubspot-small font-medium">{metric.label}</span>
                        <span className="text-xs text-green-600">{metric.change}</span>
                      </div>
                      <div className="text-2xl font-bold text-growth-teal">{metric.value}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Email Marketing */}
            <Card className={`hubspot-card hubspot-card-hover ${coreServices[2].accentColor} ${coreServices[2].bgColor}`}>
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="text-hubspot-orange">
                    {coreServices[2].icon}
                  </div>
                  <div>
                    <CardTitle className="text-hubspot-h2 text-lg">{coreServices[2].title}</CardTitle>
                    <p className="text-hubspot-small">{coreServices[2].description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-hubspot-sm">
                  {coreServices[2].emailMetrics.map((metric, idx) => 
                    <div key={idx} className="bg-clean-white border rounded-lg p-hubspot-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-hubspot-small font-medium">{metric.label}</span>
                        <span className="text-xs text-hubspot-orange">{metric.description}</span>
                      </div>
                      <div className="text-2xl font-bold text-hubspot-orange">{metric.value}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Account-Based Marketing (ABM) */}
            <Card className={`hubspot-card hubspot-card-hover ${coreServices[3].accentColor} ${coreServices[3].bgColor}`}>
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="text-hubspot-blue">
                    {coreServices[3].icon}
                  </div>
                  <div>
                    <CardTitle className="text-hubspot-h2 text-base">{coreServices[3].title}</CardTitle>
                    <p className="text-hubspot-small">{coreServices[3].description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-hubspot-sm">
                  {coreServices[3].abmMetrics.map((metric, idx) => 
                    <div key={idx} className="bg-clean-white border rounded-lg p-hubspot-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-hubspot-small font-medium">{metric.label}</span>
                        <span className="text-xs text-hubspot-blue">{metric.description}</span>
                      </div>
                      <div className="text-2xl font-bold text-hubspot-blue">{metric.value}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Row 3: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-hubspot-lg">
            
            {/* Campaign Management */}
            <Card className={`hubspot-card hubspot-card-hover ${coreServices[4].accentColor} ${coreServices[4].bgColor}`}>
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="text-growth-teal">
                    {coreServices[4].icon}
                  </div>
                  <div>
                    <CardTitle className="text-hubspot-h2 text-lg">{coreServices[4].title}</CardTitle>
                    <p className="text-hubspot-small">{coreServices[4].description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-hubspot-sm">
                  {coreServices[4].campaignMetrics.map((metric, idx) => 
                    <div key={idx} className="bg-clean-white border rounded-lg p-hubspot-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-hubspot-small font-medium">{metric.label}</span>
                        <span className="text-xs text-growth-teal">{metric.description}</span>
                      </div>
                      <div className="text-2xl font-bold text-growth-teal">{metric.value}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Lifecycle Marketing */}
            <Card className={`hubspot-card hubspot-card-hover ${coreServices[5].accentColor} ${coreServices[5].bgColor}`}>
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="text-hubspot-orange">
                    {coreServices[5].icon}
                  </div>
                  <div>
                    <CardTitle className="text-hubspot-h2 text-lg">{coreServices[5].title}</CardTitle>
                    <p className="text-hubspot-small">{coreServices[5].description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-hubspot-sm">
                  {coreServices[5].lifecycleMetrics.map((metric, idx) => 
                    <div key={idx} className="bg-clean-white border rounded-lg p-hubspot-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-hubspot-small font-medium">{metric.label}</span>
                        <span className="text-xs text-hubspot-orange">{metric.description}</span>
                      </div>
                      <div className="text-2xl font-bold text-hubspot-orange">{metric.value}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Lead Generation */}
            <Card className={`hubspot-card hubspot-card-hover ${coreServices[6].accentColor} ${coreServices[6].bgColor}`}>
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <div className="text-hubspot-blue">
                    {coreServices[6].icon}
                  </div>
                  <div>
                    <CardTitle className="text-hubspot-h2 text-lg">{coreServices[6].title}</CardTitle>
                    <p className="text-hubspot-small">{coreServices[6].description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-hubspot-sm">
                  {coreServices[6].leadGenMetrics.map((metric, idx) => 
                    <div key={idx} className="bg-clean-white border rounded-lg p-hubspot-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-hubspot-small font-medium">{metric.label}</span>
                        <span className="text-xs text-hubspot-blue">{metric.description}</span>
                      </div>
                      <div className="text-2xl font-bold text-hubspot-blue">{metric.value}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-hubspot-xl">
          <p className="text-hubspot-body mb-hubspot-md text-lg">
            Ready to accelerate your demand generation and growth?
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="hubspot-button-primary text-lg">
                Start Growth Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle>Book Your Growth Strategy Call</DialogTitle>
                <DialogDescription>
                  Schedule a consultation to discuss your marketing goals and growth strategy.
                </DialogDescription>
              </DialogHeader>
              <div className="w-full">
                <iframe src="https://calendly.com/meherul/growth-discovery-call" className="w-full border-0" style={{
                minWidth: '320px',
                height: '700px'
              }} frameBorder="0" scrolling="no" />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>;
};
export default Skills;