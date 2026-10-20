"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HERO_BACKDROPS = [
  {
    src: "/images/hero-junicorn-summit.jpeg",
    alt: "ISF Junicorn Student Innovators and Mentors Delegation",
  },
  {
    src: "/images/hero-cohort-team.png",
    alt: "ISF Global Innovation Summit Cohort Delegation on Stage",
  },
  {
    src: "/images/startup-stage-backdrop.jpg",
    alt: "ISF Startup Jathara Grand Keynote Arena and Delegates",
  },
  {
    src: "/images/grassroots-dandakaranya-summit.jpg",
    alt: "Dandakaranya Forest Landscape, Venue of ISF Startup Jathara 2026",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_BACKDROPS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      aria-label="ISF Startup Jathara 2026 Event Introduction"
      className="relative text-white min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden bg-[#080a0e] py-8 sm:py-12"
    >
      {/* Full-bleed rotating backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {HERO_BACKDROPS.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center brightness-90 transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-[1.03]" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Layered overlay for crisp text legibility */}
        <div className="absolute inset-0 z-20 bg-black/60" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#080a0e] via-[#080a0e]/25 to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#080a0e]/70 via-transparent to-transparent" />

        {/* Warm amber ambient glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#e87042]/12 rounded-full blur-[150px] pointer-events-none z-20"
          aria-hidden="true"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-30 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center justify-center">

        {/* ISF Logo */}
        <div className="mb-4 sm:mb-5 hero-enter hero-enter-delay-1">
          <a
            href="https://www.isfnetwork.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ISF Network, Official Organizer"
            className="inline-block transition-transform hover:scale-105"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center p-2 border border-white/20">
              <Image
                src="/logos/isf-logo.webp"
                alt="ISF Network"
                width={50}
                height={50}
                style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
                className="object-contain"
              />
            </div>
          </a>
        </div>

        {/* Event Name */}
        <h1 className="hero-enter hero-enter-delay-2 font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.06] drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
          ISF Startup{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffedd5] via-[#f7c89f] to-[#e87042]">
            Jathara
          </span>{" "}
          2026
        </h1>

        {/* Tagline */}
        <p className="hero-enter hero-enter-delay-3 mt-2.5 sm:mt-3 text-base sm:text-xl lg:text-2xl font-serif text-[#ffedd5]/95 font-semibold tracking-tight max-w-2xl mx-auto leading-snug drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
          Where Grassroots Bharat Meets Global Capital.
        </p>

        {/* Supporting description */}
        <p className="hero-enter hero-enter-delay-3 mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-white/75 leading-relaxed max-w-lg mx-auto font-normal">
          India&apos;s premier grassroots entrepreneurship summit, uniting founders,
          investors, and innovators in the heart of Dandakaranya, Odisha.
        </p>

        {/* Date & Location Line */}
        <div className="hero-enter hero-enter-delay-4 mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-medium text-white/70">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e87042] inline-block animate-pulse" />
            17–20 December 2026
          </span>
          <span className="text-white/35">•</span>
          <span>GIET University, Gunupur</span>
        </div>

        {/* Primary Register Button */}
        <div className="hero-enter hero-enter-delay-5 mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://register.startupjathara.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#e87042] to-[#d06030] text-white font-bold text-sm sm:text-base shadow-[0_8px_28px_rgba(232,112,66,0.50)] hover:shadow-[0_12px_36px_rgba(232,112,66,0.65)] hover:from-[#f07846] hover:to-[#d96a38] active:scale-95 transition-all duration-200 tracking-wide"
          >
            <span>Register</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/programme"
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border border-white/30 text-white/90 font-semibold text-sm hover:border-white/60 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200 backdrop-blur-sm"
          >
            View Programme
          </a>
        </div>

        {/* Slide indicator dots */}
        <div className="mt-6 sm:mt-7 flex items-center justify-center gap-1.5" aria-hidden="true">
          {HERO_BACKDROPS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? "w-6 h-1.5 bg-[#e87042]"
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`View slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
