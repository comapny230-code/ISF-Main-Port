import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";

export function GatewayCTA() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-[#0c0d12] via-[#141620] to-[#090a0e] text-[#fcfbf8] relative overflow-hidden border-t border-[#232733]">
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-[#e87042]/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#e5c158]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <Container size="default" className="relative z-10 text-center">
        <h2 className="font-serif font-black text-2xl sm:text-4xl md:text-5xl text-[#fcfbf8] tracking-tight max-w-2xl mx-auto leading-tight">
          Be Part of India&apos;s Grassroots Innovation Gathering
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#d6d0c7] max-w-xl mx-auto leading-relaxed">
          Whether you are building a startup, investing in emerging talent, or joining as a delegate, registrations are open for December 2026.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Button
            href="https://isf-test.vercel.app/"
            variant="gold"
            size="lg"
            className="font-bold text-sm sm:text-base shadow-lg"
          >
            <span>Register for Summit</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            href="/programme"
            variant="outline"
            size="lg"
            className="text-[#fcfbf8] border-[#dfd6c4]/40 hover:bg-[#1a1d27] hover:border-[#dfd6c4] text-sm sm:text-base"
          >
            <span>Explore 3-Day Programme</span>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8c887f]">
          <span>18–20 December 2026</span>
          <span>•</span>
          <span>GIET University, Gunupur, Odisha</span>
          <span>•</span>
          <span>ISF • GIET • IncubateX</span>
        </div>
      </Container>
    </section>
  );
}
