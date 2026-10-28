"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FAQ_ITEMS, EVENT_METADATA } from "@/data/eventData";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export function FAQPageClient() {

  return (
    <div className="w-full">
      {/* Editorial Header */}
      <section className="relative text-[#fcfbf8] py-16 sm:py-24 border-b border-[#232733] bg-[#0c0d12] overflow-hidden">
        {/* Background Image: faq-knowledge-hero.jpg */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/faq-knowledge-hero.webp"
            alt="ISF Startup Jathara Attendee Concierge & FAQ Pavilion"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/40 to-[#0c0d12]/60" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e87042]/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-[#fcfbf8] tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#e87042] via-[#f7c89f] to-[#e87042] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#dfd6c4] max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Everything you need to know about the Dandakaranya summit schedule, participation, transit hubs, and registration.
          </p>
        </Container>
      </section>

      {/* Main FAQ Area */}
      <section className="py-14 sm:py-20 bg-[#fcfbf8]">
        <Container size="default">
          {/* Accordion Results */}
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={FAQ_ITEMS} allowMultiple />

            {/* Assistance Card */}
            <div className="mt-14 p-8 rounded-3xl bg-[#f7f4ec] border border-[#ede7db] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1c1917]">
                  Still have questions?
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5752] mt-1">
                  Contact the International Startup Foundation Secretariat directly.
                </p>
              </div>

              <Button href={`mailto:${EVENT_METADATA.contactEmail}`} variant="primary" size="md" className="flex-shrink-0">
                <Mail className="w-4 h-4 mr-2" />
                <span>Contact Secretariat</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

