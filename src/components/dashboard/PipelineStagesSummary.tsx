import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const PipelineStagesSummary = () => {
  const currentYear = new Date().getFullYear();
  
  const stageData = [
    {
      stage: "Marketing Qualified Lead",
      badge: "MQL",
      badgeColor: "bg-blue-500 hover:bg-blue-500",
      leadCount: 2847,
      totalValue: "$890K",
      avgDealSize: "$313",
      conversionRate: "68.4%"
    },
    {
      stage: "Sales Qualified Lead", 
      badge: "SQL",
      badgeColor: "bg-orange-500 hover:bg-orange-500",
      leadCount: 1947,
      totalValue: "$1.2M",
      avgDealSize: "$616",
      conversionRate: "72.1%"
    },
    {
      stage: "Opportunity",
      badge: "Opportunity",
      badgeColor: "bg-amber-500 hover:bg-amber-500",
      leadCount: 1403,
      totalValue: "$2.8M",
      avgDealSize: "$1,996",
      conversionRate: "45.8%"
    },
    {
      stage: "Proposal Sent",
      badge: "Proposal",
      badgeColor: "bg-emerald-500 hover:bg-emerald-500", 
      leadCount: 643,
      totalValue: "$1.9M",
      avgDealSize: "$2,954",
      conversionRate: "34.2%"
    },
    {
      stage: "Closed Won",
      badge: "Won",
      badgeColor: "bg-green-600 hover:bg-green-600",
      leadCount: 220,
      totalValue: "$3.4M", 
      avgDealSize: "$15,455",
      conversionRate: "100%"
    }
  ];

  const totalLeads = stageData.reduce((sum, stage) => sum + stage.leadCount, 0);
  const grandTotalValue = "$10.2M";

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold mb-6">
            Lead <span className="text-gradient">Pipeline</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentYear} pipeline performance with privacy-protected aggregate insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Performance Summary Cards */}
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
                  <p className="text-sm text-muted-foreground">Pipeline Value</p>
                  <p className="text-2xl font-bold">{grandTotalValue}</p>
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
                  <p className="text-sm text-muted-foreground">Lead to SQL Rate</p>
                  <p className="text-2xl font-bold text-green-600">34.2%</p>
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
                  <p className="text-sm text-muted-foreground">Avg. Deal Size</p>
                  <p className="text-2xl font-bold">$1,455</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pipeline Stages Table */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-poppins text-2xl flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Pipeline Breakdown by Stage
            </CardTitle>
            <p className="text-muted-foreground">
              Current year performance across all pipeline stages with aggregate data
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stage</TableHead>
                  <TableHead>Lead Count</TableHead>
                  <TableHead>Total Value</TableHead>
                  <TableHead>Avg. Deal Size</TableHead>
                  <TableHead>Conversion Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stageData.map((stage, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Badge className={`${stage.badgeColor} text-white`}>
                          {stage.badge}
                        </Badge>
                        <span>{stage.stage}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">
                      {stage.leadCount.toLocaleString()}
                    </TableCell>
                    <TableCell className="font-bold text-primary">
                      {stage.totalValue}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {stage.avgDealSize}
                    </TableCell>
                    <TableCell className="text-green-600 font-semibold">
                      {stage.conversionRate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground bg-card/50 rounded-lg p-4 backdrop-blur-sm border border-border/50">
            🔒 All data is aggregated and anonymized to protect client privacy while providing valuable pipeline insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default PipelineStagesSummary;