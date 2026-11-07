"use client";

import { useState } from "react";
import { Car, Plane, Train } from "lucide-react";
import { Container } from "../common/Container";
import { SmartBusJourneyPlanner } from "./SmartBusJourneyPlanner";
import { SmartTrainJourneyPlanner } from "./SmartTrainJourneyPlanner";
import { SmartAirJourneyPlanner } from "./SmartAirJourneyPlanner";

type TravelMode = "road" | "rail" | "air";

const tabs = [
  { id: "road" as const, label: "By Road", icon: Car },
  { id: "rail" as const, label: "By Rail", icon: Train },
  { id: "air" as const, label: "By Air", icon: Plane },
];

export function TravelModeTabs() {
  const [activeMode, setActiveMode] = useState<TravelMode>("road");

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
        ) : activeMode === "rail" ? (
          <div id="travel-mode-panel" role="tabpanel" className="mx-auto mt-6 max-w-6xl">
            <SmartTrainJourneyPlanner initialStationId="rail-bbs" />
          </div>
        ) : (
          <div id="travel-mode-panel" role="tabpanel" className="mx-auto mt-6 max-w-6xl">
            <SmartAirJourneyPlanner initialAirportId="air-vtz" />
          </div>
        )}
      </Container>
    </section>
  );
}
