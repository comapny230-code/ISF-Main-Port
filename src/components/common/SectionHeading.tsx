import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
  action,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 sm:mb-14",
        isCenter ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("flex items-center gap-2.5 mb-4", isCenter && "justify-center")}>
          <span className="w-4 h-px" style={{ backgroundColor: isDark ? "#e87042" : "#c25e38" }} aria-hidden="true" />
          <p className={cn(
            "text-[10px] font-bold uppercase tracking-[0.22em]",
            isDark ? "text-[#f2b58f]" : "text-[#c25e38]"
          )}>
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={cn(
          "font-serif font-black tracking-tight leading-[1.1]",
          "text-2xl sm:text-3xl md:text-[2.4rem]",
          isDark ? "text-white" : "text-[#1c1917]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-3 text-sm sm:text-base leading-relaxed font-normal",
            isCenter ? "max-w-2xl mx-auto" : "max-w-xl",
            isDark ? "text-[#c8d1cd]" : "text-[#57534e]"
          )}
        >
          {subtitle}
        </p>
      )}

      {action && (
        <div className={cn("mt-6", isCenter && "flex justify-center")}>
          {action}
        </div>
      )}
    </div>
  );
}
