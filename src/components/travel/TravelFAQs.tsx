"use client";

import { useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { EVENT_METADATA } from "@/data/eventData";
import { Container } from "../common/Container";

const questions = [
  {
    question: "Is event-organized transportation confirmed?",
    answer: "A public shuttle or pickup schedule has not been confirmed. Do not plan around an event transfer unless the organizers send you written pickup details.",
  },
  {
    question: "Is on-campus accommodation included?",
    answer: "On-campus accommodation is not guaranteed. Confirm eligibility, room allocation, and check-in instructions with the event team before relying on a campus stay.",
  },
  {
    question: "What should I reconfirm before departure?",
    answer: "Recheck your train or flight, onward transfer, hotel booking, arrival time, and live route conditions. Save the complete GIET University address so it is available during the final approach.",
  },
  {
    question: "Who should I contact if my arrival plan changes?",
    answer: "Use the official event phone or email shown here. For hotel changes, contact the property directly using the number in the accommodation section.",
  },
];

export function TravelFAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#102b23] py-14 text-white sm:py-20">
      <Container size="default">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1c77f]">Practical assistance</p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight sm:text-4xl">Before you travel</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Transport details can change. Use these confirmed planning points, then check your specific flight, train, hotel, and transfer before departure.
            </p>
            <div className="mt-7 flex flex-col gap-3 text-sm">
              <a href={`tel:${EVENT_METADATA.helplinePhone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#e1c77f]">
                <Phone className="h-4 w-4" aria-hidden="true" /> {EVENT_METADATA.helplinePhone}
              </a>
              <a href={`mailto:${EVENT_METADATA.contactEmail}?subject=Startup%20Jathara%20travel%20assistance`} className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#e1c77f]">
                <Mail className="h-4 w-4" aria-hidden="true" /> {EVENT_METADATA.contactEmail}
              </a>
            </div>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {questions.map((item, index) => {
              const open = index === openIndex;
              return (
                <div key={item.question}>
                  <button type="button" aria-expanded={open} onClick={() => setOpenIndex(open ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left">
                    <span className="font-serif text-lg font-bold leading-snug">{item.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#e1c77f] transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {open && <p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-white/72">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
