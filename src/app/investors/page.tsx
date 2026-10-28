import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, 
  Globe2, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Coffee, 
  TreePine, 
  Building 
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Investors, VCs & Global Delegates",
  description: "Opportunities for venture funds, angel networks, GCC leaders, and international delegates at ISF Startup Jathara 2026, GIET University, Gunupur.",
};

export default function InvestorsPage() {
  return (
    <div className="w-full">
      {/* Editorial Header */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Topic-matching Dedicated Static Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/summit-investors-lounge.jpg"
            alt="Investors and VCs in Private Dealmaking Lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-95"
          />
          {/* Obsidian-Peach scrim & vignette */}
          <div className="absolute inset-0 z-10 bg-black/45 sm:bg-black/40" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/35 to-[#0c0d12]/60" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e87042]/15 rounded-full blur-[140px] pointer-events-none z-10" />
        </div>

        <Container size="default" className="relative z-20 text-center">
          <h1 className="font-serif font-black text-3.5xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Discover Uncrowded Dealflow in Frontier India
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            High-Moat Grassroots Startups with Untapped National Scale.
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            Connect with early-stage inventors, tribal agro-tech enterprises, and grassroots healthcare pioneers at the intersection of capital, technology, and regional impact.
          </p>

          <div className="mt-8 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link 
              href="https://register.startupjathara.com/"
              className="inline-flex items-center justify-center gap-2 px-4 min-[360px]:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#e87042] to-[#d95d2c] hover:from-[#d95d2c] hover:to-[#c25022] text-white font-bold text-xs min-[360px]:text-sm shadow-md hover:shadow-lg transition-all w-full min-[420px]:w-auto text-center"
            >
              <span>Register as Investor / Fund Delegate</span>
              <ArrowRight className="w-4 h-4 ml-1 shrink-0" />
            </Link>
            <Link 
              href="/programme" 
              className="inline-flex items-center justify-center gap-2 px-4 min-[360px]:px-6 py-2.5 sm:py-3 rounded-xl bg-[#141620]/80 hover:bg-[#1f2230] text-white border border-white/20 font-bold text-xs min-[360px]:text-sm backdrop-blur-md transition-all w-full min-[420px]:w-auto text-center"
            >
              <span>Roundtable Timings</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* The Investor Value Proposition */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            title="Why Leading Angels & VCs Are Travelling to Dandakaranya"
            subtitle="Moving beyond saturated tier-1 city valuations to discover resilient, cost-efficient businesses with deep regional competitive moats."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#ffffff] rounded-3xl p-8 border border-[#e6dfd1] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-5">
                <TrendingUp className="w-6 h-6 text-[#c25e38]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#103327]">
                Authentic Unit Economics
              </h3>
              <p className="mt-3 text-sm text-[#4a5752] leading-relaxed">
                Rural and tribal founders operate with high capital efficiency, genuine customer relationships, and grounded problem-solving rather than speculative burn metrics.
              </p>
            </div>

            <div className="bg-[#ffffff] rounded-3xl p-8 border border-[#e6dfd1] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-5">
                <Globe2 className="w-6 h-6 text-[#256f57]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#103327]">
                Global Capability Synergies
              </h3>
              <p className="mt-3 text-sm text-[#4a5752] leading-relaxed">
                GCCs and multinational innovation arms can pilot remote digital tools, sponsor CSR-backed incubation pipelines, and source sustainable raw materials directly.
              </p>
            </div>

            <div className="bg-[#ffffff] rounded-3xl p-8 border border-[#e6dfd1] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#f7f4ec] flex items-center justify-center text-[#143e30] mb-5">
                <Briefcase className="w-6 h-6 text-[#be9740]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#103327]">
                Curated Deal-Book
              </h3>
              <p className="mt-3 text-sm text-[#4a5752] leading-relaxed">
                Participating investors receive a pre-screened deal dossier prepared by ISF and IncubateX, profiling high-potential ventures across confirmed summit tracks.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Investors & GCC Connect Spotlight */}
      <section className="py-20 bg-[#f7f4ec] border-b border-[#e6dfd1]">
        <Container size="default">
          <div className="bg-gradient-to-br from-[#103327] to-[#081a14] rounded-3xl p-8 sm:p-12 text-[#fcfbf8] border border-[#256f57]/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c25e38]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b5341] text-xs text-[#d6b25e] font-semibold">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Signature Session Spotlight</span>
              </div>

              <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
                Global Investors & GCC Connect Roundtable
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#dfd6c4]">
                <span className="p-2 rounded-lg bg-[#081a14]/60 border border-[#256f57]/40">
                  <strong>Date:</strong> Friday, 18 December 2026
                </span>
                <span className="p-2 rounded-lg bg-[#081a14]/60 border border-[#256f57]/40">
                  <strong>Time:</strong> 4:00 PM – 5:00 PM (Draft)
                </span>
                <span className="p-2 rounded-lg bg-[#081a14]/60 border border-[#256f57]/40">
                  <strong>Venue:</strong> Executive Boardroom, GIET Campus
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#c8d1cd] leading-relaxed">
                This closed-door session convenes venture fund partners, angel syndicates, GCC strategy leads, and government delegates to discuss co-investment models, cross-border market access, and long-term capital deployment in rural and tribal enterprise clusters.
              </p>

              <div className="pt-2">
                <Button href="https://register.startupjathara.com/" variant="gold" size="md" className="font-bold">
                  Request Roundtable Seat
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Delegate Hospitality & Networking Perks */}
      <section className="py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            title="Comprehensive Hospitality & Transit Support"
            subtitle="GIET University and ISF provide dedicated concierge logistics for visiting investors and international delegates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#222b27]">
            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#103327] flex items-center gap-2">
                <Building className="w-5 h-5 text-[#c25e38]" />
                Campus Executive Accommodation
              </h3>
              <p className="text-sm text-[#4a5752] leading-relaxed">
                Air-conditioned executive guest suites inside the peaceful GIET University campus, alongside reserved blocks in regional premium hotels with dedicated shuttle loops.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#103327] flex items-center gap-2">
                <Coffee className="w-5 h-5 text-[#be9740]" />
                Bespoke Networking Circles
              </h3>
              <p className="text-sm text-[#4a5752] leading-relaxed">
                Exclusive seating areas during Araku coffee networking sessions, private founder matchmaking lounges, and the Friday evening cultural dinner under the stars.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#103327] flex items-center gap-2">
                <TreePine className="w-5 h-5 text-[#256f57]" />
                Day 2 Dandakaranya Eco-Trek
              </h3>
              <p className="text-sm text-[#4a5752] leading-relaxed">
                Complimentary guided participation in the Saturday forest expedition, allowing investors to evaluate founders in an unhurried, collaborative natural environment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6dfd1] space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#103327] flex items-center gap-2">
                <Users className="w-5 h-5 text-[#143e30]" />
                Airport Concierge Coordination
              </h3>
              <p className="text-sm text-[#4a5752] leading-relaxed">
                Coordinated pick-up desks at Visakhapatnam International Airport (VTZ) and key railway junctions (Rayagada and Palasa) for registered delegates.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Action Footer */}
      <section className="py-16 bg-[#081a14] text-[#fcfbf8] text-center">
        <Container size="default">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl">
            Join the Investor Delegation at Dandakaranya 2026
          </h2>
          <p className="mt-2 text-sm text-[#c8d1cd] max-w-xl mx-auto">
            Contact the ISF Investor Relations desk or register your delegation interest.
          </p>
          <div className="mt-6 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <Button href="https://register.startupjathara.com/" variant="gold" size="md" className="w-full min-[420px]:w-auto justify-center">
              Register as Investor
            </Button>
            <Button href="/venue" variant="outline" size="md" className="w-full min-[420px]:w-auto justify-center text-[#fcfbf8] border-[#dfd6c4]/40 hover:bg-[#143e30]">
              Transit & Campus Location
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

