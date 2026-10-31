import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Calendar, 
  Mail, 
  Phone 
} from "lucide-react";
import { EVENT_METADATA } from "@/data/eventData";
import { Container } from "../common/Container";
import { CopyrightYear } from "./CopyrightYear";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#2b2e38] bg-[#0b0c10] text-[#d6d0c7]">
      {/* Subtle warm decorative glow */}
      <div 
        className="pointer-events-none absolute right-1/4 top-0 h-40 w-80 rounded-full bg-[#e87042]/10 blur-3xl"
        aria-hidden="true" 
      />

      {/* Main Concise Footer Content */}
      <div className="relative py-8 sm:py-10">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-y-0">
            {/* Column 1: Identity & Summit Details */}
            <div className="space-y-4 lg:pr-8">
              <Link
                href="/"
                className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] rounded-xl w-fit"
                aria-label="ISF Startup Jathara 2026 Homepage"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#dfd6c4] flex items-center justify-center p-1 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/logos/isf-logo.webp"
                    alt="ISF Logo"
                    width={26}
                    height={26}
                    className="max-h-6 max-w-6 w-auto h-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-black text-base text-[#fcfbf8] tracking-tight group-hover:text-[#e87042] transition-colors leading-tight">
                    ISF STARTUP JATHARA 2026
                  </h3>
                  <p className="text-[11px] text-[#e87042] font-semibold tracking-wide uppercase leading-tight">
                    Startup Jathara @ Dandakaranya
                  </p>
                </div>
              </Link>

              <p className="max-w-xs text-xs leading-relaxed text-[#a8a29e]">
                National entrepreneurship &amp; grassroots innovation summit convening in South Odisha.
              </p>

              <div className="space-y-2.5 pt-1 text-xs text-[#d6d0c7]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#e87042] flex-shrink-0" />
                  <span>17–20 December 2026</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#d68c45] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://maps.google.com/?q=GIET+University+Gunupur+Odisha+765022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#e87042] transition-colors leading-relaxed"
                  >
                    GIET University Campus, Goboriguda, Po-Kharling, Gunupur, Dist-Rayagada, Odisha - 765022, India
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e87042]">
                <span className="h-px w-5 bg-[#e87042]/70" aria-hidden="true" />
                Explore
              </h4>
              <ul className="space-y-2.5 text-xs text-[#a8a29e]">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Summit
                  </Link>
                </li>
                <li>
                  <Link href="/programme" className="hover:text-white transition-colors">
                    3-Day Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/startups" className="hover:text-white transition-colors">
                    Startups &amp; Junicorn
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="hover:text-white transition-colors">
                    Investors &amp; VCs
                  </Link>
                </li>
                <li>
                  <Link href="/speakers" className="hover:text-white transition-colors">
                    Speakers &amp; Mentors
                  </Link>
                </li>
                <li>
                  <Link href="/venue" className="hover:text-white transition-colors">
                    Venue &amp; Stays
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Participation */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e87042]">
                <span className="h-px w-5 bg-[#e87042]/70" aria-hidden="true" />
                Participation
              </h4>
              <ul className="space-y-2.5 text-xs text-[#a8a29e]">
                <li>
                  <a href="https://register.startupjathara.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                    <span>Register</span>
                    <span className="text-[9px] bg-emerald-900/70 text-emerald-300 px-1 py-0.2 rounded border border-emerald-500/30">Free</span>
                  </a>
                </li>
                <li>
                  <a href="https://register.startupjathara.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Founder Pitch Application
                  </a>
                </li>
                <li>
                  <a href="https://register.startupjathara.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Investor Delegation Seat
                  </a>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white transition-colors">
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    Summit FAQs
                  </Link>
                </li>
              </ul>
              <div className="mt-6 border-t border-[#232733] pt-4 text-xs">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#e87042]">
                  Printing Material
                </p>
                <p className="mt-1 text-[#d6d0c7]">
                  Mr. Rajendra Kumar Patro
                </p>
                <a
                  href="mailto:rajurajpatro@gmail.com"
                  className="mt-1.5 flex min-w-0 items-start gap-2 text-[11px] text-[#a8a29e] transition-colors hover:text-[#e87042]"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e87042]" />
                  <span className="min-w-0 break-all">rajurajpatro@gmail.com</span>
                </a>
                <div className="mt-1.5 flex items-start gap-2 text-[11px] text-[#a8a29e]">
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d68c45]" />
                  <span className="flex flex-wrap gap-x-2 gap-y-0.5">
                    <a href="tel:+919438765251" className="hover:text-[#e87042] transition-colors">+91 94387 65251</a>
                    <span className="text-[#57534e]">•</span>
                    <a href="tel:+917735745518" className="hover:text-[#e87042] transition-colors">+91 77357 45518</a>
                  </span>
                </div>
              </div>
            </div>

            {/* Column 4: Contact & Secretariat */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e87042]">
                <span className="h-px w-5 bg-[#e87042]/70" aria-hidden="true" />
                Contact
              </h4>
              <div className="space-y-2.5 text-xs text-[#a8a29e]">
                <p className="leading-relaxed">
                  Speaker nominations, delegate inquiries &amp; travel coordination:
                </p>
                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#e87042] shrink-0" />
                    <a
                      href={`mailto:${EVENT_METADATA.contactEmail}`}
                      className="text-white hover:text-[#e87042] transition-colors"
                    >
                      {EVENT_METADATA.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d68c45] shrink-0" />
                    <a
                      href={`tel:${EVENT_METADATA.helplinePhone.replace(/\s+/g, "")}`}
                      className="text-white hover:text-[#e87042] transition-colors"
                    >
                      {EVENT_METADATA.helplinePhone}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#232733]">
                  <a
                    href={`mailto:${EVENT_METADATA.contactEmail}?subject=Secretariat%20Inquiry`}
                    className="inline-flex items-center text-[11px] font-semibold text-[#e87042] hover:text-[#f7a07a] transition-colors"
                  >
                    Contact Secretariat →
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Compact Copyright & Legal Bar */}
          <div className="mt-8 flex flex-col gap-3 border-t border-[#232733] pt-4 text-[11px] text-[#78716c] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © <CopyrightYear /> {EVENT_METADATA.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#78716c] sm:order-2">
              <span>Built by</span>
              <a
                href="https://mdfaizaanrazakhan.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#d6d0c7] transition-colors hover:text-[#e87042] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10]"
              >
                MD Faizaan Raza Khan
              </a>
              <span aria-hidden="true">&amp;</span>
              <a
                href="https://focus-trigger-automation-website.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#d6d0c7] transition-colors hover:text-[#e87042] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e87042] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10]"
              >
                Arush Kumar <span className="text-[#a8a29e]">(FocusTrigger Automation)</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
