"use client";

import React from "react";
import { cn } from "@/app/utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full font-medium";
    
    const variantStyles = {
      default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
      primary: "bg-primary-100 text-primary-800 dark:bg-primary-800/20 dark:text-primary-300",
      secondary: "bg-secondary-100 text-secondary-800 dark:bg-secondary-800/20 dark:text-secondary-300",
      success: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
      warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
      danger: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
      outline: "border border-gray-200 text-gray-800 dark:border-gray-700 dark:text-gray-200"
    };
    
    const sizeStyles = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-0.5 text-sm",
      lg: "px-3 py-1 text-base"
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
