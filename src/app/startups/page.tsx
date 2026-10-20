import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CircleDollarSign,
  Compass,
  GraduationCap,
  Rocket,
  Store,
  UserRoundCheck,
  Users,
  Wheat,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { StartupVerticalsGrid } from "@/components/startups/StartupVerticalsGrid";
import { JourneyTimelineTracker } from "@/components/startups/JourneyTimelineTracker";

export const metadata: Metadata = {
  title: "Startups & Junicorns",
  description:
    "Discover the ISF Junicorn Tribal & Rural Innovation Challenge Cohort 3.0 at Startup Jathara 2026, GIET University, Gunupur.",
};

const applyUrl = "https://match.myanatomy.in/sc/69eaf7b184db4d003436f748/n";

const supportPillars = [
  {
    icon: UserRoundCheck,
    number: "01",
    title: "Mentorship",
    description: "1-on-1 guidance from founders and domain experts.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Market Access",
    description: "State, national, and global showcase opportunities.",
  },
  {
    icon: CircleDollarSign,
    number: "03",
    title: "Money",
    description: "Access to relevant investors, grants, and pre-seed networks.",
  },
];

export default function StartupsPage() {
  return (
    <div className="w-full overflow-clip bg-[#f5efe5]">
      {/* Editorial Header — Consistent with Speakers, About & Partners */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Background Media */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/summit-pitch-stage.jpg"
            alt="A young founder presenting an innovation to an investor jury"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-90"
          />
          <div className="absolute inset-0 z-10 bg-black/50 sm:bg-black/45" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/40 to-[#0c0d12]/70" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e87042]/15 rounded-full blur-[140px] pointer-events-none z-10" />
        </div>

        <Container size="default" className="relative z-20 text-center">
          <h1 className="font-serif font-black text-3.5xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)] max-w-4xl mx-auto">
            Rural Ideas. Global Ambition.
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            Empowering Grassroots Innovators &amp; Student Builders
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            Transforming India&apos;s rural innovation story by connecting young builders with the mentorship, markets, and capital that move ideas forward.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#ed7446] px-6 text-sm font-bold text-white shadow-[0_12px_38px_rgba(232,112,66,.32)] transition hover:-translate-y-0.5 hover:bg-[#f08257] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Apply for Cohort 3.0
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#qualification"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Check eligibility
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      <section id="qualification" className="startup-reveal scroll-mt-24 border-b border-[#dfd5c7] bg-[#f8f4ed] py-10 sm:py-16" aria-labelledby="qualification-heading">
        <Container size="wide">

          {/* Section label */}
          <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a95131]">
            <span className="font-serif text-base">01</span>
            <span className="h-px w-7 bg-[#c8b7a3]" />
            Qualification check
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2 lg:gap-5">
            <article className="card-3d-reveal overflow-hidden rounded-[22px] border border-[#ded7cd] bg-[#fffdfa] shadow-[0_18px_45px_rgba(50,42,32,0.08)]">
              <div className="flex items-start justify-between gap-4 px-5 py-5 sm:px-6">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#b15836]">Who can apply</p>
                  <h2 id="qualification-heading" className="mt-1.5 font-serif text-2xl font-bold leading-tight text-[#252621] sm:text-3xl">Are you a Junicorn?</h2>
                  <p className="mt-1 text-[11px] leading-5 text-[#6b6861]">An idea, prototype, or real problem is enough to begin.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 border-y border-[#e7e0d7]">
                <div className="border-r border-[#e7e0d7] px-5 py-5 sm:px-6">
                  <GraduationCap className="h-5 w-5 text-[#bd5b39]" aria-hidden="true" />
                  <p className="mt-3 font-serif text-3xl font-bold leading-none text-[#252621] sm:text-4xl">8–18</p>
                  <p className="mt-2 text-[9px] font-black uppercase tracking-[0.16em] text-[#9c543a]">Junior Track</p>
                  <p className="mt-2 text-[10px] leading-4 text-[#6b6861]">Idea stage welcome. No prototype required.</p>
                </div>
                <div className="px-5 py-5 sm:px-6">
                  <Rocket className="h-5 w-5 text-[#bd5b39]" aria-hidden="true" />
                  <p className="mt-3 font-serif text-3xl font-bold leading-none text-[#252621] sm:text-4xl">18–25</p>
                  <p className="mt-2 text-[9px] font-black uppercase tracking-[0.16em] text-[#9c543a]">Senior Track</p>
                  <p className="mt-2 text-[10px] leading-4 text-[#6b6861]">Idea, prototype, or early venture.</p>
                </div>
              </div>

              <div className="px-5 py-5 sm:px-6">
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#77736c]">Eligibility</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {["Independent or incubator-linked", "Rural or community-focused", "Open across 20+ states", "Company registration not required"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[10px] leading-4 text-[#504e49]">
                      <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-[#bd5b39]" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="card-3d-reveal group relative overflow-hidden rounded-[22px] border-2 border-[#d97c55]/40 bg-gradient-to-b from-[#fbf5ed] via-[#fffcf9] to-[#f7eedf] shadow-[0_20px_50px_rgba(180,85,50,0.09)]">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#b15836] via-[#e87042] to-[#d68c45]" />

              <div className="flex items-end justify-between gap-4 px-5 pt-6 pb-4 sm:px-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold leading-tight text-[#1c1917] sm:text-3xl">
                    The 3M advantage.
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-[#6e685f]">
                    Practical support—not just another certificate.
                  </p>
                </div>
                <span className="font-serif text-4xl sm:text-5xl font-black leading-none text-[#b15836]/12 select-none">
                  3M
                </span>
              </div>

              {/* Elevated Floating Pillar Tiles */}
              <div className="border-y border-[#ebdccf] bg-[#f7f0e6]/60 p-3.5 sm:p-5 space-y-2">
                {supportPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#ebdccf] shadow-2xs hover:border-[#b15836]/40 transition-all"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#faebe1] border border-[#f5cfbd] text-[#b15836]">
                        <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-serif text-xs font-black text-[#b15836]">{pillar.number}</span>
                          <h4 className="text-sm font-bold text-[#1c1917] leading-none">{pillar.title}</h4>
                        </div>
                        <p className="mt-1 text-[11px] leading-4 text-[#69635a]">{pillar.description}</p>
                      </div>
                      <ArrowRight className="hidden sm:block h-3.5 w-3.5 text-[#c4b5a5] shrink-0" aria-hidden="true" />
                    </div>
                  );
                })}
              </div>

              {/* Bottom Stats Grid */}
              <div className="grid grid-cols-2 divide-x divide-[#e8d8ca] bg-[#fbf5ed]/90">
                <div className="px-5 py-3.5 sm:px-6">
                  <p className="font-serif text-2xl sm:text-3xl font-black text-[#a84e2d] leading-none">Top 200</p>
                  <p className="mt-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#7a6f64]">Mentorship Track</p>
                </div>
                <div className="px-5 py-3.5 sm:px-6">
                  <p className="font-serif text-2xl sm:text-3xl font-black text-[#a84e2d] leading-none">Top 100</p>
                  <p className="mt-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#7a6f64]">Investor Ready</p>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="startup-reveal border-b border-[#d8d0c2] bg-[#eee7db] py-12 sm:py-20" aria-labelledby="sectors-heading">
        <Container size="wide">
          <div className="mb-7 sm:mb-10 sm:flex sm:items-end sm:justify-between sm:gap-8">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1d6852]"><span className="font-serif text-base">02</span><span className="h-px w-7 bg-[#bcb4a6]" />Areas of impact</div>
              <h2 id="sectors-heading" className="mt-4 max-w-2xl text-3xl font-bold leading-[1.04] tracking-[-0.04em] text-[#18231f] sm:text-5xl">Choose the problem you want to solve.</h2>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#645f57] sm:mt-0">Eight priority arenas from the Cohort 3 challenge—plus an open route for ideas that do not fit a box.</p>
          </div>
          <StartupVerticalsGrid />
        </Container>
      </section>

      <section className="startup-reveal border-b border-[#dfd5c7] bg-[#f8f4ed] py-12 sm:py-20" aria-labelledby="journey-heading">
        <Container size="wide">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a95131]">
              <span className="font-serif text-base">03</span>
              <span className="h-px w-7 bg-[#c8b7a3]" />
              The expedition
            </div>
            <h2 id="journey-heading" className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-[1.04] tracking-[-0.035em] text-[#18231f] sm:text-5xl">
              Four milestones. One transformational destination.
            </h2>
          </div>

          {/* Connected Interactive Timeline Tracker */}
          <JourneyTimelineTracker />
        </Container>
      </section>

      {/* ── Section 04: Showcase Arena ── */}
      <section className="startup-reveal border-b border-[#dfd5c7] bg-[#eee7dc] py-12 sm:py-16" aria-labelledby="showcase-heading">
        <Container size="wide">
          {/* Section Header */}
          <div className="mb-7 sm:mb-9 sm:flex sm:items-end sm:justify-between sm:gap-8">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1b6952]">
                <span className="font-serif text-base">04</span>
                <span className="h-px w-7 bg-[#bcb4a6]" />
                Showcase arena
              </div>
              <h2 id="showcase-heading" className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-[1.04] tracking-[-0.035em] text-[#18231f] sm:text-4xl">
                Showcase Arena.
              </h2>
              <p className="mt-1.5 font-serif text-base sm:text-lg font-medium text-[#7d4e38]">
                Built for ideas people can see, question, and test.
              </p>
            </div>
            <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-[#5c574f] sm:mt-0">
              A purpose-built exhibition floor inside GIET campus for live hardware demos, working prototypes, and direct investor walkthroughs.
            </p>
          </div>

          {/* Clean Architectural Showcase Tri-Panel without numbers */}
          <div className="overflow-hidden rounded-2xl border border-[#d8cfc0] bg-white shadow-[0_8px_30px_rgba(40,35,27,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#ede4d8]">
              {/* Showcase 1: Dedicated Demo Kiosks */}
              <div className="group flex flex-col p-5 sm:p-6 md:p-7 transition-colors hover:bg-[#faf7f2]/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#faebe4] text-[#b45532] border border-[#f5cfbf] transition group-hover:scale-105 mb-4">
                  <Store className="h-5 w-5" strokeWidth={2} />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917] tracking-tight">
                  Dedicated Demo Kiosks
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#57534e] leading-relaxed">
                  Plug-and-play modular display booths equipped with continuous power, high-speed Wi-Fi, and display setup for hands-on software trials and hardware interaction.
                </p>
              </div>

              {/* Showcase 2: Investor Walkthroughs */}
              <div className="group flex flex-col p-5 sm:p-6 md:p-7 transition-colors hover:bg-[#faf7f2]/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f4ef] text-[#1b6952] border border-[#c6dfd4] transition group-hover:scale-105 mb-4">
                  <Users className="h-5 w-5" strokeWidth={2} />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917] tracking-tight">
                  Investor Walkthroughs
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#57534e] leading-relaxed">
                  Scheduled exhibition walkthroughs where visiting VCs, angel investors, and jury panels review kiosks for direct 1-on-1 founder conversations during coffee breaks.
                </p>
              </div>

              {/* Showcase 3: Tribal Craft & Agro Pavilion */}
              <div className="group flex flex-col p-5 sm:p-6 md:p-7 transition-colors hover:bg-[#faf7f2]/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdf5e6] text-[#8c671b] border border-[#fae2ab] transition group-hover:scale-105 mb-4">
                  <Wheat className="h-5 w-5" strokeWidth={2} />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1c1917] tracking-tight">
                  Tribal Craft &amp; Agro Pavilion
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#57534e] leading-relaxed">
                  A dedicated showcase for organic farm produce, minor millet processing, natural textiles, and indigenous value chains to connect directly with institutional buyers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
