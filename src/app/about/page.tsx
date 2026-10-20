import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Building2,
  GraduationCap,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import {
  GIET_LEADERSHIP_PROFILES,
  GIET_VERIFIED_MILESTONES,
  GIET_VERIFIED_STATS,
  GIET_ACADEMIC_SCHOOLS,
  GIET_INNOVATION_ECOSYSTEM
} from "@/data/leadershipData";

export const metadata: Metadata = {
  title: "About GIET University | ISF Startup Jathara 2026",
  description: "Learn about GIET University's 28-year legacy of learning, research and innovation in Gunupur, Odisha, and its role as the official host institution for ISF Startup Jathara 2026 @ Dandakaranya.",
};

// Accent colors for milestone cards — cycle through 3 tones
const MILESTONE_ACCENTS = [
  { bar: "bg-[#e87042]", watermark: "text-[#fde8dc]" },
  { bar: "bg-[#256f57]", watermark: "text-[#ddeee7]" },
  { bar: "bg-[#d6b25e]", watermark: "text-[#f5ead0]" },
  { bar: "bg-[#e87042]", watermark: "text-[#fde8dc]" },
  { bar: "bg-[#1b5341]", watermark: "text-[#dde8e2]" },
  { bar: "bg-[#c25e38]", watermark: "text-[#fce5d9]" },
];

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/grassroots-dandakaranya-summit.jpg"
            alt="Igniting Grassroots Potential in Dandakaranya"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-95"
          />
          <div className="absolute inset-0 z-10 bg-black/45 sm:bg-black/40" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/35 to-[#0c0d12]/60" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e87042]/15 rounded-full blur-[140px] pointer-events-none z-10" />
        </div>
        <Container size="default" className="relative z-20 text-center">
          <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Igniting Grassroots Potential in Dandakaranya
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#ffedd5] font-serif font-medium max-w-2xl mx-auto drop-shadow-sm">
            Where Grassroots Youth, Tribal Knowledge &amp; Venture Capital Converge.
          </p>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#d6d0c7] max-w-2xl mx-auto leading-relaxed">
            ISF Startup Jathara 2026 is an intentional enterprise movement designed to decentralize India&apos;s startup economy, bringing global capital and institutional mentorship to the rural and tribal communities of South Odisha.
          </p>
        </Container>
      </section>

      {/* ── 2. CORE THESIS ──────────────────────────────────────── */}
      <section className="section-reveal py-16 sm:py-20 bg-[#fcfbf8] border-b border-[#e6dfd1]">
        <Container size="default">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">

            {/* Left: header + editorial text + Jathara Signifies */}
            <div className="lg:col-span-7 space-y-6">
              {/* Section eyebrow & title */}
              <div>
                <div className="flex items-center gap-2 mb-3.5">
                  <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">The Summit Thesis</span>
                </div>
                <h2 className="font-serif font-black text-2xl sm:text-4xl md:text-[2.65rem] text-[#1c1917] tracking-tight leading-[1.1] max-w-2xl">
                  Why Startup Jathara is Different From{" "}
                  <span className="text-[#c25022]">Conventional Summits</span>
                </h2>
                <p className="mt-3.5 text-sm sm:text-base text-[#57534e] max-w-xl leading-relaxed">
                  Grounding national investment dialogue in rural realities, tribal wisdom, and grassroots engineering.
                </p>
              </div>

              {/* Editorial paragraphs */}
              <div className="space-y-4">
                <p className="text-base text-[#4a5752] leading-relaxed">
                  Most entrepreneurship summits occur within glass-walled metropolitan auditoriums, far removed from where raw materials originate, where tribal traditions preserve bio-diverse knowledge, and where grassroots challenges demand inventive engineering.
                </p>
                <p className="text-base text-[#4a5752] leading-relaxed">
                  <strong>Startup Jathara @ Dandakaranya</strong> inverts this dynamic. By bringing leading investors, venture capitalists, corporate Global Capability Center (GCC) heads, and technology luminaries directly to GIET University in Gunupur, the summit grounds national dialogue in rural realities.
                </p>
              </div>

              {/* Jathara Signifies — dark feature box */}
              <div className="relative rounded-2xl bg-[#0d281e] p-5 sm:p-6 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-36 h-36 bg-[#e87042]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-[#e87042] shrink-0" />
                  <h3 className="font-serif font-bold text-base text-white">What &apos;Jathara&apos; Signifies</h3>
                </div>
                <div className="flex gap-3">
                  <div className="w-0.5 rounded-full bg-[#e87042] shrink-0" aria-hidden="true" />
                  <p className="text-sm text-white/75 leading-relaxed">
                    In regional tradition, a <em className="text-white/90 not-italic font-medium">Jathara</em> is a vibrant collective pilgrimage and festival of celebration, solidarity, and trade. Startup Jathara adopts this cultural ethos — transforming venture capital and startup pitching into a communal celebration of ingenuity, indigenous knowledge, and resilience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: dark objectives card (centered vertically) */}
            <div className="lg:col-span-5">
              <div className="bg-[#103327] rounded-3xl p-6 sm:p-8 space-y-5 shadow-[0_12px_40px_rgba(16,51,39,0.12)] border border-[#164837]">
                <h3 className="font-serif font-bold text-lg text-white border-b border-white/10 pb-3.5">
                  Summit Guiding Objectives
                </h3>
                <ul className="space-y-4">
                  {[
                    { num: "01", bold: "Grassroots Scouting:", rest: "Uncover breakthrough ideas developed by rural youth, women self-help collectives, and student innovators." },
                    { num: "02", bold: "Venture Capital Access:", rest: "Facilitate meaningful pitch opportunities before accredited angel syndicates and venture fund partners." },
                    { num: "03", bold: "Cross-Border Linkages:", rest: "Partner with GCCs and international foundation networks to support rural scale-ups." },
                    { num: "04", bold: "Ecological Consciousness:", rest: "Integrate sustainable forest practices, non-timber forest produce value chains, and eco-materials." },
                  ].map((item) => (
                    <li key={item.num} className="flex gap-3.5">
                      <span className="font-serif font-black text-sm text-[#e87042] shrink-0 w-5 mt-0.5">{item.num}</span>
                      <p className="text-sm text-white/75 leading-relaxed">
                        <strong className="font-bold text-white/95">{item.bold}</strong>{" "}{item.rest}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </Container>
      </section>

      {/* ── 3. GIET LEGACY ──────────────────────────────────────── */}
      <section id="giet-legacy" className="section-reveal py-20 sm:py-24 bg-[#ffffff] border-b border-[#e6dfd1]">
        <Container size="default">

          {/* ─ Section header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#c8bfb0]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#78716c]">Host Institution</span>
              <span className="h-px w-6 bg-[#c8bfb0]" aria-hidden="true" />
            </div>
            <h2 className="font-serif font-black text-2xl sm:text-4xl md:text-[2.6rem] text-[#1c1917] tracking-tight leading-[1.1]">
              A Legacy of Learning, Research &amp;{" "}
              <span className="text-[#c25022]">Innovation</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#57534e] max-w-xl mx-auto leading-relaxed">
              Founded in 1997 in Gunupur, Odisha — fostering multidisciplinary scholarship, advanced research, and grassroots empowerment.
            </p>
          </div>

          {/* ─ Institutional overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-t border-b border-[#e6dfd1]/80 py-10 mb-14">

            {/* Left: narrative */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c25022]">
                Institutional Founding &amp; Evolution
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1c1917] leading-tight">
                From Technical Pioneer to Premier State Private University
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
                Established in 1997 by the <strong>Vidya Bharati Educational Trust</strong> in Gunupur, GIET began as an AICTE-approved pioneer in technical and engineering education in Eastern India.
              </p>
              <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
                In 2018, the Odisha Legislative Assembly conferred full State Private University status via the <strong>GIET University Act, 2018</strong>, with UGC Section 2(f) incorporation.
              </p>
              <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed">
                Set across a <strong>113.03-acre eco-friendly campus</strong> along the scenic Bansadhara River, the university anchors advanced research labs, academic excellence, and grassroots rural incubation.
              </p>
            </div>

            {/* Right: identity card — clean elevated */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#e6dfd1] shadow-[0_4px_24px_rgba(20,62,48,0.07)] overflow-hidden">

                {/* Top accent stripe */}
                <div className="h-1 bg-gradient-to-r from-[#c25e38] via-[#e87042] to-[#d6b25e]" />

                {/* Header: logo + name */}
                <div className="px-6 sm:px-7 pt-6 pb-5 flex items-center gap-4 border-b border-[#f0ebe2]">
                  <div className="w-14 h-14 rounded-xl bg-[#f7f4ec] border border-[#ede7db] flex items-center justify-center p-2 shrink-0">
                    <Image
                      src="/logos/giet-logo.png"
                      alt="GIET University Official Crest"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c25022] block mb-0.5">
                      Host Academic Campus
                    </span>
                    <strong className="block font-serif font-bold text-xl text-[#103327] leading-tight">
                      GIET University
                    </strong>
                    <span className="text-xs text-[#78716c] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#e87042] shrink-0" />
                      Gunupur, Rayagada, Odisha
                    </span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 divide-x divide-[#f0ebe2] bg-[#faf8f5] border-b border-[#f0ebe2]">
                  {[
                    { val: "113+", label: "Acres Campus" },
                    { val: "4,000+", label: "Students" },
                    { val: "300+", label: "Faculty" },
                  ].map((s) => (
                    <div key={s.label} className="text-center py-5 px-2">
                      <div className="font-serif font-black text-2xl text-[#c25022] leading-none">{s.val}</div>
                      <div className="text-[11px] text-[#78716c] font-medium mt-1 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Meta rows */}
                <div className="px-6 sm:px-7 py-5 space-y-0 text-xs divide-y divide-[#f0ebe2]">
                  <div className="flex items-baseline justify-between gap-4 pb-3.5">
                    <span className="text-[#78716c] font-medium shrink-0">Founding Body</span>
                    <span className="font-semibold text-[#1c1917] text-right">Vidya Bharati Trust (1997)</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 pt-3.5 pb-3.5">
                    <span className="text-[#78716c] font-medium shrink-0">Charter &amp; UGC</span>
                    <span className="font-semibold text-[#1c1917] text-right">GIET Act 2018 • UGC Sec 2(f)</span>
                  </div>
                  <div className="pt-3.5 space-y-2.5">
                    <span className="text-[#78716c] font-medium block">Statutory Accreditations</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["UGC Act 1956", "AICTE", "NAAC", "NBA", "DSIR (SIRO)", "ICAR"].map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#f0f5f2] text-[#103327] border border-[#c9ddd4]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 sm:px-7 py-4 border-t border-[#f0ebe2] bg-[#faf8f5]">
                  <a
                    href="https://www.giet.edu/about-giet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#c25022] hover:text-[#e87042] transition-colors group"
                  >
                    <span>Visit Official GIET Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* ─ Stats strip */}
          <div className="rounded-2xl bg-[#f7f4ec] border border-[#ede7db] px-6 sm:px-10 py-7 mb-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {GIET_VERIFIED_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#8c671b] leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#78716c] leading-snug">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─ Milestones */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">Institutional History</span>
            </div>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight mb-1.5">
              Key Institutional Milestones
            </h3>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mb-8">
              Verified historical chronology sourced from published university records &amp; government gazettes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GIET_VERIFIED_MILESTONES.map((item, idx) => {
                const simplifiedData: Record<string, { tag: string; shortTitle: string; easyDesc: string }> = {
                  "1997": {
                    tag: "Campus Foundation",
                    shortTitle: "Founding of GIET Gunupur",
                    easyDesc: "Established by Vidya Bharati Educational Trust with AICTE approval, pioneering quality engineering education in South Odisha."
                  },
                  "2005–2026": {
                    tag: "Quality Benchmark",
                    shortTitle: "NAAC 'A' & NBA Accreditations",
                    easyDesc: "Continuously accredited by NAAC and NBA across engineering disciplines for premier outcome-based technical education."
                  },
                  "2018": {
                    tag: "State University",
                    shortTitle: "Conferred Full University Status",
                    easyDesc: "Enacted under the GIET University Act, 2018 by the Odisha Legislative Assembly, celebrating 20+ years of academic excellence."
                  },
                  "2019": {
                    tag: "National Recognition",
                    shortTitle: "Formal UGC Enlistment (Sec 2f)",
                    easyDesc: "Officially incorporated into the recognized universities directory by the University Grants Commission (UGC), New Delhi."
                  },
                  "2020+": {
                    tag: "Innovation Hub",
                    shortTitle: "DSIR Research & Atal Incubator",
                    easyDesc: "Recognized by DSIR for scientific research; launched the Atal Community Innovation Centre (ACIC) and BIRAC biotech labs."
                  },
                  "2026": {
                    tag: "Summit Host",
                    shortTitle: "Host Campus for Startup Jathara",
                    easyDesc: "Selected as official host campus for ISF Startup Jathara 2026, convening 5,000+ delegates, investors, and grassroots founders."
                  }
                };

                const info = simplifiedData[item.year] || {
                  tag: "Milestone",
                  shortTitle: item.title,
                  easyDesc: item.description
                };

                const displayYear = item.year === "2005–2026" ? "2005+" : item.year;
                const accent = MILESTONE_ACCENTS[idx % MILESTONE_ACCENTS.length];

                return (
                  <div
                    key={idx}
                    className="relative p-6 sm:p-7 rounded-2xl bg-white border border-[#e6dfd1] hover:shadow-md transition-all duration-200 overflow-hidden group flex flex-col"
                  >
                    {/* Colored top accent bar */}
                    <div className={`absolute top-0 inset-x-0 h-1 rounded-t-2xl ${accent.bar}`} />
                    {/* Year watermark */}
                    <span className={`absolute right-3 bottom-1 font-serif font-black text-[4.5rem] sm:text-[5.5rem] leading-none select-none pointer-events-none ${accent.watermark}`}>
                      {displayYear}
                    </span>
                    {/* Tag */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#78716c] mb-3 block">
                      {info.tag}
                    </span>
                    {/* Title */}
                    <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1c1917] leading-snug group-hover:text-[#c25022] transition-colors mb-2.5">
                      {info.shortTitle}
                    </h4>
                    {/* Description */}
                    <p className="text-sm text-[#44403c] leading-relaxed relative z-10">
                      {info.easyDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─ Academic Schools */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">Academics</span>
            </div>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight mb-1.5">
              Academic Schools &amp; Research Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mb-8">
              A multi-disciplinary spectrum spanning engineering, agricultural research, life sciences, healthcare, and business administration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GIET_ACADEMIC_SCHOOLS.map((school, idx) => (
                <div
                  key={idx}
                  className="group flex gap-4 p-5 sm:p-6 rounded-2xl bg-[#faf8f4] border border-[#ede7db] hover:border-[#c25e38]/30 hover:bg-white transition-all duration-200"
                >
                  <div className="shrink-0 pt-0.5">
                    <span className="font-serif font-black text-2xl leading-none text-[#e87042]/20 group-hover:text-[#e87042]/35 transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 border-l border-[#e6dfd1] pl-4 group-hover:border-[#c25e38]/20 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c671b] block mb-1.5">
                      {school.badge}
                    </span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#103327] leading-snug">
                      {school.name}
                    </h4>
                    <p className="mt-2 text-xs text-[#57534e] leading-relaxed">
                      {school.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─ Innovation Centers */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">Innovation Infrastructure</span>
            </div>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight mb-1.5">
              Innovation, Incubation &amp; Technology Transfer
            </h3>
            <p className="text-xs sm:text-sm text-[#57534e] max-w-xl mb-8">
              Officially documented innovation centers connecting student innovators and community entrepreneurs with national funding and testbeds.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
              {GIET_INNOVATION_ECOSYSTEM.map((center, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl sm:rounded-2xl overflow-hidden border border-[#ede7db] bg-white hover:border-[#c25e38]/35 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Photo container */}
                  <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#0d281e]">
                    <Image
                      src={center.image}
                      alt={center.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Body content — fully visible, no clipping or ellipsis */}
                  <div className="p-3 sm:p-4.5 flex flex-col flex-1 bg-white">
                    <span className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider text-[#c25022] block mb-1">
                      {center.tag}
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm md:text-[15px] text-[#1c1917] leading-snug group-hover:text-[#c25022] transition-colors mb-1.5">
                      {center.title}
                    </h4>
                    <p className="text-[10.5px] sm:text-xs text-[#57534e] leading-relaxed">
                      {center.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─ Leadership */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">Institutional Leadership</span>
            </div>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight mb-1.5">
              GIET University Leadership Council
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <p className="text-xs sm:text-sm text-[#57534e] max-w-xl">
                Meet the visionaries, academic officers, and executive leaders guiding the institution.
              </p>
              <a
                href="https://www.giet.edu/leadership/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1c1917] bg-[#f7f4ec] hover:bg-[#ede7db] border border-[#dfd6c4] px-4 py-2 rounded-xl transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <span>Official GIET Leadership Directory</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#e87042]" />
              </a>
            </div>

            {/* 5 leader cards: 2 per row mobile, last centered */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 min-[380px]:gap-3 sm:gap-4">
              {GIET_LEADERSHIP_PROFILES.map((leader, index) => (
                <div
                  key={leader.id}
                  className={`bg-[#faf8f4] p-3 sm:p-5 rounded-2xl border border-[#ede7db] transition-all flex flex-col justify-between group shadow-xs ${
                    index === 4
                      ? "col-span-2 sm:col-span-1 w-[calc(50%-5px)] min-[380px]:w-[calc(50%-6px)] sm:w-full mx-auto"
                      : ""
                  }`}
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-white border border-[#ede7db]">
                      <Image
                        src={leader.imageSrc}
                        alt={`Portrait of ${leader.name}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover object-top transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#8c671b] block">
                        {leader.position}
                      </span>
                      <strong className="font-serif text-xs sm:text-sm text-[#103327] block leading-tight mt-0.5">
                        {leader.name}
                      </strong>
                    </div>
                  </div>
                  <p className="mt-2.5 sm:mt-3 text-[10px] sm:text-[11px] text-[#5c6e64] leading-relaxed">
                    {leader.summaryBio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─ Social Responsibility */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#e6dfd1] bg-white overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-px bg-[#c25e38]" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">
                    Social Responsibility
                  </span>
                </div>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#1c1917] tracking-tight leading-[1.1]">
                  Empowering Tribal Youth<br className="hidden sm:block" /> of Dandakaranya
                </h3>
                <p className="text-sm text-[#57534e] leading-[1.7]">
                  GIET University, located in Rayagada&apos;s tribal corridor, is committed to elevating indigenous and rural youth into confident leaders, scientists, and entrepreneurs.
                </p>
              </div>
              <div className="hidden md:flex items-center justify-end shrink-0">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#e87042]/25 bg-[#fff5f0] text-[#c25022] text-[11px] font-semibold tracking-wide">
                  Official Mission Mandate
                </span>
              </div>
            </div>

            <div className="mx-6 sm:mx-8 md:mx-10 mb-8 flex gap-3 sm:gap-4">
              <div className="w-1 rounded-full bg-[#e87042] shrink-0" aria-hidden="true" />
              <p className="font-serif italic text-base sm:text-lg text-[#2d2926] leading-relaxed">
                &ldquo;To support and uplift the meritorious students of this Tribal Area to represent as an Ambassador in all forums as a part of our social responsibility.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#e6dfd1] divide-y sm:divide-y-0 sm:divide-x divide-[#e6dfd1] bg-[#faf8f5]">
              <div className="flex items-start gap-3.5 p-6 sm:p-7">
                <div className="w-9 h-9 rounded-xl bg-[#fff0eb] flex items-center justify-center text-[#c25022] shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#1c1917]">Full Fee Waivers</h4>
                  <p className="mt-1 text-xs text-[#6b6560] leading-[1.65]">
                    Merit scholarships &amp; complete tuition assistance for indigenous tribal students.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-6 sm:p-7">
                <div className="w-9 h-9 rounded-xl bg-[#fff5eb] flex items-center justify-center text-[#a0620c] shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#1c1917]">Gandhi Public School</h4>
                  <p className="mt-1 text-xs text-[#6b6560] leading-[1.65]">
                    Free primary education &amp; modern learning resources for rural children.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-6 sm:p-7">
                <div className="w-9 h-9 rounded-xl bg-[#f0f7f4] flex items-center justify-center text-[#256f57] shrink-0 mt-0.5">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#1c1917]">Grassroots Incubation</h4>
                  <p className="mt-1 text-xs text-[#6b6560] leading-[1.65]">
                    Mentorship &amp; seed funding via Atal (ACIC) &amp; BIRAC biotech labs.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section>
    </div>
  );
}
