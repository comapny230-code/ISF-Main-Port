import React from "react";
import "./diwali.css";

/** Master switch: set to false to remove the Diwali decorations from the code entirely. */
export const DIWALI_DECOR_ENABLED = true;

/**
 * When the decorations hide themselves. The pages are prebuilt, so a script in the root
 * layout compares this with the visitor's clock and marks <html data-festive="off">;
 * diwali.css then hides every `.dw-festive` element. No redeploy needed.
 */
export const DIWALI_ENDS_AT = "2026-11-10T00:00:00+05:30";

// Integer-only pseudo-random so server and client render identical markup.
const rnd = (i: number, k: number) => ((i * 9301 + k * 49297 + 233280) % 233280) / 233280;

type Vars = React.CSSProperties & Record<`--dw-${string}`, string>;

/** Gradients and symbols shared by every decoration. Render once per page. */
export function DiwaliDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="dw-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff6c2" />
          <stop offset="40%" stopColor="#ffd04a" />
          <stop offset="75%" stopColor="#ff8a1f" />
          <stop offset="100%" stopColor="#e2401b" />
        </linearGradient>
        <radialGradient id="dw-glow">
          <stop offset="0%" stopColor="#ffd27a" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#ff9a3c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dw-clay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cf6a33" />
          <stop offset="55%" stopColor="#923718" />
          <stop offset="100%" stopColor="#5c200d" />
        </linearGradient>
        <linearGradient id="dw-leaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5aa83f" />
          <stop offset="100%" stopColor="#2d6a24" />
        </linearGradient>
        <radialGradient id="dw-lantern" cx="50%" cy="48%" r="60%">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="35%" stopColor="#f7782c" />
          <stop offset="100%" stopColor="#a11d1a" />
        </radialGradient>
        <symbol id="dw-marigold" viewBox="-10 -10 20 20">
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <circle
                key={i}
                cx={(Math.cos(a) * 6.2).toFixed(2)}
                cy={(Math.sin(a) * 6.2).toFixed(2)}
                r="3.6"
                fill={i % 2 ? "#f59e0b" : "#fb8c1e"}
              />
            );
          })}
          <circle r="5.2" fill="#fbbf24" />
          <circle r="3.4" fill="#f59e0b" />
          <circle r="1.6" fill="#b45309" />
        </symbol>
        <symbol id="dw-mango-leaf" viewBox="-6 0 12 34">
          <path d="M0 0 C5 6 6.5 20 0 33 C-6.5 20 -5 6 0 0Z" fill="url(#dw-leaf)" />
          <path d="M0 2 L0 31" stroke="#1f4d1c" strokeWidth="0.7" />
        </symbol>
        <pattern id="dw-jhoti-border" width="48" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 C6 2 18 2 24 10 S42 18 48 10" fill="none" stroke="#fff3df" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="4.2" r="1.7" fill="#fff3df" />
          <circle cx="36" cy="15.8" r="1.7" fill="#fff3df" />
          <ellipse cx="24" cy="10" rx="2.6" ry="1.3" fill="#fff3df" />
          <path d="M0 0.8 H48 M0 19.2 H48" stroke="#fff3df" strokeWidth="0.8" opacity="0.7" />
        </pattern>
        <pattern id="dw-chain" width="22" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 6 C4 0 7 0 11 6 C15 12 18 12 22 6" fill="none" stroke="#c0622f" strokeWidth="1.2" />
          <circle cx="11" cy="6" r="1.4" fill="#d98a3d" />
        </pattern>
      </defs>
    </svg>
  );
}

/** A painted clay diya. `delay` staggers when its flame lights up. */
export function Diya({ delay = 0, flicker = 1.3, className = "" }: { delay?: number; flicker?: number; className?: string }) {
  const vars: Vars = { "--dw-delay": `${delay}s`, "--dw-flicker": `${flicker}s` };
  return (
    <svg viewBox="0 0 64 72" className={className} style={vars} aria-hidden="true" focusable="false">
      <circle className="dw-glow" cx="32" cy="26" r="26" fill="url(#dw-glow)" />
      <g className="dw-flame-light">
        <g className="dw-flame">
          <path d="M32 6 C38 18 41 26 37 33 C35 37 29 37 27 33 C23 26 26 18 32 6Z" fill="url(#dw-flame)" />
          <path d="M32 19 C35 26 35 30 33 33 C32 34.6 31 34.4 30.4 33 C29.4 30 30 25 32 19Z" fill="#fffbe8" />
        </g>
      </g>
      <path d="M31 36 L32 40 L33 36" stroke="#3b1d0f" strokeWidth="1.4" fill="none" />
      <path d="M5 40 C14 41 24 41.5 32 41.5 C42 41.5 52 40.5 61 36 C59 52 47 63 32 63 C17 63 7 54 5 40Z" fill="url(#dw-clay)" />
      <path d="M5 40 C18 44.5 46 44.5 61 36" stroke="#f0ae74" strokeWidth="1.6" fill="none" opacity="0.85" />
      <path d="M10 48 C22 53.5 44 53.5 57 45" stroke="#f6c453" strokeWidth="2" fill="none" />
      {[16, 24, 32, 40, 48].map((x, i) => (
        <circle key={x} cx={x} cy={[54, 57, 58, 57, 54][i]} r="1.5" fill="#fff4e0" />
      ))}
      <ellipse cx="32" cy="64.5" rx="13" ry="2.4" fill="#2a0f06" opacity="0.45" />
    </svg>
  );
}

/** Toran of mango leaves and marigold strands hung across the top of the hero. */
export function DiwaliToran() {
  const units = 35;
  const mid = Math.floor(units / 2);
  return (
    <div className="dw-festive pointer-events-none absolute inset-x-0 top-0 z-[35] select-none" aria-hidden="true">
      <div className="dw-cord relative z-10 h-2.5 w-full" />
      <div className="-mt-1.5 flex justify-center overflow-hidden">
        {Array.from({ length: units }, (_, i) => {
          // Strands are short over the centre (the hero logo) and longer toward the edges.
          const flowers = 1 + Math.min(5, Math.round(Math.abs(i - mid) / 2.3)) + (i % 4 === 1 ? 1 : 0);
          const vars: Vars = { "--dw-sway": `${3.4 + rnd(i, 1) * 2.2}s`, "--dw-delay": `${-rnd(i, 2) * 4}s` };
          return (
            <svg key={i} viewBox="0 0 56 120" className="h-[88px] w-[42px] shrink-0 overflow-visible sm:h-[120px] sm:w-[56px]">
              <use href="#dw-mango-leaf" x="7" y="4" width="12" height="30" transform="rotate(14 13 4)" />
              <use href="#dw-mango-leaf" x="37" y="4" width="12" height="30" transform="rotate(-14 43 4)" />
              <g className="dw-sway" style={vars}>
                <path d={`M28 4 V${10 + flowers * 13}`} stroke="#7c2d12" strokeWidth="1" />
                {Array.from({ length: flowers }, (_, k) => (
                  <use key={k} href="#dw-marigold" x="20" y={6 + k * 13} width="16" height="16" />
                ))}
                <path
                  d={`M24.5 ${22 + flowers * 13 - 6} h7 l-1.5 6 h-4 Z`}
                  fill="#e0a526"
                  stroke="#8a5a12"
                  strokeWidth="0.6"
                />
              </g>
            </svg>
          );
        })}
      </div>
    </div>
  );
}

/** One of Lakshmi's footprints, drawn the way jhoti is painted on Odia floors. */
function Footprint({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 24 44" className="w-6 sm:w-7" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path
        d="M12 12 C18 12 20 19 19 26 C18 33 17 40 12 41 C7 41 6 35 6.5 29 C7 22 6 12 12 12Z"
        fill="none"
        stroke="#fff3df"
        strokeWidth="1.8"
      />
      <path d="M12 20 C14.5 24 14.5 30 12 34" fill="none" stroke="#fff3df" strokeWidth="1.1" />
      {[[7, 8.5, 2.6], [11.5, 5, 2.2], [15.5, 5.6, 1.9], [18.6, 7.8, 1.6], [20.4, 11.2, 1.4]].map(([cx, cy, r]) => (
        <circle key={cx} cx={cx} cy={cy} r={r} fill="#fff3df" />
      ))}
    </svg>
  );
}

/** Footprints walking in from one side toward the greeting. */
function FootprintTrail({ side }: { side: "left" | "right" }) {
  return (
    <div className="hidden items-center gap-3 md:flex" style={side === "right" ? { flexDirection: "row-reverse" } : undefined}>
      {[0, 1, 2].map((step) => {
        const vars: Vars = { "--dw-delay": `${0.9 + step * 0.22}s` };
        return (
          <div
            key={step}
            className="dw-step flex flex-col gap-1"
            style={{ ...vars, transform: `rotate(${side === "left" ? 90 : -90}deg)` }}
          >
            <div className={step % 2 ? "translate-x-2" : "-translate-x-2"}>
              <Footprint flip={(side === "right") !== (step % 2 === 1)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** The doorway: a row of lit diyas on a red-ochre floor painted with jhoti, and the greeting. */
export function DiwaliThreshold() {
  const diyas = 15;
  const mid = Math.floor(diyas / 2);
  return (
    <section aria-label="Diwali greeting" className="dw-festive dw-floor relative z-20 text-center text-[#fff3df]">
      {/* Phones: the row stands on the floor inside the band, clear of the hero and the floating diya. Larger screens: it sits on the hero's edge. */}
      <div className="pointer-events-none z-10 flex justify-around px-4 pt-4 pb-2 sm:absolute sm:inset-x-0 sm:-top-11 sm:justify-between sm:px-8 sm:pt-0 sm:pb-0" aria-hidden="true">
        {Array.from({ length: diyas }, (_, i) => (
          <Diya
            key={i}
            delay={0.25 + Math.abs(i - mid) * 0.12}
            flicker={1.1 + rnd(i, 14) * 0.6}
            className={`h-12 w-11 drop-shadow-[0_4px_6px_rgba(0,0,0,0.45)] sm:h-14 sm:w-12 ${i % 3 === 1 ? "" : "hidden sm:block"}`}
          />
        ))}
      </div>

      <svg className="block w-full" style={{ height: 20 }} aria-hidden="true">
        <rect width="100%" height="100%" fill="url(#dw-jhoti-border)" />
      </svg>

      <div className="flex items-center justify-center gap-6 px-5 pb-6 pt-6 sm:gap-10 sm:pb-7 sm:pt-11">
        <FootprintTrail side="left" />
        <div className="dw-greeting max-w-xl">
          <p className="font-calligraphy text-5xl leading-tight text-[#fff7ea] sm:text-6xl">Happy Diwali</p>
          <p className="mt-1.5 font-serif text-sm italic leading-relaxed text-[#ffe2c4] sm:text-base">
            From the ISF Startup Jathara family. May every lamp you light this year guide a new idea home.
          </p>
        </div>
        <FootprintTrail side="right" />
      </div>

      <svg className="block w-full -scale-y-100" style={{ height: 20 }} aria-hidden="true">
        <rect width="100%" height="100%" fill="url(#dw-jhoti-border)" />
      </svg>
    </section>
  );
}

/** Lit diyas on the seam between two sections, with jhoti chains either side. */
// `above` keeps the row inside the page wrapper (which clips overflow) at the very bottom.
export function DiwaliDivider({ diyas = 1, above = false }: { diyas?: number; above?: boolean }) {
  return (
    <div className="dw-festive pointer-events-none relative z-20 h-0" aria-hidden="true">
      <div className={`absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-2 ${above ? "-translate-y-[88%]" : "-translate-y-1/2"}`}>
        <svg className="w-[22vw] max-w-72" style={{ height: 12 }}>
          <rect width="100%" height="100%" fill="url(#dw-chain)" />
        </svg>
        {Array.from({ length: diyas }, (_, i) => (
          <Diya
            key={i}
            delay={0.2 + Math.abs(i - (diyas - 1) / 2) * 0.15}
            flicker={1.1 + rnd(i, 16) * 0.5}
            className={`h-11 w-10 shrink-0 drop-shadow-[0_3px_5px_rgba(120,50,20,0.3)] ${i % 2 ? "hidden sm:block" : ""}`}
          />
        ))}
        <svg className="w-[22vw] max-w-72 -scale-x-100" style={{ height: 12 }}>
          <rect width="100%" height="100%" fill="url(#dw-chain)" />
        </svg>
      </div>
    </div>
  );
}

function Lantern({ cord, className, sway, delay }: { cord: number; className: string; sway: number; delay: number }) {
  const vars: Vars = { "--dw-sway": `${sway}s`, "--dw-delay": `${delay}s` };
  return (
    <div className={`dw-lantern absolute top-0 ${className}`} style={vars}>
      <svg viewBox={`0 0 60 ${cord + 100}`} className="w-full overflow-visible" style={{ height: "auto" }}>
        <path d={`M30 0 V${cord + 10}`} stroke="#d6b25e" strokeWidth="1.2" />
        <g transform={`translate(0 ${cord})`}>
          <circle cx="30" cy="48" r="44" fill="url(#dw-glow)" opacity="0.55" />
          <path d="M22 8 H38 L41 14 H19Z" fill="#e3b341" />
          <path d="M30 14 L52 34 V62 L30 82 L8 62 V34Z" fill="url(#dw-lantern)" stroke="#f6c453" strokeWidth="1.4" />
          <path d="M30 14 V82 M8 34 L52 62 M52 34 L8 62" stroke="#f6c453" strokeWidth="0.8" opacity="0.55" />
          <path d="M30 36 L33.5 45 L43 48 L33.5 51 L30 60 L26.5 51 L17 48 L26.5 45Z" fill="#fff4c8" opacity="0.9" />
          {[14, 19, 24, 30, 36, 41, 46].map((x, i) => (
            <path
              key={x}
              d={`M${x} ${x < 30 ? 82 - (30 - x) * 0.9 : 82 - (x - 30) * 0.9} V${94 + (i % 3) * 3}`}
              stroke={i % 2 ? "#f6c453" : "#e2401b"}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/** One strand of fairy lights along the top of the header logo and title. The wire draws
 *  in from left to right on load and each bulb lights as the wire reaches it.
 *  Render inside a `relative` box. */
export function DiwaliBrandLights() {
  const bulbs = 11;
  const colors = ["#f59e0b", "#fbbf24", "#f97316"];
  return (
    <span className="dw-festive pointer-events-none absolute -top-2 left-1 right-0 h-2.5 sm:-top-2.5" aria-hidden="true">
      <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="dw-wire absolute inset-0 w-full" style={{ height: 10 }}>
        <path d="M0 1 Q50 11 100 1" fill="none" stroke="#7a5532" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      {Array.from({ length: bulbs }, (_, i) => {
        const t = 0.05 + (i / (bulbs - 1)) * 0.9;
        const vars: Vars = {
          left: `${(t * 100).toFixed(2)}%`,
          top: `${(3 + 20 * t * (1 - t)).toFixed(1)}px`,
          "--dw-bulb": colors[i % colors.length],
          "--dw-delay": `${(0.35 + t * 1.3).toFixed(2)}s`,
        };
        return <span key={i} className="dw-bulb dw-bulb-sm dw-light" style={vars} />;
      })}
    </span>
  );
}

/** Akash kandil lanterns and a swagged string of jhalar lights for the dark registration band. */
export function DiwaliLanterns() {
  const swags = 3;
  const perSwag = 9;
  const colors = ["#ffd166", "#ff8a3d", "#ff5e7e", "#ffe9a8"];
  return (
    <div className="dw-festive pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-[50px]">
        <svg viewBox="0 0 300 50" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path
            d="M0 4 Q50 84 100 4 Q150 84 200 4 Q250 84 300 4"
            fill="none"
            stroke="#3f2a12"
            strokeWidth="1.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {Array.from({ length: swags * perSwag }, (_, n) => {
          const s = Math.floor(n / perSwag);
          const t = ((n % perSwag) + 0.5) / perSwag;
          const vars: Vars = {
            left: `${(((s + t) / swags) * 100).toFixed(2)}%`,
            top: `${(4 + 160 * t * (1 - t)).toFixed(1)}px`,
            "--dw-bulb": colors[n % colors.length],
            "--dw-delay": `${-rnd(n, 15) * 1.8}s`,
          };
          return <span key={n} className="dw-bulb" style={vars} />;
        })}
      </div>

      <Lantern cord={34} sway={5.2} delay={-1} className="left-[3%] w-12 sm:left-[5%] sm:w-16" />
      <Lantern cord={92} sway={4.4} delay={-2.5} className="left-[13%] hidden w-14 md:block" />
      <Lantern cord={56} sway={5.8} delay={-0.4} className="left-[22%] hidden w-11 lg:block" />
      <Lantern cord={56} sway={5.4} delay={-3.1} className="right-[22%] hidden w-11 lg:block" />
      <Lantern cord={92} sway={4.8} delay={-1.7} className="right-[13%] hidden w-14 md:block" />
      <Lantern cord={34} sway={5} delay={-2.2} className="right-[3%] w-12 sm:right-[5%] sm:w-16" />
    </div>
  );
}
