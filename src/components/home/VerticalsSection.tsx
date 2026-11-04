import React from "react";
import Link from "next/link";
import { 
  Wheat, 
  Cpu, 
  Activity, 
  Shield, 
  Users, 
  Building2, 
  Zap, 
  Coins, 
  ArrowRight, 
  Sparkles,
  Lightbulb
} from "lucide-react";
import { OFFICIAL_TRACKS, SummitTrack } from "@/lib/config/tracks";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { cn } from "@/lib/utils";

// Icon resolution helper for official tracks
const trackIconMap: Record<string, React.ElementType> = {
  Wheat,
  Cpu,
  Activity,
  Shield,
  Users,
  Building2,
  Zap,
  Coins,
  Sparkles,
  Lightbulb,
};

export function VerticalsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#fcfbf8] via-[#f9f6f0] to-[#fcfbf8] border-b border-[#e6dfd1] relative overflow-hidden">
      {/* Subtle ambient lighting glows behind the grid */}
      <div 
        className="absolute top-10 left-1/4 w-96 h-96 bg-[#d6b25e]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#c25e38]/8 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <Container size="wide" className="relative z-10">
        {/* Bespoke Editorial Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

          {/* Main Title with Gradient Accent */}
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1c1917] tracking-tight leading-[1.12]">
            Nine Focus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Sectors</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-sm sm:text-base text-[#57534e] max-w-2xl mx-auto leading-relaxed font-normal">
            Dedicated showcase arenas, investor roundtables, and growth tracks tailored for grassroots innovation and high-growth venture scale.
          </p>

          {/* Decorative Divider */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
            <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
          </div>
        </div>

        {/* Canonical Eight-Track Grid - Premium, Tactile & Elevated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {OFFICIAL_TRACKS.map((track: SummitTrack) => {
            const IconComp = trackIconMap[track.iconName] || Sparkles;

            return (
              <Link
                key={track.slug}
                href="https://docs.google.com/forms/d/e/1FAIpQLSclfkUey6kqmsxTEwQporewODZJzRqPwQVaVOzRjkry6HIbWQ/viewform"
                className={cn(
                  "group relative rounded-3xl p-6 bg-white/90 backdrop-blur-sm border border-[#e4dcce] hover:border-[#be9740]/70",
                  "shadow-[0_4px_20px_-4px_rgba(20,62,48,0.06)] hover:shadow-[0_24px_48px_-12px_rgba(20,62,48,0.18),0_8px_20px_-4px_rgba(194,94,56,0.10)]",
                  "transform hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden cursor-pointer"
                )}
              >
                {/* Top golden shimmer accent line on hover */}
                <div 
                  className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#d6b25e]/0 group-hover:via-[#d6b25e] to-transparent transition-all duration-500" 
                  aria-hidden="true" 
                />

                {/* Ambient radial color bloom on hover */}
                <div
                  className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-[#d6b25e]/25 via-[#c25e38]/15 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Top Bar: Elevated Icon Tile & Track Index Pill */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.10)] border border-white/80 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_22px_rgba(0,0,0,0.16)]",
                        track.iconBg
                      )}
                    >
                      <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:rotate-3" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-tight bg-[#f7f4ec] text-[#143e30] border border-[#e2d8c7] group-hover:bg-[#143e30] group-hover:text-[#fcfbf8] group-hover:border-[#143e30] transition-colors duration-300">
                      <span>Track 0{track.id}</span>
                    </div>
                  </div>

                  {/* Track Heading */}
                  <h3 className="font-serif font-bold text-lg sm:text-[19px] text-[#103327] group-hover:text-[#0c291f] transition-colors leading-snug">
                    {track.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-[12.5px] text-[#55635e] group-hover:text-[#38433f] mt-2.5 line-clamp-2 leading-relaxed transition-colors">
                    {track.description}
                  </p>
                </div>

                {/* Footer Action Bar */}
                <div className="relative z-10 mt-6 pt-3.5 border-t border-[#ede7db] flex items-center justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#103327] group-hover:text-[#c25e38] transition-colors">
                    <span>Apply in Track</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <Button href="/startups" variant="secondary" size="md" className="font-bold shadow-xs hover:shadow-md transition-all w-full sm:w-auto justify-center">
            <span>Explore Complete Startup &amp; Junicorn Guidelines</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
