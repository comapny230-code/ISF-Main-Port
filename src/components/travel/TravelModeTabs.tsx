"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Bus, Car, Check, MapPin, Navigation, Plane, Train } from "lucide-react";
import { Container } from "../common/Container";
import { SmartBusJourneyPlanner } from "./SmartBusJourneyPlanner";

type TravelMode = "road" | "rail" | "air";

type ArrivalOption = {
  id: string;
  name: string;
  code?: string;
  distance: string;
  mapOrigin: string;
  onward: string;
  redBusUrl?: string;
};

type ModeGuide = {
  modeLabel: string;
  instruction: string;
  finalStep: string;
  note: string;
  options: ArrivalOption[];
};

const tabs = [
  { id: "road" as const, label: "By Road", icon: Car },
  { id: "rail" as const, label: "By Rail", icon: Train },
  { id: "air" as const, label: "By Air", icon: Plane },
];

const guides: Record<TravelMode, ModeGuide> = {
  road: {
    modeLabel: "Selected road origin",
    instruction: "Begin from the selected city and follow the confirmed highway corridors toward Gunupur.",
    finalStep: "Continue to GIET University, Gobriguda, Po-Kharling for the final campus arrival.",
    note: "Live directions calculate real-time highway routes. RedBus has Gunupur preset as the destination.",
    options: [
      {
        id: "road-vizag",
        name: "Visakhapatnam (Vizag)",
        distance: "~210 km · 4.5–5 hrs via NH-16 & NH-326",
        mapOrigin: "Visakhapatnam Andhra Pradesh",
        onward: "Drive north along NH-16 past Srikakulam to Palasa, then take NH-326 through Paralakhemundi straight to the GIET campus. Frequent direct express buses operate from RTC Complex.",
        redBusUrl: "https://www.redbus.in/bus-tickets/visakhapatnam-to-gunupur",
      },
      {
        id: "road-hyderabad",
        name: "Hyderabad",
        distance: "~780 km · 14–15 hrs via NH-65 & NH-16",
        mapOrigin: "Hyderabad Telangana",
        onward: "Take NH-65 toward Vijayawada, merge onto coastal NH-16 up to Srikakulam / Palasa, then branch onto NH-326 to Gunupur. Multiple direct overnight sleeper buses operate to Rayagada and Gunupur.",
        redBusUrl: "https://www.redbus.in/bus-tickets/hyderabad-to-gunupur",
      },
      {
        id: "road-bangalore",
        name: "Bengaluru (Bangalore)",
        distance: "~1,020 km · 19–20 hrs via Tirupati & NH-16",
        mapOrigin: "Bengaluru Karnataka",
        onward: "Take NH-75 toward Tirupati / Nellore, continue along coastal NH-16 northbound through Vijayawada & Vizag to Palasa, then take NH-326 into Gunupur. Regular interstate services connect via Vizag.",
        redBusUrl: "https://www.redbus.in/bus-tickets/bangalore-to-gunupur",
      },
      {
        id: "road-chennai",
        name: "Chennai",
        distance: "~890 km · 16–17 hrs via NH-16 Corridor",
        mapOrigin: "Chennai Tamil Nadu",
        onward: "Head north on NH-16 along the coastal corridor through Nellore, Ongole, Vijayawada, and Visakhapatnam to Srikakulam / Palasa, then take NH-326 directly to Gunupur.",
        redBusUrl: "https://www.redbus.in/bus-tickets/chennai-to-gunupur",
      },
      {
        id: "road-berhampur",
        name: "Berhampur",
        distance: "~140 km · 3.5 hrs via Paralakhemundi",
        mapOrigin: "Berhampur Odisha",
        onward: "Take NH-516A and NH-326 westward via Digapahandi and Paralakhemundi into Gunupur. Frequent OSRTC and private regional buses run daily.",
        redBusUrl: "https://www.redbus.in/bus-tickets/berhampur-to-gunupur",
      },
      {
        id: "road-rayagada",
        name: "Rayagada",
        distance: "~75 km · 1.5–2 hrs via Regional Highway",
        mapOrigin: "Rayagada Odisha",
        onward: "Travel eastward along the scenic Vansadhara river corridor directly into Gunupur. Regular local shuttle cabs and buses run every 30 mins.",
        redBusUrl: "https://www.redbus.in/bus-tickets/rayagada-to-gunupur",
      },
      {
        id: "road-paralakhemundi",
        name: "Paralakhemundi",
        distance: "~45 km · ~1 hr via NH-326",
        mapOrigin: "Paralakhemundi Odisha",
        onward: "Follow NH-326 northward straight to the GIET University campus entrance. Regular local buses and auto-rickshaws available.",
        redBusUrl: "https://www.redbus.in/bus-tickets/paralakhemundi-to-gunupur",
      },
    ],
  },
  rail: {
    modeLabel: "Selected rail arrival",
    instruction: "Arrive at the selected station and confirm your onward road transport before travel.",
    finalStep: "Ask for GIET University at Gobriguda, Po-Kharling; confirm transport for late arrivals.",
    note: "Train schedules change. Check the operating day and arrival time with Indian Railways.",
    options: [
      { id: "rail-gnpr", name: "Gunupur Railway Station", code: "GNPR", distance: "~5 km to campus", mapOrigin: "Gunupur Railway Station Odisha", onward: "Arrange a local auto-rickshaw or cab after leaving the station." },
      { id: "rail-rgda", name: "Rayagada Railway Station", code: "RGDA", distance: "~75 km to campus", mapOrigin: "Rayagada Railway Station Odisha", onward: "Pre-arrange a road transfer from Rayagada to Gunupur." },
      { id: "rail-che", name: "Srikakulam Road Station", code: "CHE", distance: "~90 km to campus", mapOrigin: "Srikakulam Road Railway Station Amadalavalasa", onward: "Continue by a confirmed regional road transfer to Gunupur." },
      { id: "rail-psa", name: "Palasa Railway Station", code: "PSA", distance: "~90 km to campus", mapOrigin: "Palasa Railway Station Andhra Pradesh", onward: "Arrange the onward connection to Gunupur before arrival." },
    ],
  },
  air: {
    modeLabel: "Selected airport",
    instruction: "Arrive at the selected airport, then complete the journey to Gunupur by confirmed onward transport.",
    finalStep: "Continue to GIET University, Gobriguda; no general event airport shuttle is confirmed.",
    note: "Flight availability can change. Confirm the service and terminal before booking the road transfer.",
    options: [
      { id: "air-vtz", name: "Visakhapatnam Airport", code: "VTZ", distance: "~210 km to campus", mapOrigin: "Visakhapatnam Airport Andhra Pradesh", onward: "Pre-book a road transfer to Gunupur and confirm the terminal pickup point." },
      { id: "air-pyb", name: "Jeypore Airport", code: "PYB", distance: "~195–205 km to the Gunupur area", mapOrigin: "Jeypore Airport Odisha", onward: "Confirm the limited regional flight first, then pre-arrange the road transfer to Gunupur." },
      { id: "air-bbi", name: "Biju Patnaik International Airport", code: "BBI", distance: "~340 km to campus", mapOrigin: "Biju Patnaik International Airport Bhubaneswar", onward: "Compare a confirmed road transfer with current rail options toward Gunupur." },
    ],
  },
};

const defaultSelections: Record<TravelMode, string> = {
  road: "road-vizag",
  rail: "rail-gnpr",
  air: "air-vtz",
};

export function TravelModeTabs() {
  const [activeMode, setActiveMode] = useState<TravelMode>("road");
  const [selections, setSelections] = useState(defaultSelections);
  const guide = guides[activeMode];
  const selected = guide.options.find((option) => option.id === selections[activeMode]) ?? guide.options[0];

  const directionsUrl = useMemo(
    () => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(selected.mapOrigin)}&destination=${encodeURIComponent("GIET University, Gobriguda, Po-Kharling, Gunupur, Odisha 765022")}`,
    [selected.mapOrigin]
  );

  const redBusUrl = selected.redBusUrl || "https://www.redbus.in/bus-tickets/gunupur";

  return (
    <section className="border-b border-[#e6dfd1] bg-white py-12 sm:py-16">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a74e2d]">Travel guidance</p>
          <h2 className="mt-2 font-serif text-3xl font-black tracking-tight text-[#1c1917] sm:text-4xl">How to Reach Us</h2>
          <p className="mt-3 text-sm leading-6 text-[#57534e] sm:text-base">
            Choose your travel mode, select an origin or transit gateway, and follow the live route to GIET University campus.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="mx-auto mt-6 grid max-w-xl grid-cols-3 rounded-xl border border-[#ded5c7] bg-[#f7f4ec] p-1" role="tablist" aria-label="Choose travel mode">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = tab.id === activeMode;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="travel-mode-panel"
                onClick={() => setActiveMode(tab.id)}
                className={`flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-2 text-xs font-bold transition sm:gap-2 sm:text-sm ${
                  active ? "bg-[#173d31] text-white shadow-sm" : "text-[#57534e] hover:bg-white hover:text-[#173d31]"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Selected Mode Panel */}
        {activeMode === "road" ? (
          <div id="travel-mode-panel" role="tabpanel" className="mx-auto mt-6 max-w-6xl">
            <SmartBusJourneyPlanner />
          </div>
        ) : (
          <div id="travel-mode-panel" role="tabpanel" className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl border border-[#ded5c7] bg-[#fcfbf8] shadow-[0_12px_35px_rgba(40,35,27,0.05)]">
            {/* Header of Active Gateway */}
            <div className="flex flex-col gap-3 border-b border-[#e6dfd1] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 bg-[#f7f3ea]/60">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7efe9] text-[#173d31]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a74e2d]">{guide.modeLabel}</p>
                  <h3 className="font-serif text-lg font-black leading-tight text-[#1c1917] sm:text-xl">{selected.name}</h3>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#57534e] sm:text-right">
                {selected.code ? `${selected.code} · ` : ""}{selected.distance}
              </p>
            </div>

            {/* 3 Step Route Directions */}
            <div className="grid md:grid-cols-3">
              {[
                { title: "Where to arrive", text: guide.instruction },
                { title: "How to continue", text: selected.onward },
                { title: "Reach the venue", text: guide.finalStep },
              ].map((step, index) => (
                <div key={step.title} className="relative px-5 py-4 md:border-r md:border-[#e6dfd1] md:px-6 md:last:border-r-0">
                  <div className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0e2d5] text-[11px] font-black text-[#a74e2d]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#315d4e]">{step.title}</p>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#4a5752]">{step.text}</p>
                    </div>
                  </div>
                  {index < 2 && (
                    <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-[#fcfbf8] text-[#b7aa99] md:block" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>

            {/* Actions & Selector Section */}
            <div className="border-t border-[#e6dfd1] bg-white px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#78716c]">
                    Select your {activeMode === "air" ? "airport" : "station"}
                  </p>
                  <p className="mt-0.5 text-xs text-[#6b625b]">{guide.note}</p>
                </div>

                {/* Map Action Button */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#a74e2d] px-4 text-xs font-bold text-white shadow-sm transition hover:bg-[#8f4025] active:scale-[0.98]"
                    title={`Open Google Maps directions from ${selected.name} to GIET University, Gunupur`}
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Directions on Map</span>
                  </a>
                </div>
              </div>

              {/* Origin Grid Selector */}
              <div
                className={`mt-4 grid gap-2.5 ${
                  guide.options.length >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"
                }`}
                role="radiogroup"
                aria-label={`Select ${activeMode} arrival point`}
              >
                {guide.options.map((option) => {
                  const active = option.id === selected.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setSelections((current) => ({ ...current, [activeMode]: option.id }))}
                      className={`relative min-h-[76px] rounded-xl border p-3 text-left transition ${
                        active
                          ? "border-[#a74e2d] bg-[#fff8f2] ring-1 ring-[#a74e2d]/15 shadow-sm"
                          : "border-[#e1d9ce] bg-white hover:border-[#a74e2d]/45 hover:bg-[#fffcf9]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2.5">
                        <div className="min-w-0">
                          <p className="text-sm font-bold leading-5 text-[#1c1917] truncate">{option.name}</p>
                          <p className="mt-1 text-xs font-semibold text-[#a74e2d] line-clamp-1">
                            {option.code ? `${option.code} · ` : ""}{option.distance}
                          </p>
                        </div>
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            active ? "border-[#a74e2d] bg-[#a74e2d] text-white" : "border-[#cfc4b6] text-transparent"
                          }`}
                        >
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
