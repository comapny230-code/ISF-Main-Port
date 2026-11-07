import React from "react";

export function OdishaTempleArt({ className = "w-32 sm:w-40 h-11 sm:h-13 text-[#cbb29b]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* ── Base Plinth Steps ── */}
        <line x1="12" y1="57" x2="152" y2="57" strokeWidth="1.1" opacity="0.85" />
        <line x1="18" y1="54.5" x2="148" y2="54.5" strokeWidth="0.7" opacity="0.55" />

        {/* ── 1. Left Entrance Porch (Mukhashala) ── */}
        <path d="M33 30 V33" strokeWidth="0.75" />
        <circle cx="33" cy="33.5" r="1.1" strokeWidth="0.7" fill="currentColor" fillOpacity="0.08" />
        <path d="M29 36.5 Q33 35.5 37 36.5" strokeWidth="0.85" />
        <path d="M26 41 Q33 40 40 41" strokeWidth="0.9" />
        <path d="M23 45.5 Q33 44.5 43 45.5" strokeWidth="0.95" />
        {/* Eave Slopes */}
        <path d="M33 33.5 L23 45.5" strokeWidth="0.7" opacity="0.65" />
        <path d="M33 33.5 L43 45.5" strokeWidth="0.7" opacity="0.65" />
        {/* Pillars / Ground Walls */}
        <line x1="25.5" y1="45.5" x2="25.5" y2="54.5" strokeWidth="0.85" />
        <line x1="40.5" y1="45.5" x2="40.5" y2="54.5" strokeWidth="0.85" />
        <line x1="33" y1="47" x2="33" y2="54.5" strokeWidth="0.6" strokeDasharray="1 2" opacity="0.45" />

        {/* ── 2. Middle Hall (Jagamohana - Tiered Pidha Roof) ── */}
        {/* Apex Kalasa & Mini Amalaka */}
        <line x1="68" y1="18.5" x2="68" y2="21" strokeWidth="0.75" />
        <circle cx="68" cy="21.5" r="1.3" strokeWidth="0.7" fill="currentColor" fillOpacity="0.12" />
        <ellipse cx="68" cy="23.5" rx="3.5" ry="1.2" strokeWidth="0.75" fill="currentColor" fillOpacity="0.08" />
        {/* 5 Gracefully Flared Pidha Eaves */}
        <path d="M63 26.5 Q68 25.5 73 26.5" strokeWidth="0.95" />
        <path d="M59.5 30.5 Q68 29.5 76.5 30.5" strokeWidth="0.95" />
        <path d="M56 34.5 Q68 33.5 80 34.5" strokeWidth="1" />
        <path d="M52.5 38.5 Q68 37.5 83.5 38.5" strokeWidth="1" />
        <path d="M49 42.5 Q68 41.5 87 42.5" strokeWidth="1.05" />
        {/* Roof Silhouette Slopes */}
        <path d="M68 24 L49 42.5" strokeWidth="0.8" opacity="0.7" />
        <path d="M68 24 L87 42.5" strokeWidth="0.8" opacity="0.7" />
        {/* Lower Hall Walls & Gateway */}
        <line x1="51.5" y1="42.5" x2="51.5" y2="54.5" strokeWidth="0.95" />
        <line x1="84.5" y1="42.5" x2="84.5" y2="54.5" strokeWidth="0.95" />
        <path d="M64 54.5 C64 49 72 49 72 54.5" strokeWidth="0.75" fill="currentColor" fillOpacity="0.06" />

        {/* ── 3. Main Tall Sanctuary (Bada Deul / Rekha Vimana) ── */}
        {/* Dhvaja (Flowing Sacred Temple Flag) */}
        <path d="M112 4.5 Q118 6 123 4.8 Q120 8 124 10.5 Q117 9 112 8.5 Z" strokeWidth="0.75" fill="currentColor" fillOpacity="0.15" />
        <line x1="112" y1="4" x2="112" y2="9.5" strokeWidth="0.85" />
        {/* Kalasa Finial Pot */}
        <circle cx="112" cy="10" r="1.5" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
        {/* Amalaka (Fluted Ribbed Disc) */}
        <ellipse cx="112" cy="13" rx="7" ry="2.2" strokeWidth="0.95" fill="currentColor" fillOpacity="0.1" />
        <line x1="108" y1="13" x2="116" y2="13" strokeWidth="0.55" opacity="0.55" />
        {/* Curvilinear Shikhara (Parabolic Organic Inward Curve) */}
        <path d="M106 14.5 C103.5 24 100 38 97.5 54.5" strokeWidth="1.1" />
        <path d="M118 14.5 C120.5 24 124 38 126.5 54.5" strokeWidth="1.1" />
        {/* Central Rahapaga (Architectural Facet Ribs) */}
        <path d="M109.5 14.5 C108 26 107 40 106 54.5" strokeWidth="0.7" opacity="0.65" />
        <path d="M114.5 14.5 C116 26 117 40 118 54.5" strokeWidth="0.7" opacity="0.65" />
        {/* Horizontal Bhumi Bands (Layered Stone Tiers) */}
        <path d="M105.5 18.5 Q112 17.5 118.5 18.5" strokeWidth="0.7" opacity="0.6" />
        <path d="M104.5 23 Q112 22 119.5 23" strokeWidth="0.7" opacity="0.6" />
        <path d="M103.5 27.5 Q112 26.5 120.5 27.5" strokeWidth="0.7" opacity="0.6" />
        <path d="M102.5 32 Q112 31 121.5 32" strokeWidth="0.7" opacity="0.6" />
        <path d="M101.5 37 Q112 36 122.5 37" strokeWidth="0.7" opacity="0.6" />
        <path d="M100.5 42 Q112 41 123.5 42" strokeWidth="0.7" opacity="0.6" />
        <path d="M99.5 47 Q112 46 124.5 47" strokeWidth="0.7" opacity="0.6" />
        <path d="M98.5 51.5 Q112 50.5 125.5 51.5" strokeWidth="0.7" opacity="0.6" />
        {/* Chaitya Arch Medallion Window (Gavaksha) */}
        <path d="M110 34 C110 31.5 114 31.5 114 34 V37.5 H110 Z" strokeWidth="0.7" fill="currentColor" fillOpacity="0.12" />

        {/* ── 4. Right Flanking Shrine (Parshvadevata) ── */}
        <line x1="138" y1="26" x2="138" y2="28" strokeWidth="0.7" />
        <circle cx="138" cy="28.5" r="1.1" strokeWidth="0.65" fill="currentColor" fillOpacity="0.08" />
        <ellipse cx="138" cy="30.5" rx="3.5" ry="1.2" strokeWidth="0.7" fill="currentColor" fillOpacity="0.06" />
        {/* Curving side contours */}
        <path d="M135 31.5 C134 38 133 46 132.5 54.5" strokeWidth="0.85" opacity="0.75" />
        <path d="M141 31.5 C142 38 143 46 143.5 54.5" strokeWidth="0.85" opacity="0.75" />
        {/* Subtle horizontal relief courses */}
        <path d="M134.5 35.5 Q138 34.8 141.5 35.5" strokeWidth="0.6" opacity="0.55" />
        <path d="M134 40.5 Q138 39.8 142 40.5" strokeWidth="0.6" opacity="0.55" />
        <path d="M133.5 45.5 Q138 44.8 142.5 45.5" strokeWidth="0.6" opacity="0.55" />
        <path d="M133 50.5 Q138 49.8 143 50.5" strokeWidth="0.6" opacity="0.55" />
      </g>
    </svg>
  );
}
