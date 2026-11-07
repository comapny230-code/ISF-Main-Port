"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Train,
  Bus,
  Car,
  Check,
  ExternalLink,
  MapPin,
} from "lucide-react";
import {
  RAILWAY_STATION_PLANS,
  RAILWAY_STATION_OPTIONS,
  RailwayStationPlan,
  TrainRouteOption,
} from "@/data/trainRoutePlannerData";

interface SmartTrainJourneyPlannerProps {
  className?: string;
  initialStationId?: string;
}

export function SmartTrainJourneyPlanner({
  className = "",
  initialStationId = "rail-bbs",
}: SmartTrainJourneyPlannerProps) {
  const [selectedStationId, setSelectedStationId] = useState<string>(initialStationId);
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);

  const plan: RailwayStationPlan =
    RAILWAY_STATION_PLANS[selectedStationId] ?? RAILWAY_STATION_PLANS["rail-bbs"];
  const route: TrainRouteOption =
    plan.routes[activeRouteIndex] ?? plan.routes[0];

  const handleSelectStation = (id: string) => {
    setSelectedStationId(id);
    setActiveRouteIndex(0);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* ── Outer Planner Card Container ── */}
      <div className="overflow-hidden rounded-2xl border border-[#ded5c7] bg-white shadow-[0_18px_50px_rgba(40,35,27,0.06)]">
        
        {/* ── Top Bar: Station Selector ── */}
        <div className="border-b border-[#e5ded4] bg-gradient-to-b from-[#fdfcf9] to-white p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-black text-[#1c1917] tracking-tight">
                Plan Your Train Journey to Gunupur
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#57534e] max-w-2xl leading-relaxed">
                Select your nearby transit station to see direct trains, bus links, and route directions to reach Gunupur.
              </p>
            </div>

            <a
              href="https://www.irctc.co.in/nget/train-search"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#0f4674] hover:bg-[#0a3356] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(15,70,116,0.22)] hover:shadow-[0_6px_20px_rgba(15,70,116,0.32)] ring-1 ring-[#0f4674]/20 transition-all active:scale-95 shrink-0 self-start sm:self-center"
              title="Open official IRCTC portal to check seat availability and book tickets"
            >
              <Train className="h-4 w-4" />
              <span>Book on IRCTC</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>

          {/* Station Radio Grid - From Stations to Gunupur */}
          <div className="mt-5 pt-4 border-t border-[#f0eae1]">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#8a3314]">
                Select Station (Way to Gunupur):
              </p>
              <span className="text-[11px] font-medium text-[#78716c]">
                Tap station to view routes to Gunupur
              </span>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              role="radiogroup"
              aria-label="Select nearby railway station to Gunupur"
            >
              {RAILWAY_STATION_OPTIONS.map((station) => {
                const isSelected = station.id === selectedStationId;
                return (
                  <button
                    key={station.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectStation(station.id)}
                    className={`h-full flex items-start justify-between p-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] min-h-[74px] ${
                      isSelected
                        ? "border-2 border-[#a74e2d] bg-[#fffaf6] shadow-2xs"
                        : "border border-[#ded7cc] bg-white hover:border-[#a74e2d]/60 hover:bg-[#fffdfb]"
                    }`}
                  >
                    <div className="min-w-0 flex-1 pr-2">
                      <span
                        className={`block text-xs sm:text-[13px] font-bold leading-snug line-clamp-2 ${
                          isSelected ? "text-[#8a3314]" : "text-[#1c1917]"
                        }`}
                      >
                        {station.name}
                      </span>
                      <span
                        className={`block text-[11px] mt-1 font-semibold ${
                          isSelected ? "text-[#a74e2d]" : "text-[#78716c]"
                        }`}
                      >
                        {station.code} · {station.distance}
                      </span>
                    </div>
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border mt-0.5 transition-all ${
                        isSelected
                          ? "border-[#a74e2d] bg-[#a74e2d] text-white shadow-xs"
                          : "border-[#cfc4b6] text-transparent"
                      }`}
                    >
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Route Options Switcher ── */}
        {plan.routes.length > 1 && (
          <div className="px-5 py-4 sm:px-7 bg-[#f6f2ea] border-b border-[#e5dcce]">
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#173d31] mb-2.5">
              Select Journey Route Option:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {plan.routes.map((r, idx) => {
                const isActive = activeRouteIndex === idx;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setActiveRouteIndex(idx)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] ${
                      isActive
                        ? "border-2 border-[#173d31] bg-white shadow-2xs"
                        : "border border-[#ded5c7] bg-white hover:border-[#173d31]/50"
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <span
                        className={`block text-xs sm:text-sm font-bold leading-snug ${
                          isActive ? "text-[#173d31]" : "text-[#292524]"
                        }`}
                      >
                        {r.title}
                      </span>
                    </div>

                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? "border-[#173d31] bg-[#173d31] text-white shadow-xs"
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
        <div className="bg-[#faf7f2] p-4 sm:p-6 md:p-7 space-y-5 sm:space-y-6">
          {/* ── STEP 1: Train Journey Leg ── */}
          {route.trainSegment && (
            <div className="rounded-2xl border border-[#ded5c7] bg-white p-5 sm:p-6 shadow-[0_4px_18px_rgba(40,35,27,0.04)] hover:border-[#173d31]/50 transition-all duration-200">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#f0eae1]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#173d31] text-white text-xs font-black shadow-xs">
                    01
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10.5px] font-black uppercase tracking-wider text-[#173d31]">
                        Railway Leg
                      </span>
                      <span className="text-[11px] font-semibold text-[#6b625b]">
                        · {route.trainSegment.trainNumber} {route.trainSegment.trainName}
                      </span>
                    </div>
                    <h5 className="font-serif text-base sm:text-lg font-bold text-[#1c1917] mt-0.5">
                      {route.trainSegment.fromStation} ➔ {route.trainSegment.toStation}
                    </h5>
                  </div>
                </div>

                {/* View Full Route & Stops Link */}
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    `${route.trainSegment.trainNumber} ${route.trainSegment.trainName} train route all stops schedule`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex min-h-[38px] items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#f6f2ea] hover:bg-[#ece5d8] border border-[#d6cbba] hover:border-[#0f4674] text-[#1c1917] hover:text-[#0f4674] text-xs font-bold shadow-2xs transition active:scale-95 shrink-0"
                  title={`View complete route and all stopping stations for train #${route.trainSegment.trainNumber}`}
                >
                  <MapPin className="h-3.5 w-3.5 text-[#0f4674]" />
                  <span>View Route &amp; All Stops</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </div>

              {/* Timing Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:border-[#173d31]/40 hover:bg-white hover:shadow-xs transition-all">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#786c5e]">
                    Departure
                  </span>
                  <p className="mt-1 font-mono text-base sm:text-lg font-extrabold text-[#1c1917]">
                    {route.trainSegment.departureTime}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#57534e] truncate">
                    {route.trainSegment.fromStation}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:border-[#173d31]/40 hover:bg-white hover:shadow-xs transition-all">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#173d31]">
                    Arrival
                  </span>
                  <p className="mt-1 font-mono text-base sm:text-lg font-black text-[#173d31]">
                    {route.trainSegment.arrivalTime}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#57534e] truncate">
                    {route.trainSegment.toStation}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:border-[#173d31]/40 hover:bg-white hover:shadow-xs transition-all">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#786c5e]">
                    Schedule &amp; Days
                  </span>
                  <p className="mt-1 font-bold text-[#1c1917] text-xs sm:text-sm">
                    {route.trainSegment.runsOn}
                  </p>
                  <p className="mt-0.5 text-xs text-[#7a7266]">
                    Classes: {route.trainSegment.classes.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ── POPULAR INCOMING TRAINS (for Junctions like Rayagada / Palasa) ── */}
          {route.popularIncomingTrains && route.popularIncomingTrains.length > 0 && (
            <div className="rounded-2xl border border-[#ded5c7] bg-white p-5 sm:p-6 shadow-[0_4px_18px_rgba(40,35,27,0.04)]">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#f0eae1]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eef5f1] text-[#173d31] border border-[#cde2d6]">
                    <Train className="h-4 w-4" />
                  </span>
                  <div>
                    <h5 className="font-serif text-sm sm:text-base font-bold text-[#1c1917]">
                      Popular Incoming Express Trains to {plan.stationName}
                    </h5>
                    <p className="text-[11px] text-[#6e6659] hidden sm:block">
                      Daily superfast connections arriving at junction
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {route.popularIncomingTrains.map((tr) => (
                  <div
                    key={tr.trainNumber}
                    className="p-3.5 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:border-[#173d31] hover:bg-white hover:shadow-sm transition-all duration-150 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-mono text-[11px] font-bold text-[#0f4674] bg-[#edf4f9] px-2 py-0.5 rounded border border-[#cde0ee]">
                          #{tr.trainNumber}
                        </span>
                        <span className="text-[9.5px] font-semibold text-[#786c5e] px-2 py-0.5 rounded bg-[#f2ede4] border border-[#e5dcce]">
                          {tr.runsOn}
                        </span>
                      </div>
                      <p className="mt-2 font-bold text-xs sm:text-[13px] text-[#1c1917] group-hover:text-[#173d31] transition-colors line-clamp-1">
                        {tr.trainName}
                      </p>
                      <p className="text-[11px] text-[#57534e] mt-0.5 truncate">
                        From: {tr.origin}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-[#ebdcca] flex items-center justify-between text-xs">
                      <span className="text-[#78716c] font-medium">Junction Arrival:</span>
                      <strong className="text-[#173d31] font-extrabold bg-[#eef5f1] border border-[#cde2d6] px-2 py-0.5 rounded font-mono text-[11px]">
                        {tr.arrivalTime}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 2: Onward Road Transfer Leg (for Junctions) ── */}
          {route.onwardRoadSegment && (
            <div className="rounded-2xl border border-[#ded5c7] bg-white p-5 sm:p-6 shadow-[0_4px_18px_rgba(40,35,27,0.04)] hover:border-[#a74e2d]/50 transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#f0eae1]">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a74e2d] text-white text-xs font-black shadow-xs">
                    02
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10.5px] font-black uppercase tracking-wider text-[#a74e2d]">
                        {route.routeType === "station-cab" ? "Direct Road Cab Transfer" : "Onward Highway Bus Leg"}
                      </span>
                      <span className="text-[11px] font-semibold text-[#6b625b]">
                        · {route.onwardRoadSegment.distance}
                      </span>
                    </div>
                    <h5 className="font-serif text-base sm:text-lg font-bold text-[#1c1917] mt-0.5">
                      {route.onwardRoadSegment.fromLocation} ➔ {route.onwardRoadSegment.toLocation}
                    </h5>
                  </div>
                </div>

                {/* Booking / Action Button */}
                {route.onwardRoadSegment.bookingUrl ? (
                  <a
                    href={route.onwardRoadSegment.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex min-h-[40px] items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#d84e55] hover:bg-[#c23f46] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-95 shrink-0"
                  >
                    <Bus className="h-3.5 w-3.5" />
                    <span>Check Buses on redBus</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#fff6f0] border border-[#f3d3c4] text-xs font-bold text-[#a74e2d] shadow-2xs">
                    <Car className="h-3.5 w-3.5 text-[#a74e2d]" />
                    <span>Available 24/7 at Station Exit</span>
                  </div>
                )}
              </div>

              {/* Specs Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:border-[#a74e2d]/40 hover:bg-white hover:shadow-xs transition-all">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#786c5e]">
                    Frequency
                  </span>
                  <p className="mt-1 font-bold text-[#1c1917] text-xs sm:text-sm">
                    {route.onwardRoadSegment.frequency}
                  </p>
                  <p className="mt-0.5 text-xs text-[#6b625b]">
                    {route.onwardRoadSegment.vehicleType}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:border-[#a74e2d]/40 hover:bg-white hover:shadow-xs transition-all">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#786c5e]">
                    Boarding Point
                  </span>
                  <p className="mt-1 font-bold text-[#1c1917] text-xs sm:text-sm">
                    {route.onwardRoadSegment.pickupPoint}
                  </p>
                  <p className="mt-0.5 text-xs text-[#6b625b]">
                    Station / Terminal Exit
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:border-[#173d31]/40 hover:bg-white hover:shadow-xs transition-all">
                  <span className="block text-[10px] font-black uppercase tracking-wider text-[#173d31]">
                    Destination Drop
                  </span>
                  <p className="mt-1 font-extrabold text-[#173d31] text-xs sm:text-sm">
                    {route.onwardRoadSegment.dropPoint}
                  </p>
                  <p className="mt-0.5 text-xs text-[#6b625b]">
                    GIET University Campus
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
