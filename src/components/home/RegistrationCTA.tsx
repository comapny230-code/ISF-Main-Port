import React from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Container } from "../common/Container";

export function RegistrationCTA() {
  return (
    <section
      aria-label="Be Part of the Jathara, Registration"
      className="section-reveal py-20 sm:py-24 bg-[#0d281e] text-white relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[300px] bg-[#e87042]/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#d6b25e]/12 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d6b25e]/30 to-transparent" />

      <Container size="default" className="relative z-10 text-center">


        {/* Heading */}
        <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.08] max-w-3xl mx-auto">
          Be Part of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7c89f] via-[#e87042] to-[#d68c45]">
            Jathara
          </span>
        </h2>

        {/* Supporting line */}
        <p className="mt-4 text-sm sm:text-base text-[#b8c8be] max-w-lg mx-auto leading-relaxed font-normal">
          Whether you are a founder, investor, or ecosystem builder, the
          Jathara awaits you. Join India&apos;s grassroots entrepreneurship gathering
          this December in Dandakaranya forest, Odisha.
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://register.startupjathara.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e87042] to-[#d06030] text-white font-bold text-sm shadow-[0_6px_24px_rgba(232,112,66,0.40)] hover:shadow-[0_10px_32px_rgba(232,112,66,0.60)] hover:from-[#f07846] hover:to-[#d96a38] active:scale-95 transition-all duration-200"
          >
            <span>Register</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Meta info bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#a8c4b8] font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#e87042]" />
            17–20 December 2026
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#e87042]" />
            GIET University, Gunupur, Odisha
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="text-[#a8c4b8]">ISF · GIET · IncubateX</span>
        </div>
      </Container>
    </section>
  );
}
