import Image from "next/image";
import { Building2, Cpu, ShieldCheck, Users } from "lucide-react";
import { Container } from "../common/Container";

const credentials = [
  {
    icon: Building2,
    label: "Founding Director",
    detail: "STPI — Built India's First IT Parks",
  },
  {
    icon: Cpu,
    label: "Deep-Tech Founder",
    detail: "PortalPlayer — Chips for Apple iPod (NVIDIA)",
  },
  {
    icon: ShieldCheck,
    label: "Government IT Advisor",
    detail: "Special Chief Secretary to CM, Andhra Pradesh",
  },
  {
    icon: Users,
    label: "Startup Patron",
    detail: "Co-Founder, Hyderabad Angels Network",
  },
];

export function ISFFounderSection() {
  return (
    <section
      aria-label="ISF Founder"
      className="section-reveal bg-[#f7f4ec] py-16 sm:py-20 border-b border-[#e6dfd1]"
    >
      <Container size="default">
        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-16 items-center">

          {/* Photo */}
          <div className="relative mx-auto w-56 sm:w-64 lg:w-full max-w-[320px] lg:max-w-[360px] mb-4 sm:mb-0">
            {/* Decorative background accent block */}
            <div
              className="absolute -bottom-2.5 -right-2.5 sm:-bottom-3 sm:-right-3 w-full h-full rounded-3xl bg-[#c25e38]/12 border border-[#c25e38]/25 -z-10"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_20px_50px_rgba(43,37,28,0.18)]">
              <Image
                src="/images/leadership/dr-ja-chowdary.webp"
                alt="Shri J.A. Chowdary — Founder & Chairman, International Startup Foundation"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1023px) 260px, 360px"
                className="object-cover object-center"
              />
            </div>

            {/* Elegant hanging VIP plaque badge below photo frame (never covers face) */}
            <div className="absolute -bottom-3 inset-x-0 flex justify-center z-10 pointer-events-none">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1c1917] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-lg border border-[#e87042]/35">
                Founder &amp; Chairman · ISF
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">
                The Visionary Behind the Jathara
              </span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#1c1917] tracking-tight leading-[1.1]">
              Shri J.A. Chowdary
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#7a5c28]">
              Founder & Chairman — International Startup Foundation (ISF)
            </p>

            <p className="mt-5 text-sm sm:text-[15px] leading-[1.8] text-[#4a4540] max-w-xl">
              Widely recognized as a prime architect of Cyberabad and HITEC City,
              Shri J.A. Chowdary has spent over three decades building India&apos;s technology
              ecosystem. Through ISF, he is now leading the movement to connect grassroots
              innovators across Bharat with global mentorship and venture capital.
            </p>

            {/* Credential row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map((c) => {
                const IconComponent = c.icon;
                return (
                  <div
                    key={c.label + c.detail}
                    className="flex items-center gap-3.5 rounded-xl border border-[#e3d9cc] bg-white px-4 py-3 shadow-[0_2px_8px_rgba(43,37,28,0.04)] hover:border-[#c25e38]/35 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#faf3ea] border border-[#ecdccb] flex items-center justify-center shrink-0 text-[#c25e38]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c25e38] block">
                        {c.label}
                      </span>
                      <span className="text-xs font-semibold text-[#2b251c] mt-0.5 block leading-snug">
                        {c.detail}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
