import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Container component
 * A utility component that provides consistent horizontal padding and max-width
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
  ...props
}) => {
  // Size-specific max-width classes
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const containerClasses = twMerge(
    'w-full mx-auto px-4 sm:px-6 lg:px-8',
    sizeClasses[size],
    className
  );

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
};
