"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { MOBILE_NAV_GROUPS } from "@/data/eventData";
import { cn } from "@/lib/utils";
import { Badge } from "../common/Badge";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);

  // Mount check for React Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer automatically when route changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Robust Mobile Body Scroll Lock (Prevents background page from scrolling or closing drawer)
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Backdrop Touch handling: Do NOT close if user is dragging / scrolling
  const handleBackdropTouchStart = (e: React.TouchEvent) => {
    touchStartPos.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleBackdropTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartPos.current) return;
    const deltaX = Math.abs(e.changedTouches[0].clientX - touchStartPos.current.x);
    const deltaY = Math.abs(e.changedTouches[0].clientY - touchStartPos.current.y);
    // Only close if it was a true deliberate tap (finger didn't move more than 8px)
    if (deltaX < 8 && deltaY < 8) {
      setIsOpen(false);
    }
    touchStartPos.current = null;
  };

  const drawerContent = (
    <>
      {/* Accessible Scrim / Backdrop with scroll-lock & tap detection */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[9998] backdrop-blur-xs transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        onTouchStart={handleBackdropTouchStart}
        onTouchEnd={handleBackdropTouchEnd}
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true"
      />

      {/* Full-Height Slide-Over Drawer - Portalled to body to prevent sticky/scroll clipping */}
      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Summit Navigation Menu"
        aria-hidden={!isOpen}
        className={cn(
          "fixed top-0 right-0 h-full h-[100dvh] w-[88%] sm:w-[380px] md:w-[420px] max-w-full bg-[#faf7f2] border-l border-[#e8dfd3] z-[9999] shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out select-none",
          isOpen
            ? "translate-x-0 opacity-100 visible pointer-events-auto"
            : "translate-x-full opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Drawer Header with Dual Brand Marks */}
        <div className="p-3.5 min-[380px]:p-4 sm:p-5 border-b border-[#e8dfd3] bg-[#f5efe6] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            {/* ISF Organizer Logo */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white p-1 flex items-center justify-center border border-[#e8dfd3] shadow-2xs shrink-0">
              <Image
                src="/logos/isf-logo.webp"
                alt="ISF Logo"
                width={32}
                height={32}
                className="max-h-6 max-w-6 sm:max-h-7 sm:max-w-7 w-auto h-auto object-contain"
              />
            </div>

            <div className="min-w-0 text-left">
              <div className="font-serif font-black text-[#1c1917] text-xs min-[380px]:text-sm leading-tight truncate">
                ISF Startup Jathara
              </div>
              <div className="text-[10px] min-[380px]:text-[11px] text-[#e87042] font-bold tracking-tight uppercase">
                Dandakaranya 2026
              </div>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 sm:p-2.5 rounded-xl text-[#1c1917] hover:bg-[#ede7db] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] min-w-[38px] min-h-[38px] flex items-center justify-center shrink-0 touch-manipulation cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Area - Over-scroll contained to prevent page background scrolling */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-3.5 min-[380px]:px-4 sm:px-6 py-4 space-y-5 touch-pan-y">
          {/* Categorized Link Groups */}
          {MOBILE_NAV_GROUPS.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1">
              <div className="space-y-1">
                {group.links.map((link) => {
                  const isActive = pathname === link.href;
                  const isExternal = link.href.startsWith("http://") || link.href.startsWith("https://");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center justify-between p-2.5 min-[380px]:p-3 rounded-xl transition-all text-left",
                        isActive
                          ? "bg-white text-[#1c1917] shadow-xs border border-[#e8dfd3]"
                          : "text-[#292524] hover:bg-white/70 hover:text-[#1c1917] border border-transparent"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            "text-xs min-[380px]:text-sm font-bold leading-snug",
                            isActive ? "text-[#1c1917]" : "text-[#44403c]"
                          )}>
                            {link.label}
                          </span>
                          {link.badge && (
                            <Badge
                              variant="terracotta"
                              size="sm"
                              className="text-[9px] py-0 px-1.5"
                            >
                              {link.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-[11px] text-[#78716c] mt-0.5 line-clamp-1">
                          {link.description}
                        </p>
                      </div>

                      <ArrowRight
                        className={cn(
                          "w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5",
                          isActive ? "text-[#1c1917]" : "text-[#a8a29e]"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-3.5 min-[380px]:p-4 sm:p-5 border-t border-[#e8dfd3] bg-[#f5efe6] space-y-2.5 shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <a
            href="https://register.startupjathara.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#e87042] to-[#d95d2c] hover:from-[#d95d2c] hover:to-[#c25022] text-white shadow-xs hover:shadow-sm active:scale-98 transition-all"
          >
            <span>Register</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="p-2.5 rounded-xl bg-white border border-[#e8dfd3] flex items-center justify-between text-xs text-[#57534e]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
              <span className="font-semibold text-[#1c1917] text-[11px] min-[360px]:text-xs">
                GIET University • Host Campus
              </span>
            </div>
            <a
              href="https://www.giet.edu/schools/school-of-engineering/"
              target="_blank"
              rel="noreferrer"
              className="text-[#c25022] font-bold hover:underline flex items-center gap-1 text-[11px] min-[360px]:text-xs shrink-0"
            >
              <span>Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="xl:hidden">
      {/* Mobile Menu Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-1.5 min-[380px]:p-2 sm:p-2.5 rounded-xl border border-[#dfd6c4] bg-[#f7f4ec] text-[#1c1917] hover:bg-[#ede7db] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] shadow-2xs flex items-center justify-center gap-1.5 shrink-0 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] touch-manipulation cursor-pointer"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          Menu
        </span>
      </button>

      {/* Render Drawer & Backdrop in document.body via Portal to prevent scroll clipping */}
      {mounted && typeof document !== "undefined"
        ? createPortal(drawerContent, document.body)
        : null}
    </div>
  );
}
