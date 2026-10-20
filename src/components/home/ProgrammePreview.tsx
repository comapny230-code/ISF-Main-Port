"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight,
  Sparkles,
  Compass,
  Award,
  ChevronRight,
  Calendar,
  Clock,
  Compass as TrackIcon
} from "lucide-react";
import { Container } from "../common/Container";

// Minimal, short, punchy horizontal milestones
const HORIZONTAL_DAYS = [
  {
    dayNumber: "01",
    date: "18 Dec 2026",
    dayName: "Friday",
    title: "Inaugural & Junicorn Pitches",
    venue: "Main Auditorium, GIET Campus",
    icon: Sparkles,
    badgeColor: "bg-[#ffedd5] text-[#c25022] border-[#fcd5b5]",
    glowBorder: "group-hover:border-[#e87042]/60",
    tags: [
      "Keynote Inaugural & Awards",
      "Healthcare & Agri Roundtables",
      "Live Junicorn Founder Pitches",
      "Gala Folk Dinner & Networking",
    ],
    link: "/programme#day-1",
  },
  {
    dayNumber: "02",
    date: "19 Dec 2026",
    dayName: "Saturday",
    title: "Dandakaranya Eco-Trek",
    venue: "Dandakaranya Forest Trails",
    icon: Compass,
    badgeColor: "bg-[#fef3c7] text-[#92400e] border-[#fde68a]",
    glowBorder: "group-hover:border-[#d68c45]/60",
    tags: [
      "Guided Forest Expedition",
      "Indigenous Biodiversity Trail",
      "Tribal Campsite Lunch",
      "Fireside Founder-Mentor Circles",
    ],
    link: "/programme#day-2",
  },
  {
    dayNumber: "03",
    date: "20 Dec 2026",
    dayName: "Sunday",
    title: "Policy & Seed Grants",
    venue: "Main Auditorium & Convention Hall",
    icon: Award,
    badgeColor: "bg-[#ffedd5] text-[#c25022] border-[#fcd5b5]",
    glowBorder: "group-hover:border-[#e87042]/60",
    tags: [
      "Rural & Tribal Policy Synthesis",
      "Innovation Seed Grants",
      "Valedictory Ceremony",
      "Scheduled Transit Departures",
    ],
    link: "/programme#day-3",
  },
];

export function ProgrammePreview() {
  return (
    <section className="py-16 sm:py-22 bg-[#faf7f2] border-b border-[#e8dfd3] relative overflow-hidden">
      <Container size="wide">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1c1917] tracking-tight leading-[1.12]">
            Three Days of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Immersive Engagement</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#57534e] max-w-2xl mx-auto leading-relaxed">
            A 72-hour journey across venture dealmaking, tribal eco-immersion, and grassroots policy scale.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 rounded-full bg-[#e87042]/25" />
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#e87042] to-[#d68c45]" />
            <div className="h-0.5 w-8 rounded-full bg-[#d68c45]/25" />
          </div>
        </div>

        {/* Horizontal Timeline Track */}
        <div className="relative">
          
          {/* Horizontal Connecting Guide Line (Desktop Only) */}
          <div 
            className="hidden md:block absolute top-7 left-[15%] right-[15%] h-1 bg-gradient-to-r from-[#e87042] via-[#d68c45] to-[#c25022] rounded-full z-0 opacity-70"
            aria-hidden="true" 
          />

          {/* 3 Horizontal Day Stations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 relative z-10 items-stretch">
            {HORIZONTAL_DAYS.map((day) => {
              const IconComp = day.icon;

              return (
                <div
                  key={day.dayNumber}
                  className={`relative rounded-3xl bg-white border border-[#e8dfd3] ${day.glowBorder} p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
                >
                  {/* Top Day Connector Pin Node */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Glowing Day Node */}
                    <div className="w-12 h-12 rounded-2xl bg-[#faf7f2] border-2 border-[#e87042] flex items-center justify-center shadow-sm group-hover:bg-[#e87042] group-hover:text-white transition-all duration-300">
                      <span className="font-serif font-black text-base text-[#c25022] group-hover:text-white transition-colors">
                        {day.dayNumber}
                      </span>
                    </div>

                    {/* Date Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#e8dfd3] text-xs font-semibold text-[#1c1917]">
                      <Calendar className="w-3.5 h-3.5 text-[#e87042]" />
                      <span>{day.dayName}, {day.date}</span>
                    </div>
                  </div>

                  {/* Day Content */}
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1c1917] group-hover:text-[#c25022] transition-colors leading-snug">
                      {day.title}
                    </h3>
                    
                    <p className="text-xs text-[#78716c] mt-1 line-clamp-1">
                      {day.venue}
                    </p>

                    {/* Short Checkpoint Tags */}
                    <div className="mt-5 pt-4 border-t border-[#f2ebe0] space-y-2">
                      {day.tags.map((tag, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e87042] shrink-0" />
                          <span className="text-xs font-medium text-[#44403c] leading-tight">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* See Day Details Link */}
                  <div className="mt-6 pt-4 border-t border-[#f2ebe0]">
                    <Link
                      href={day.link}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-[#c25022] group-hover:text-[#e87042] transition-colors"
                    >
                      <span>See Day {parseInt(day.dayNumber)} Highlights</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Interactive "See More" Bar */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-7 rounded-3xl bg-gradient-to-r from-[#1c1917] via-[#24211d] to-[#1c1917] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#f7c89f]" />
            </div>
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#e87042] uppercase block">
                Official Summit Itinerary
              </span>
              <h4 className="font-serif font-bold text-base sm:text-xl text-white mt-0.5 leading-snug">
                Explore All 24+ Keynotes, Pitch Stages &amp; Sector Masterclasses
              </h4>
            </div>
          </div>

          <Link
            href="/programme"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#e87042] to-[#d95d2c] hover:from-[#d95d2c] hover:to-[#c25022] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-95 shrink-0 w-full sm:w-auto"
          >
            <span>Explore Full Schedule</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </Container>
    </section>
  );
}
