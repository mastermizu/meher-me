
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Bot, Workflow, Settings } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "Demand Generation", proficiency: 95, campaigns: "127 campaigns" },
    { name: "Growth Marketing", proficiency: 92, campaigns: "89 campaigns" },
    { name: "ABM Strategy", proficiency: 94, campaigns: "45 campaigns" },
    { name: "Email Marketing", proficiency: 88, campaigns: "234 campaigns" },
    { name: "360° Campaigns", proficiency: 90, campaigns: "156 campaigns" },
    { name: "Lifecycle Marketing", proficiency: 85, campaigns: "178 campaigns" }
  ];

  const automationSkills = [
    { name: "N8N Workflows", proficiency: 92, icon: <Workflow className="w-4 h-4" />, projects: "45 automations" },
    { name: "Make.com", proficiency: 88, icon: <Settings className="w-4 h-4" />, projects: "67 scenarios" },
    { name: "Zapier Integration", proficiency: 90, icon: <Bot className="w-4 h-4" />, projects: "89 zaps" },
    { name: "API Development", proficiency: 85, icon: <Target className="w-4 h-4" />, projects: "23 integrations" }
  ];

  return (
    <div className="space-hubspot-lg">
      {/* Marketing Skills */}
      <Card className="hubspot-card">
        <CardHeader>
          <CardTitle className="text-hubspot-h2 text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-hubspot-orange" />
            Marketing Proficiency
          </CardTitle>
        </CardHeader>
        <CardContent className="space-hubspot-sm">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-hubspot-small font-medium">{skill.name}</span>
                <span className="text-dashboard-metric text-sm">{skill.proficiency}%</span>
              </div>
              <Progress value={skill.proficiency} className="h-2" />
              <div className="text-xs text-blue-gray">{skill.campaigns}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Automation Skills */}
      <Card className="hubspot-card">
        <CardHeader>
          <CardTitle className="text-hubspot-h2 text-lg flex items-center gap-2">
            <Bot className="w-5 h-5 text-hubspot-blue" />
            Automation Expertise
          </CardTitle>
        </CardHeader>
        <CardContent className="space-hubspot-sm">
          {automationSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="text-hubspot-blue">{skill.icon}</div>
                  <span className="text-hubspot-small font-medium">{skill.name}</span>
                </div>
                <span className="text-dashboard-metric text-sm">{skill.proficiency}%</span>
              </div>
              <Progress value={skill.proficiency} className="h-2" />
              <div className="text-xs text-blue-gray">{skill.projects}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsSection;
