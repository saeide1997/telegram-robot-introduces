
import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link" | "premium";
}

const AnimatedButton = ({
  children,
  className,
  variant = "default",
  ...props
}: AnimatedButtonProps) => {
  if (variant === "premium") {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-primary rounded-full hover:bg-primary/90 group",
          "shadow-button hover:shadow-premium",
          "text-white",
          className
        )}
        {...props}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
        <span className="relative">{children}</span>
      </button>
    );
  }

  return (
    <Button
      className={cn(
        "transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]",
        className
      )}
      variant={variant as any}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AnimatedButton;
