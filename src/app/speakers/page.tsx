import type { Metadata } from "next";
import Image from "next/image";
import { 
  Mic2, 
  HeartHandshake,
  GraduationCap,
  Utensils
} from "lucide-react";
import { INITIAL_SPEAKERS } from "@/data/eventData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RoundtableShowcase } from "@/components/speakers/RoundtableShowcase";

export const metadata: Metadata = {
  title: "Speakers & Dignitaries",
  description: "Official roster, plenary keynotes, and track chairs for ISF Startup Jathara 2026 @ Dandakaranya, GIET University, Gunupur.",
};

export default function SpeakersPage() {
  const chiefGuest = INITIAL_SPEAKERS.find((s) => s.id === "spk-chief-guest");

  return (
    <div className="w-full">
      {/* Editorial Header */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Topic-matching Dedicated Static Hero Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/events/speakers-global-dignitaries.webp"
            alt="Speakers, Mentors and Dignitaries on Podium"
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
          <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#f2b58f] drop-shadow-sm">
            Voices of Innovation · Leadership · Mentorship
          </p>

          <h1 className="font-serif font-black text-3.5xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Speakers, Mentors &amp; Dignitaries
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            Meet the Minds Shaping Tomorrow
          </p>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            Meet the entrepreneurs, industry leaders, policymakers, and mentors sharing their knowledge and experience to inspire innovation, guide emerging founders, and strengthen the startup ecosystem at Startup Jathara 2026.
          </p>
        </Container>
      </section>

      {/* Main Speakers Section */}
      <section className="section-reveal py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">
          <SectionHeading
            eyebrow="Speakers & Dignitaries"
            title="Official Speakers & Dignitary Announcements"
            subtitle="Verified dignitaries and plenary leaders are formally presented below. Additional speakers will be announced as confirmations are received."
            className="mb-4 sm:mb-6 [&_h2]:text-xl sm:[&_h2]:text-2xl md:[&_h2]:text-3xl [&_p]:text-xs sm:[&_p]:text-sm"
          />

          {/* Chief guest editorial feature */}
          {/* Chief guest editorial feature */}
          {chiefGuest && (
            <article className="group relative mx-auto mb-10 max-w-5xl px-4 sm:px-8">
              <div className="rounded-[22px] border border-[#d9d1c3] bg-[#f7f3ea]/70 px-4 py-4 shadow-[0_12px_32px_rgba(43,37,28,0.06)] sm:px-6 sm:py-5 lg:px-7">
                <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 items-center">
                {/* Photo in JA Chowdary frame style */}
                <div className="relative mx-auto w-44 sm:w-52 lg:w-full max-w-[220px] lg:max-w-[220px] mb-0">
                  <div className="speaker-photo-ring relative aspect-square overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_12px_30px_rgba(43,37,28,0.14)] ring-2 ring-[#c25e38]/30 ring-offset-2 ring-offset-[#fcfbf8]">
                    <Image
                      src={chiefGuest.photoUrl || "/images/sadguru-sri-madhusudan-sai.webp"}
                      alt={chiefGuest.name}
                      fill
                      sizes="(max-width: 640px) 176px, (max-width: 1023px) 208px, 220px"
                      className="-translate-y-2 scale-[1.24] object-cover object-top"
                    />
                  </div>

                  {/* Elegant hanging VIP plaque badge below photo frame */}
                  <div className="mt-2 flex justify-center pointer-events-none sm:absolute sm:-bottom-3 sm:inset-x-0 sm:mt-0">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#1c1917] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-lg border border-[#e87042]/35">
                      Chief Guest of Honour
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-1 text-center sm:text-left lg:p-2">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[2rem] font-black leading-[1.08] tracking-[-0.03em] text-[#1b1b18]">
                    {chiefGuest.name}
                  </h3>

                  <p className="mt-2 text-[11px] sm:text-xs font-semibold leading-relaxed text-[#815f22] sm:text-sm">
                    Global Humanitarian &amp; Spiritual Leader · Founder, Sri Madhusudan Sai Global Humanitarian Mission
                  </p>

                  <div className="my-4 h-px w-full bg-[#d8d0c2]" />

                  <p className="text-[11px] sm:text-xs leading-5 sm:leading-6 text-[#53564f]">
                    Revered internationally for establishing transformative selfless institutions across 30+ nations based on <em>Vasudhaiva Kutumbakam</em>. Under his stewardship, free healthcare, values-based higher education, and daily morning nutrition reach millions of underserved families.
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
                    <p className="col-span-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8c671b] sm:text-[10px]">
                      His Impact at a Glance
                    </p>
                    <div className="border-l-2 border-[#b45532] pl-2 sm:pl-3.5 py-0.5 text-left">
                      <HeartHandshake className="mb-1 h-3.5 w-3.5 text-[#b45532] sm:h-4 sm:w-4" aria-hidden="true" />
                      <div className="text-[9px] leading-tight sm:text-xs sm:leading-snug">
                        <strong className="block font-bold text-[#1c1917] sm:text-xs">Healthcare: Free Pediatric Care</strong>
                        <span className="mt-0.5 block text-[8px] leading-tight text-stone-500 sm:text-[11px] sm:leading-4">Sai Sanjeevani Hospitals</span>
                      </div>
                    </div>

                    <div className="border-l-2 border-[#9a7022] pl-2 sm:pl-3.5 py-0.5 text-left">
                      <GraduationCap className="mb-1 h-3.5 w-3.5 text-[#8c671b] sm:h-4 sm:w-4" aria-hidden="true" />
                      <div className="text-[9px] leading-tight sm:text-xs sm:leading-snug">
                        <strong className="block font-bold text-[#1c1917] sm:text-xs">Education: Free Education</strong>
                        <span className="mt-0.5 block text-[8px] leading-tight text-stone-500 sm:text-[11px] sm:leading-4">SSSUHE University</span>
                      </div>
                    </div>

                    <div className="border-l-2 border-[#1f6651] pl-2 sm:pl-3.5 py-0.5 text-left">
                      <Utensils className="mb-1 h-3.5 w-3.5 text-[#1f6651] sm:h-4 sm:w-4" aria-hidden="true" />
                      <div className="text-[9px] leading-tight sm:text-xs sm:leading-snug">
                        <strong className="block font-bold text-[#1c1917] sm:text-xs">Nutrition: 3M+ Daily Meals</strong>
                        <span className="mt-0.5 block text-[8px] leading-tight text-stone-500 sm:text-[11px] sm:leading-4">Annapoorna Nutrition</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </article>
          )}


          {/* Official Sector Roundtables & Panelists Showcase */}
          <div className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fff4ed] text-[#c25022] border border-[#fbd4c0] mb-3">
                <Mic2 className="w-3.5 h-3.5" />
                <span>Sectoral Deliberations</span>
              </div>
              <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
                Official Sector Roundtables &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Panelists</span>
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto">
                Official speaker roster transcribed from ISF Network, convening leaders across life sciences, agriculture, global venture syndicates, and scaling policy.
              </p>
            </div>

            <RoundtableShowcase />
          </div>
        </Container>
      </section>

    </div>
  );
}

