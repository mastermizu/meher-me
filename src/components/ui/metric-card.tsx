import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/useCountUp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  change?: number;
  changeType?: "positive" | "negative";
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
  decimals?: number;
  style?: React.CSSProperties;
}

export const MetricCard = ({ 
  title, 
  value, 
  suffix = "", 
  prefix = "",
  change, 
  changeType = "positive",
  icon,
  loading = false,
  className,
  decimals = 0,
  style
}: MetricCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const count = useCountUp({ 
    end: value, 
    duration: 2000, 
    decimals,
    trigger: isIntersecting 
  });

  if (loading) {
    return (
      <Card className={cn("hubspot-card", className)}>
        <CardContent className="p-hubspot-md">
          <div className="space-hubspot-xs">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-12" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      ref={ref}
      className={cn(
        "hubspot-card hubspot-card-hover group cursor-pointer transition-all duration-300 hover:scale-105",
        className
      )}
      style={style}
    >
      <CardContent className="p-hubspot-md pt-8">
        <div className="flex items-center justify-between">
          <div className="space-hubspot-xs flex-1">
            <p className="text-dashboard-label">
              {title}
            </p>
            <div className="flex items-center gap-hubspot-xs">
               <p className="text-dashboard-metric text-2xl font-bold text-professional-navy">
                {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
              </p>
              {change && (
                <div className={cn(
                  "flex items-center gap-1 text-sm font-medium",
                  changeType === "positive" ? "text-green-600" : "text-red-600"
                )}>
                  {changeType === "positive" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span>{Math.abs(change)}%</span>
                </div>
              )}
            </div>
          </div>
          {icon && (
            <div className="text-muted-foreground/60 group-hover:text-hubspot-orange transition-colors duration-300">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};