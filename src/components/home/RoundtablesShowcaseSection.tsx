import React from "react";
import Link from "next/link";
import { ArrowRight, Mic2, Users } from "lucide-react";
import { Container } from "../common/Container";
import { RoundtableShowcase } from "../speakers/RoundtableShowcase";

export function RoundtablesShowcaseSection() {
  return (
    <section 
      id="speakers"
      aria-label="Official Roundtable Speakers & Panelists"
      className="py-16 sm:py-24 bg-[#ffffff] border-b border-[#e6dfd1] relative overflow-hidden"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fff4ed] text-[#c25022] border border-[#fbd4c0] mb-3">
              <Mic2 className="w-3.5 h-3.5" />
              <span>Official ISF Deliberations</span>
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl text-[#1c1917] tracking-tight leading-tight">
              Sector Roundtables &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Confirmed Panelists</span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] leading-relaxed">
              Leading researchers, clinicians, venture investors, and policy shapers convening across 4 strategic roundtables at GIET University.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/speakers"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#d6cfc4] text-xs font-bold text-[#1c1917] hover:border-[#c25022] hover:text-[#c25022] transition-all shadow-2xs group"
            >
              <span>View Full Speakers Roster</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* The Official Roundtable Card with Clean Compact Panelist Cards */}
        <RoundtableShowcase />
      </Container>
    </section>
  );
}
