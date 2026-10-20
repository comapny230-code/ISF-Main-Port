import React from "react";
import Image from "next/image";
import { Container } from "../common/Container";
import { GIET_LEADERSHIP_PROFILES } from "@/data/leadershipData";

export function InstitutionalLeadershipSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf7f2] border-b border-[#e8dfd3]">
      <Container size="wide">
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

        {/* Leaders Grid (5 Leaders: 2 + 2 + 1 centered on mobile) */}
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
      </Container>
    </section>
  );
}
