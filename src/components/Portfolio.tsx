import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, TrendingUp, Users, ShoppingCart, Mail, Instagram, ArrowRight, Target, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "@/hooks/usePortfolio";

const Portfolio = () => {
  const {
    activeFilter,
    setActiveFilter,
    selectedCampaign,
    setSelectedCampaign,
    filteredCampaigns,
    industryFilters,
    getStatusColor
  } = usePortfolio();

  return (
    <section id="portfolio" className="section-spacing bg-pattern-neutral relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
        backgroundImage: `linear-gradient(rgba(51, 71, 91, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 71, 91, 0.1) 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-hubspot-xl">
          <h2 className="text-hubspot-h1 mb-hubspot-md">
            Case Studies & <span className="text-gradient">Proven Results</span>
          </h2>
          <p className="text-hubspot-body max-w-3xl mx-auto mb-hubspot-lg">
            Deep-dive into successful marketing campaigns with detailed performance metrics, 
            strategic insights, and measurable business impact across diverse industries.
          </p>

          {/* Industry Filter Chips */}
          <motion.div 
            className="flex flex-wrap justify-center gap-hubspot-xs mb-hubspot-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {industryFilters.map((filter, index) => (
              <motion.div
                key={filter}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button 
                  variant={activeFilter === filter ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setActiveFilter(filter)} 
                  className="transition-all duration-300 text-dashboard-label font-semibold text-slate-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                {filter}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Case Studies Grid - 2 rows with 3 cards each */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-hubspot-lg"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredCampaigns.map((campaign, index) => {
            const IconComponent = campaign.icon;
            return (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card 
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                  onClick={() => setSelectedCampaign(campaign)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${campaign.bgGradient}`}>
                      <IconComponent className={`h-6 w-6 text-${campaign.platformColor}`} />
                  </div>
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-hubspot-orange transition-colors">
                    {campaign.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{campaign.platform} • {campaign.client}</p>
              </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                    {campaign.description}
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{campaign.ctr}</div>
                      <div className="text-xs text-gray-500">CTR</div>
                  </div>
                  <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{campaign.roas}</div>
                      <div className="text-xs text-gray-500">ROAS</div>
                  </div>
                  <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{campaign.conversions}</div>
                      <div className="text-xs text-gray-500">Conversions</div>
                  </div>
                  <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{campaign.revenue}</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Goal Progress</span>
                      <span>{campaign.goalProgress}%</span>
                </div>
                    <Progress value={Math.min(campaign.goalProgress, 100)} className="h-2" />
                </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {campaign.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                      </Badge>
                    ))}
                    {campaign.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{campaign.tags.length - 3}
                      </Badge>
                    )}
                </div>

                  {/* View Details Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-hubspot-orange group-hover:text-white transition-colors"
                  >
                    View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
                </Card>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>

        {/* Campaign Detail Modal */}
        {selectedCampaign && (
        <Dialog open={!!selectedCampaign} onOpenChange={() => setSelectedCampaign(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedCampaign.bgGradient}`}>
                    <selectedCampaign.icon className={`h-8 w-8 text-${selectedCampaign.platformColor}`} />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedCampaign.name}</DialogTitle>
                    <p className="text-gray-600">{selectedCampaign.platform} • {selectedCampaign.client}</p>
                  </div>
                </div>
                    <Badge className={getStatusColor(selectedCampaign.status)}>
                      {selectedCampaign.status}
                    </Badge>
              </DialogHeader>

              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Campaign Overview</h3>
                  <p className="text-gray-700">{selectedCampaign.description}</p>
                </div>

                {/* Key Metrics Grid */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCampaign.metrics.map((metric, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{metric.label}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            metric.status === 'exceeding' ? 'bg-green-100 text-green-800' :
                            metric.status === 'meeting' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {metric.status}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          Target: {metric.target}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Campaign Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-1">Duration</h4>
                    <p className="text-gray-600">{selectedCampaign.duration}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-1">Industry</h4>
                    <p className="text-gray-600">{selectedCampaign.industry}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-1">Goal Progress</h4>
                    <div className="flex items-center gap-2">
                      <Progress value={Math.min(selectedCampaign.goalProgress, 100)} className="flex-1" />
                      <span className="text-sm font-medium">{selectedCampaign.goalProgress}%</span>
                    </div>
                    </div>
                  </div>
                  
                {/* Tags */}
                  <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCampaign.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                          </div>
                    </div>
                    
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                    View Case Study
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedCampaign(null)}>
                    Close
                    </Button>
                  </div>
                </div>
          </DialogContent>
        </Dialog>
        )}
      </div>
    </section>
  );
};

export default Portfolio;