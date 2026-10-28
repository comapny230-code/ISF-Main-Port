import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane, Train, Hotel, ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

export function VenueBridgeCard() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf7f2] border-b border-[#e8dfd3] relative overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Campus Photo (Clean separate visual) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#e2d8c7] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
              <Image
                src="/images/giet-campus-main-building.webp"
                alt="GIET University Campus Main Building"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-serif font-black text-xl sm:text-2xl drop-shadow-sm">
                  GIET University Campus
                </p>
                <p className="text-xs sm:text-sm text-[#e8e4df] drop-shadow-sm mt-0.5">
                  113-Acre Serene Green Valley Campus
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Content (No Box wrapper) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#e87042] block mb-2">
                Campus &amp; Destination
              </span>
              <h2 className="font-serif font-black text-2xl sm:text-3.5xl md:text-4xl text-[#1c1917] tracking-tight leading-[1.18]">
                Join Us in the Serene Hills of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Dandakaranya</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#57534e] leading-relaxed">
              The summit is hosted at GIET University - a premier research institution established in 1997. Situated in Gunupur amidst lush Eastern Ghats hills and the Bansadhara River, the campus offers world-class auditoriums, incubator facilities, and peaceful residential quarters.
            </p>

            {/* Clean Information Points (Pure content, no boxes) */}
            <div className="space-y-4 pt-2 border-t border-[#e8dfd3]">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#e87042]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Plane className="w-4 h-4 text-[#e87042]" />
                </div>
                <div>
                  <strong className="block text-sm text-[#1c1917] font-bold">
                    Airports &amp; Flight Connectivity
                  </strong>
                  <span className="text-xs sm:text-sm text-[#66615b]">
                    Visakhapatnam International Airport (VTZ) &amp; Bhubaneswar Airport with scheduled campus concierge shuttles.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#d68c45]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Train className="w-4 h-4 text-[#d68c45]" />
                </div>
                <div>
                  <strong className="block text-sm text-[#1c1917] font-bold">
                    Railway Junctions
                  </strong>
                  <span className="text-xs sm:text-sm text-[#66615b]">
                    Rayagada Junction (75 km) &amp; Gunupur Local Station connecting directly to national railway corridors.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#e87042]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Hotel className="w-4 h-4 text-[#e87042]" />
                </div>
                <div>
                  <strong className="block text-sm text-[#1c1917] font-bold">
                    Hospitality &amp; Campus Stays
                  </strong>
                  <span className="text-xs sm:text-sm text-[#66615b]">
                    Dedicated on-campus executive suites and verified regional partner stays for attending delegates and investors.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="pt-2">
              <Link
                href="/venue"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#e87042] to-[#d95d2c] hover:from-[#d95d2c] hover:to-[#c25022] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Venue &amp; Travel Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
