"use client";

import React from "react";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";

interface MilestoneData {
  phase: string;
  stepNumber: string;
  stepLabel: string;
  monthLabel: string;
  badge: string;
  title: string;
  description: string;
  isFinale?: boolean;
}

const MILESTONES: MilestoneData[] = [
  {
    phase: "Phase 01",
    stepNumber: "01",
    stepLabel: "Stage 01",
    monthLabel: "October 2026",
    badge: "Applications Open",
    title: "Applications Close",
    description:
      "Submit your idea or working prototype. Open to school builders and student innovators from 20+ states nationwide.",
  },
  {
    phase: "Phase 02",
    stepNumber: "02",
    stepLabel: "Stage 02",
    monthLabel: "November 2026",
    badge: "Top 200 Cohort",
    title: "First Shortlist · 200 Teams",
    description:
      "Top 200 projects enter weekly mentorship sprints, prototype refinement workshops, and faculty domain clinics.",
  },
  {
    phase: "Phase 03",
    stepNumber: "03",
    stepLabel: "Stage 03",
    monthLabel: "Early December",
    badge: "Top 100 Finalists",
    title: "Final 100 · Investor Ready",
    description:
      "Final 100 founders receive live pitch coaching, venture deck reviews, and 1-on-1 investor connects.",
  },
  {
    phase: "Phase 04",
    stepNumber: "04",
    stepLabel: "Stage 04",
    monthLabel: "18 December 2026",
    badge: "Main Stage Finale",
    title: "Grand Finale · Gunupur",
    description:
      "Pitch live before prominent investors, industry leaders, and institutional juries at GIET University.",
    isFinale: true,
  },
];

export function JourneyTimelineTracker() {
  return (
    <div className="w-full">
      {/* 
        Uniform Milestone Cards with Directional Timeline Connection:
        - All 4 cards have consistent, balanced styling (no disparate active/current stage tinting)
        - Connected with a clear directional flow:
          - Desktop (lg): 01 ──► 02 ──► 03 ──► 04 (horizontal line + arrow)
          - Mobile (<lg): 01 ↓ 02 ↓ 03 ↓ 04 (vertical line + arrow)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6 items-stretch">
        {MILESTONES.map((milestone, index) => {
          return (
            <React.Fragment key={milestone.title}>
              {/* Card Container */}
              <div className="relative flex flex-col justify-between">
                <article
                  className={`h-full flex flex-col justify-between rounded-[22px] p-5 sm:p-6 transition-all duration-300 overflow-hidden ${
                    milestone.isFinale
                      ? "border-2 border-[#b45532]/75 bg-gradient-to-b from-[#fef8f2] via-[#fffdfa] to-[#faf2e8] shadow-[0_12px_36px_rgba(180,85,50,0.09)] hover:-translate-y-1 hover:border-[#b45532] hover:shadow-[0_18px_44px_rgba(180,85,50,0.15)]"
                      : "border border-[#d8cfc0] bg-[#fffdfa] shadow-[0_8px_25px_rgba(40,35,27,0.04)] hover:-translate-y-1 hover:border-[#b45532]/60 hover:shadow-[0_16px_36px_rgba(40,35,27,0.08)]"
                  }`}
                >
                  <div>
                    {/* Top Status & Date Header */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      {milestone.isFinale ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[#faebd7] text-[#a84e2d] border border-[#f0d4bd]">
                          <Sparkles className="h-3 w-3 text-[#d96842]" />
                          Grand Finale
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#f3ede3] text-[#736c61] border border-[#e5ded4]">
                          {milestone.stepLabel}
                        </span>
                      )}

                      {/* Month / Date Label */}
                      <span
                        className={`text-[10px] font-black uppercase tracking-[0.14em] ${
                          milestone.isFinale ? "text-[#b45532]" : "text-[#8a8377]"
                        }`}
                      >
                        {milestone.monthLabel}
                      </span>
                    </div>

                    {/* Milestone Number & Phase Tag */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`font-serif text-3xl sm:text-4xl font-black ${
                          milestone.isFinale ? "text-[#a84e2d]" : "text-[#b45532]"
                        }`}
                      >
                        {milestone.stepNumber}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                          milestone.isFinale ? "text-[#a84e2d]" : "text-[#8a6729]"
                        }`}
                      >
                        {milestone.phase}
                      </span>
                    </div>

                    {/* Badge */}
                    <p
                      className={`text-[10px] font-semibold mb-1 ${
                        milestone.isFinale ? "text-[#a84e2d]" : "text-[#666158]"
                      }`}
                    >
                      {milestone.badge}
                    </p>

                    {/* Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917] leading-snug">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs text-[#57534e] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </article>

                {/* 
                  Desktop Connector Bridge (between Card 1 & 2, 2 & 3, 3 & 4):
                  Line spans across the gap, with centered directional arrow pointing right (→)
                */}
                {index < MILESTONES.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-6 items-center justify-center z-20 pointer-events-none"
                    aria-hidden="true"
                  >
                    {/* Connecting line */}
                    <div className="w-full h-[2px] bg-[#ded5c7]" />
                    {/* Directional arrow badge */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center shadow-sm border bg-[#fffdfa] border-[#ded5c7] text-[#8a8377]">
                      <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                    </div>
                  </div>
                )}
              </div>

              {/* 
                Mobile & Tablet Vertical Connector:
                Connects Card 1 down to Card 2, down to Card 3, down to Card 4 with downward line & arrow (↓)
              */}
              {index < MILESTONES.length - 1 && (
                <div
                  className="lg:hidden flex flex-col items-center justify-center py-2.5 relative z-10"
                  aria-hidden="true"
                >
                  {/* Top vertical stem */}
                  <div className="w-[2px] h-3.5 bg-[#ded5c7]" />
                  {/* Directional Down Arrow Badge */}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm border my-0.5 bg-[#fffdfa] border-[#ded5c7] text-[#8a8377]">
                    <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  {/* Bottom vertical stem */}
                  <div className="w-[2px] h-3.5 bg-[#ded5c7]" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
