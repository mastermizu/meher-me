import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingDashboard = () => {
  return (
    <section className="py-hubspot-xl bg-gradient-to-br from-light-gray via-clean-white to-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-hubspot-xl">
          <Skeleton className="h-12 w-80 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-hubspot-md mb-hubspot-lg">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="hubspot-card">
              <CardContent className="p-hubspot-md">
                <div className="flex items-center justify-between">
                  <div className="space-hubspot-xs flex-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="hubspot-card">
          <CardHeader>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-hubspot-md">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between p-hubspot-sm">
                  <div className="flex items-center gap-hubspot-sm">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-16" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoadingDashboard;