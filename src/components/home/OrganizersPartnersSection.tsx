import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../common/Container";
import { cn } from "@/lib/utils";

interface OrganizerItem {
  name: string;
  fullName: string;
  role: string;
  badgeStyle: string;
  description: string;
  logo: string;
  href: string;
}

const ORGANIZERS: OrganizerItem[] = [
  {
    name: "ISF Network",
    fullName: "International Startup Foundation",
    role: "Organizer",
    badgeStyle: "bg-[#fff4ed] text-[#b94a24] border-[#fbd4c0]",
    description: "Global startup catalyst uniting innovators, policy leaders, and venture funds to build grassroots momentum.",
    logo: "/logos/isf-logo.webp",
    href: "https://www.isfnetwork.org",
  },
  {
    name: "GIET University",
    fullName: "Gunupur, Odisha",
    role: "Host Institution",
    badgeStyle: "bg-[#edf6f2] text-[#1c6651] border-[#cbe4d8]",
    description: "Scenic 65+ acre academic campus with state-of-the-art convention halls and 28-year innovation legacy.",
    logo: "/logos/giet-logo.png",
    href: "https://www.giet.edu",
  },
  {
    name: "IncubateX",
    fullName: "Innovation Foundation",
    role: "Innovation Partner",
    badgeStyle: "bg-[#fdf6e7] text-[#8c671b] border-[#fae6b8]",
    description: "Venture incubation foundation providing design curriculums, investor roundtables, and mentor ecosystems.",
    logo: "/logos/incubatex-logo.png",
    href: "https://www.incubationx.com",
  },
];

export function OrganizersPartnersSection() {
  return (
    <section
      aria-label="Organizers, Host & Partners"
      className="section-reveal py-16 sm:py-24 bg-gradient-to-b from-[#fcfbf8] via-[#f7f4ec] to-[#fcfbf8] border-t border-[#e6dfd1] relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#c25e38]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#d6b25e]/6 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2.5 mb-3.5">
            <span className="w-5 h-px bg-gradient-to-r from-transparent to-[#c25e38]" aria-hidden="true" />
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#c25e38]">
              Convened Under the Aegis Of
            </p>
            <span className="w-5 h-px bg-gradient-to-l from-transparent to-[#c25e38]" aria-hidden="true" />
          </div>

          <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight leading-tight">
            Organizers, Host &amp; Partners
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#78716c] leading-relaxed max-w-lg mx-auto">
            An institutional alliance uniting global venture networks, regional academic excellence, and grassroots incubation.
          </p>
        </div>

        {/* 3-Column Premium Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {ORGANIZERS.map((org) => (
            <a
              key={org.name}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${org.fullName}, ${org.role}`}
              className="group relative flex flex-col items-center text-center p-6 sm:p-7 md:p-8 rounded-3xl bg-white border border-[#e8e2d5] shadow-[0_4px_24px_rgba(28,25,23,0.03)] hover:shadow-[0_16px_36px_rgba(194,94,56,0.10)] hover:border-[#c25e38]/35 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle accent hover indicator line */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#c25e38]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              {/* Role pill badge */}
              <span
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border shadow-2xs",
                  org.badgeStyle
                )}
              >
                {org.role}
              </span>

              {/* Logo Pedestal */}
              <div className="my-5 w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-[#faf7f2] border border-[#ede5d8] group-hover:border-[#c25e38]/25 group-hover:bg-white flex items-center justify-center p-3.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:scale-105">
                <Image
                  src={org.logo}
                  alt={`${org.name} Logo`}
                  width={64}
                  height={64}
                  style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
                  className="object-contain"
                />
              </div>

              {/* Typography */}
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1c1917] group-hover:text-[#c25e38] transition-colors leading-snug">
                {org.name}
              </h3>

              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#8c671b]">
                {org.fullName}
              </p>

              <p className="mt-3 text-xs text-[#78716c] leading-relaxed">
                {org.description}
              </p>

              {/* Action Link Footer */}
              <div className="mt-6 pt-4 border-t border-[#f0eae1] w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8c671b] group-hover:text-[#c25e38] transition-colors">
                <span>Official Website</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
