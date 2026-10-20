"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Users,
  Mic2,
  TreePine,
  Trophy,
  Globe,
  Handshake,
  BookOpen,
} from "lucide-react";
import { PROGRAMME_DAYS } from "@/data/eventData";
import { Container } from "../common/Container";
import { cn } from "@/lib/utils";

// ─── Session type visual config ────────────────────────────────────────────────
type SessionTypeCfg = {
  icon: React.ElementType;
  label: string;
  color: string;
  bg: string;
  border: string;
  dot: string;
};

const SESSION_TYPE_MAP: Record<string, SessionTypeCfg> = {
  ceremony: {
    icon: Trophy,
    label: "Ceremony",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },
  roundtable: {
    icon: Users,
    label: "Roundtable",
    color: "text-[#c25022]",
    bg: "bg-[#fff5f0]",
    border: "border-[#fbd4c3]",
    dot: "bg-[#e87042]",
  },
  pitch: {
    icon: Mic2,
    label: "Pitch",
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-200",
    dot: "bg-violet-500",
  },
  networking: {
    icon: Handshake,
    label: "Networking",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
  },
  cultural: {
    icon: BookOpen,
    label: "Cultural",
    color: "text-rose-700",
    bg: "bg-rose-50",
    border: "border-rose-200",
    dot: "bg-rose-500",
  },
  outdoor: {
    icon: TreePine,
    label: "Eco-Trek",
    color: "text-teal-700",
    bg: "bg-teal-50",
    border: "border-teal-200",
    dot: "bg-teal-500",
  },
};

function getSessionCfg(type: string): SessionTypeCfg {
  return (
    SESSION_TYPE_MAP[type] || {
      icon: Globe,
      label: "Session",
      color: "text-slate-600",
      bg: "bg-slate-50",
      border: "border-slate-200",
      dot: "bg-slate-400",
    }
  );
}

// ─── Day stats bar ─────────────────────────────────────────────────────────────
function DayStatsBar({ day }: { day: (typeof PROGRAMME_DAYS)[0] }) {
  const counts: Record<string, number> = {};
  for (const s of day.sessions) {
    counts[s.sessionType] = (counts[s.sessionType] || 0) + 1;
  }
  const items: { label: string; count: number; color: string }[] = [];
  if (counts.roundtable) items.push({ label: counts.roundtable > 1 ? "Roundtables" : "Roundtable", count: counts.roundtable, color: "text-[#c25022]" });
  if (counts.pitch) items.push({ label: counts.pitch > 1 ? "Pitch Sessions" : "Pitch Session", count: counts.pitch, color: "text-violet-700" });
  if (counts.networking) items.push({ label: "Networking", count: counts.networking, color: "text-emerald-700" });
  if (counts.ceremony) items.push({ label: "Ceremony", count: counts.ceremony, color: "text-amber-700" });
  if (counts.cultural) items.push({ label: "Cultural", count: counts.cultural, color: "text-rose-700" });
  if (counts.outdoor) items.push({ label: "Eco-Trek", count: counts.outdoor, color: "text-teal-700" });

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 py-4 px-1 border-b border-[#ede7db] mb-6">
      <span className="text-xs font-bold text-[#78716c] uppercase tracking-wider">
        {day.sessions.length} Sessions
      </span>
      <span className="hidden sm:block w-px h-4 bg-[#dfd6c4]" />
      {items.map((it, i) => (
        <span key={i} className={cn("text-xs font-semibold", it.color)}>
          {it.count} {it.label}
        </span>
      ))}
    </div>
  );
}

// ─── Ceremony accordion ────────────────────────────────────────────────────────
function CeremonyAccordion({
  subEvents,
}: {
  subEvents: { time: string; title: string; speaker?: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4 border-t border-[#ede7db] pt-3.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#c25022] hover:text-[#e87042] transition-colors cursor-pointer"
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-current shrink-0">
          {open ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </span>
        {open
          ? "Collapse Ceremony Protocol"
          : "View Minute-by-Minute Ceremony Protocol (09:30 – 11:25 AM)"}
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-[#faf8f5] rounded-xl border border-[#ede7db] divide-y divide-[#ede7db]/60 overflow-hidden">
          {subEvents.map((evt, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-4 py-2.5 text-xs hover:bg-[#fdf9f6] transition-colors"
            >
              <span className="font-mono font-bold text-[#c25022] shrink-0 w-24 pt-px">
                {evt.time}
              </span>
              <span className="text-[#44403c] font-medium leading-snug flex-1">
                {evt.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Timeline Session Row ──────────────────────────────────────────────────────
function SessionRow({
  session,
  isTentativeDay,
}: {
  session: (typeof PROGRAMME_DAYS)[0]["sessions"][0];
  isTentativeDay: boolean;
}) {
  const cfg = getSessionCfg(session.sessionType);

  return (
    <div className="group relative grid grid-cols-[1.5rem_1fr] sm:grid-cols-[9rem_1fr] gap-0">
      {/* Time column — desktop only */}
      <div className="hidden sm:block pr-4 pt-5 text-right">
        <span className="inline-block font-mono font-bold text-xs text-[#78716c] leading-tight tracking-tight">
          {session.timeSlot}
        </span>
      </div>

      {/* Mobile: empty lane for spine alignment */}
      <div className="sm:hidden" />

      {/* Spine connector */}
      <div className="absolute left-[0.65rem] sm:left-36 top-0 bottom-0 flex flex-col items-center pointer-events-none z-10">
        <div className="w-px flex-1 bg-[#e6dfd1]" />
        <div
          className={cn(
            "relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 bg-white transition-all duration-200 shrink-0 my-1 group-hover:scale-110 group-hover:border-[#e87042]",
            isTentativeDay || session.isTentative ? "border-[#d4c9b8]" : "border-[#ccc1ab]"
          )}
        >
          <span className={cn("w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full", cfg.dot)} />
        </div>
        <div className="w-px flex-1 bg-[#e6dfd1]" />
      </div>

      {/* Card */}
      <div className="pl-5 sm:pl-9 py-2.5 pb-4 sm:py-3 sm:pb-5">
        {/* Time badge — mobile only */}
        <div className="sm:hidden flex items-center gap-1.5 mb-2">
          <Clock className="w-3 h-3 text-[#e87042] shrink-0" />
          <span className="font-mono font-bold text-[10px] text-[#78716c] leading-tight tracking-tight">
            {session.timeSlot}
          </span>
        </div>

        <div
          className={cn(
            "rounded-xl sm:rounded-2xl border bg-white p-3.5 sm:p-5 transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.05)] border-[#eee8de]",
            "group-hover:shadow-md group-hover:-translate-y-0.5 group-hover:border-[#e8dfd3]"
          )}
        >
          {/* Top meta row */}
          {((session.isTentative || isTentativeDay) || session.location) && (
            <div className="flex items-center justify-between gap-1.5 sm:gap-2 mb-2 sm:mb-2.5">
              {(session.isTentative || isTentativeDay) ? (
                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 uppercase tracking-wider">
                  Tentative
                </span>
              ) : (
                <div />
              )}

              {session.location && (
                <div className="flex items-center gap-1 ml-auto text-[10px] sm:text-[11px] text-[#78716c] font-medium">
                  <MapPin className="w-3 h-3 text-[#e87042] shrink-0" />
                  <span className="truncate max-w-[150px] sm:max-w-none">{session.location}</span>
                </div>
              )}
            </div>
          )}

          {/* Title */}
          <h3 className="font-serif font-bold text-sm sm:text-lg text-[#1c1917] leading-snug group-hover:text-[#c25022] transition-colors duration-200 mb-1 sm:mb-1.5">
            {session.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed">
            {session.description}
          </p>

          {/* Sub-event accordion */}
          {session.subEvents && session.subEvents.length > 0 && (
            <CeremonyAccordion subEvents={session.subEvents} />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Pre-Summit parallel grid ──────────────────────────────────────────────────
function ParallelSessionsGrid({
  sessions,
}: {
  sessions: (typeof PROGRAMME_DAYS)[0]["sessions"];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-50 border border-violet-200">
          <Clock className="w-4 h-4 text-violet-600 shrink-0" />
          <span className="font-mono font-bold text-sm text-violet-700">
            1:30 PM – 5:30 PM
          </span>
        </div>
        <span className="text-sm text-[#57534e] font-medium">
          9 parallel sectoral breakouts across campus venues
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sessions.map((session, i) => (
          <div
            key={session.id}
            className={cn(
              "group rounded-xl border bg-white p-4 transition-all duration-200",
              "hover:shadow-md hover:-translate-y-0.5 hover:border-violet-300",
              "shadow-[0_1px_4px_rgba(0,0,0,0.05)] border-[#eee8de]"
            )}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-violet-600 text-white text-[10px] font-bold shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1 text-[10px] text-[#78716c] font-medium">
                <MapPin className="w-2.5 h-2.5 text-[#e87042] shrink-0" />
                <span>{session.location}</span>
              </div>
            </div>
            <h4 className="font-serif font-bold text-sm text-[#1c1917] leading-snug group-hover:text-violet-700 transition-colors">
              {session.title}
            </h4>
            <p className="mt-1.5 text-[11px] text-[#78716c] leading-relaxed line-clamp-2">
              {session.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────
export function ProgrammeClient() {
  const [selectedDayId, setSelectedDayId] = useState(PROGRAMME_DAYS[1].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeDay =
    PROGRAMME_DAYS.find((d) => d.id === selectedDayId) || PROGRAMME_DAYS[1];
  const isPreSummit = activeDay.dayNumber === 0;

  function handleDayChange(id: string) {
    if (id === selectedDayId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedDayId(id);
      setIsTransitioning(false);
    }, 160);
  }

  return (
    <div className="w-full">
      {/* ── Hero Header ──────────────────────────────────────────────────────── */}
      <section className="relative text-[#fcfbf8] py-20 sm:py-28 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/summit-timetable-display.jpg"
            alt="Summit Programme & Timetable Display Screen with Attendees"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-90"
          />
          <div className="absolute inset-0 z-10 bg-black/50" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/40 to-[#0c0d12]/55" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-[#e87042]/12 rounded-full blur-[160px] pointer-events-none z-10" />
        </div>


        <Container size="wide" className="relative z-20 text-center">
          <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            The Journey of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4a87a] via-[#e87042] to-[#d68c45]">
              Innovation
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
            From bold ideas to breakthrough ventures — explore the experiences, people, and opportunities that shape Startup Jathara.
          </p>


        </Container>
      </section>

      {/* ── Main Programme Section ────────────────────────────────────────────── */}
      <section className="section-reveal py-12 sm:py-16 bg-[#fcfbf8]">
        <Container size="default">
          <div className="max-w-5xl mx-auto">

            {/* Section heading */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-[2.5rem] text-[#1c1917] tracking-tight leading-[1.15]">
                Explore the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">
                  Summit Agenda
                </span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#57534e] max-w-2xl mx-auto leading-relaxed">
                Select a day to explore the full schedule — what&apos;s happening, at what time, where, and who is involved.
              </p>
              <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
                <div className="h-px w-10 rounded-full bg-[#e87042]/25" />
                <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
                <div className="h-px w-10 rounded-full bg-[#d68c45]/25" />
              </div>
            </div>

            {/* ── Day Selector Tabs ─────────────────────────────────────────────── */}
            <div
              role="tablist"
              aria-label="Select summit day"
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 p-1.5 rounded-2xl bg-[#f0ece4] border border-[#e6dfd1]"
            >
              {PROGRAMME_DAYS.map((day) => {
                const isSelected = day.id === selectedDayId;
                return (
                  <button
                    key={day.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleDayChange(day.id)}
                    className={cn(
                      "relative px-3 py-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] overflow-hidden",
                      isSelected
                        ? "bg-white shadow-md border border-[#e6dfd1]"
                        : "hover:bg-white/60"
                    )}
                  >
                    {isSelected && (
                      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#e87042] to-[#d68c45] rounded-t-xl" />
                    )}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md",
                          isSelected ? "bg-[#e87042] text-white" : "bg-[#ede7db] text-[#78716c]"
                        )}
                      >
                        {day.dayNumber === 0 ? "Pre" : `D${day.dayNumber}`}
                      </span>
                      {day.status === "Tentative" && !isSelected && (
                        <span className="text-[9px] font-semibold text-amber-600 uppercase tracking-wider">
                          Draft
                        </span>
                      )}
                    </div>
                    <div
                      className={cn(
                        "font-serif font-bold text-sm leading-tight",
                        isSelected ? "text-[#1c1917]" : "text-[#44403c]"
                      )}
                    >
                      {day.dayName}
                    </div>
                    <div
                      className={cn(
                        "text-xs font-semibold mt-0.5",
                        isSelected ? "text-[#e87042]" : "text-[#78716c]"
                      )}
                    >
                      {day.dateFormatted}
                    </div>
                    <p
                      className={cn(
                        "text-[10px] mt-1 leading-snug line-clamp-2",
                        isSelected ? "text-[#57534e]" : "text-[#a8a29e]"
                      )}
                    >
                      {day.theme}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* ── Active Day Content ────────────────────────────────────────────── */}
            <div
              ref={contentRef}
              className={cn(
                "transition-all duration-200",
                isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              )}
            >
              {/* Day header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="font-serif font-black text-xl sm:text-2xl text-[#1c1917]">
                      {activeDay.dayName},{" "}
                      <span className="text-[#e87042]">{activeDay.dateFormatted}</span>
                    </h3>
                    {activeDay.status === "Tentative" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 uppercase tracking-wider">
                        Tentative
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#57534e] font-medium">{activeDay.theme}</p>
                  {activeDay.statusNote && (
                    <p className="mt-1 text-xs text-[#78716c] italic">{activeDay.statusNote}</p>
                  )}
                </div>
              </div>

              {/* Stats bar */}
              <DayStatsBar day={activeDay} />

              {/* Pre-summit: parallel grid; regular: vertical timeline */}
              {isPreSummit ? (
                <ParallelSessionsGrid sessions={activeDay.sessions} />
              ) : (
                <div className="relative">
                  {/* Spine line */}
                  <div className="absolute hidden sm:block left-36 top-6 bottom-6 w-px bg-gradient-to-b from-[#e87042]/60 via-[#dfd6c4] to-[#e87042]/20" />

                  <div className="space-y-0">
                    {activeDay.sessions.map((session) => (
                      <SessionRow
                        key={session.id}
                        session={session}
                        isTentativeDay={activeDay.status === "Tentative"}
                      />
                    ))}
                  </div>

                  {/* End cap */}
                  <div className="flex items-center gap-3 mt-4 pl-8 sm:pl-[10.5rem]">
                    <div className="w-3 h-3 rounded-full border-2 border-[#dfd6c4] bg-[#f7f4ec]" />
                    <span className="text-xs text-[#a8a29e] font-medium italic">
                      End of {activeDay.dateFormatted} schedule
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
