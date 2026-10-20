import React from "react";
import { ArrowRight } from "lucide-react";
import { FAQ_ITEMS, EVENT_METADATA } from "@/data/eventData";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { FAQAccordion } from "../faq/FAQAccordion";
import { Button } from "../common/Button";

export function HomeFAQ() {
  const homeFaqs = FAQ_ITEMS.slice(0, 4);

  return (
    <section className="py-14 sm:py-20 bg-[#faf7f2] border-b border-[#e8dfd3]">
      <Container size="default">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Simple answers to common questions about attending, registering, and reaching the venue."
        />

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={homeFaqs} />

          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#f5efe6] border border-[#e8dfd3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-serif font-bold text-base text-[#1c1917]">
                Have More Questions?
              </h4>
              <p className="text-xs sm:text-sm text-[#57534e] mt-0.5">
                Check our full FAQ list or speak directly with the organizing team.
              </p>
            </div>

            <div className="flex flex-col min-[420px]:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Button href="/faq" variant="outline" size="sm" className="w-full sm:w-auto justify-center">
                <span>All FAQs</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
              <Button href={`mailto:${EVENT_METADATA.contactEmail}`} variant="primary" size="sm" className="w-full sm:w-auto justify-center">
                <span>Contact Secretariat</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
