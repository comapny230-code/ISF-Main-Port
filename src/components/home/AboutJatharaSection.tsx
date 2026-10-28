import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

const STATS = [
  {
    value: "4",
    label: "Immersive Days",
    sub: "17–20 Dec 2026",
    accent: "#c25e38",
    href: "/programme",
    cta: "Programme",
    image: "/images/explore-roundtable-panel-2026.webp",
  },
  {
    value: "9+",
    label: "Sector Tracks",
    sub: "AgriTech · HealthTech · more",
    accent: "#1c6651",
    href: "/startups",
    cta: "Tracks",
    image: "/images/junicorn-innovators.webp",
  },
  {
    value: "50+",
    label: "Speakers & Leaders",
    sub: "Visionaries · Mentors · CXOs",
    accent: "#8c671b",
    href: "/speakers",
    cta: "Speakers",
    image: "/images/explore-keynote-speakers-2026.webp",
  },
  {
    value: "1",
    label: "Landmark Venue",
    sub: "GIET University, Gunupur",
    accent: "#4a5752",
    href: "/venue",
    cta: "Venue",
    image: "/images/gietu-campus-aerial.webp",
  },
];

export function AboutJatharaSection() {
  return (
    <section
      aria-label="About ISF Startup Jathara"
      className="section-reveal py-16 sm:py-24 bg-[#fcfbf8] border-b border-[#e6dfd1]"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

          {/* ── Left: Editorial text column ─────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Eyebrow + heading */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="w-5 h-px bg-[#c25e38]" aria-hidden="true" />
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">
                  About the Jathara
                </p>
              </div>

              <h2 className="font-serif font-black text-[2.1rem] sm:text-[2.6rem] lg:text-[2.9rem] text-[#1c1917] tracking-tight leading-[1.07]">
                A Gathering{" "}
                <span className="relative inline-block">
                  Unlike Any Other
                  {/* Hand-drawn underline accent */}
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 w-full"
                    viewBox="0 0 220 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 5.5 C40 2, 90 7, 140 4 S200 2, 218 5"
                      stroke="#e87042"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Body copy */}
            <p className="text-base sm:text-[17px] text-[#44403c] leading-[1.8] font-normal max-w-xl">
              ISF Startup Jathara is a national platform that brings grassroots
              founders, Junicorns, investors, and mentors together in Odisha&apos;s
              Dandakaranya region — celebrating indigenous enterprise, accelerating
              rural innovation, and building lasting bonds between Bharat&apos;s
              entrepreneurial heartland and global capital.
            </p>

            {/* CTA link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#103327] hover:text-[#c25e38] transition-colors duration-200 group w-fit border-b border-[#103327]/20 hover:border-[#c25e38]/30 pb-0.5"
              >
                <span>Learn more about the summit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ── Right: 4 Interactive Stat Links with Pictures (2x2 grid on all screens) ── */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full">
            {STATS.map((stat) => (
              <Link
                key={stat.label}
                href={stat.href}
                className="group relative rounded-xl sm:rounded-2xl border border-[#e6dfd1] bg-white overflow-hidden hover:border-[#c8c0b2] hover:shadow-[0_12px_32px_rgba(28,25,23,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top photo strip with subtle CTA */}
                <div className="relative h-20 sm:h-24 md:h-28 w-full overflow-hidden">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                  {/* Subtle CTA badge */}
                  <span className="absolute bottom-1.5 right-2 sm:bottom-2 sm:right-2.5 flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[10px] font-bold text-white drop-shadow-sm group-hover:text-[#ffd6c4] transition-colors">
                    <span>{stat.cta}</span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Card body */}
                <div className="p-3 sm:p-4 md:p-4.5 relative flex-1 flex flex-col justify-center">
                  {/* Left coloured accent bar */}
                  <div
                    className="absolute left-0 top-2.5 bottom-2.5 sm:top-3 sm:bottom-3 w-[3px] sm:w-[3.5px] rounded-r-full"
                    style={{ backgroundColor: stat.accent }}
                    aria-hidden="true"
                  />
                  <div className="pl-1.5 sm:pl-2">
                    <div
                      className="font-serif font-black text-xl sm:text-2xl lg:text-3xl leading-none"
                      style={{ color: stat.accent }}
                    >
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1c1917] group-hover:text-[#c25e38] transition-colors line-clamp-1">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 text-[9.5px] sm:text-[11px] text-[#78716c] leading-tight line-clamp-1 sm:line-clamp-none">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
