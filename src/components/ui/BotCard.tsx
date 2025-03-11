
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import AnimatedButton from "./AnimatedButton";
import GlassMorphism from "./GlassMorphism";
import { ShoppingCart, ExternalLink } from "lucide-react";

interface BotCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  telegramLink: string;
  className?: string;
}

const BotCard = ({
  id,
  name,
  description,
  image,
  price,
  telegramLink,
  className
}: BotCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group rounded-2xl overflow-hidden transition-all duration-500",
        "bg-card border border-border/40 hover:border-primary/20",
        "shadow-card hover:shadow-premium",
        isHovered ? "translate-y-[-8px]" : "translate-y-0",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden w-full aspect-[4/3]">
        <img 
          src={image} 
          alt={name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-[1.05]" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 relative">
        <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full w-fit mb-3">
          ربات تلگرام
        </div>
        <h3 className="text-xl font-semibold mb-2 text-right">{name}</h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 text-right">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <AnimatedButton 
              size="sm"
              variant="default"
            >
              <ShoppingCart className="h-4 w-4 ml-1" /> افزودن به سبد
            </AnimatedButton>
            <AnimatedButton
              size="sm"
              variant="outline"
              onClick={() => window.open(telegramLink, '_blank')}
            >
              <ExternalLink className="h-4 w-4 ml-1" /> پیش‌نمایش
            </AnimatedButton>
          </div>
          <div className="text-lg font-semibold"> تومان {price*10000}</div>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
