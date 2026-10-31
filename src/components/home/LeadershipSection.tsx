import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Quote, Award } from "lucide-react";
import { Container } from "../common/Container";
import { GIET_LEADERSHIP_PROFILES } from "@/data/leadershipData";

export function LeadershipSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#faf7f2] via-[#f7f3eb] to-[#faf7f2] border-b border-[#e8dfd3]">
      <Container size="wide">
        {/* ========================================================
            PART 1: HONOURING THE VISION BEHIND ISF
           ======================================================== */}
        <div className="mb-20">
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
                  className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-tr from-[#c25022]/20 via-[#e87042]/25 to-[#d68c45]/20 blur-md group-hover:blur-lg transition-all duration-500" 
                  aria-hidden="true" 
                />

                {/* Concentric Double-Ring Circular Frame */}
                <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-[#c25022] via-[#e87042] to-[#d68c45] shadow-xl shadow-[#e87042]/15">
                  <div className="w-full h-full rounded-full p-1.5 sm:p-2 bg-white shadow-inner">
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
            <div className="md:col-span-7 lg:col-span-7 space-y-4 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c25022]">
                  Founder &amp; Chairman, ISF
                </span>
                <h3 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl text-[#1c1917] tracking-tight leading-tight mt-1">
                  J. A. Chowdary
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#8c671b] mt-1 leading-snug">
                  Pioneering Indian IT Ecosystem Architect • Ex-Director STPI • Former IT Advisor to Govt of AP
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
                Widely acknowledged as one of the visionary architects who shaped India&apos;s software technology exports and transformed Hyderabad into a premier global IT destination. Through the International Startup Foundation, he champions an audacious mission: decentralizing wealth creation by empowering collegiate innovators, rural entrepreneurs, and tribal youth directly with venture capital and institutional mentorship.
              </p>

              <blockquote className="p-3.5 sm:p-4 rounded-xl bg-white/80 border-l-4 border-l-[#e87042] border border-[#e8dfd3] text-xs sm:text-sm text-[#44403c] italic leading-relaxed shadow-2xs">
                &ldquo;India&apos;s true innovative breakthrough will not emerge solely from metropolitan high-rises, but from decentralizing opportunity directly to grassroots youth across rural and tribal corridors.&rdquo;
              </blockquote>

              <div className="pt-2">
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
        </div>

        {/* ========================================================
            PART 2: INSTITUTIONAL LEADERSHIP (GIET UNIVERSITY)
           ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1c1917] tracking-tight leading-[1.12]">
              Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Leadership</span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#57534e] max-w-2xl mx-auto leading-relaxed">
              Guiding GIET University&apos;s 28-year legacy of academic and innovation excellence.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
              <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
              <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
            </div>
          </div>

          {/* Leaders Grid (5 Leaders) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 min-[380px]:gap-3 sm:gap-5">
            {GIET_LEADERSHIP_PROFILES.map((leader, index) => (
              <div
                key={leader.id}
                className={`bg-white rounded-2xl border border-[#e8dfd3] overflow-hidden shadow-xs hover:shadow-md hover:border-[#e87042]/40 transition-all flex flex-col group ${
                  index === 4
                    ? "col-span-2 sm:col-span-1 w-[calc(50%-5px)] min-[380px]:w-[calc(50%-6px)] sm:w-full mx-auto"
                    : ""
                }`}
              >
                <div className="relative aspect-[3/3.6] w-full bg-[#181a24] overflow-hidden">
                  <Image
                    src={leader.imageSrc}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-3 text-center flex-1 flex flex-col justify-center">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1c1917] line-clamp-1">
                    {leader.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#c25e38] font-semibold line-clamp-1 mt-0.5">
                    {leader.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
