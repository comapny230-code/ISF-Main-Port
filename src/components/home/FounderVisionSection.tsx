import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

export function FounderVisionSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#faf7f2] via-[#f7f3eb] to-[#faf7f2] border-b border-[#e8dfd3]">
      <Container size="wide">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1c1917] tracking-tight leading-[1.12]">
            Honouring the Vision Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">
              ISF
            </span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#57534e] max-w-2xl mx-auto leading-relaxed">
            J. A. Chowdary, Founder &amp; Chairman of International Startup Foundation, championing grassroots innovation across Bharat.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
            <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
            <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
          </div>
        </div>

        {/* Open Editorial Layout (No enclosing box) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left: Founder Dignitary Portrait in Elegant Circle Frame */}
          <div className="md:col-span-5 lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative ambient glow ring */}
              <div 
                className="absolute -inset-1.5 sm:-inset-2 rounded-full bg-gradient-to-tr from-[#c25022]/15 via-[#e87042]/20 to-[#d68c45]/15 blur-sm group-hover:blur-md transition-all duration-500" 
                aria-hidden="true" 
              />

              {/* Concentric Double-Ring Circular Frame (Refined Thin Border) */}
              <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full p-1 sm:p-1.5 bg-gradient-to-tr from-[#c25022] via-[#e87042] to-[#d68c45] shadow-lg shadow-[#e87042]/15">
                <div className="w-full h-full rounded-full p-1 sm:p-1.5 bg-white shadow-inner">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#faf8f5]">
                    <Image
                      src="/images/leadership/ja-chowdary.webp"
                      alt="J. A. Chowdary - Founder & Chairman, International Startup Foundation"
                      fill
                      sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 320px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative, Achievements & Vision */}
          <div className="md:col-span-7 lg:col-span-7 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="w-full text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c25022] block">
                Founder &amp; Chairman, ISF
              </span>
              <h3 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl text-[#1c1917] tracking-tight leading-tight mt-1">
                J. A. Chowdary
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-[#8c671b] mt-1 leading-snug">
                Pioneering Indian IT Ecosystem Architect • Ex-Director STPI • Former IT Advisor to Govt of AP
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed text-center md:text-left">
              Widely acknowledged as one of the visionary architects who shaped India&apos;s software technology exports and transformed Hyderabad into a premier global IT destination. Through the International Startup Foundation, he champions an audacious mission: decentralizing wealth creation by empowering collegiate innovators, rural entrepreneurs, and tribal youth directly with venture capital and institutional mentorship.
            </p>

            <blockquote className="w-full p-3.5 sm:p-4 rounded-xl bg-white/80 border-l-4 border-l-[#e87042] border border-[#e8dfd3] text-xs sm:text-sm text-[#44403c] italic leading-relaxed shadow-2xs text-center md:text-left">
              &ldquo;India&apos;s true innovative breakthrough will not emerge solely from metropolitan high-rises, but from decentralizing opportunity directly to grassroots youth across rural and tribal corridors.&rdquo;
            </blockquote>

            <div className="pt-2 w-full flex justify-center md:justify-start">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#c25022] hover:text-[#e87042] transition-colors group"
              >
                <span>Explore the ISF Grassroots Mission &amp; Vision</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
