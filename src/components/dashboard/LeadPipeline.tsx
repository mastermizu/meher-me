import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const LeadPipeline = () => {
  const currentYear = new Date().getFullYear();
  
  const pipelineStages = [
    {
      stage: "Marketing Qualified Lead",
      leads: 2847,
      totalValue: "$890K",
      conversionRate: 68.4,
      color: "bg-blue-500"
    },
    {
      stage: "Sales Qualified Lead", 
      leads: 1947,
      totalValue: "$1.2M",
      conversionRate: 72.1,
      color: "bg-orange-500"
    },
    {
      stage: "Opportunity",
      leads: 1403,
      totalValue: "$2.8M", 
      conversionRate: 45.8,
      color: "bg-amber-500"
    },
    {
      stage: "Proposal Sent",
      leads: 643,
      totalValue: "$1.9M",
      conversionRate: 34.2,
      color: "bg-emerald-500"
    },
    {
      stage: "Closed Won",
      leads: 220,
      totalValue: "$3.4M",
      conversionRate: 100,
      color: "bg-green-600"
    }
  ];

  const totalLeads = pipelineStages.reduce((sum, stage) => sum + stage.leads, 0);
  const totalValue = "$10.2M";

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold mb-6">
            Lead <span className="text-gradient">Pipeline Overview</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentYear} pipeline performance with privacy-protected aggregate insights
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Active Leads</p>
                  <p className="text-2xl font-bold">{totalLeads.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Pipeline Value</p>
                  <p className="text-2xl font-bold">{totalValue}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Conversion Rate</p>
                  <p className="text-2xl font-bold">64.1%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pipeline Stages */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-poppins text-2xl flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Pipeline Breakdown by Stage
            </CardTitle>
            <p className="text-muted-foreground">
              Current year performance across all pipeline stages
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {pipelineStages.map((stage, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                    <h3 className="font-semibold text-lg">{stage.stage}</h3>
                    <Badge variant="secondary" className="ml-2">
                      {stage.leads} leads
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary text-lg">{stage.totalValue}</p>
                    <p className="text-sm text-muted-foreground">
                      {stage.conversionRate}% conversion
                    </p>
                  </div>
                </div>
                <Progress 
                  value={stage.conversionRate} 
                  className="h-3"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{Math.round((stage.leads / totalLeads) * 100)}% of total pipeline</span>
                  <span>Avg. deal size: ${Math.round(parseFloat(stage.totalValue.replace(/[$KM]/g, '')) * (stage.totalValue.includes('K') ? 1000 : 1000000) / stage.leads).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground bg-card/50 rounded-lg p-4 backdrop-blur-sm border border-border/50">
            📊 All data is aggregated and anonymized to protect client privacy while providing valuable pipeline insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadPipeline;