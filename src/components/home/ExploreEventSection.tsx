import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

const EXPLORE_CARDS = [
  {
    label: "Startups & Junicorns",
    heading: "300+ Founders & Pitches",
    body: "Early-stage startups and student innovators (Junicorns) from across India compete before investors across eight high-growth sectors.",
    image: "/images/explore-founders-showcase.jpg",
    imageAlt: "Confident startup founder presenting keynote pitch on stage before investors and audience",
    href: "/startups",
    cta: "Meet the Startups",
    accent: "#e87042",
    accentLight: "#fff5f0",
  },
  {
    label: "Speakers & Leaders",
    heading: "Industry Visionaries",
    body: "Accomplished founders, investors, policy makers, and thought leaders shaping India's next decade of entrepreneurship.",
    image: "/images/explore-keynote-speakers-2026.jpg",
    imageAlt: "Keynote speaker addressing delegates at ISF Jathara",
    href: "/speakers",
    cta: "View Speakers",
    accent: "#9e792c",
    accentLight: "#fdf8ed",
  },
  {
    label: "Programme & Roundtables",
    heading: "3 Days of Engagement",
    body: "A curated agenda of keynotes, investor roundtables, workshops, networking sessions, and the Dandakaranya forest trek.",
    image: "/images/explore-roundtable-panel-2026.jpg",
    imageAlt: "Executive roundtable and panel discussion at ISF Startup Jathara",
    href: "/programme",
    cta: "Explore Programme",
    accent: "#1c6651",
    accentLight: "#f0f7f4",
  },
];

export function ExploreEventSection() {
  return (
    <section
      aria-label="Explore the Event: Startups, Speakers, Programme"
      className="section-reveal py-20 sm:py-28 bg-[#fcfbf8] border-b border-[#e6dfd1]"
    >
      <Container size="wide">
        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-4 h-px bg-[#c25e38]" aria-hidden="true" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">
              Explore the Event
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-[2.5rem] text-[#1c1917] tracking-tight leading-[1.08]">
              What Awaits You
            </h2>
            <p className="text-sm text-[#78716c] max-w-[240px] leading-relaxed sm:text-right shrink-0">
              Discover every dimension of ISF Startup Jathara 2026.
            </p>
          </div>
        </div>

        {/* Asymmetric layout: featured card + two stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 lg:gap-5">
          {/* Featured card (first) */}
          <Link
            href={EXPLORE_CARDS[0].href}
            className="group relative rounded-2xl overflow-hidden bg-white border border-[#e6dfd1] hover:border-[#c8c0b2] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-56 sm:h-72 md:h-[22rem] overflow-hidden">
              <Image
                src={EXPLORE_CARDS[0].image}
                alt={EXPLORE_CARDS[0].imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 57vw"
                className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span
                  className="inline-block mb-2.5 px-2.5 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest"
                  style={{ backgroundColor: EXPLORE_CARDS[0].accent + "dd" }}
                >
                  {EXPLORE_CARDS[0].label}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white leading-snug">
                  {EXPLORE_CARDS[0].heading}
                </h3>
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
              <p className="text-sm text-[#57534e] leading-relaxed flex-1">
                {EXPLORE_CARDS[0].body}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#103327] group-hover:text-[#c25e38] transition-colors pt-1">
                <span>{EXPLORE_CARDS[0].cta}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Stacked right cards */}
          <div className="flex flex-col gap-4">
            {EXPLORE_CARDS.slice(1).map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex-1 relative rounded-2xl overflow-hidden bg-white border border-[#e6dfd1] hover:border-[#c8c0b2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Compact image strip */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 43vw"
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/55" />
                  <span
                    className="absolute bottom-3 left-4 inline-block px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: card.accent + "cc" }}
                  >
                    {card.label}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#1c1917] leading-snug group-hover:text-[#103327] transition-colors">
                    {card.heading}
                  </h3>
                  <p className="text-xs text-[#78716c] leading-relaxed flex-1">
                    {card.body}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#103327] group-hover:text-[#c25e38] transition-colors mt-1">
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
