
import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-2xl transition-all duration-300",
      "bg-card hover:bg-card/80 border border-border/40",
      "hover:shadow-premium hover:translate-y-[-8px]",
      className
    )}>
      <div className="bg-primary/10 p-3 rounded-xl w-fit mb-5">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-right">{title}</h3>
      <p className="text-muted-foreground text-sm text-right">{description}</p>
    </div>
  );
};

export default FeatureCard;
