import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PulseButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  asChild?: boolean;
}

const PulseButton = React.forwardRef<HTMLButtonElement, PulseButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <Button
        className={cn(
          // Base styles
          "font-space-grotesk font-semibold transition-all duration-300 ease-in-out",
          // Variant-specific styles
          {
            "bg-gradient-primary text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 focus-visible:ring-blue-500/50":
              variant === "primary",
            "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300":
              variant === "secondary",
            "bg-transparent text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300":
              variant === "outline",
            "bg-transparent text-gray-900 hover:bg-gray-100":
              variant === "ghost",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

PulseButton.displayName = "PulseButton";

export { PulseButton, type PulseButtonProps };
