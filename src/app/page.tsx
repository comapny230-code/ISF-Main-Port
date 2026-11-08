import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutJatharaSection } from "@/components/home/AboutJatharaSection";
import { FourPillarsSection } from "@/components/home/FourPillarsSection";
import { ISFFounderSection } from "@/components/home/ISFFounderSection";
import { DandakaranyaHomeSection } from "@/components/home/DandakaranyaHomeSection";
import { RegistrationCTA } from "@/components/home/RegistrationCTA";
import { OrganizersPartnersSection } from "@/components/home/OrganizersPartnersSection";
import { ScrollObserver } from "@/components/common/ScrollObserver";
import { DiyaCelebration } from "@/components/home/DiyaCelebration";
import {
  DIWALI_DECOR_ENABLED as diwali,
  DiwaliDefs,
  DiwaliDivider,
  DiwaliThreshold,
} from "@/components/diwali/DiwaliDecor";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Scroll-Driven Section Entrance Animation Observer */}
      <ScrollObserver />

      {/* Interactive Festive Diwali Diya & Sky Shots Celebration */}
      <div className="dw-festive">
        <DiyaCelebration />
      </div>
      {diwali && <DiwaliDefs />}

      {/* Home Page Sections (Hero untouched, remaining sections animate on scroll) */}
      <HeroSection />
      {diwali && <DiwaliThreshold />}
      <AboutJatharaSection />
      {diwali && <DiwaliDivider />}
      <FourPillarsSection />
      {diwali && <DiwaliDivider />}
      <ISFFounderSection />
      {diwali && <DiwaliDivider />}
      <DandakaranyaHomeSection />
      <RegistrationCTA />
      <OrganizersPartnersSection />
      {diwali && <DiwaliDivider diyas={5} above />}
    </div>
  );
}
