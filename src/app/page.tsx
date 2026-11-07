import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutJatharaSection } from "@/components/home/AboutJatharaSection";
import { FourPillarsSection } from "@/components/home/FourPillarsSection";
import { ISFFounderSection } from "@/components/home/ISFFounderSection";
import { DandakaranyaHomeSection } from "@/components/home/DandakaranyaHomeSection";
import { RegistrationCTA } from "@/components/home/RegistrationCTA";
import { OrganizersPartnersSection } from "@/components/home/OrganizersPartnersSection";
import { ScrollObserver } from "@/components/common/ScrollObserver";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Scroll-Driven Section Entrance Animation Observer */}
      <ScrollObserver />

      {/* Home Page Sections (Hero untouched, remaining sections animate on scroll) */}
      <HeroSection />
      <AboutJatharaSection />
      <FourPillarsSection />
      <ISFFounderSection />
      <DandakaranyaHomeSection />
      <RegistrationCTA />
      <OrganizersPartnersSection />
    </div>
  );
}
