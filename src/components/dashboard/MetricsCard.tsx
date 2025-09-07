import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative";
  icon?: React.ReactNode;
  trend?: "up" | "down";
  className?: string;
  style?: React.CSSProperties;
}

const MetricsCard = ({ 
  title, 
  value, 
  change, 
  changeType = "positive", 
  icon, 
  trend,
  className,
  style 
}: MetricsCardProps) => {
  return (
    <Card 
      className={cn(
        "hubspot-card hubspot-card-hover border-2 border-light-gray bg-clean-white",
        className
      )}
      style={style}
    >
      <CardContent className="p-hubspot-md">
        <div className="flex items-center justify-between">
          <div className="space-hubspot-xs">
            <p className="text-hubspot-small font-medium">
              {title}
            </p>
            <div className="flex items-center gap-hubspot-xs">
              <p className="text-3xl font-bold text-professional-navy">
                {value}
              </p>
              {change && (
                <div className={cn(
                  "flex items-center space-x-1 text-sm font-medium",
                  changeType === "positive" ? "text-green-600" : "text-red-600"
                )}>
                  {trend === "up" && <TrendingUp className="h-4 w-4" />}
                  {trend === "down" && <TrendingDown className="h-4 w-4" />}
                  <span>{change}</span>
                </div>
              )}
            </div>
          </div>
          {icon && (
            <div className="text-muted-foreground/60">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;