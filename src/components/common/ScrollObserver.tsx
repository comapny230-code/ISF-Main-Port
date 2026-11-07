"use client";

import React, { useEffect } from "react";

/**
 * Universal Scroll Intersection Observer.
 * Reliably detects when any home section enters the viewport
 * and triggers smooth, coordinated entrance animations on sections and cards.
 */
export function ScrollObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".section-reveal").forEach((el) => {
        el.classList.add("is-entered");
      });
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".section-reveal")
    );

    if (sections.length === 0) return;

    // IntersectionObserver with balanced threshold for clear scroll-time visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-entered");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // If below the initial viewport, arm it for scroll entrance
      if (rect.top > windowHeight * 0.75) {
        section.classList.add("scroll-trigger-ready");
      } else {
        // Sections already in view on load
        section.classList.add("is-entered");
      }
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
