import { MetricCard } from "@/components/ui/metric-card";
import { useState, useEffect } from "react";
import LoadingDashboard from "./LoadingDashboard";
import { Users, Target, TrendingUp, Mail, BarChart3, Zap } from "lucide-react";
import { subWeeks, format, differenceInWeeks } from "date-fns";
const DashboardOverview = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoadingDashboard />;
  }

  // Base date when metrics were established (you can adjust this date)
  const baseDate = new Date('2025-01-01');
  const currentDate = new Date();
  const weeksElapsed = differenceInWeeks(currentDate, baseDate);
  const weeklyGrowthRate = 0.01; // 1% weekly growth

  // Function to calculate current value with weekly growth
  const calculateGrowthValue = (baseValue: number) => {
    return baseValue * Math.pow(1 + weeklyGrowthRate, weeksElapsed);
  };

  // Base metric values (original values before growth)
  const baseMetrics = [{
    title: "Campaign Launched",
    baseValue: 260,
    baseChange: 12,
    icon: <BarChart3 className="h-8 w-8" />,
    color: "border-l-4 border-l-hubspot-blue bg-gradient-to-br from-hubspot-blue/10 to-hubspot-blue/5"
  }, {
    title: "Leads Managed",
    baseValue: 115200,
    suffix: "",
    baseChange: 288,
    icon: <Target className="h-8 w-8" />,
    color: "border-l-4 border-l-growth-teal bg-gradient-to-br from-growth-teal/10 to-growth-teal/5"
  }, {
    title: "Managed Ad Budget",
    baseValue: 5.4,
    suffix: "M",
    decimals: 1,
    baseChange: 156,
    icon: <TrendingUp className="h-8 w-8" />,
    color: "border-l-4 border-l-hubspot-purple bg-gradient-to-br from-hubspot-purple/10 to-hubspot-purple/5"
  }, {
    title: "Subscribers added",
    baseValue: 47800,
    suffix: "",
    baseChange: 45,
    icon: <Mail className="h-8 w-8" />,
    color: "border-l-4 border-l-hubspot-orange bg-gradient-to-br from-hubspot-orange/10 to-hubspot-orange/5"
  }, {
    title: "Clients Served",
    baseValue: 52,
    baseChange: 8,
    icon: <Users className="h-8 w-8" />,
    color: "border-l-4 border-l-growth-teal bg-gradient-to-br from-growth-teal/10 to-growth-teal/5"
  }, {
    title: "Overall Conversion Rate",
    baseValue: 2.70,
    suffix: "%",
    decimals: 2,
    baseChange: 0,
    icon: <Zap className="h-8 w-8" />,
    color: "border-l-4 border-l-professional-navy bg-gradient-to-br from-professional-navy/10 to-professional-navy/5"
  }];

  // Calculate current metrics with growth applied
  const metrics = baseMetrics.map(metric => ({
    title: metric.title,
    value: Math.round(calculateGrowthValue(metric.baseValue) * (metric.decimals ? 10 : 1)) / (metric.decimals ? 10 : 1),
    suffix: metric.suffix,
    decimals: metric.decimals,
    icon: metric.icon,
    color: metric.color
  }));
  const weekAgoDate = format(subWeeks(new Date(), 1), "MMM d, yyyy");
  return <section id="about" className="py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-professional-navy font-normal text-3xl">Ignore my accent</span>
            <br />
            <span className="text-hubspot-orange font-extrabold text-5xl">Let the KPIs talk.</span>
          </h2>
          <p className="font-inter text-xl text-professional-navy max-w-3xl mx-auto">
            Real results from strategic campaigns and growth initiatives across multiple industries
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-hubspot-md mb-hubspot-lg">
          {metrics.map((metric, index) => <MetricCard key={index} title={metric.title} value={metric.value} suffix={metric.suffix} decimals={metric.decimals} icon={metric.icon} className={`animate-slide-up ${metric.color}`} style={{
          animationDelay: `${index * 0.1}s`
        } as React.CSSProperties} />)}
        </div>
      </div>
    </section>;
};
export default DashboardOverview;