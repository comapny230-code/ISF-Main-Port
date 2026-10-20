import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "terracotta" | "gold" | "ghost" | "forest";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  disabled,
  isLoading,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none";

  const variantStyles = {
    primary: "bg-[#e87042] text-white hover:bg-[#d95d2c] focus-visible:ring-[#e87042] shadow-sm shadow-[#e87042]/20 font-semibold",
    forest: "bg-[#e87042] text-white hover:bg-[#d95d2c] focus-visible:ring-[#e87042] shadow-sm shadow-[#e87042]/20 font-semibold",
    secondary: "bg-[#ede7db] text-[#1c1917] hover:bg-[#dfd6c4] focus-visible:ring-[#e87042] border border-[#dfd6c4]",
    outline: "bg-transparent text-[#e87042] border-2 border-[#e87042] hover:bg-[#e87042] hover:text-white focus-visible:ring-[#e87042] font-semibold",
    terracotta: "bg-[#c25e38] text-white hover:bg-[#a74e2d] focus-visible:ring-[#c25e38] shadow-sm shadow-[#c25e38]/20 font-semibold",
    gold: "bg-[#be9740] text-white hover:bg-[#9e792c] focus-visible:ring-[#be9740] shadow-sm shadow-[#be9740]/20 font-semibold",
    ghost: "bg-transparent text-[#222b27] hover:bg-[#ede7db]/50 focus-visible:ring-[#e87042]",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm min-h-[38px]",
    md: "px-5 py-2.5 text-sm sm:text-base min-h-[44px]",
    lg: "px-6 py-3.5 text-base sm:text-lg min-h-[48px]",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    const isExternal = external || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
