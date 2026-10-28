import Image from "next/image";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { GIETCampusMapSection } from "./GIETCampusMapSection";
import { GunupurHotelsSection } from "./GunupurHotelsSection";
import { TravelFAQs } from "./TravelFAQs";
import { TravelModeTabs } from "./TravelModeTabs";

export function VenueTravelClient() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden border-b border-[#232733] bg-[#0c0d12] py-16 text-white sm:py-20 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gietu-campus-aerial.webp"
            alt="GIET University campus in Gunupur, Odisha"
            fill
            priority
            sizes="100vw"
            className="select-none object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/30 to-[#0c0d12]/55" />
        </div>

        <Container size="default" className="relative z-10 px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f7c89f]">Venue &amp; Travel</p>
          <h1 className="mx-auto mt-3 max-w-4xl font-serif text-3xl font-black leading-tight tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] sm:text-5xl lg:text-6xl">
            GIET University, Gunupur, Odisha
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-white/90 sm:text-lg">
            The practical visitor guide for reaching the summit venue and planning your stay in Gunupur.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/90 sm:text-sm">
            <span><strong className="text-white">17–20 December 2026</strong></span>
            <span className="hidden text-white/35 sm:inline">•</span>
            <span>Goboriguda, Po-Kharling</span>
            <span className="hidden text-white/35 sm:inline">•</span>
            <span>Gunupur 765022</span>
          </div>
        </Container>
      </section>

      <GIETCampusMapSection />
      <TravelModeTabs />

      <section className="section-reveal border-b border-[#e6dfd1] bg-[#fcfbf8] py-14 sm:py-20">
        <Container size="wide">
          <SectionHeading
            title="Accommodation in Gunupur"
            subtitle="Review local options, then contact the property directly to confirm current availability, amenities, rates, and cancellation terms."
          />

          <GunupurHotelsSection />
        </Container>
      </section>

      <TravelFAQs />
    </div>
  );
}
