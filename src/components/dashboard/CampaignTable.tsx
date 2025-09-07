import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CampaignTable = () => {
  const campaigns = [
    {
      name: "B2B SaaS Lead Gen",
      channel: "LinkedIn Ads",
      status: "Active",
      leads: "1,847",
      conversion: "34.2%",
      revenue: "$287K",
      stage: "Qualified Lead"
    },
    {
      name: "Email Nurture Series",
      channel: "HubSpot",
      status: "Active", 
      leads: "3,421",
      conversion: "18.7%",
      revenue: "$156K",
      stage: "Opportunity"
    },
    {
      name: "Growth Hacking Campaign",
      channel: "Multi-Channel",
      status: "Completed",
      leads: "2,103",
      conversion: "41.8%",
      revenue: "$394K", 
      stage: "Customer"
    },
    {
      name: "ABM Enterprise",
      channel: "Account-Based",
      status: "Active",
      leads: "89",
      conversion: "67.4%",
      revenue: "$1.2M",
      stage: "Qualified Lead"
    },
    {
      name: "Content Marketing",
      channel: "Organic",
      status: "Active", 
      leads: "5,672",
      conversion: "12.4%",
      revenue: "$89K",
      stage: "Marketing Qualified Lead"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        {status}
      </Badge>
    ) : (
      <Badge variant="secondary">
        {status}
      </Badge>
    );
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-poppins text-2xl">
              Recent Campaign Performance
            </CardTitle>
            <p className="text-muted-foreground">
              Showing 5 of 127 active campaigns
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Leads</TableHead>
                  <TableHead>Conversion</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Stage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      {campaign.name}
                    </TableCell>
                    <TableCell>{campaign.channel}</TableCell>
                    <TableCell>
                      {getStatusBadge(campaign.status)}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {campaign.leads}
                    </TableCell>
                    <TableCell className="text-green-600 font-semibold">
                      {campaign.conversion}
                    </TableCell>
                    <TableCell className="font-bold text-primary">
                      {campaign.revenue}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {campaign.stage}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CampaignTable;