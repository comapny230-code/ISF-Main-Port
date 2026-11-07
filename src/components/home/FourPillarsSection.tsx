"use client";

import React, { useRef, useState } from "react";
import { Container } from "../common/Container";
import { Handshake } from "lucide-react";

/**
 * Bespoke 3D-styled Rocket Launch Icon for Junicorn Startup Showcase
 */
function JunicornRocketIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Soaring Rocket Body */}
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="m9 15-2 2" />
    </svg>
  );
}

/**
 * Bespoke 8-Petal Dialogue Rosette for Sectoral Roundtables
 */
function SectoralRosetteIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Central Table Hub */}
      <circle cx="12" cy="12" r="3" fill="#ffffff" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />

      {/* 8 Sectoral Dialogue Petals / Nodes radiating around hub */}
      {/* 0 deg & 180 deg */}
      <rect x="10.6" y="2.2" width="2.8" height="6.2" rx="1.4" />
      <rect x="10.6" y="15.6" width="2.8" height="6.2" rx="1.4" />
      {/* 90 deg & 270 deg */}
      <rect x="2.2" y="10.6" width="6.2" height="2.8" rx="1.4" />
      <rect x="15.6" y="10.6" width="6.2" height="2.8" rx="1.4" />
      {/* 45 deg diagonals */}
      <rect x="10.6" y="2.2" width="2.8" height="6.2" rx="1.4" transform="rotate(45 12 12)" />
      <rect x="10.6" y="15.6" width="2.8" height="6.2" rx="1.4" transform="rotate(45 12 12)" />
      <rect x="2.2" y="10.6" width="6.2" height="2.8" rx="1.4" transform="rotate(45 12 12)" />
      <rect x="15.6" y="10.6" width="6.2" height="2.8" rx="1.4" transform="rotate(45 12 12)" />
    </svg>
  );
}

/**
 * Bespoke Lush Evergreen / Canopy Tree for Dandakaranya Experience
 */
function ForestTreeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Cloud / Tree Canopy Contours */}
      <path d="M12 3a5.5 5.5 0 0 0-5.2 3.8A4.8 4.8 0 0 0 4 11.5a4.8 4.8 0 0 0 4.5 4.8h7a4.8 4.8 0 0 0 4.5-4.8 4.8 4.8 0 0 0-2.8-4.7A5.5 5.5 0 0 0 12 3z" fill="currentColor" fillOpacity="0.15" />
      {/* Tree Trunk */}
      <path d="M12 16.3V21" />
      <path d="M10 21h4" />
      {/* Internal branch lines */}
      <path d="M12 14l-2-2.5" />
      <path d="M12 13l2-2" />
    </svg>
  );
}

/**
 * ── BOTTOM ATMOSPHERIC VECTOR GRAPHICS ──
 */

// Card 1: Warm Topographic Dune Contours (Coral / Peach)
function DuneContoursGraphic() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 pointer-events-none overflow-hidden rounded-b-[24px]">
      <svg
        viewBox="0 0 300 100"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="card1DuneFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        {/* Base filled wave */}
        <path
          d="M 0 65 C 60 52, 140 85, 220 62 C 260 52, 285 58, 300 60 L 300 100 L 0 100 Z"
          fill="url(#card1DuneFill)"
        />

        {/* Topographic contour lines */}
        <path
          d="M -10 48 C 50 34, 130 72, 210 46 C 255 32, 280 40, 310 44"
          stroke="#ea580c"
          strokeWidth="1.2"
          strokeOpacity="0.32"
        />
        <path
          d="M -10 58 C 55 42, 135 78, 215 54 C 260 40, 285 48, 310 52"
          stroke="#ea580c"
          strokeWidth="1"
          strokeOpacity="0.28"
        />
        <path
          d="M -10 68 C 60 54, 140 86, 220 64 C 260 52, 285 58, 310 62"
          stroke="#ea580c"
          strokeWidth="1.3"
          strokeOpacity="0.4"
        />
        <path
          d="M -10 78 C 65 66, 145 92, 225 74 C 265 64, 290 70, 310 74"
          stroke="#ea580c"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <path
          d="M -10 88 C 70 78, 150 98, 230 82 C 270 74, 295 78, 310 82"
          stroke="#ea580c"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />
      </svg>
    </div>
  );
}

// Card 2: Golden Sand Dunes with Ridge Contours (Amber / Gold)
function SandDunesGraphic() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 pointer-events-none overflow-hidden rounded-b-[24px]">
      <svg
        viewBox="0 0 300 100"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="card2DuneBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="card2DuneFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d97706" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.34" />
          </linearGradient>
        </defs>

        {/* Back Dune */}
        <path
          d="M 0 54 C 80 34, 180 66, 300 38 L 300 100 L 0 100 Z"
          fill="url(#card2DuneBack)"
        />
        <path
          d="M 0 54 C 80 34, 180 66, 300 38"
          stroke="#d97706"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <path
          d="M 10 60 C 85 42, 180 72, 300 46"
          stroke="#d97706"
          strokeWidth="0.9"
          strokeOpacity="0.25"
        />

        {/* Front Dune */}
        <path
          d="M 0 74 C 90 58, 170 82, 300 62 L 300 100 L 0 100 Z"
          fill="url(#card2DuneFront)"
        />
        <path
          d="M 0 74 C 90 58, 170 82, 300 62"
          stroke="#d97706"
          strokeWidth="1.4"
          strokeOpacity="0.45"
        />
        <path
          d="M 0 83 C 95 68, 175 90, 300 71"
          stroke="#d97706"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
}

// Card 3: Concentric River Waves & Ripples (Mint / Teal)
function RiverRipplesGraphic() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 pointer-events-none overflow-hidden rounded-b-[24px]">
      <svg
        viewBox="0 0 300 100"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="card3RiverBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="card3RiverFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.32" />
          </linearGradient>
        </defs>

        {/* Back swell */}
        <path
          d="M 0 60 C 70 48, 140 70, 210 54 C 255 44, 280 50, 300 52 L 300 100 L 0 100 Z"
          fill="url(#card3RiverBack)"
        />
        <path
          d="M 0 60 C 70 48, 140 70, 210 54 C 255 44, 280 50, 300 52"
          stroke="#0d9488"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />

        {/* Front wave */}
        <path
          d="M 0 76 C 65 62, 135 86, 210 68 C 255 58, 280 64, 300 66 L 300 100 L 0 100 Z"
          fill="url(#card3RiverFront)"
        />
        <path
          d="M 0 76 C 65 62, 135 86, 210 68 C 255 58, 280 64, 300 66"
          stroke="#0d9488"
          strokeWidth="1.4"
          strokeOpacity="0.45"
        />
        <path
          d="M 0 85 C 70 73, 140 94, 215 78 C 260 67, 285 72, 300 75"
          stroke="#0d9488"
          strokeWidth="1"
          strokeOpacity="0.32"
        />
      </svg>
    </div>
  );
}

// Card 4: Pine Forest Silhouettes & Rolling Hills (Forest Green)
function PineForestGraphic() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 pointer-events-none overflow-hidden rounded-b-[24px]">
      <svg
        viewBox="0 0 300 100"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="card4HillBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="card4HillFront" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#15803d" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.36" />
          </linearGradient>
        </defs>

        {/* Background Hill */}
        <path
          d="M 0 70 C 80 62, 150 48, 300 32 L 300 100 L 0 100 Z"
          fill="url(#card4HillBack)"
        />

        {/* Pine Tree Forest Silhouette along the right ascending hill ridge */}
        {/* Layer 1 (Back, smaller) */}
        <g opacity="0.4">
          <path d="M 172 48 L 175 43 L 178 48 Z M 171 53 L 175 46 L 179 53 Z M 174 53 L 174 55 L 176 55 L 176 53 Z" fill="#15803d" />
          <path d="M 190 44 L 194 38 L 198 44 Z M 189 50 L 194 42 L 199 50 Z M 193 50 L 193 52 L 195 52 L 195 50 Z" fill="#15803d" />
          <path d="M 210 39 L 215 32 L 220 39 Z M 209 46 L 215 36 L 221 46 Z M 214 46 L 214 49 L 216 49 L 216 46 Z" fill="#15803d" />
          <path d="M 232 35 L 237 27 L 242 35 Z M 230 43 L 237 32 L 244 43 Z M 236 43 L 236 46 L 238 46 L 238 43 Z" fill="#15803d" />
          <path d="M 252 31 L 258 22 L 264 31 Z M 250 39 L 258 27 L 266 39 Z M 257 39 L 257 43 L 259 43 L 259 39 Z" fill="#15803d" />
          <path d="M 272 27 L 278 17 L 284 27 Z M 270 35 L 278 23 L 286 35 Z M 277 35 L 277 40 L 279 40 L 279 35 Z" fill="#15803d" />
          <path d="M 288 23 L 294 13 L 300 23 Z M 286 31 L 294 19 L 302 31 Z M 293 31 L 293 37 L 295 37 L 295 31 Z" fill="#15803d" />
        </g>

        {/* Layer 2 (Front, crisp, darker) */}
        <g opacity="0.68">
          <path d="M 180 55 L 185 47 L 190 55 Z M 178 62 L 185 51 L 192 62 Z M 184 62 L 184 66 L 186 66 L 186 62 Z" fill="#15803d" />
          <path d="M 200 49 L 206 39 L 212 49 Z M 198 57 L 206 44 L 214 57 Z M 205 57 L 205 62 L 207 62 L 207 57 Z" fill="#15803d" />
          <path d="M 222 43 L 228 31 L 234 43 Z M 220 51 L 228 37 L 236 51 Z M 227 51 L 227 57 L 229 57 L 229 51 Z" fill="#15803d" />
          <path d="M 242 38 L 249 25 L 256 38 Z M 240 47 L 249 31 L 258 47 Z M 248 47 L 248 54 L 250 54 L 250 47 Z" fill="#15803d" />
          <path d="M 264 33 L 271 19 L 278 33 Z M 262 42 L 271 26 L 280 42 Z M 270 42 L 270 49 L 272 49 L 272 42 Z" fill="#15803d" />
          <path d="M 282 28 L 289 13 L 296 28 Z M 280 37 L 289 21 L 298 37 Z M 288 37 L 288 45 L 290 45 L 290 37 Z" fill="#15803d" />
        </g>

        {/* Foreground rolling hill */}
        <path
          d="M 0 80 C 90 71, 170 92, 300 58 L 300 100 L 0 100 Z"
          fill="url(#card4HillFront)"
        />
        <path
          d="M 0 80 C 90 71, 170 92, 300 58"
          stroke="#16a34a"
          strokeWidth="1.3"
          strokeOpacity="0.45"
        />
        <path
          d="M 0 89 C 95 82, 175 97, 300 68"
          stroke="#16a34a"
          strokeWidth="0.9"
          strokeOpacity="0.25"
        />
      </svg>
    </div>
  );
}

const FOUR_PILLARS = [
  {
    id: "junicorn",
    num: "01",
    titleLines: ["Junicorn Startup", "Showcase"],
    description:
      "A dedicated launchpad for student innovators and grassroots problem-solvers to pitch directly before marquee investors, GCC heads, and global mentors. Direct seed grant opportunities, on-spot term sheets, and pilot connections.",
    icon: JunicornRocketIcon,
    accentBg: "bg-[#ea580c]",
    numColor: "text-[#e89065]/70",
    cardBg: "bg-gradient-to-b from-[#fff6f0] via-[#fef2ea] to-[#fde7da]",
    cardBorder: "border-[#fcdbc6]",
    iconBg: "from-[#fff3eb] to-[#fedbc2]",
    iconBorder: "border-[#fcd3b3]",
    iconColor: "text-[#ea580c]",
    iconShadow: "shadow-[0_4px_14px_rgba(234,88,12,0.22)]",
    graphic: DuneContoursGraphic,
  },
  {
    id: "investor-connect",
    num: "02",
    titleLines: ["Investor &", "Mentor Connect"],
    description:
      "Structured 1-on-1 deal rooms, founder clinics, and reverse pitches connecting high-potential regional ventures with strategic capital and seasoned operators. Direct access to angel syndicates, venture funds, and valuation advisory.",
    icon: Handshake,
    accentBg: "bg-[#d97706]",
    numColor: "text-[#dcb35c]/70",
    cardBg: "bg-gradient-to-b from-[#fffdf7] via-[#fef7ea] to-[#fdeecf]",
    cardBorder: "border-[#fde5b5]",
    iconBg: "from-[#fefbf1] to-[#fde69e]",
    iconBorder: "border-[#fde089]",
    iconColor: "text-[#d97706]",
    iconShadow: "shadow-[0_4px_14px_rgba(217,119,6,0.22)]",
    graphic: SandDunesGraphic,
  },
  {
    id: "roundtables",
    num: "03",
    titleLines: ["Sectoral", "Roundtables"],
    description:
      "Deep-dive Chatham House rule dialogues across AgriTech, Tribal Crafts, Bio-Economy, Clean Energy, and AI-enabled rural enterprises. Unlocking procurement linkages, policy solutions, and supply chain scaling.",
    icon: SectoralRosetteIcon,
    accentBg: "bg-[#0d9488]",
    numColor: "text-[#71c5b4]/70",
    cardBg: "bg-gradient-to-b from-[#f3fbf9] via-[#e8f7f4] to-[#d4f2ec]",
    cardBorder: "border-[#bdeee3]",
    iconBg: "from-[#f0fdfa] to-[#a7f3d0]",
    iconBorder: "border-[#99f6e4]",
    iconColor: "text-[#0d9488]",
    iconShadow: "shadow-[0_4px_14px_rgba(13,148,136,0.22)]",
    graphic: RiverRipplesGraphic,
  },
  {
    id: "dandakaranya",
    num: "04",
    titleLines: ["Dandakaranya", "Experience"],
    description:
      "A signature immersive trail through the ancient forests of Dandakaranya. Guided morning nature trails, Araku coffee fireside circles, living tribal artisan showcases, and open nature dialogues under pristine forest canopies.",
    icon: ForestTreeIcon,
    accentBg: "bg-[#16a34a]",
    numColor: "text-[#7ebf79]/70",
    cardBg: "bg-gradient-to-b from-[#f5fbf4] via-[#ecf7eb] to-[#dcf2d9]",
    cardBorder: "border-[#c5eac1]",
    iconBg: "from-[#f0fdf4] to-[#bbf7d0]",
    iconBorder: "border-[#a7f3d0]",
    iconColor: "text-[#16a34a]",
    iconShadow: "shadow-[0_4px_14px_rgba(22,163,74,0.22)]",
    graphic: PineForestGraphic,
  },
];

/**
 * 3D Interactive Tilt Card with physical cursor tracking
 */
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}

export function FourPillarsSection() {
  return (
    <section
      aria-label="Four Pillars of ISF Startup Jathara"
      className="section-reveal py-8 sm:py-12 lg:py-14 bg-[#f7f4ec] border-b border-[#e6dfd1] overflow-hidden"
    >
      <Container size="wide">
        {/* Section heading */}
        <div className="max-w-2xl mb-6 sm:mb-8 section-editorial-reveal">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-4 h-px bg-[#c25e38] section-line-expand" aria-hidden="true" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c25e38]">
              The Four Pillars
            </p>
          </div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-[2.1rem] text-[#1c1917] tracking-tight leading-[1.12]">
            Built on Four Exceptional Experiences
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#57534e] max-w-xl leading-relaxed">
            Every element of ISF Startup Jathara is designed with purpose — centered
            around four distinct pillars that make this gathering transformative.
          </p>
        </div>

        {/* ── Pillar Cards Container with Connecting Motion Route Map ── */}
        <div className="relative">
          {/* Animated Connecting Motion Route Map (Behind Cards) */}
          <div
            className="hidden md:block absolute -inset-x-8 lg:-inset-x-12 -top-4 -bottom-4 pointer-events-none z-0 overflow-visible"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1200 340"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              <defs>
                {/* Unified Warm Terracotta Route Line */}
                <linearGradient id="pillarRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e08a3c" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#d97706" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#e08a3c" stopOpacity="0.9" />
                </linearGradient>

                <filter id="pillarRouteGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Master Route Trajectory Path:
                  Flows behind the cards at mid-height, dipping gently in the 3 gaps with waypoints,
                  and gracefully ascending to the top-right exit */}
              <path
                id="pillarRoutePath"
                d="M -30 155 C 40 155, 120 165, 150 165 C 190 165, 260 180, 300 180 C 340 180, 410 165, 450 165 C 500 165, 560 175, 600 175 C 640 175, 710 165, 750 165 C 800 165, 860 172, 900 172 C 940 172, 1030 150, 1070 120 C 1120 80, 1180 40, 1240 20"
                fill="none"
                stroke="transparent"
              />

              {/* Soft Warm Ambient Aura */}
              <path
                d="M -30 155 C 40 155, 120 165, 150 165 C 190 165, 260 180, 300 180 C 340 180, 410 165, 450 165 C 500 165, 560 175, 600 175 C 640 175, 710 165, 750 165 C 800 165, 860 172, 900 172 C 940 172, 1030 150, 1070 120 C 1120 80, 1180 40, 1240 20"
                fill="none"
                stroke="#e08a3c"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.14"
                vectorEffect="non-scaling-stroke"
                filter="url(#pillarRouteGlow)"
              />

              {/* Solid Base Route Track */}
              <path
                d="M -30 155 C 40 155, 120 165, 150 165 C 190 165, 260 180, 300 180 C 340 180, 410 165, 450 165 C 500 165, 560 175, 600 175 C 640 175, 710 165, 750 165 C 800 165, 860 172, 900 172 C 940 172, 1030 150, 1070 120 C 1120 80, 1180 40, 1240 20"
                fill="none"
                stroke="#e08a3c"
                strokeWidth="1.2"
                opacity="0.35"
                vectorEffect="non-scaling-stroke"
              />

              {/* Primary Motion Trail (Dashed, marching slowly & elegantly) */}
              <path
                d="M -30 155 C 40 155, 120 165, 150 165 C 190 165, 260 180, 300 180 C 340 180, 410 165, 450 165 C 500 165, 560 175, 600 175 C 640 175, 710 165, 750 165 C 800 165, 860 172, 900 172 C 940 172, 1030 150, 1070 120 C 1120 80, 1180 40, 1240 20"
                fill="none"
                stroke="url(#pillarRouteGrad)"
                strokeWidth="2.4"
                strokeDasharray="6 8"
                strokeLinecap="round"
                className="animate-flowing-dots"
                vectorEffect="non-scaling-stroke"
              />

              {/* Waypoint Nodes: Left entry, 3 inter-card gaps, and right ascending exit */}
              {/* Left Entry Waypoint */}
              <circle cx="18" cy="157" r="4" fill="#e08a3c" stroke="#ffffff" strokeWidth="2" />

              {/* Gap 1 Waypoint (Between Card 1 and 2) */}
              <circle cx="300" cy="180" r="4" fill="#e08a3c" stroke="#ffffff" strokeWidth="2" />

              {/* Gap 2 Waypoint (Between Card 2 and 3) */}
              <circle cx="600" cy="175" r="4" fill="#e08a3c" stroke="#ffffff" strokeWidth="2" />

              {/* Gap 3 Waypoint (Between Card 3 and 4) */}
              <circle cx="900" cy="172" r="4" fill="#e08a3c" stroke="#ffffff" strokeWidth="2" />

              {/* Right Exit Waypoint on Ascending Trail */}
              <circle cx="1160" cy="52" r="4" fill="#e08a3c" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>

          {/* ── 4 Pillar Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-5.5 section-cards-reveal relative z-10">
            {FOUR_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const Graphic = pillar.graphic;

              return (
                <TiltCard
                  key={pillar.id}
                  className={`group relative z-10 hover:z-20 flex flex-col card-enter card-enter-${idx + 1}`}
                >
                  {/* Outer White Card Shell with Chamfered Top-Left Corner */}
                  <div
                    className="relative flex flex-1 flex-col rounded-[26px] sm:rounded-[28px] p-[2.5px] sm:p-[3px] bg-gradient-to-br from-white via-white/95 to-white/85 border border-white/90 shadow-[0_12px_30px_rgba(35,28,18,0.06),0_2px_6px_rgba(35,28,18,0.03)] group-hover:shadow-[0_20px_42px_rgba(35,28,18,0.12)] transition-all duration-300"
                    style={{
                      clipPath: "polygon(34px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 34px)",
                    }}
                  >
                    {/* Inner Chamfered Pastel Card */}
                    <div
                      className={`relative flex flex-1 flex-col justify-between overflow-hidden rounded-tr-[23px] rounded-br-[23px] rounded-bl-[23px] ${pillar.cardBg} border ${pillar.cardBorder} p-4 sm:p-4.5 md:p-5 transition-all duration-300 min-h-[300px] sm:min-h-[315px] md:min-h-[325px]`}
                      style={{
                        clipPath: "polygon(29px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 29px)",
                      }}
                    >
                      {/* Top Row: 3D Squircle Icon Button (Left) + Numeral (Right) */}
                      <div className="flex items-center justify-between min-w-0 mb-3 sm:mb-3.5">
                        {/* 3D Embossed Squircle Icon Button */}
                        <div
                          className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br ${pillar.iconBg} border ${pillar.iconBorder} ${pillar.iconColor} ${pillar.iconShadow} transition-transform duration-300 group-hover:scale-105`}
                          style={{
                            boxShadow:
                              "inset 0 1px 1.5px rgba(255,255,255,0.95), inset 0 -2px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.08)",
                          }}
                        >
                          <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                        </div>

                        {/* Large Italic Serif Numeral */}
                        <span
                          className={`font-serif italic font-normal text-2xl sm:text-3xl select-none tracking-tight ${pillar.numColor}`}
                        >
                          {pillar.num}
                        </span>
                      </div>

                      {/* Content: Title + Accent Pill Bar + Description */}
                      <div className="relative z-10 flex-1 pb-6 sm:pb-8">
                        <h3 className="font-serif font-black text-[17px] sm:text-[18px] md:text-[19px] text-[#1c1917] leading-[1.16] tracking-tight">
                          {pillar.titleLines.map((line, lIdx) => (
                            <span key={lIdx} className="block">
                              {line}
                            </span>
                          ))}
                        </h3>

                        {/* Thick Horizontal Accent Bar */}
                        <div className={`w-7 h-1 rounded-full ${pillar.accentBg} mt-2 mb-2.5`} />

                        {/* Description Text */}
                        <p className="text-[12px] sm:text-[12.5px] leading-[1.52] text-[#44403c] font-normal">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Bottom Atmospheric Vector Graphic */}
                      <Graphic />
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

