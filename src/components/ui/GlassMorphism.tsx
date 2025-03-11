
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassMorphismProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
}

const GlassMorphism = ({
  children,
  className,
  intensity = 'medium',
}: GlassMorphismProps) => {
  const blurIntensities = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    strong: 'backdrop-blur-lg',
  };

  const bgOpacities = {
    light: 'bg-white/50',
    medium: 'bg-white/60',
    strong: 'bg-white/70',
  };

  return (
    <div
      className={cn(
        'border border-white/20 rounded-2xl shadow-glass',
        bgOpacities[intensity],
        blurIntensities[intensity],
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassMorphism;
