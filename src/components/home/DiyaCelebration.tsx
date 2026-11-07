"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

// ── Realistic Fireworks Audio Synthesizer (Zero External Dependencies) ──
class RealisticFireworkAudio {
  private ctx: AudioContext | null = null;

  public unlock() {
    this.init();
  }

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Realistic rocket ascent whistle with stereo panning
  playRocketAscent(panX: number = 0) {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(240 + Math.random() * 50, now);
      osc.frequency.exponentialRampToValueAtTime(950 + Math.random() * 120, now + 0.72);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(480, now);
      filter.frequency.exponentialRampToValueAtTime(1450, now + 0.72);
      filter.Q.setValueAtTime(3.5, now);

      oscGain.gain.setValueAtTime(0.045, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

      osc.connect(filter);
      filter.connect(oscGain);

      if (this.ctx.createStereoPanner) {
        const panner = this.ctx.createStereoPanner();
        panner.pan.setValueAtTime(Math.max(-0.8, Math.min(0.8, panX)), now);
        oscGain.connect(panner);
        panner.connect(this.ctx.destination);
      } else {
        oscGain.connect(this.ctx.destination);
      }

      osc.start(now);
      osc.stop(now + 0.75);
    } catch {
      // Audio fallback
    }
  }

  // Deep concussive boom + titanium crackling sparkle
  playDetonationBoom(panX: number = 0, isGrand: boolean = false) {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 1. Deep sub-bass concussive thump (chest-shaking boom)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(isGrand ? 115 : 92, now);
      subOsc.frequency.exponentialRampToValueAtTime(18, now + (isGrand ? 0.65 : 0.48));

      subGain.gain.setValueAtTime(isGrand ? 0.65 : 0.48, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + (isGrand ? 0.68 : 0.52));

      subOsc.connect(subGain);

      // 2. High sparkle crackle / titanium salute
      const bufferSize = Math.floor(this.ctx.sampleRate * (isGrand ? 0.55 : 0.38));
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const isSpike = Math.random() < (isGrand ? 0.09 : 0.06);
        data[i] = isSpike ? (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.42)) : 0;
      }

      const crackle = this.ctx.createBufferSource();
      crackle.buffer = buffer;
      const crackleFilter = this.ctx.createBiquadFilter();
      crackleFilter.type = "highpass";
      crackleFilter.frequency.setValueAtTime(1600, now);

      const crackleGain = this.ctx.createGain();
      crackleGain.gain.setValueAtTime(isGrand ? 0.22 : 0.15, now);
      crackleGain.gain.exponentialRampToValueAtTime(0.001, now + (isGrand ? 0.55 : 0.38));

      crackle.connect(crackleFilter);
      crackleFilter.connect(crackleGain);

      if (this.ctx.createStereoPanner) {
        const panner = this.ctx.createStereoPanner();
        panner.pan.setValueAtTime(Math.max(-0.8, Math.min(0.8, panX)), now);
        subGain.connect(panner);
        crackleGain.connect(panner);
        panner.connect(this.ctx.destination);
      } else {
        subGain.connect(this.ctx.destination);
        crackleGain.connect(this.ctx.destination);
      }

      subOsc.start(now);
      subOsc.stop(now + (isGrand ? 0.68 : 0.52));
      crackle.start(now + 0.03);
    } catch {
      // Audio fallback
    }
  }
}

const audio = new RealisticFireworkAudio();

// Realistic Grand Color Palettes (RGB strings for precise alpha blending)
const PALETTES = [
  // 0: Royal 24K Golden Willow
  { primary: "251, 191, 36", secondary: "254, 240, 138", core: "255, 255, 255" },
  // 1: Saffron & Ruby Brocade
  { primary: "244, 63, 94", secondary: "251, 146, 60", core: "254, 240, 138" },
  // 2: Imperial Emerald & Gold
  { primary: "16, 185, 129", secondary: "251, 191, 36", core: "255, 255, 255" },
  // 3: Electric Cyan & Sunset Coral
  { primary: "6, 182, 212", secondary: "251, 113, 133", core: "255, 255, 255" },
  // 4: Royal Violet & Neon Magenta
  { primary: "168, 85, 247", secondary: "244, 63, 94", core: "255, 255, 255" },
  // 5: Prismatic Rainbow (Cyan, Ruby, Emerald, Gold)
  { primary: "56, 189, 248", secondary: "244, 63, 94", core: "250, 204, 21" },
  // 6: Sunset Rose & Tangerine
  { primary: "244, 63, 94", secondary: "249, 115, 22", core: "254, 240, 138" },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rgb: string;
  alpha: number;
  decay: number;
  size: number;
  gravity: number;
  drag: number;
  trail: { x: number; y: number }[];
  isWillow?: boolean;
}

interface Rocket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetY: number;
  paletteIdx: number;
  trail: { x: number; y: number; alpha: number }[];
  isTextBurst?: boolean;
}

interface Flash {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  rgb: string;
}

export function DiyaCelebration() {
  const [celebrating, setCelebrating] = useState(false);
  const [skyGreetingActive, setSkyGreetingActive] = useState(false);
  const [skyGreetingFading, setSkyGreetingFading] = useState(false);
  const [diyaClicked, setDiyaClicked] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);

  // ── Drag & Move State ──
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isPointerDownRef = useRef(false);
  const hasMovedRef = useRef(false);
  const touchStartTimeRef = useRef(0);
  const lastTriggerTimeRef = useRef(0);
  const dragStartRef = useRef<{ clientX: number; clientY: number; posX: number; posY: number }>({ clientX: 0, clientY: 0, posX: 0, posY: 0 });

  // Deterministically detect whether the Diya is over a dark or light section
  const checkSectionTheme = useCallback((currPos?: { x: number; y: number } | null) => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 640;
    const size = isMobile ? 104 : 152;
    const diyaCenterY = currPos ? currPos.y + size / 2 : window.innerHeight - 80;

    // Dark sections on the page: Hero, Registration CTA, Footer
    const heroEl = document.querySelector('section[aria-label*="Event Introduction"]');
    const ctaEl = document.querySelector('section[aria-label*="Registration"]') || document.querySelector("section.bg-\\[\\#0d281e\\]");
    const footerEl = document.querySelector("footer");

    let isDark = false;

    if (heroEl) {
      const rect = heroEl.getBoundingClientRect();
      if (diyaCenterY >= rect.top && diyaCenterY <= rect.bottom) {
        isDark = true;
      }
    } else if (window.scrollY < window.innerHeight * 0.8) {
      isDark = true;
    }

    if (!isDark && ctaEl) {
      const rect = ctaEl.getBoundingClientRect();
      if (diyaCenterY >= rect.top && diyaCenterY <= rect.bottom) {
        isDark = true;
      }
    }

    if (!isDark && footerEl) {
      const rect = footerEl.getBoundingClientRect();
      if (diyaCenterY >= rect.top && diyaCenterY <= rect.bottom) {
        isDark = true;
      }
    }

    setIsDarkSection(isDark);
  }, []);

  // Initialize position and window resize / scroll observers
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 640;
    const size = isMobile ? 104 : 152;
    const margin = isMobile ? 14 : 24;
    const initialPos = {
      x: Math.max(8, window.innerWidth - size - margin),
      y: Math.max(8, window.innerHeight - size - margin),
    };
    setPosition(initialPos);
    checkSectionTheme(initialPos);

    const handleScroll = () => {
      checkSectionTheme(position);
    };

    const handleResize = () => {
      setPosition((prev) => {
        if (!prev) return null;
        const m = window.innerWidth < 640;
        const s = m ? 104 : 152;
        const next = {
          x: Math.max(8, Math.min(window.innerWidth - s - 8, prev.x)),
          y: Math.max(8, Math.min(window.innerHeight - s - 8, prev.y)),
        };
        checkSectionTheme(next);
        return next;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [checkSectionTheme]);

  // Synchronize diwali-celebrating body class for theater-stage dimming of underlying text
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (celebrating) {
      document.body.classList.add("diwali-celebrating");
    } else {
      document.body.classList.remove("diwali-celebrating");
    }
    return () => {
      document.body.classList.remove("diwali-celebrating");
    };
  }, [celebrating]);

  // Pointer drag event handlers for mouse & touch (Mobile-optimized with tap slop threshold)
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    isPointerDownRef.current = true;
    hasMovedRef.current = false;
    touchStartTimeRef.current = Date.now();

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const size = isMobile ? 104 : 152;
    const currentX = position?.x ?? (window.innerWidth - size - (isMobile ? 14 : 24));
    const currentY = position?.y ?? (window.innerHeight - size - (isMobile ? 14 : 24));

    dragStartRef.current = {
      clientX: e.clientX,
      clientY: e.clientY,
      posX: currentX,
      posY: currentY,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!isPointerDownRef.current) return;
    const dx = e.clientX - dragStartRef.current.clientX;
    const dy = e.clientY - dragStartRef.current.clientY;
    const dragThreshold = e.pointerType === "touch" ? 16 : 6;

    if (!hasMovedRef.current && Math.hypot(dx, dy) > dragThreshold) {
      hasMovedRef.current = true;
      setIsDragging(true);
    }

    if (hasMovedRef.current) {
      const isMobile = window.innerWidth < 640;
      const size = isMobile ? 104 : 152;
      const newX = Math.max(8, Math.min(window.innerWidth - size - 8, dragStartRef.current.posX + dx));
      const newY = Math.max(8, Math.min(window.innerHeight - size - 8, dragStartRef.current.posY + dy));
      const nextPos = { x: newX, y: newY };
      setPosition(nextPos);
      checkSectionTheme(nextPos);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    const timeDiff = Date.now() - touchStartTimeRef.current;
    const dist = Math.hypot(
      e.clientX - dragStartRef.current.clientX,
      e.clientY - dragStartRef.current.clientY
    );
    const dragThreshold = e.pointerType === "touch" ? 16 : 6;

    if (hasMovedRef.current && dist >= dragThreshold && timeDiff >= 260) {
      // User performed an intentional drag & drop
      setIsDragging(false);
      hasMovedRef.current = false;
    } else {
      // Valid tap / click on mobile or desktop!
      setIsDragging(false);
      hasMovedRef.current = false;
      triggerCelebration();
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLButtonElement>) => {
    isPointerDownRef.current = false;
    setIsDragging(false);
    hasMovedRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const rocketsRef = useRef<Rocket[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const flashesRef = useRef<Flash[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Launch a realistic sky shot rocket with stereo panning
  const launchRocket = useCallback(
    (
      targetXPercent: number,
      targetYPercent: number,
      delayMs: number,
      isTextBurst: boolean = false,
      paletteIdx?: number
    ) => {
      const t = setTimeout(() => {
        if (typeof window === "undefined") return;
        const w = window.innerWidth;
        const h = window.innerHeight;

        const startX = w * (targetXPercent + (Math.random() * 0.04 - 0.02));
        const targetY = h * targetYPercent;
        const targetX = w * targetXPercent;

        const flightSteps = isTextBurst ? 42 : 34 + Math.random() * 8;
        const vy = (targetY - h) / flightSteps;
        const vx = (targetX - startX) / flightSteps;

        const panX = (startX / w) * 2 - 1;
        rocketsRef.current.push({
          x: startX,
          y: h,
          vx,
          vy,
          targetY,
          paletteIdx: paletteIdx !== undefined ? paletteIdx : Math.floor(Math.random() * PALETTES.length),
          trail: [],
          isTextBurst,
        });

        audio.playRocketAscent(panX);
      }, delayMs);

      timeoutsRef.current.push(t);
    },
    []
  );

  // Massive, Grand Shell Detonation with Multi-Layered Range & Sky Imprint
  const explodeRocket = useCallback((x: number, y: number, paletteIdx: number, isTextBurst: boolean = false) => {
    const panX = typeof window !== "undefined" ? (x / window.innerWidth) * 2 - 1 : 0;
    audio.playDetonationBoom(panX, isTextBurst);

    const pal = PALETTES[paletteIdx];
    const isWillow = Math.random() > 0.3 || paletteIdx === 0;

    // 1. Massive Primary & Secondary Shockwave Flashes (Illuminates the sky)
    flashesRef.current.push({
      x,
      y,
      radius: isTextBurst ? 480 : 320 + Math.random() * 120,
      alpha: 0.95,
      rgb: pal.core,
    });
    flashesRef.current.push({
      x,
      y,
      radius: isTextBurst ? 320 : 200 + Math.random() * 90,
      alpha: 0.8,
      rgb: pal.primary,
    });

    // 2. Grand High-Range Spherical Star Burst (Up to 750px diameter across the screen)
    const count = isTextBurst ? 220 : 170 + Math.floor(Math.random() * 70);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      // Layered velocities: fast outer ring, mid floral streamers, and dense inner starburst
      const speedTier = Math.random();
      const speed = speedTier < 0.28
        ? 3.0 + Math.random() * 3.8
        : speedTier < 0.78
          ? 7.2 + Math.random() * 4.6
          : 11.8 + Math.random() * 3.8;

      const vx = Math.sin(phi) * Math.cos(theta) * speed;
      const vy = Math.sin(phi) * Math.sin(theta) * speed;

      const rgb = i % 3 === 0 ? pal.secondary : i % 5 === 0 ? pal.core : pal.primary;

      particlesRef.current.push({
        x,
        y,
        vx,
        vy,
        rgb,
        alpha: 1,
        decay: isWillow ? 0.008 + Math.random() * 0.006 : 0.012 + Math.random() * 0.009,
        size: isWillow ? 2.3 + Math.random() * 1.8 : 2.0 + Math.random() * 1.4,
        gravity: isWillow ? 0.052 : 0.046,
        drag: isWillow ? 0.978 : 0.969,
        trail: [],
        isWillow,
      });
    }

    // 3. Dense Core Starlight Glitter & Titanium Crackles
    for (let k = 0; k < 35; k++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.8 + Math.random() * 3.4;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rgb: pal.core,
        alpha: 1,
        decay: 0.022 + Math.random() * 0.016,
        size: 1.5,
        gravity: 0.035,
        drag: 0.93,
        trail: [],
      });
    }

    // 4. Special Diwali Multi-Colored Sparkling Stardust Cascades (Vibrant rainbow sparkler rain)
    if (isTextBurst && typeof window !== "undefined") {
      const w = window.innerWidth;
      const rainbowColors = [
        "244, 63, 94",  // Ruby Rose
        "251, 146, 60", // Sunset Saffron
        "250, 204, 21", // Radiant Gold
        "56, 189, 248", // Electric Cyan
        "168, 85, 247", // Royal Violet
        "52, 211, 153", // Emerald Green
        "255, 255, 255", // Diamond Starlight
      ];
      for (let s = 0; s < 95; s++) {
        const sparkX = w * (0.15 + Math.random() * 0.70);
        const sparkY = y + (Math.random() * 40 - 20);
        const speed = 0.6 + Math.random() * 2.8;
        const angle = Math.random() * Math.PI * 2;

        particlesRef.current.push({
          x: sparkX,
          y: sparkY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed + 0.45,
          rgb: rainbowColors[s % rainbowColors.length],
          alpha: 1,
          decay: 0.007 + Math.random() * 0.005,
          size: 1.3 + Math.random() * 1.1,
          gravity: 0.038,
          drag: 0.982,
          trail: [],
          isWillow: true,
        });
      }

      // 5. Ambient Golden & Diamond Floating Stardust (Slow drifting sparkler ash)
      const h = window.innerHeight;
      for (let g = 0; g < 40; g++) {
        const gx = w * (0.28 + Math.random() * 0.44);
        const gy = h * (0.32 + Math.random() * 0.36);
        particlesRef.current.push({
          x: gx,
          y: gy,
          vx: (Math.random() - 0.5) * 0.8,
          vy: 0.12 + Math.random() * 0.35,
          rgb: g % 2 === 0 ? "254, 240, 138" : "255, 255, 255",
          alpha: 0.9,
          decay: 0.004 + Math.random() * 0.003,
          size: 1.1 + Math.random() * 0.8,
          gravity: 0.006,
          drag: 0.992,
          trail: [],
        });
      }
    }
  }, []);

  // 60 FPS Canvas Physics & Render Loop
  useEffect(() => {
    if (!celebrating) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      // Clean additive fade for glowing firework trails
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.20)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      // 1. Draw Shockwave Flashes (Expansive luminous aerial glow)
      for (let f = flashesRef.current.length - 1; f >= 0; f--) {
        const fl = flashesRef.current[f];
        fl.alpha -= 0.12;
        if (fl.alpha <= 0) {
          flashesRef.current.splice(f, 1);
          continue;
        }
        const grad = ctx.createRadialGradient(fl.x, fl.y, 0, fl.x, fl.y, fl.radius);
        grad.addColorStop(0, `rgba(${fl.rgb}, ${fl.alpha * 0.95})`);
        grad.addColorStop(0.35, `rgba(254, 240, 138, ${fl.alpha * 0.5})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(fl.x, fl.y, fl.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Rockets (Smooth ballistic ascent)
      for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
        const r = rocketsRef.current[i];
        r.x += r.vx;
        r.y += r.vy;
        r.vy *= 0.985; // Decelerates smoothly near apex

        r.trail.push({ x: r.x, y: r.y, alpha: 1 });
        if (r.trail.length > 9) r.trail.shift();

        // Smoky fiery comet trail
        const pal = PALETTES[r.paletteIdx];
        ctx.beginPath();
        for (let t = 0; t < r.trail.length; t++) {
          const pt = r.trail[t];
          ctx.strokeStyle = `rgba(${pal.primary}, ${t / r.trail.length})`;
          ctx.lineWidth = (t / r.trail.length) * 3.0;
          if (t === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        // Bright incandescent rocket tip
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3.0, 0, Math.PI * 2);
        ctx.fill();

        // Detonate at apex
        if (r.y <= r.targetY || r.vy >= -1) {
          explodeRocket(r.x, r.y, r.paletteIdx, r.isTextBurst);
          rocketsRef.current.splice(i, 1);
        }
      }

      // 3. Draw Exploding Particles & Cascading Willow Streamers
      for (let j = particlesRef.current.length - 1; j >= 0; j--) {
        const p = particlesRef.current[j];
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(j, 1);
          continue;
        }

        // Particle trail history
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 6) p.trail.shift();

        // Draw streamer trail
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let k = 1; k < p.trail.length; k++) {
            ctx.lineTo(p.trail[k].x, p.trail[k].y);
          }
          ctx.strokeStyle = `rgba(${p.rgb}, ${p.alpha * 0.58})`;
          ctx.lineWidth = p.size * 0.8;
          ctx.stroke();
        }

        // Glowing particle head
        ctx.fillStyle = `rgba(${p.rgb}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [celebrating, explodeRocket]);

  // Master 7.8-Second Automated Diwali Celebration Sequence
  const triggerCelebration = useCallback(() => {
    const now = Date.now();
    if (now - lastTriggerTimeRef.current < 450) return;
    lastTriggerTimeRef.current = now;

    // Synchronously unlock audio during user gesture (required for iOS Safari & Android Chrome)
    audio.unlock();

    // Clear any previous running sequence
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    rocketsRef.current = [];
    particlesRef.current = [];
    flashesRef.current = [];

    setCelebrating(true);
    setDiyaClicked(true);
    setSkyGreetingActive(false);
    setSkyGreetingFading(false);

    // ── Continuous Grand Barrage of Sky Shots (Vibrant Multi-Color Spectacle) ──
    // 0.15s: Opening high-altitude shot (Left 22% - Imperial Emerald & Gold)
    launchRocket(0.22, 0.30, 150, false, 2);

    // 0.65s: Counter-shot (Right 78% - Saffron & Ruby Brocade)
    launchRocket(0.78, 0.26, 650, false, 1);

    // 1.25s: 🌟 THE GRAND DIWALI ROCKET 🌟 (Center 50%, High Apex)
    // Detonates at ~1.85s with vibrant multi-color rainbow stardust cascade across the sky
    launchRocket(0.50, 0.19, 1250, true, 5);

    // Reveal the pristine High-Definition Diwali Sky Greeting right at blast detonation (~1.85s)
    const greetTimer = setTimeout(() => {
      setSkyGreetingActive(true);
    }, 1850);
    timeoutsRef.current.push(greetTimer);

    // 2.70s: Flanking celestial burst (Left 18% - Royal Violet & Neon Magenta)
    launchRocket(0.18, 0.28, 2700, false, 4);

    // 3.30s: Flanking celestial burst (Right 82% - Electric Cyan & Sunset Coral)
    launchRocket(0.82, 0.25, 3300, false, 3);

    // 4.10s & 4.30s: Twin high-altitude Sunset Rose & Imperial Emerald cascades
    launchRocket(0.34, 0.24, 4100, false, 6);
    launchRocket(0.66, 0.22, 4300, false, 2);

    // 5.25s: 💥 GRAND FINALE TRIPLE VOLLEY 💥 (Massive multi-color panoramic breaks)
    launchRocket(0.24, 0.23, 5250, false, 1);
    launchRocket(0.50, 0.18, 5350, false, 5);
    launchRocket(0.76, 0.21, 5450, false, 3);

    // Begin smooth fading of sky greeting at 5.8s
    const fadeTimer = setTimeout(() => {
      setSkyGreetingFading(true);
    }, 5800);
    timeoutsRef.current.push(fadeTimer);

    // ── Automatically Vanish Everything Completely at 7.8s ──
    const finishTimer = setTimeout(() => {
      setSkyGreetingActive(false);
      setSkyGreetingFading(false);
      setCelebrating(false);
    }, 7800);
    timeoutsRef.current.push(finishTimer);
  }, [launchRocket]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      {/* ── 1. Floating & Draggable Interactive Diya with Royal Medallion Ring ── */}
      <aside
        aria-label="Diwali Celebration Diya (Draggable and Clickable)"
        className="fixed z-50 select-none group pointer-events-auto touch-none"
        style={{
          left: position ? `${position.x}px` : undefined,
          top: position ? `${position.y}px` : undefined,
          right: position ? undefined : "14px",
          bottom: position ? undefined : "14px",
          touchAction: "none",
        }}
      >
        <button
          type="button"
          onClick={() => triggerCelebration()}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          aria-label="Light Diwali Diya and launch 7-second sky shot fireworks (Draggable)"
          className={`relative flex items-center justify-center w-24 h-24 sm:w-36 sm:h-36 bg-transparent border-none p-0 focus:outline-none transition-transform duration-150 ${
            isDragging ? "cursor-grabbing scale-105" : "cursor-grab hover:scale-105 active:scale-95"
          }`}
          style={{ touchAction: "none" }}
        >
          {/* Rotating Circular Text Halo (Spins smoothly around the glowing Diya, no extra circles) */}
          <svg
            viewBox="0 0 240 240"
            className={`absolute inset-0 w-full h-full pointer-events-none animate-spin transition-all duration-500 ${
              celebrating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
            style={{ animationDuration: "20s" }}
            aria-hidden="true"
          >
            <defs>
              {/* Continuous Circular Path centered at (120, 120) with radius 86 */}
              <path
                id="diyaSpinningCirclePath"
                d="M 120, 120 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
              />
            </defs>

            {/* Clean Rotating Circular Text (Adaptive White on Dark / Dark Charcoal on Light - NO gold color, NO glow) */}
            <text
              className="font-serif font-black uppercase tracking-[0.24em] transition-colors duration-300"
              fontSize="11"
              fill={isDarkSection ? "#ffffff" : "#1c1917"}
              style={{
                filter: isDarkSection
                  ? "drop-shadow(0 1px 3px rgba(0, 0, 0, 0.95))"
                  : "none",
              }}
            >
              <textPath
                href="#diyaSpinningCirclePath"
                xlinkHref="#diyaSpinningCirclePath"
                startOffset="0%"
                textLength="530"
                lengthAdjust="spacing"
              >
                ✦ LIGHT THE DIYA ✦ HAPPY DIWALI ✦ TAP TO CELEBRATE ✦
              </textPath>
            </text>
          </svg>

          {/* User's Diya Image Centered (Zero Overlap with Text, Compact on Mobile) */}
          <div className="relative z-10 w-11 h-13 sm:w-16 sm:h-19 flex items-center justify-center animate-diya-float pointer-events-none">
            <Image
              src="/images/diya.webp"
              alt="Diwali Diya"
              width={64}
              height={76}
              priority
              className="object-contain drop-shadow-[0_3px_10px_rgba(0,0,0,0.3)] select-none pointer-events-none transition-all duration-300"
            />
          </div>
        </button>
      </aside>

      {/* ── 2. Cinematic Midnight Sky Atmosphere (Zero Boxes, Zero Cards - Soft Spotlight Vignette, Crisp Clear Background) ── */}
      {celebrating && (
        <div
          onClick={() => setCelebrating(false)}
          className={`fixed inset-0 z-40 transition-opacity duration-700 ease-out cursor-pointer ${
            skyGreetingFading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(6, 8, 14, 0.22) 0%, rgba(6, 8, 14, 0.42) 60%, rgba(6, 8, 14, 0.62) 100%)",
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
          }}
          aria-hidden="true"
        />
      )}

      {/* ── 3. Full-Screen Canvas Fireworks (Zero Cards, True Night Sky Breaks) ── */}
      {celebrating && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-50 w-full h-full"
          aria-hidden="true"
        />
      )}

      {/* ── 4. Pure Sky Festive Imprint (No Cards, No Box, Direct Organic Sky Script) ── */}
      {celebrating && skyGreetingActive && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-center pointer-events-none select-none px-4 transition-all duration-700 ease-out ${
            skyGreetingFading
              ? "opacity-0 scale-95 -translate-y-4"
              : "opacity-100 scale-100 translate-y-0"
          }`}
          style={{ willChange: "transform, opacity" }}
          aria-live="polite"
        >
          {/* Centered Glowing Diya Mascot */}
          <div className="relative w-16 h-18 sm:w-20 sm:h-24 mx-auto mb-1 animate-diya-float flex items-center justify-center">
            {/* Subtle Ambient Ground Warmth */}
            <span
              className="absolute -bottom-1 w-12 sm:w-16 h-2 bg-[#f59e0b]/35 rounded-full blur-[6px] pointer-events-none"
              aria-hidden="true"
            />
            <Image
              src="/images/diya.webp"
              alt="Diwali Diya"
              width={72}
              height={84}
              priority
              className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] select-none pointer-events-none"
            />
          </div>

          {/* ── Headline: "Happy Diwali" (Royal Cursive Calligraphy, Clean Gradient, Zero Glow Halo) ── */}
          <h2
            className="font-calligraphy text-5xl min-[360px]:text-6xl min-[420px]:text-7xl sm:text-8xl lg:text-9xl select-none leading-none py-1 sm:py-2 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #ff416c 0%, #ff758c 22%, #f7b733 48%, #ffea79 70%, #00f2fe 92%, #4facfe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))",
            }}
          >
            Happy Diwali
          </h2>

          {/* ── Subtitle: Short Inspiring English Subtitle with Elegant Hairline Accents ── */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mt-2 sm:mt-2.5 select-none px-4">
            <span
              className="hidden min-[420px]:block h-px w-6 sm:w-12 bg-gradient-to-r from-transparent via-[#ffd166]/50 to-[#ffd166]"
              aria-hidden="true"
            />
            <p
              className="font-serif font-bold text-[10px] min-[360px]:text-xs sm:text-sm lg:text-base tracking-[0.20em] sm:tracking-[0.26em] uppercase max-w-[280px] min-[400px]:max-w-sm sm:max-w-xl mx-auto leading-normal select-none text-center"
              style={{
                background: "linear-gradient(90deg, #ff758c 0%, #ffd166 50%, #4facfe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 1px 3px rgba(0, 0, 0, 0.85))",
              }}
            >
              Lighting the Path of Innovation &amp; Prosperity
            </p>
            <span
              className="hidden min-[420px]:block h-px w-6 sm:w-12 bg-gradient-to-l from-transparent via-[#ffd166]/50 to-[#ffd166]"
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </>
  );
}
