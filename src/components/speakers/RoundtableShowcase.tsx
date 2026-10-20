"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Clock3, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import {
  OFFICIAL_PANELISTS,
  OFFICIAL_ROUNDTABLES,
  type OfficialRoundtable,
} from "@/data/officialSpeakers";

interface RoundtableShowcaseProps {
  className?: string;
}

const roundtableStyles: Record<
  OfficialRoundtable["badgeColor"],
  { number: string; badge: string; line: string; monogram: string }
> = {
  emerald: {
    number: "text-[#18745b]",
    badge: "border-[#bcded3] bg-[#edf8f4] text-[#155d4b]",
    line: "bg-[#18745b]",
    monogram: "from-[#154e3f] to-[#26775f]",
  },
  amber: {
    number: "text-[#a56218]",
    badge: "border-[#ead5ad] bg-[#fff8e9] text-[#8b5717]",
    line: "bg-[#b77724]",
    monogram: "from-[#8d581b] to-[#c28a3b]",
  },
  blue: {
    number: "text-[#286385]",
    badge: "border-[#bfd8e6] bg-[#eef7fb] text-[#285d7b]",
    line: "bg-[#347497]",
    monogram: "from-[#285c79] to-[#4b86a5]",
  },
  purple: {
    number: "text-[#765383]",
    badge: "border-[#d9c9dd] bg-[#faf3fb] text-[#6d4b78]",
    line: "bg-[#765383]",
    monogram: "from-[#654670] to-[#8c6996]",
  },
};

export function RoundtableShowcase({ className = "" }: RoundtableShowcaseProps) {
  const [expandedRoundtables, setExpandedRoundtables] = useState<Record<string, boolean>>({});

  const toggleRoundtable = (id: string) => {
    setExpandedRoundtables((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={`w-full space-y-20 sm:space-y-24 ${className}`}>
      {OFFICIAL_ROUNDTABLES.map((roundtable) => {
        const panelists = roundtable.panelistIds
          .map((id) => OFFICIAL_PANELISTS[id])
          .filter(Boolean);
        const styles = roundtableStyles[roundtable.badgeColor];
        const isExpanded = !!expandedRoundtables[roundtable.id];

        return (
          <article key={roundtable.id} id={roundtable.id} className="scroll-mt-32">
            <header className="relative border-b border-[#dcd6ca] pb-7 sm:pb-8 text-center sm:text-left">
              <div className={`absolute bottom-[-1px] left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 h-[2px] w-16 ${styles.line}`} />

              <div className="flex flex-col items-center sm:items-start gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
                <div className="max-w-3xl">
                  <div className="mb-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <span className={`font-serif text-sm font-bold ${styles.number}`}>
                      0{roundtable.number}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${styles.badge}`}
                    >
                      {roundtable.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-[1.75rem] font-black leading-[1.1] tracking-[-0.025em] text-[#1b1b18] sm:text-4xl">
                    {roundtable.title}
                  </h3>
                  <p className="mt-3 max-w-2xl mx-auto sm:mx-0 text-sm leading-6 text-[#656159] sm:text-[15px]">
                    {roundtable.description}
                  </p>
                </div>

                <div className="grid shrink-0 gap-x-6 gap-y-2 text-xs font-semibold text-[#4e4a43] sm:grid-cols-2 lg:max-w-[26rem] mx-auto sm:mx-0">
                  <span className="flex items-center justify-center sm:justify-start gap-2">
                    <CalendarDays className="h-4 w-4 text-[#b65531]" aria-hidden="true" />
                    {roundtable.date}
                  </span>
                  <span className="flex items-center justify-center sm:justify-start gap-2">
                    <Clock3 className="h-4 w-4 text-[#b65531]" aria-hidden="true" />
                    {roundtable.time}
                  </span>
                  <span className="flex items-start justify-center sm:justify-start text-center sm:text-left gap-2 sm:col-span-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#b65531]" aria-hidden="true" />
                    {roundtable.location}
                  </span>
                </div>
              </div>
            </header>

            {/* Panelists Grid: 2 columns on mobile, 3 on md, 4 on xl */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
              {panelists.map((panelist, index) => {
                const isHiddenOnMobile = index >= 4 && !isExpanded;

                return (
                  <article
                    key={panelist.id}
                    className={`group relative min-w-0 flex-col overflow-hidden rounded-[16px] sm:rounded-[22px] border border-[#ded8cd] bg-white shadow-[0_6px_20px_rgba(40,35,27,0.04)] sm:shadow-[0_10px_30px_rgba(40,35,27,0.055)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#bdb4a6] hover:shadow-[0_20px_46px_rgba(40,35,27,0.12)] motion-reduce:transform-none motion-reduce:transition-none ${
                      isHiddenOnMobile ? "hidden sm:flex" : "flex"
                    }`}
                  >
                    <div className="relative aspect-square sm:aspect-[4/4.35] overflow-hidden bg-[#ece8df]">
                      {panelist.photoUrl ? (
                        <Image
                          src={panelist.photoUrl}
                          alt={panelist.name}
                          fill
                          sizes="(max-width: 639px) 48vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                          className="object-cover object-top grayscale-[8%] transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                        />
                      ) : (
                        <div
                          className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${styles.monogram}`}
                          role="img"
                          aria-label={`${panelist.name} monogram`}
                        >
                          <span className="absolute -right-8 -top-8 h-24 w-24 sm:-right-12 sm:-top-12 sm:h-36 sm:w-36 rounded-full border border-white/10" />
                          <span className="absolute -bottom-10 -left-8 h-28 w-28 sm:-bottom-16 sm:-left-12 sm:h-44 sm:w-44 rounded-full border border-white/10" />
                          <span className="absolute inset-x-5 bottom-5 top-5 sm:inset-x-7 sm:bottom-7 sm:top-7 rounded-full border border-white/[0.08]" />
                          <span className="font-serif text-2.5xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-white/95">
                            {panelist.initials}
                          </span>
                        </div>
                      )}

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black/45 sm:from-black/40 to-transparent" />
                      <span className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.16em] text-white/90">
                        Panelist {String(index + 1).padStart(2, "0")}
                      </span>

                      {panelist.linkedinUrl && (
                        <a
                          href={panelist.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${panelist.name} on LinkedIn`}
                          title={`${panelist.name} on LinkedIn`}
                          className="absolute right-2 top-2 sm:right-3.5 sm:top-3.5 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#185f8c] shadow-sm backdrop-blur-sm transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#185f8c] motion-reduce:transition-none"
                        >
                          <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-3 sm:px-6 sm:pb-6 sm:pt-5">
                      <h4 className="font-serif text-[13px] sm:text-[1.35rem] font-bold leading-tight sm:leading-[1.12] tracking-tight sm:tracking-[-0.02em] text-[#201f1b] transition-colors duration-200 group-hover:text-[#9e4528] line-clamp-1 sm:line-clamp-none">
                        {panelist.name}
                      </h4>
                      {panelist.designation && (
                        <p className="mt-1 sm:mt-3 text-[10.5px] sm:text-[13px] font-medium sm:font-semibold leading-[1.3] sm:leading-[1.45] text-[#4d4b45] line-clamp-2">
                          {panelist.designation}
                        </p>
                      )}
                      {panelist.organization && (
                        <p className="mt-0.5 sm:mt-1 text-[9.5px] sm:text-xs leading-snug sm:leading-[1.5] text-[#817b71] line-clamp-1">
                          {panelist.organization}
                        </p>
                      )}
                      <div className="mt-2 sm:mt-auto pt-1 sm:pt-5">
                        <div className={`h-[2px] w-6 sm:w-8 rounded-full ${styles.line} opacity-75 transition-[width] duration-300 group-hover:w-10 sm:group-hover:w-12 motion-reduce:transition-none`} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Mobile Dropdown / Show All Toggle Button */}
            {panelists.length > 4 && (
              <div className="mt-5 flex justify-center sm:hidden">
                <button
                  type="button"
                  onClick={() => toggleRoundtable(roundtable.id)}
                  aria-expanded={isExpanded}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d6cfc4] bg-[#fbf9f5] px-5 py-2.5 text-xs font-bold text-[#1b1b18] shadow-xs hover:border-[#b65531] hover:text-[#b65531] hover:bg-white active:scale-95 transition-all"
                >
                  {isExpanded ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="h-4 w-4 text-[#b65531]" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span>Show All ({panelists.length} Speakers)</span>
                      <ChevronDown className="h-4 w-4 text-[#b65531]" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
