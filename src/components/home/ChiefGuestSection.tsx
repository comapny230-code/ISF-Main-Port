import React from "react";
import Image from "next/image";
import { HeartHandshake, GraduationCap, Utensils } from "lucide-react";
import { Container } from "../common/Container";

export function ChiefGuestSection() {
  return (
    <section 
      aria-label="Chief Guest of Honour"
      className="py-14 sm:py-20 bg-[#faf8f4] border-b border-[#e6dfd1] relative overflow-hidden"
    >
      <Container size="default">
        {/* Simple, Open & Editorial Presentation (No outer box) */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10">
            
            {/* Left: Dignitary Portrait - Compact & Refined */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative w-40 h-52 sm:w-48 sm:h-60 rounded-2xl overflow-hidden shadow-sm border border-stone-200/90 group">
                <Image
                  src="/images/sadguru-sri-madhusudan-sai.webp"
                  alt="Sadguru Sri Madhusudan Sai - Chief Guest of Honour at ISF Startup Jathara 2026"
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-103"
                />
              </div>
              <span className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#fff4ed] text-[#c25022] border border-[#fcd5b5]">
                Chief Guest of Honour
              </span>
            </div>

            {/* Right: Narrative & Verified Details */}
            <div className="flex-1 space-y-3.5 text-center sm:text-left">

              {/* Header Eyebrow */}
              <div className="flex items-center justify-center sm:justify-start">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c25022]">
                  Plenary Inauguration Keynote
                </span>
              </div>

              {/* Title & Organization */}
              <div>
                <h2 className="font-serif font-black text-2xl sm:text-3.5xl text-[#1c1917] tracking-tight leading-tight">
                  Sadguru Sri Madhusudan Sai
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-[#8c671b] mt-1 leading-snug">
                  Global Humanitarian &amp; Spiritual Leader · Founder, Sri Madhusudan Sai Global Humanitarian Mission
                </p>
              </div>

              {/* Detailed Humanitarian Context */}
              <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
                Revered internationally for establishing transformative selfless institutions across 30+ nations based on <em>Vasudhaiva Kutumbakam</em>. Under his stewardship, free healthcare, values-based higher education, and daily morning nutrition reach millions of underserved families.
              </p>

              {/* 3 Core Humanitarian Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs text-left">
                  <HeartHandshake className="w-4 h-4 text-[#c25022] shrink-0" />
                  <div className="text-[11px] leading-tight">
                    <strong className="block text-[#1c1917] font-bold">Free Pediatric Care</strong>
                    <span className="text-[10px] text-stone-500">Sai Sanjeevani Hospitals</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs text-left">
                  <GraduationCap className="w-4 h-4 text-[#8c671b] shrink-0" />
                  <div className="text-[11px] leading-tight">
                    <strong className="block text-[#1c1917] font-bold">Free Education</strong>
                    <span className="text-[10px] text-stone-500">SSSUHE University</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs text-left">
                  <Utensils className="w-4 h-4 text-[#256f57] shrink-0" />
                  <div className="text-[11px] leading-tight">
                    <strong className="block text-[#1c1917] font-bold">3M+ Daily Meals</strong>
                    <span className="text-[10px] text-stone-500">Annapoorna Nutrition</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
