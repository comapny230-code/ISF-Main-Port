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
    logo: "/logos/giet-logo.webp",
    href: "https://www.giet.edu",
  },
  {
    name: "IncubateX",
    fullName: "Innovation Foundation",
    role: "Innovation Partner",
    badgeStyle: "bg-[#fdf6e7] text-[#8c671b] border-[#fae6b8]",
    description: "Venture incubation foundation providing design curriculums, investor roundtables, and mentor ecosystems.",
    logo: "/logos/incubatex-logo.webp",
    href: "https://www.incubationx.com",
  },
];

export function OrganizersPartnersSection() {
  return (
    <section
      aria-label="Organizers, Host & Partners"
      className="section-reveal py-9 sm:py-16 md:py-20 bg-gradient-to-b from-[#fcfbf8] via-[#f7f4ec] to-[#fcfbf8] border-t border-[#e6dfd1] relative overflow-hidden"
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
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <span className="w-4 sm:w-5 h-px bg-gradient-to-r from-transparent to-[#c25e38]" aria-hidden="true" />
            <p className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#c25e38]">
              Convened Under the Aegis Of
            </p>
            <span className="w-4 sm:w-5 h-px bg-gradient-to-l from-transparent to-[#c25e38]" aria-hidden="true" />
          </div>

          <h2 className="font-serif font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1c1917] tracking-tight leading-tight">
            Organizers, Host &amp; Partners
          </h2>

          <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm text-[#78716c] leading-relaxed max-w-lg mx-auto">
            An institutional alliance uniting global venture networks, regional academic excellence, and grassroots incubation.
          </p>
        </div>

        {/* 3-Column Card Grid: Compact horizontal list on mobile, premium pedestal cards on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {ORGANIZERS.map((org) => (
            <a
              key={org.name}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${org.fullName}, ${org.role}`}
              className="group relative flex flex-row md:flex-col items-center text-left md:text-center p-3 sm:p-4 md:p-7 rounded-2xl md:rounded-3xl bg-white border border-[#e8e2d5] shadow-[0_2px_12px_rgba(28,25,23,0.03)] hover:shadow-[0_16px_36px_rgba(194,94,56,0.10)] hover:border-[#c25e38]/35 hover:-translate-y-0.5 md:hover:-translate-y-1 transition-all duration-300 gap-3 md:gap-0"
            >
              {/* Subtle accent hover indicator line */}
              <div className="hidden md:block absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#c25e38]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              {/* Logo Pedestal */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 md:my-4 rounded-xl md:rounded-2xl bg-[#faf7f2] border border-[#ede5d8] group-hover:border-[#c25e38]/25 group-hover:bg-white flex items-center justify-center p-2 md:p-3.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:scale-105">
                <Image
                  src={org.logo}
                  alt={`${org.name} Logo`}
                  width={56}
                  height={56}
                  style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
                  className="object-contain"
                />
              </div>

              {/* Card Text Content */}
              <div className="flex-1 min-w-0">
                {/* Mobile Top Meta: Badge + Quick link */}
                <div className="flex items-center justify-between gap-2 md:justify-center mb-1 md:mb-0">
                  <span
                    className={cn(
                      "inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider border shadow-2xs",
                      org.badgeStyle
                    )}
                  >
                    {org.role}
                  </span>
                  <span className="md:hidden text-[11px] font-semibold text-[#8c671b] group-hover:text-[#c25e38] flex items-center gap-0.5 shrink-0 transition-colors">
                    Visit <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                {/* Typography */}
                <h3 className="font-serif font-bold text-sm sm:text-base md:text-lg text-[#1c1917] group-hover:text-[#c25e38] transition-colors leading-tight md:leading-snug truncate md:whitespace-normal">
                  {org.name}
                </h3>

                <p className="mt-0.5 text-[11px] md:text-xs font-semibold text-[#8c671b] truncate md:whitespace-normal">
                  {org.fullName}
                </p>

                {/* Description - Hidden on phone view, visible on desktop */}
                <p className="hidden md:block mt-2.5 text-xs text-[#78716c] leading-relaxed">
                  {org.description}
                </p>
              </div>

              {/* Action Link Footer on Tablet / Desktop */}
              <div className="hidden md:flex mt-5 pt-3.5 border-t border-[#f0eae1] w-full items-center justify-center gap-1.5 text-xs font-semibold text-[#8c671b] group-hover:text-[#c25e38] transition-colors">
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
