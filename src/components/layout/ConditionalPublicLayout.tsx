"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

/**
 * Renders the Public SiteHeader only on public pages.
 * Suppresses it on administrative console routes (/admin) and dedicated login (/login).
 */
export function PublicHeaderWrapper() {
  const pathname = usePathname();
  const isExcluded = pathname?.startsWith("/admin") || pathname?.startsWith("/login");

  if (isExcluded) {
    return null;
  }

  return <SiteHeader />;
}

/**
 * Renders the public SiteFooter only on public pages.
 * Suppresses it on administrative console routes (/admin) and dedicated login (/login).
 */
export function PublicFooterWrapper() {
  const pathname = usePathname();
  const isExcluded = pathname?.startsWith("/admin") || pathname?.startsWith("/login");

  if (isExcluded) {
    return null;
  }

  return <SiteFooter />;
}
