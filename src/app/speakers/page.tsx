import type { Metadata } from "next";
import Image from "next/image";
import { 
  Mic2, 
  Mail,
  HeartHandshake,
  GraduationCap,
  Utensils
} from "lucide-react";
import { INITIAL_SPEAKERS, EVENT_METADATA } from "@/data/eventData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
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
            src="/images/summit-speakers-backdrop.jpg"
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
          />

          {/* Chief guest editorial feature */}
          {/* Chief guest editorial feature */}
          {chiefGuest && (
            <article className="group relative mx-auto mb-20 max-w-6xl overflow-hidden rounded-[28px] border border-[#d9d1c3] bg-[#f7f3ea] p-6 sm:p-10 lg:p-14 shadow-[0_24px_70px_rgba(43,37,28,0.1)]">
              <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-14 items-center">
                {/* Photo in JA Chowdary frame style */}
                <div className="relative mx-auto w-56 sm:w-64 lg:w-full max-w-[300px] lg:max-w-[340px] mb-4 lg:mb-0">
                  {/* Decorative background accent block */}
                  <div
                    className="absolute -bottom-2.5 -right-2.5 sm:-bottom-3 sm:-right-3 w-full h-full rounded-3xl bg-[#c25e38]/12 border border-[#c25e38]/25 -z-10"
                    aria-hidden="true"
                  />

                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_20px_50px_rgba(43,37,28,0.18)]">
                    <Image
                      src={chiefGuest.photoUrl || "/images/sadguru-sri-madhusudan-sai.jpg"}
                      alt={chiefGuest.name}
                      fill
                      priority
                      sizes="(max-width: 640px) 240px, (max-width: 1023px) 260px, 340px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Elegant hanging VIP plaque badge below photo frame */}
                  <div className="absolute -bottom-3 inset-x-0 flex justify-center z-10 pointer-events-none">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1c1917] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-lg border border-[#e87042]/35">
                      Chief Guest of Honour
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center text-center sm:text-left pt-2 sm:pt-0">
                  <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-3">
                    <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#a94e2d]">
                      Plenary Inauguration Keynote
                    </span>
                  </div>

                  <h3 className="font-serif text-2.5xl sm:text-4xl lg:text-[2.6rem] font-black leading-[1.08] tracking-[-0.03em] text-[#1b1b18]">
                    {chiefGuest.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm font-semibold leading-relaxed text-[#815f22] sm:text-[15px]">
                    Global Humanitarian &amp; Spiritual Leader · Founder, Sri Madhusudan Sai Global Humanitarian Mission
                  </p>

                  <div className="my-5 h-px w-full bg-[#d8d0c2]" />

                  <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-[#53564f]">
                    Revered internationally for establishing transformative selfless institutions across 30+ nations based on <em>Vasudhaiva Kutumbakam</em>. Under his stewardship, free healthcare, values-based higher education, and daily morning nutrition reach millions of underserved families.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3">
                    <div className="border-l-2 border-[#b45532] pl-3.5 py-0.5 text-left">
                      <HeartHandshake className="mb-1.5 h-4 w-4 text-[#b45532]" aria-hidden="true" />
                      <div className="text-xs leading-snug">
                        <strong className="block text-xs sm:text-[13px] font-bold text-[#1c1917]">Free Pediatric Care</strong>
                        <span className="mt-0.5 block text-[11px] leading-4 text-stone-500">Sai Sanjeevani Hospitals</span>
                      </div>
                    </div>

                    <div className="border-l-2 border-[#9a7022] pl-3.5 py-0.5 text-left">
                      <GraduationCap className="mb-1.5 h-4 w-4 text-[#8c671b]" aria-hidden="true" />
                      <div className="text-xs leading-snug">
                        <strong className="block text-xs sm:text-[13px] font-bold text-[#1c1917]">Free Education</strong>
                        <span className="mt-0.5 block text-[11px] leading-4 text-stone-500">SSSUHE University</span>
                      </div>
                    </div>

                    <div className="border-l-2 border-[#1f6651] pl-3.5 py-0.5 text-left">
                      <Utensils className="mb-1.5 h-4 w-4 text-[#1f6651]" aria-hidden="true" />
                      <div className="text-xs leading-snug">
                        <strong className="block text-xs sm:text-[13px] font-bold text-[#1c1917]">3M+ Daily Meals</strong>
                        <span className="mt-0.5 block text-[11px] leading-4 text-stone-500">Annapoorna Nutrition</span>
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

      {/* Speaker Nominations & Applications */}
      <section className="section-reveal py-20 bg-[#f7f4ec] border-b border-[#e6dfd1]">
        <Container size="default">
          <div className="bg-[#ffffff] rounded-3xl p-8 sm:p-12 border border-[#e6dfd1] shadow-xs max-w-4xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f7f4ec] border border-[#dfd6c4] flex items-center justify-center text-[#143e30] mx-auto">
              <Mic2 className="w-6 h-6 text-[#c25e38]" />
            </div>

            <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-[#1c1917] tracking-tight">
              Recommend a Speaker or <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c25022] via-[#e87042] to-[#d68c45]">Apply to Mentor</span>
            </h3>

            <p className="text-sm sm:text-base text-[#4a5752] max-w-2xl mx-auto leading-relaxed">
              Are you an experienced founder, agronomist, public health expert, angel investor, or academic researcher passionate about grassroots youth entrepreneurship? We welcome nominations for our sector roundtables.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Button href={`mailto:${EVENT_METADATA.contactEmail}?subject=Speaker%20Nomination`} variant="primary" size="md">
                <Mail className="w-4 h-4 mr-2" />
                <span>Submit Speaker Nomination</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

