import type { Metadata } from "next";
import { ProgrammeClient } from "@/components/programme/ProgrammeClient";

export const metadata: Metadata = {
  title: "Event Programme & 4-Day Schedule",
  description: "Official 4-day schedule for ISF Startup Jathara 2026 (17–20 December 2026, GIET University, Gunupur). Comprehensive sessions including Inauguration, Startup Exhibition, 3rd Cohort Demo Day, Pitches & Roundtables, Forest Tracking, and Rural Ecosystem.",
};

export default function ProgrammePage() {
  return <ProgrammeClient />;
}
