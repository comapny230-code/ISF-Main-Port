import React from "react";
import { Container } from "../common/Container";
import { Rocket, Users2, MessageSquare, Compass } from "lucide-react";

const FOUR_PILLARS = [
  {
    id: "junicorn",
    title: "Junicorn Startup Showcase",
    tag: "Grassroots & Student Founders",
    description:
      "A dedicated stage for early-stage student and grassroots founders to pitch before investors, mentors, and industry leaders.",
    icon: Rocket,
    accent: "#c25e38",
    iconBg: "#feeae0",
    canvasBg: "bg-gradient-to-br from-[#fff7f2] via-[#ffede3] to-[#fedecf]",
    canvasBorder: "border-[#f9cfb9]/70",
    hoverAccent: "group-hover:text-[#a84420]",
  },
  {
    id: "investor-connect",
    title: "Investor & Mentor Connect",
    tag: "Capital & 1-on-1 Mentorship",
    description:
      "Structured one-on-one meetings, panel discussions, and open mentoring sessions bridging capital with grassroots innovation.",
    icon: Users2,
    accent: "#a1781c",
    iconBg: "#fef4db",
    canvasBg: "bg-gradient-to-br from-[#fffcf2] via-[#fef7e1] to-[#fbeec7]",
    canvasBorder: "border-[#f7dfa3]/70",
    hoverAccent: "group-hover:text-[#876211]",
  },
  {
    id: "roundtables",
    title: "Sectoral Roundtables",
    tag: "8 Growth Sectors",
    description:
      "Deep-dive roundtable dialogues across eight high-growth sectors, led by domain experts, investors, and ecosystem builders.",
    icon: MessageSquare,
    accent: "#166e55",
    iconBg: "#e6f6ef",
    canvasBg: "bg-gradient-to-br from-[#f2faf6] via-[#e6f4ee] to-[#d3ecdf]",
    canvasBorder: "border-[#b8e2ce]/70",
    hoverAccent: "group-hover:text-[#115542]",
  },
  {
    id: "dandakaranya",
    title: "Dandakaranya Experience",
    tag: "Nature & Heritage Trek",
    description:
      "A signature immersive trekking experience through the ancient forests of Dandakaranya, where dialogue flows freely in nature.",
    icon: Compass,
    accent: "#246347",
    iconBg: "#ecf5f0",
    canvasBg: "bg-gradient-to-br from-[#f5f9f6] via-[#eaf4ee] to-[#d8ece0]",
    canvasBorder: "border-[#c0ded0]/70",
    hoverAccent: "group-hover:text-[#1c4e38]",
  },
];

export function FourPillarsSection() {
  return (
    <section
      aria-label="Four Pillars of ISF Startup Jathara"
      className="section-reveal py-10 sm:py-14 lg:py-16 bg-[#f7f4ec] border-b border-[#e6dfd1]"
    >
      <Container size="wide">
        {/* Section heading: Reduced bottom margin to tighten spacing */}
        <div className="max-w-2xl mb-7 sm:mb-9">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">
              The Four Pillars
            </p>
          </div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-[2.25rem] text-[#1c1917] tracking-tight leading-[1.12]">
            Built on Four Exceptional Experiences
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl leading-relaxed">
            Every element of ISF Startup Jathara is designed with purpose — centered
            around four distinct pillars that make this gathering transformative.
          </p>
        </div>

        {/* ── Pillar Cards Grid matching Widget Reference ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
          {FOUR_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative flex flex-col rounded-[26px] sm:rounded-[28px] bg-white border border-[#e8e0d2] p-2.5 sm:p-3 shadow-[0_4px_18px_rgba(28,25,23,0.04)] hover:shadow-[0_18px_42px_rgba(28,25,23,0.1)] hover:border-[#dfd3c0] transition-all duration-400 ease-out hover:-translate-y-1.5 card-enter card-enter-${idx + 1}`}
              >
                {/* ── TOP HEADER: Micro Icon + Proper Heading (No Numbers) ── */}
                <div className="flex items-center gap-2.5 px-2 pt-1 pb-2.5 min-w-0">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg shadow-2xs transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: pillar.iconBg, color: pillar.accent }}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <h3
                    className={`font-serif text-[13.5px] sm:text-[14px] font-bold text-[#1c1917] leading-tight truncate transition-colors duration-200 ${pillar.hoverAccent}`}
                    title={pillar.title}
                  >
                    {pillar.title}
                  </h3>
                </div>

                {/* ── INNER CANVAS CONTAINER: Pastel Canvas from Reference ── */}
                <div
                  className={`relative flex flex-1 flex-col justify-center rounded-[20px] sm:rounded-[22px] border p-4 sm:p-5 transition-all duration-300 min-h-[110px] sm:min-h-[120px] ${pillar.canvasBg} ${pillar.canvasBorder}`}
                >
                  {/* Canvas Description Content */}
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#3d3833] font-medium">
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
