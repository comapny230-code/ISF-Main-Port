"use client";

import React, { useState } from "react";
import {
  Plane,
  Train,
  Bus,
  Car,
  Check,
  ExternalLink,
  MapPin,
  ArrowRight,
  Navigation,
} from "lucide-react";
import {
  AIRPORT_PLANS,
  AIRPORT_OPTIONS,
  AirportPlan,
  AirRouteOption,
} from "@/data/airRoutePlannerData";

interface SmartAirJourneyPlannerProps {
  className?: string;
  initialAirportId?: string;
}

export function SmartAirJourneyPlanner({
  className = "",
  initialAirportId = "air-vtz",
}: SmartAirJourneyPlannerProps) {
  const [selectedAirportId, setSelectedAirportId] = useState<string>(initialAirportId);
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);

  const plan: AirportPlan =
    AIRPORT_PLANS[selectedAirportId] ?? AIRPORT_PLANS["air-vtz"];
  const route: AirRouteOption =
    plan.routes[activeRouteIndex] ?? plan.routes[0];

  const handleSelectAirport = (id: string) => {
    setSelectedAirportId(id);
    setActiveRouteIndex(0);
  };

  const getModeIcon = (mode: "train" | "bus" | "cab") => {
    if (mode === "train") return <Train className="h-4 w-4" />;
    if (mode === "bus") return <Bus className="h-4 w-4" />;
    return <Car className="h-4 w-4" />;
  };

  return (
    <div className={`w-full ${className}`}>
      {/* ── Outer Planner Card Container ── */}
      <div className="overflow-hidden rounded-2xl border border-[#ded5c7] bg-white shadow-[0_18px_50px_rgba(40,35,27,0.06)]">
        
        {/* ── Top Bar: Airport Gateway Selector ── */}
        <div className="border-b border-[#e5ded4] bg-gradient-to-b from-[#fdfcf9] to-white p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-black text-[#1c1917] tracking-tight">
                Plan Your Flight &amp; Onward Journey to Gunupur
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#57534e] max-w-2xl leading-relaxed">
                Choose your arrival airport to view direct onward connectivity by train, express bus, and highway cab to GIET University campus.
              </p>
            </div>

            <a
              href={plan.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#a74e2d] hover:bg-[#8d3e20] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-95 shrink-0 self-start sm:self-center"
              title={`Open Google Maps directions from ${plan.airportName} to GIET University`}
            >
              <Navigation className="h-4 w-4" />
              <span>Directions on Map</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>

          {/* Airport Selector Grid */}
          <div className="mt-4 pt-3.5 sm:mt-5 sm:pt-4 border-t border-[#f0eae1]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2.5 sm:mb-3">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#8a3314]">
                Select Arrival Airport Gateway:
              </p>
              <span className="text-[10.5px] font-medium text-[#78716c]">
                Tap airport to view train &amp; bus options
              </span>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3"
              role="radiogroup"
              aria-label="Select arrival airport to Gunupur"
            >
              {AIRPORT_OPTIONS.map((airport) => {
                const isSelected = airport.id === selectedAirportId;
                const isVTZ = airport.code === "VTZ";
                const isBBI = airport.code === "BBI";

                const displayName = isVTZ
                  ? "Visakhapatnam Airport"
                  : isBBI
                  ? "Bhubaneswar Airport"
                  : "Jeypore Airport";

                const distanceBadge = isVTZ
                  ? "210 km · Closest Major Hub"
                  : isBBI
                  ? "340 km · State Capital"
                  : "195 km · Regional Feeder";

                return (
                  <button
                    key={airport.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectAirport(airport.id)}
                    className={`flex items-center justify-between p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] ${
                      isSelected
                        ? "border-2 border-[#a74e2d] bg-[#fffaf6] shadow-xs"
                        : "border border-[#ded7cc] bg-white hover:border-[#a74e2d]/60 hover:bg-[#fffdfb]"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                      {/* IATA Code Terminal Badge */}
                      <div
                        className={`flex flex-col items-center justify-center shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl border font-mono font-black transition-all ${
                          isSelected
                            ? "bg-[#a74e2d] text-white border-[#a74e2d] shadow-2xs"
                            : "bg-[#f5efe6] text-[#8a3314] border-[#e4d7c7]"
                        }`}
                      >
                        <Plane className="h-3.5 w-3.5 mb-0.5" />
                        <span className="text-[11px] sm:text-xs leading-none tracking-tight font-extrabold">
                          {airport.code}
                        </span>
                      </div>

                      {/* Airport Details */}
                      <div className="min-w-0 flex-1">
                        <span
                          className={`block font-serif text-xs sm:text-[13.5px] font-bold leading-snug ${
                            isSelected ? "text-[#8a3314]" : "text-[#1c1917]"
                          }`}
                        >
                          {displayName}
                        </span>
                        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                          <span
                            className={`inline-flex items-center text-[10px] sm:text-[10.5px] font-bold px-1.5 py-0.5 rounded ${
                              isSelected
                                ? "bg-[#a74e2d]/10 text-[#8a3314]"
                                : "bg-[#f0e8dc] text-[#6b625b]"
                            }`}
                          >
                            {distanceBadge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Checkmark Indicator */}
                    <span
                      className={`flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isSelected
                          ? "border-[#a74e2d] bg-[#a74e2d] text-white shadow-xs"
                          : "border-[#cfc4b6] text-transparent"
                      }`}
                    >
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Route Options Switcher ── */}
        <div className="px-4 py-3.5 sm:px-7 sm:py-4 bg-[#f6f2ea] border-b border-[#e5dcce]">
          <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#173d31] mb-2.5">
            Select Onward Connection from {plan.iataCode}:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
            {plan.routes.map((r, idx) => {
              const isActive = activeRouteIndex === idx;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveRouteIndex(idx)}
                  className={`flex items-center justify-between p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.98] ${
                    isActive
                      ? "border-2 border-[#173d31] bg-white text-[#173d31] shadow-2xs font-bold"
                      : "border border-[#ded5c7] bg-white/70 text-[#44403c] hover:bg-white hover:border-[#173d31]/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-2">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        isActive
                          ? "bg-[#173d31] text-white"
                          : "bg-[#ece5d8] text-[#57534e]"
                      }`}
                    >
                      {getModeIcon(r.routeType)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-[13px] font-bold leading-snug">
                        {r.title}
                      </p>
                      <p className="text-[10.5px] mt-0.5 text-[#78716c]">
                        {r.totalDuration} · {r.badge}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                      isActive
                        ? "border-[#173d31] bg-[#173d31] text-white"
                        : "border-[#d6cbbe] text-transparent"
                    }`}
                  >
                    <Check className="h-2.5 w-2.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active Route Details Showcase ── */}
        <div className="p-5 sm:p-7 space-y-4 bg-[#faf8f5]">
          {/* Sequential Step Cards */}
          <div className="space-y-4">
            {route.segments.map((segment) => {
              const isTrain = segment.mode === "train";
              const isBus = segment.mode === "bus";
              const isCab = segment.mode === "cab";

              return (
                <div
                  key={segment.segmentIndex + segment.fromLocation}
                  className="rounded-2xl border border-[#ded5c7] bg-white p-5 sm:p-6 shadow-[0_4px_18px_rgba(40,35,27,0.04)] hover:border-[#a74e2d]/40 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#f0eae1]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a74e2d] text-white text-xs font-black shadow-xs">
                        0{segment.segmentIndex}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10.5px] font-black uppercase tracking-wider text-[#a74e2d]">
                            {isTrain
                              ? "Onward Direct Train Leg"
                              : isBus
                              ? "Onward Highway Bus Leg"
                              : segment.segmentIndex === 1 && route.segments.length > 1
                              ? "Airport Terminal Transfer Leg"
                              : "Direct Road Cab Transfer"}
                          </span>
                          <span className="text-[11px] font-semibold text-[#6b625b]">
                            · {segment.distance}
                          </span>
                        </div>
                        <h5 className="font-serif text-base sm:text-lg font-bold text-[#1c1917] mt-0.5">
                          {segment.fromLocation} ➔ {segment.toLocation}
                        </h5>
                      </div>
                    </div>

                    {/* Booking / Action Button */}
                    {segment.bookingUrl && (
                      <a
                        href={segment.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full sm:w-auto inline-flex min-h-[40px] items-center justify-center gap-2 px-4 py-2 rounded-xl text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-95 shrink-0 ${
                          isTrain
                            ? "bg-[#0f4674] hover:bg-[#0a3356]"
                            : "bg-[#d84e55] hover:bg-[#c23f46]"
                        }`}
                      >
                        {isTrain ? (
                          <>
                            <Train className="h-3.5 w-3.5" />
                            <span>Check on IRCTC</span>
                          </>
                        ) : (
                          <>
                            <Bus className="h-3.5 w-3.5" />
                            <span>Check on redBus</span>
                          </>
                        )}
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  {/* Specs Grid */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:bg-white transition-all">
                      <span className="block text-[10px] font-black uppercase tracking-wider text-[#786c5e]">
                        Service / Mode
                      </span>
                      <p className="mt-1 font-bold text-[#1c1917] text-xs sm:text-sm">
                        {segment.operatorOrService}
                      </p>
                      {segment.serviceNumberOrType && (
                        <p className="mt-0.5 text-xs text-[#a74e2d] font-semibold">
                          {segment.serviceNumberOrType}
                        </p>
                      )}
                    </div>

                    <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e4dbce] hover:bg-white transition-all">
                      <span className="block text-[10px] font-black uppercase tracking-wider text-[#786c5e]">
                        Timings &amp; Duration
                      </span>
                      <p className="mt-1 font-bold text-[#1c1917] text-xs sm:text-sm">
                        {segment.duration}
                      </p>
                      {segment.departureTime && (
                        <p className="mt-0.5 text-xs text-[#6b625b]">
                          Departs: {segment.departureTime}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

