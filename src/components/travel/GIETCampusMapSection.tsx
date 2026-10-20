"use client";

import React, { useState } from "react";
import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { Container } from "../common/Container";
import { EVENT_METADATA } from "@/data/eventData";

export function GIETCampusMapSection() {
  const [copied, setCopied] = useState(false);

  const fullAddress = EVENT_METADATA.venueFullAddress ?? "GIET University, Gunupur, Rayagada, Odisha - 765022";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=GIET+University+Gunupur+Odisha+765022";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#faf8f4] border-b border-[#e6dfd1]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Content (No button, clean typography) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <h2 className="font-serif font-black text-2xl sm:text-3.5xl text-[#1c1917] tracking-tight">
                GIET University Campus, Gunupur
              </h2>
              <p className="text-xs sm:text-sm text-[#57534e] mt-2 leading-relaxed">
                The confirmed summit venue is the GIET University campus at Gobriguda, Po-Kharling, in Gunupur. Use the complete address below for navigation.
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-[#292524] pt-1">
              <MapPin className="w-4 h-4 text-[#e87042] shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">{fullAddress}</span>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="ml-2.5 text-xs font-semibold text-[#c25022] hover:underline cursor-pointer"
                >
                  {copied ? (
                    <span className="text-emerald-700 font-bold">✓ Copied</span>
                  ) : (
                    "Copy Address"
                  )}
                </button>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#a74e2d] px-4 text-sm font-bold text-white transition hover:bg-[#8f4025]"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get directions
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <p className="border-t border-[#e8dfd3] pt-4 text-xs leading-5 text-[#78716c]">
              Map location and address are provided for navigation. Use the travel section below to choose an arrival route.
            </p>
          </div>

          {/* Right: Clean Google Maps Embed (No buttons, no picture) */}
          <div className="lg:col-span-6">
            <div className="w-full h-[320px] sm:h-[360px] md:h-[390px] rounded-2xl overflow-hidden border border-[#e6dfd1] shadow-sm bg-[#ede7db]">
              <iframe
                title="GIET University Campus Location Map"
                src="https://maps.google.com/maps?q=GIET%20University%2C%20Gunupur%2C%20Odisha%20765022&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
