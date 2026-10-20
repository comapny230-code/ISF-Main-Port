"use client";

import React, { useState, useMemo } from "react";
import {
  ArrowRight,
  Bus,
  Check,
  CheckCircle2,
  Compass,
  Info,
  MapPin,
  Navigation,
} from "lucide-react";
import {
  BUS_JOURNEY_PLANS,
  POPULAR_CITIES,
  CityBusPlan,
  JourneyRouteOption,
} from "@/data/busRoutePlannerData";

export function SmartBusJourneyPlanner() {
  const [selectedCityId, setSelectedCityId] = useState<string>("chennai");
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const plan: CityBusPlan = BUS_JOURNEY_PLANS[selectedCityId] ?? BUS_JOURNEY_PLANS["chennai"];
  const route: JourneyRouteOption = plan.routes[activeRouteIndex] ?? plan.routes[0];

  // Handle city change and reset route tab
  const handleSelectCity = (id: string) => {
    setSelectedCityId(id);
    setActiveRouteIndex(0);
    setSearchQuery("");
  };

  // Filtered popular cities
  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) return POPULAR_CITIES;
    const q = searchQuery.toLowerCase();
    return POPULAR_CITIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Google maps directions url
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    plan.cityName
  )}&destination=${encodeURIComponent(
    "GIET University, Gobriguda, Po-Kharling, Gunupur, Odisha 765022"
  )}`;

  // Open both legs on redbus for multi-segment booking
  const handleOpenBothLegs = () => {
    if (route.segments.length >= 2) {
      window.open(route.segments[0].bookingUrl, "_blank", "noopener,noreferrer");
      setTimeout(() => {
        window.open(route.segments[1].bookingUrl, "_blank", "noopener,noreferrer");
      }, 400);
    } else if (route.segments.length === 1) {
      window.open(route.segments[0].bookingUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-full">
      {/* ── Journey Planner Card Container ── */}
      <div className="overflow-hidden rounded-2xl border border-[#ded5c7] bg-[#fdfbf7] shadow-[0_16px_45px_rgba(40,35,27,0.06)]">
        
        {/* ── Top Bar: City Chips ── */}
        <div className="border-b border-[#e5ded4] bg-white p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#a74e2d]">
                Destination: Gunupur, Odisha
              </p>
              <h3 className="mt-1 font-serif text-lg sm:text-2xl font-black text-[#1c1917] tracking-tight">
                Plan Your Bus Journey to Gunupur
              </h3>
            </div>
          </div>

          {/* City Selector: Responsive Grid on Mobile & Desktop - No Cutoffs */}
          <div className="mt-4 pt-3.5 border-t border-[#f0eae1]">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#78716c]">
                Select Starting City:
              </p>
              <span className="text-[10px] text-[#8a8377]">
                Tap to plan route
              </span>
            </div>

            {/* 2 columns on mobile, 4 on tablet, 7 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {POPULAR_CITIES.map((city) => {
                const isSelected = city.id === selectedCityId;
                const isDirect = city.tag.toLowerCase().includes("direct");
                return (
                  <button
                    key={city.id}
                    type="button"
                    onClick={() => handleSelectCity(city.id)}
                    className={`flex flex-col items-start justify-center p-2.5 rounded-xl border text-left transition active:scale-[0.97] min-h-[58px] ${
                      isSelected
                        ? "border-[#a74e2d] bg-[#fff8f2] ring-2 ring-[#a74e2d]/25 shadow-xs"
                        : "border-[#e0d7cb] bg-[#fbf9f5] hover:border-[#a74e2d]/50 hover:bg-white"
                    }`}
                  >
                    <span className={`text-xs sm:text-sm font-bold truncate w-full ${isSelected ? "text-[#a74e2d]" : "text-[#1c1917]"}`}>
                      {city.name}
                    </span>
                    <span className={`text-[10px] mt-0.5 font-medium px-1.5 py-0.5 rounded ${
                      isSelected ? "bg-[#a74e2d]/10 text-[#8d3e20]" : "bg-[#ece5d8] text-[#6b6255]"
                    }`}>
                      {isDirect ? "Direct Bus" : "1 Transfer"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Direct vs. Connecting Explanation Banner ── */}
        <div className="px-4 py-3.5 sm:px-6 sm:py-4 bg-[#f7f2ea] border-b border-[#e5ded4]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 sm:gap-4">
            <div className="flex items-start gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white ${
                  plan.directBusAvailable ? "bg-[#1b6952]" : "bg-[#c25022]"
                }`}
              >
                {plan.directBusAvailable ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <Compass className="h-4 w-4" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#1c1917]">
                    Route from {plan.cityName} to Gunupur
                  </h4>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                      plan.directBusAvailable
                        ? "bg-[#e8f4ef] text-[#1b6952] border border-[#c6dfd4]"
                        : "bg-[#faebe4] text-[#b05331] border border-[#f5cfbf]"
                    }`}
                  >
                    {plan.directBusAvailable
                      ? "Direct Bus Available (0 Transfers)"
                      : "Connecting Journey (1 Transfer)"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#57534e] leading-relaxed">
                  {plan.overviewSummary}
                </p>
              </div>
            </div>

            {/* Quick Route Status Bar - No pricing or total time */}
            <div className="grid grid-cols-2 divide-x divide-[#ded5c7] bg-white border border-[#e0d8cb] rounded-xl p-2.5 sm:p-3 shadow-2xs text-center shrink-0 w-full sm:w-auto">
              <div className="px-3 sm:px-4">
                <span className="block text-[9px] font-black uppercase tracking-wider text-[#78716c] truncate">
                  Buses Required
                </span>
                <span className="font-serif font-black text-xs sm:text-sm text-[#173d31] block mt-0.5">
                  {route.segments.length} {route.segments.length === 1 ? "Direct Bus" : "Buses"}
                </span>
              </div>
              <div className="px-3 sm:px-4">
                <span className="block text-[9px] font-black uppercase tracking-wider text-[#78716c] truncate">
                  Transit Gateway
                </span>
                <span className="font-serif font-black text-xs sm:text-sm text-[#a74e2d] block mt-0.5 truncate">
                  {route.transferCity ? `Via ${route.transferCity}` : "Direct Route"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Route Options Segmented Cards - 100% visible on mobile ── */}
        {plan.routes.length > 1 && (
          <div className="px-4 py-3 sm:px-6 bg-white border-b border-[#e5ded4]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#78716c] mb-2">
              Select Route Option:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {plan.routes.map((r, idx) => {
                const isActive = activeRouteIndex === idx;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActiveRouteIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition active:scale-[0.98] ${
                      isActive
                        ? "border-[#173d31] bg-[#e7efe9] ring-2 ring-[#173d31]/20 shadow-xs"
                        : "border-[#e0d7cb] bg-[#fbf9f5] hover:border-[#173d31]/40 hover:bg-white"
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <span className={`block text-xs sm:text-sm font-bold ${isActive ? "text-[#173d31]" : "text-[#1c1917]"}`}>
                        {r.title}
                      </span>
                      <span className="block text-[10px] text-[#6b625b] mt-0.5">
                        {r.badge}
                      </span>
                    </div>
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        isActive
                          ? "border-[#173d31] bg-[#173d31] text-white"
                          : "border-[#cfc4b6] text-transparent"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {/* ── Main Step-by-Step Vertical Journey Timeline ── */}
        <div className="p-4 sm:p-6 md:p-7">
          <div className="space-y-4 sm:space-y-6">
            {route.segments.map((segment, sIdx) => {
              return (
                <div key={segment.segmentIndex} className="relative">
                  {/* Segment Card */}
                  <div className="relative rounded-2xl border border-[#ded5c7] bg-white p-4 sm:p-6 shadow-[0_4px_18px_rgba(40,35,27,0.03)] transition hover:border-[#b45532]/50 hover:shadow-md">
                    {/* Top Segment Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3.5 border-b border-[#f0eae1]">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#faebe4] text-[#b45532] text-xs font-black">
                          0{segment.segmentIndex}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#b45532]">
                              {route.segments.length > 1
                                ? `Bus Leg 0${segment.segmentIndex} of 0${route.segments.length}`
                                : "Direct Bus Service"}
                            </span>
                            <span className="text-[10px] text-[#8a8377]">· {segment.distance}</span>
                          </div>
                          <h5 className="font-serif text-base sm:text-lg font-bold text-[#1c1917] leading-snug">
                            {segment.fromCity} ➔ {segment.toCity}
                          </h5>
                        </div>
                      </div>

                      {/* RedBus Booking Button for this Segment */}
                      <a
                        href={segment.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex min-h-[40px] items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#d8232a] text-white text-xs font-bold shadow-xs hover:bg-[#b51920] transition active:scale-[0.98] shrink-0"
                      >
                        <Bus className="h-3.5 w-3.5" />
                        <span>Book Leg {segment.segmentIndex} on redBus</span>
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>

                    {/* Segment Schedule Grid - 2 cols on mobile (Departure & Arrival), 3 cols on desktop */}
                    <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 text-xs">
                      {/* Departure Timing */}
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#fcfaf6] border border-[#f0eae1]">
                        <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#7a7266]">
                          Departure Timing
                        </span>
                        <p className="mt-1 font-serif text-sm sm:text-base font-bold text-[#1c1917] leading-tight">
                          {segment.departureTime}
                        </p>
                        <p className="mt-1 text-[10px] sm:text-[11px] text-[#5c564d] line-clamp-2">
                          <strong>Boarding:</strong> {segment.boardingPoints.join(", ")}
                        </p>
                      </div>

                      {/* Arrival Timing */}
                      <div className="p-2.5 sm:p-3 rounded-xl bg-[#fcfaf6] border border-[#f0eae1]">
                        <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#7a7266]">
                          Arrival Timing
                        </span>
                        <p className="mt-1 font-serif text-sm sm:text-base font-bold text-[#1c1917] leading-tight">
                          {segment.arrivalTime}
                        </p>
                        <p className="mt-1 text-[10px] sm:text-[11px] text-[#5c564d] line-clamp-2">
                          <strong>Dropping:</strong> {segment.droppingPoints.join(", ")}
                        </p>
                      </div>

                      {/* Operators & Bus Type - Hidden on mobile view */}
                      <div className="hidden sm:block p-3 rounded-xl bg-[#fcfaf6] border border-[#f0eae1]">
                        <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#7a7266]">
                          Bus Operators &amp; Class
                        </span>
                        <p className="mt-1 font-bold text-[#1c1917] text-xs sm:text-sm truncate">
                          {segment.operators.slice(0, 3).join(", ")}
                        </p>
                        <p className="mt-1 text-[10px] sm:text-[11px] font-medium text-[#7a7266] truncate">
                          {segment.busType}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ── Final Leg: Gunupur Stand to GIET Campus ── */}
            <div className="rounded-2xl border border-[#ded5c7] bg-[#fdfbf7] p-4 sm:p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-[#ece5da]">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#a74e2d]">
                    Campus Transfer
                  </span>
                  <h5 className="font-serif text-sm sm:text-base font-bold text-[#1c1917] leading-tight">
                    Gunupur Bus Stand ➔ GIET Campus
                  </h5>
                </div>
                <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-[#f4ece1] px-3 py-1 text-xs font-bold text-[#8c671b] border border-[#e2d5c3]">
                  <MapPin className="h-3.5 w-3.5 text-[#a74e2d] shrink-0" />
                  <span>3.8 km · ~10 mins</span>
                </div>
              </div>

              {/* 3 Clear, Punchy Options */}
              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
                {/* 1. Shared Auto */}
                <div className="rounded-xl border border-[#e8e2d8] bg-white p-3.5 transition hover:border-[#a74e2d]/40">
                  <strong className="block text-xs font-bold text-[#1c1917] mb-1">Shared Auto</strong>
                  <p className="text-[11px] text-[#6e685f] leading-normal">
                    Plys continuously from stand gate directly to GIET Main Entrance.
                  </p>
                </div>

                {/* 2. Private Auto */}
                <div className="rounded-xl border border-[#e8e2d8] bg-white p-3.5 transition hover:border-[#a74e2d]/40">
                  <strong className="block text-xs font-bold text-[#1c1917] mb-1">Private Auto</strong>
                  <p className="text-[11px] text-[#6e685f] leading-normal">
                    Direct hire outside exit gate. Best if carrying event luggage.
                  </p>
                </div>

                {/* 3. College Bus */}
                <div className="rounded-xl border border-[#e8e2d8] bg-white p-3.5 transition hover:border-[#a74e2d]/40">
                  <strong className="block text-xs font-bold text-[#1c1917] mb-1">College Bus</strong>
                  <p className="text-[11px] text-[#6e685f] leading-normal">
                    Available at the bus stand, provided by the college to campus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Action & Backup Advice Bar ── */}
          <div className="mt-5 pt-4 border-t border-[#e5ded4] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3.5">
            {/* Missed Connection Backup Advice */}
            <div className="flex items-start gap-2 text-xs text-[#6e685f] max-w-2xl">
              <Info className="h-4 w-4 text-[#a74e2d] shrink-0 mt-0.5" />
              <p className="text-[11px] sm:text-xs leading-relaxed">
                <strong>Connection Backup:</strong> {route.missedConnectionBackup}
              </p>
            </div>

            {/* Combined Action Buttons - Full-width stacked on mobile */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-2.5 shrink-0">
              {route.segments.length > 1 && (
                <button
                  type="button"
                  onClick={handleOpenBothLegs}
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[#d8232a] px-4 text-xs font-bold text-white shadow-sm transition hover:bg-[#b51920] active:scale-[0.98]"
                >
                  <Bus className="h-4 w-4" />
                  <span>Open Both redBus Segments</span>
                </button>
              )}

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[#a74e2d] px-4 text-xs font-bold text-white shadow-sm transition hover:bg-[#8f4025] active:scale-[0.98]"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Full Road Map Route</span>
              </a>

              <a
                href="https://www.redbus.in/bus-tickets/gunupur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl bg-white border border-[#ded5c7] text-[#1c1917] px-4 text-xs font-bold shadow-2xs hover:bg-[#f7f2ea] transition active:scale-[0.98]"
              >
                <span>Search Any City on redBus ↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
