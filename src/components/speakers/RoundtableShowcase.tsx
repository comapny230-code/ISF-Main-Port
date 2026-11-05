"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Clock3, MapPin, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
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
        const moderatorPanelist = roundtable.moderator
          ? panelists.find((panelist) => panelist.name === roundtable.moderator)
          : undefined;
        const orderedPanelists = moderatorPanelist
          ? [moderatorPanelist, ...panelists.filter((panelist) => panelist.id !== moderatorPanelist.id)]
          : panelists;
        const styles = roundtableStyles[roundtable.badgeColor];
        const isExpanded = !!expandedRoundtables[roundtable.id];
        const toggleButton = (
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
                <span>Show All</span>
                <ChevronDown className="h-4 w-4 text-[#b65531]" aria-hidden="true" />
              </>
            )}
          </button>
        );

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
                    <span className={`h-px w-8 ${styles.line}`} aria-hidden="true" />
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.14em] ${styles.number}`}
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
                  {roundtable.moderator && (
                    <p className="mt-3 text-xs font-bold text-[#18745b] sm:text-sm">
                      Moderator: {roundtable.moderator}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 shrink-0 gap-x-4 gap-y-2 text-xs font-semibold text-[#4e4a43] sm:gap-x-6 lg:max-w-[26rem] mx-auto sm:mx-0">
                  <span className="flex items-center justify-center sm:justify-start gap-2">
                    <CalendarDays className="h-4 w-4 text-[#b65531]" aria-hidden="true" />
                    {roundtable.date}
                  </span>
                  <span className="flex items-center justify-center sm:justify-start gap-2">
                    <Clock3 className="h-4 w-4 text-[#b65531]" aria-hidden="true" />
                    {roundtable.time}
                  </span>
                  <span className="col-span-2 flex items-start justify-center text-center gap-2 sm:justify-start sm:text-left">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#b65531]" aria-hidden="true" />
                    {roundtable.location}
                  </span>
                </div>
              </div>
            </header>

            {/* Editorial portrait gallery. */}
            <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-7 sm:mt-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 xl:grid-cols-4">
              {orderedPanelists.map((panelist, index) => {
                const hiddenUntilExpanded = !isExpanded && index >= 4;
                const hasLinkedIn = Boolean(panelist.linkedinUrl);
                const isModerator = panelist.id === moderatorPanelist?.id;
                const responsiveVisibility =
                  index < 4
                    ? "flex"
                    : index < 6
                      ? "hidden md:flex"
                      : index < 8
                        ? "hidden xl:flex"
                        : "hidden";

                return (
                  <article
                    key={panelist.id}
                    className={`group relative min-w-0 flex-col ${
                      hiddenUntilExpanded ? responsiveVisibility : "flex"
                    }`}
                  >
                    <div className={`relative aspect-[4/5] w-full overflow-hidden rounded-[22px_22px_22px_8px] border bg-[#ece8df] shadow-[0_10px_28px_rgba(40,35,27,0.08)] transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_22px_46px_rgba(40,35,27,0.15)] motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[30px_30px_30px_10px] ${isModerator ? "border-[#d28b6d] ring-1 ring-[#d28b6d]/20" : "border-[#d8d1c5]"}`}>
                      {!roundtable.hidePhotos && panelist.photoUrl ? (
                        <Image
                          src={panelist.photoUrl}
                          alt={panelist.name}
                          fill
                          sizes="(max-width: 639px) 48vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                          className="object-cover object-top grayscale-[6%] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.055] group-hover:grayscale-0 motion-reduce:transition-none"
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

                      <div className="hidden" aria-hidden="true" />
                      <div className="hidden" aria-hidden="true" />

                      {isModerator && (
                        <span className="hidden">
                          Moderator
                        </span>
                      )}

                      {hasLinkedIn && (
                        <span
                          className="hidden"
                          aria-label="Open LinkedIn profile"
                          title="Open LinkedIn profile"
                        >
                          <svg className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 1-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        </span>
                      )}

                      <div className="hidden">
                        <span className={`mb-2 block h-[2px] w-7 rounded-full ${styles.line} transition-[width] duration-300 group-hover:w-12 motion-reduce:transition-none sm:w-9`} aria-hidden="true" />
                        <h4 className="font-serif text-[13px] font-bold leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-[1.35rem] sm:leading-[1.1] sm:tracking-[-0.02em]">
                          {panelist.name}
                        </h4>
                        {panelist.designation && (
                          <p className="mt-1.5 text-[10px] font-bold leading-snug text-[#ffd9c4] sm:mt-2 sm:text-sm">
                            {panelist.designation}
                          </p>
                        )}
                        {panelist.organization && (
                          <p className="mt-0.5 text-[9px] leading-snug text-white/70 sm:mt-1 sm:text-xs">
                            {panelist.organization}
                          </p>
                        )}
                      </div>

                    </div>

                    <div
                      className={`flex min-w-0 flex-1 flex-col px-1 pb-1 pt-3 sm:px-2 sm:pt-4 ${hasLinkedIn ? "cursor-pointer" : ""}`}
                      role={hasLinkedIn ? "link" : undefined}
                      tabIndex={hasLinkedIn ? 0 : undefined}
                      aria-label={hasLinkedIn ? `Open ${panelist.name}'s LinkedIn profile` : undefined}
                      onClick={() => {
                        if (panelist.linkedinUrl) window.open(panelist.linkedinUrl, "_blank", "noopener,noreferrer");
                      }}
                      onKeyDown={(event) => {
                        if (hasLinkedIn && (event.key === "Enter" || event.key === " ")) {
                          event.preventDefault();
                          window.open(panelist.linkedinUrl, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      <div className="flex items-start gap-2">
                        <h4 className="min-w-0 flex-1 font-serif text-[13px] sm:text-[1.35rem] font-bold leading-tight sm:leading-[1.12] tracking-tight sm:tracking-[-0.02em] text-[#201f1b] transition-colors duration-200 group-hover:text-[#9e4528]">
                          {panelist.name}
                        </h4>
                        {hasLinkedIn && (
                          <span
                            className="mt-0.5 inline-flex shrink-0 items-center gap-1 text-[#0a66c2] transition-colors group-hover:text-[#084f96]"
                            aria-label="Open LinkedIn profile"
                            title="Open LinkedIn profile"
                          >
                            <svg className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                            <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          </span>
                        )}
                      </div>
                      {isModerator && (
                        <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.16em] text-[#18745b]">
                          Moderator
                        </span>
                      )}
                      {panelist.designation && (
                        <p className="mt-1.5 sm:mt-3 text-[11px] sm:text-sm font-bold leading-[1.3] sm:leading-[1.45] text-[#7a4d22]">
                          {panelist.designation}
                        </p>
                      )}
                      {panelist.organization && (
                        <p className="mt-0.5 sm:mt-1 text-[9.5px] sm:text-xs leading-snug sm:leading-[1.5] text-[#817b71]">
                          {panelist.organization}
                        </p>
                      )}
                      <div className="mt-2 sm:mt-auto pt-1 sm:pt-5">
                        <div className={`h-[2px] w-6 rounded-full ${styles.line} opacity-75 transition-[width] duration-300 group-hover:w-10 motion-reduce:transition-none sm:w-8 sm:group-hover:w-12`} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Show All Toggle Button: only show when the current breakpoint has hidden cards. */}
            {orderedPanelists.length > 4 && <div className="mt-5 flex justify-center md:hidden">{toggleButton}</div>}
            {orderedPanelists.length > 6 && <div className="mt-5 hidden justify-center md:flex xl:hidden">{toggleButton}</div>}
            {orderedPanelists.length > 8 && <div className="mt-5 hidden justify-center xl:flex">{toggleButton}</div>}
          </article>
        );
      })}
    </div>
  );
}
