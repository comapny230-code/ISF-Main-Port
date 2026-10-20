"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/eventData";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";
import { Container } from "../common/Container";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-md border-[#e8dfd3] shadow-[0_2px_12px_rgba(28,25,23,0.05)] py-2 sm:py-2.5"
          : "bg-[#faf7f2] border-[#e8dfd3] py-2.5 sm:py-3.5"
      )}
    >
      <Container size="wide" className="px-2.5 min-[360px]:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* ZONE 1 (LEFT): Authentic Event Identity */}
          <div className="flex items-center shrink min-w-0">
            <Link
              href="/"
              className="group flex items-center gap-1.5 min-[360px]:gap-2 min-[400px]:gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] rounded-xl shrink min-w-0"
              aria-label="ISF Startup Jathara 2026 Homepage"
            >
              {/* Official ISF Mark Container */}
              <div className="w-7 h-7 min-[360px]:w-8 min-[360px]:h-8 min-[380px]:w-9 min-[380px]:h-9 sm:w-10 sm:h-10 rounded-xl bg-white p-0.5 min-[360px]:p-1 flex items-center justify-center shadow-2xs border border-[#e8dfd3] transition-transform duration-200 group-hover:scale-105 shrink-0">
                <Image
                  src="/logos/isf-logo.webp"
                  alt="International Startup Foundation (ISF) Logo"
                  width={36}
                  height={36}
                  className="max-h-5 max-w-5 min-[360px]:max-h-6 min-[360px]:max-w-6 min-[380px]:max-h-7 min-[380px]:max-w-7 sm:max-h-8 sm:max-w-8 w-auto h-auto object-contain"
                  priority
                />
              </div>

              {/* Event Typography Lockup */}
              <div className="flex flex-col text-left shrink min-w-0">
                <span className="font-serif font-black text-[11px] min-[360px]:text-xs min-[400px]:text-sm sm:text-base lg:text-[16px] text-[#1c1917] tracking-tight leading-tight group-hover:text-[#e87042] transition-colors whitespace-nowrap">
                  ISF STARTUP JATHARA
                </span>
                <span className="text-[8px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-[11px] font-bold text-[#e87042] tracking-wider uppercase mt-0.5 leading-none whitespace-nowrap">
                  Dandakaranya 2026
                </span>
              </div>
            </Link>
          </div>

          {/* ZONE 2 & 3 (RIGHT): Primary Desktop Navigation + Action Zone */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-1.5"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-1.5 rounded-xl text-xs xl:text-[13px] transition-all duration-200 ease-out whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042]",
                      isActive
                        ? "text-[#1c1917] font-bold bg-white shadow-[0_2px_10px_rgba(28,25,23,0.08)] border border-[#e8dfd3]/70"
                        : "text-[#57534e] font-medium hover:text-[#1c1917] hover:bg-white/60 hover:shadow-xs"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="inline-flex items-center gap-1 xl:gap-1.5">
                      {link.label}
                      {link.badge && (
                        <span
                          className={cn(
                            "text-[8px] xl:text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold leading-none",
                            isActive
                              ? "bg-[#e87042] text-white"
                              : "bg-[#ffedd5] text-[#9a3412] border border-[#fed7aa]"
                          )}
                        >
                          {link.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>


            {/* Mobile / Tablet Navigation Trigger */}
            <MobileNavigation />
          </div>

        </div>
      </Container>
    </header>
  );
}
