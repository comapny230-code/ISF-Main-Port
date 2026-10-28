import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../common/Container";

export function DandakaranyaHomeSection() {
  return (
    <section aria-labelledby="dandakaranya-preview-title" className="section-reveal border-y border-[#e6dfd1] bg-[#f7f4ec] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Image */}
          <div className="relative order-2 overflow-hidden rounded-2xl lg:order-1 shadow-[0_16px_56px_-8px_rgba(8,26,20,0.25)]">
            <div className="aspect-[16/10]">
              <Image
                src="/images/dandakaranya/jagged-peaks-forested-valley.webp"
                alt="Jagged peaks above the forested valley in Dandakaranya, Odisha"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081a14]/50 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="rounded-full bg-[#0d281e]/85 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white/90">
                Deomali · Koraput · Odisha
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 max-w-xl lg:order-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-px bg-[#9e792c]" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9e792c]">
                The place behind the gathering
              </p>
            </div>
            <h2 id="dandakaranya-preview-title" className="font-serif font-black text-3xl sm:text-4xl md:text-[2.4rem] leading-[1.1] tracking-tight text-[#1c1917]">
              A region shaped by forest, memory and living culture.
            </h2>
            <p className="text-sm sm:text-base leading-[1.75] text-[#57534e]">
              Experience a landscape where ancient epic memory breathes through pristine forests and rolling hills. Trek across timeless highland trails, discover indigenous artisanal crafts, and share ideas under ancient forest canopies with founders and mentors from across the globe. Curious to uncover what makes this historic valley so extraordinary?
            </p>
            <div className="pt-1">
              <Link
                href="/dandakaranya"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#143e30] transition-colors hover:text-[#a74e2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c25e38] group"
              >
                Discover Dandakaranya
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
