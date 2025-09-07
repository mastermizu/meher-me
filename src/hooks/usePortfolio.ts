import { useState, useMemo } from 'react';
import { Campaign, IndustryFilter } from '@/types';
import { campaigns, industryFilters } from '@/data/campaigns';

export const usePortfolio = () => {
  const [activeFilter, setActiveFilter] = useState<IndustryFilter>("All Industries");
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const filteredCampaigns = useMemo(() => {
    return campaigns.filter(campaign => 
      activeFilter === "All Industries" || campaign.industry === activeFilter
    );
  }, [activeFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return {
    activeFilter,
    setActiveFilter,
    selectedCampaign,
    setSelectedCampaign,
    filteredCampaigns,
    industryFilters,
    getStatusColor
  };
};
