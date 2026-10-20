import React from "react";
import { Container } from "../common/Container";
import { Rocket, Users2, MessageSquare, Compass } from "lucide-react";

const FOUR_PILLARS = [
  {
    number: "01",
    title: "Junicorn Startup Showcase",
    description:
      "A dedicated stage for early-stage student and grassroots founders to pitch before investors, mentors, and industry leaders.",
    icon: Rocket,
    accent: "#c25e38",
    accentBg: "#fff5f0",
  },
  {
    number: "02",
    title: "Investor & Mentor Connect",
    description:
      "Structured one-on-one meetings, panel discussions, and open mentoring sessions bridging capital with grassroots innovation.",
    icon: Users2,
    accent: "#9e792c",
    accentBg: "#fdf8ed",
  },
  {
    number: "03",
    title: "Sectoral Roundtables",
    description:
      "Deep-dive roundtable dialogues across eight high-growth sectors, led by domain experts, investors, and ecosystem builders.",
    icon: MessageSquare,
    accent: "#1c6651",
    accentBg: "#f0f7f4",
  },
  {
    number: "04",
    title: "Dandakaranya Experience",
    description:
      "A signature immersive trekking experience through the ancient forests of Dandakaranya, where dialogue flows freely in nature.",
    icon: Compass,
    accent: "#2d6a4f",
    accentBg: "#eef6f2",
  },
];

export function FourPillarsSection() {
  return (
    <section
      aria-label="Four Pillars of ISF Startup Jathara"
      className="section-reveal py-20 sm:py-28 bg-[#f7f4ec] border-b border-[#e6dfd1]"
    >
      <Container size="wide">
        {/* Section heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">
              The Four Pillars
            </p>
          </div>
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-[2.5rem] text-[#1c1917] tracking-tight leading-[1.08]">
            Built on Four Exceptional Experiences
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#57534e] max-w-xl leading-relaxed">
            Every element of ISF Startup Jathara is designed with purpose — centered
            around four distinct pillars that make this gathering transformative.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FOUR_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className={`group relative rounded-2xl bg-white border border-[#e8e2d5] hover:border-transparent shadow-[0_1px_6px_rgba(28,25,23,0.05)] hover:shadow-[0_16px_40px_rgba(28,25,23,0.12)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden card-enter card-enter-${idx + 1}`}
              >
                {/* Accent top bar */}
                <div className="h-[3px] w-full" style={{ backgroundColor: pillar.accent }} />

                <div className="p-6 flex flex-col gap-5">
                  {/* Icon + step number row */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: pillar.accentBg, color: pillar.accent }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span
                      className="font-mono text-xs font-bold tracking-widest"
                      style={{ color: pillar.accent, opacity: 0.4 }}
                      aria-hidden="true"
                    >
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-[17px] text-[#1c1917] leading-snug group-hover:text-[#103327] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#6b6560] leading-[1.65]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
