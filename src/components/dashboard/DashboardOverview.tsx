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
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-hubspot-orange/5 to-hubspot-orange/10 flex items-center justify-center shadow-sm">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-10 h-10"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff6b35" />
                      <stop offset="100%" stopColor="#ff8c42" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" 
                    fill="url(#quoteGradient)"
                    stroke="url(#quoteGradient)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>
            <blockquote className="max-w-4xl mx-auto mb-6 leading-tight">
              <div className="text-lg md:text-xl text-gray-600 font-medium">
                "Ignore my accent,
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient bg-gradient-to-r from-hubspot-orange to-hubspot-orange/80 bg-clip-text text-transparent">
                let the KPIs talk."
              </div>
            </blockquote>
          </div>
        </div>

        {/* Metrics Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-professional-navy mb-2">
            12+ Years of Proven Results
          </h3>
          <p className="text-lg text-blue-gray">
            Cumulative metrics from strategic campaigns and growth initiatives
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