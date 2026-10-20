import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, MapPin } from "lucide-react";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Dandakaranya | Land, Lore & Living Heritage",
  description: "Explore Dandakaranya through epic tradition, regional history, Eastern Ghats landscapes and the living cultures of Koraput and southern Odisha.",
  openGraph: {
    title: "Dandakaranya: A Land of Legends, Life & Legacy",
    description: "A researched editorial journey through Dandakaranya’s landscapes, literary memory, history and living heritage.",
    images: [{ url: "/images/dandakaranya/koraput-deomali-panorama.jpg", width: 1600, height: 738, alt: "Deomali highlands in Koraput district, Odisha" }],
  },
};

const chapters = [
  { number: "01", label: "THE LAND", title: "A region, not a line on today’s map", text: "The name Dandakaranya is commonly understood as “the forest of Dandaka” — from Dandaka and araṇya, forest. It names a landscape in literary and historical memory rather than a present-day administrative unit. In modern descriptions, the wider region is associated with forested parts of today’s southern Odisha and adjoining central India, including areas around Koraput and Bastar. Its extent shifts with the source: an epic’s imagined geography, a historical region and a twentieth-century government project each describe different boundaries. In Odisha, the Eastern Ghats rise into broken plateaus, steep valleys and highland settlements. Deomali, in Koraput district, is a striking landmark of that wider terrain — not a precise boundary marker for ancient Dandakaranya." },
  { number: "02", label: "EPIC MEMORY", title: "A forest in the Ramayana", text: "In the Vālmīki Rāmāyaṇa, the Araṇya Kāṇḍa opens with Rama, Sita and Lakshmana entering the great forest of Dandaka. The story places forest hermitages, encounters and exile within a consequential moral landscape: a place of refuge, danger, discipline and exchange between communities. Later retellings and regional traditions have carried these episodes into many local geographies. Their cultural force is real and enduring, even where the precise mapping of the epic landscape remains debated. This page treats the Ramayana as an influential literary and devotional tradition; it does not present its narrative events as archaeological proof of a single, fixed location." },
  { number: "03", label: "HISTORICAL CHANGE", title: "Many histories in one highland region", text: "The written history of southern Odisha is layered and locally specific. Koraput’s district gazetteer traces political change through the former Nandapur kingdom and the later Jeypore state, while the region’s communities and settlements long predate modern district borders. In 1958, the Government of India established the Dandakaranya Development Authority to resettle displaced people from East Pakistan and pursue regional development, with operations across parts of present-day Odisha and Madhya Pradesh. Government records describe settlement schemes and infrastructure; later scholarship also draws attention to the consequences for Adivasi communities, including land and livelihood pressures and limited consultation. These accounts should be read together: resettlement was a major modern intervention in a region already inhabited and shaped by its own peoples." },
  { number: "04", label: "LANDSCAPE", title: "Highlands, forests and river valleys", text: "Southern Odisha’s Eastern Ghats are a mosaic of ridges, plateaus, cultivated slopes, forest patches and river-cut valleys. The wider Koraput landscape includes the Machkund river gorge and Duduma waterfall; Deomali’s open summit gives a different view of the region’s high country. These places belong to the same broader southern Odisha landscape, but they are distinct destinations, not interchangeable names for Dandakaranya or the Jathara venue. Forests matter here as habitats and watersheds, and as part of everyday life, work and memory for people who live alongside them. The terrain is not untouched wilderness: it is a lived landscape, continually shaped by ecology, cultivation, movement and care." },
  { number: "05", label: "LIVING CULTURES", title: "Culture belongs to the present", text: "Koraput is home to many communities, including Gadaba, Paroja, Saora and Gond people; names, languages and practices vary across places and households. The district gazetteer documents a multilingual region, including Sora, Gutob, Ollari, Gondi, Kui and local varieties of Odia. In Koraput, Gadaba and Paroja traditions include music and Dhemsa dance, among many forms of cultural expression. Weekly markets bring together exchange in farm produce, forest goods, tools, textiles and ideas. These are living societies, not a single “tribal culture” and not relics of the past. Any account of the region is partial unless it recognises contemporary community life, knowledge, change and self-representation." },
  { number: "06", label: "CRAFT & POSSIBILITY", title: "Where heritage inspires new possibilities", text: "Kotpad, in Koraput district, is known for handwoven textiles made by Mirgan weavers and coloured with plant-based dyes; Kotpad Handloom Fabric received a Geographical Indication registration in 2005. Saora painting is another distinct artistic tradition, grounded in particular cultural and ritual contexts. Neither craft can be reduced to a design motif: both carry knowledge, skill and relationships that deserve attribution and fair recognition. Their futures depend on makers and communities, as well as markets, institutions and thoughtful stewardship. Startup Jathara 2026 gathers at GIET University in Gunupur, within the wider landscape described here. Its setting offers a reason to meet with humility: to bring new ideas into conversation with a place whose knowledge and creative work are already substantial." },
];

export default function DandakaranyaPage() {
  return (
    <article className="bg-[#fcfbf8]">
      <header className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#081a14] sm:min-h-[660px] lg:min-h-[720px] pt-24 pb-14 sm:pt-28 sm:pb-16">
        <Image src="/images/dandakaranya/koraput-deomali-panorama.jpg" alt="The open Deomali ridgeline in Koraput district, part of the Eastern Ghats highlands of southern Odisha" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#081a14]/95 via-[#081a14]/50 to-[#081a14]/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081a14]/75 via-[#081a14]/35 to-transparent" />
        <Container size="wide" className="py-6 text-white">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#e1c77f] drop-shadow-sm">An editorial guide · Southern Odisha &amp; the wider region</p>
          <h1 className="font-serif text-[clamp(2.5rem,10vw,7.75rem)] font-bold leading-[0.95] tracking-[-0.055em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]">Dandakaranya</h1>
          <p className="mt-5 max-w-2xl font-serif text-2xl leading-tight text-white drop-shadow-sm sm:text-4xl">A Land of Legends, Life &amp; Legacy</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 drop-shadow-sm sm:text-lg sm:leading-8">Dandakaranya is a historical and culturally significant region remembered through the forest landscapes of central-eastern India. Its name carries epic memory; its present belongs to many communities, places and histories.</p>
          <a href="#chapter-01" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-colors hover:text-[#e1c77f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b25e]">
            Begin the story <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-7 text-xs text-white/70">Deomali, Koraput district · Eastern Ghats, Odisha</p>
        </Container>
      </header>

      <section className="heritage-reveal border-t border-[#dfd6c4] bg-[#fcfbf8] text-[#161e1b]" aria-labelledby="chapter-01">
        <Container size="wide" className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div className="max-w-2xl">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl text-[#8c671b]">01</span>
                <p className="text-[11px] font-bold tracking-[0.2em] text-[#78716c]">THE LAND</p>
              </div>
              <h2 id="chapter-01" className="mt-5 font-serif text-3xl font-bold leading-tight text-[#1c1917] sm:text-4xl">A region, not a line on today’s map</h2>
              <p className="mt-5 text-base leading-8 text-[#4a5752] sm:text-lg">{chapters[0].text}</p>
            </div>
            <figure className="overflow-hidden rounded-[1.5rem] border border-[#dfd6c4] bg-white shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image src="/images/dandakaranya/table-mountain-koraput.jpg" alt="Koraput town and surrounding forested hills viewed from Table Mountain in southern Odisha" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover transition-transform duration-700 hover:scale-[1.02]" />
              </div>
              <figcaption className="px-4 py-3 text-xs leading-5 text-[#6b6257]">Koraput and its surrounding hills viewed from Table Mountain · Southern Odisha</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="heritage-reveal border-t border-[#e5d9c5] bg-[#f5efe6]">
        <Container size="wide" className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-24">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl lg:order-1">
            <Image src="/images/dandakaranya/koraput-forest-sunrise.jpg" alt="Sunrise behind a tree-lined Koraput highland ridge in southern Odisha" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-xs text-white">Koraput forest at sunrise · wider southern Odisha landscape</p>
          </div>
          <div className="order-1 max-w-xl lg:order-2">
            <p className="text-xs font-bold tracking-[0.2em] text-[#8c671b]">02 · EPIC MEMORY</p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1c1917] sm:text-4xl">A forest in the Ramayana</h2>
            <p className="mt-5 text-base leading-8 text-[#4a5752]">{chapters[1].text}</p>
            <a href="https://www.wisdomlib.org/hinduism/book/the-ramayana-of-valmiki/d/doc424098.html" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#143e30] underline decoration-[#c9b879] underline-offset-4 hover:text-[#a74e2d]">Read the opening of Araṇya Kāṇḍa <BookOpen className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </Container>
      </section>

      <section className="heritage-reveal border-t border-[#dfd6c4] bg-[#fcfbf8]">
        <Container size="wide" className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-7 md:grid-cols-[220px_1fr] lg:gap-16">
            <div><span className="font-serif text-4xl text-[#8c671b]">03</span><p className="mt-2 text-[11px] font-bold tracking-[0.2em] text-[#78716c]">HISTORICAL CHANGE</p></div>
            <div className="max-w-4xl">
              <h2 className="font-serif text-3xl font-bold leading-tight text-[#1c1917] sm:text-4xl">Many histories in one highland region</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#4a5752]">{chapters[2].text}</p>
              <ol className="mt-8 grid gap-5 border-l border-[#c5b68c] pl-5 sm:grid-cols-3 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5">
                <li><span className="text-xs font-bold uppercase tracking-widest text-[#8c671b]">Earlier regional history</span><p className="mt-2 text-sm leading-6 text-[#4a5752]">Nandapur and the later Jeypore state appear in the recorded history of Koraput.</p></li>
                <li><span className="text-xs font-bold uppercase tracking-widest text-[#8c671b]">1958</span><p className="mt-2 text-sm leading-6 text-[#4a5752]">The Dandakaranya Development Authority was established for resettlement and regional development.</p></li>
                <li><span className="text-xs font-bold uppercase tracking-widest text-[#8c671b]">A contested legacy</span><p className="mt-2 text-sm leading-6 text-[#4a5752]">Official development aims and local costs need to be understood side by side.</p></li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="heritage-reveal relative isolate min-h-[580px] overflow-hidden bg-[#081a14] text-white sm:min-h-[640px]">
        <Image src="/images/dandakaranya/deomali-hilltop-koraput.jpg" alt="Open grassland and mountain ridges at Deomali in Koraput district, Odisha" fill sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081a14]/95 via-[#081a14]/70 to-[#081a14]/10" />
        <Container size="wide" className="flex min-h-[580px] items-center py-16 sm:min-h-[640px] sm:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#e1c77f]">04 · LANDSCAPE</p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">Highlands, forests and river valleys</h2>
            <p className="mt-5 text-base leading-8 text-white/85">{chapters[3].text}</p>
            <a href="https://odishatourism.gov.in/en/places/deomali-hills" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-[#d6b25e] underline-offset-4 hover:text-[#e1c77f]"><MapPin className="h-4 w-4" aria-hidden="true" /> Deomali, Koraput · Odisha Tourism</a>
            <p className="mt-6 text-xs text-white/65">Photograph: Deomali hilltop, Koraput district</p>
          </div>
        </Container>
      </section>

      <section className="heritage-reveal border-t border-white/15 bg-[#103327] text-[#fcfbf8]" aria-labelledby="chapter-05">
        <Container size="wide" className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <figure className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#081a14] shadow-2xl lg:mx-0">
              <div className="relative aspect-[3/4]">
                <Image src="/images/dandakaranya/gadaba-couple-koraput.jpg" alt="A Gadaba couple photographed in Koraput, Odisha, wearing traditional clothing" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover" />
              </div>
              <figcaption className="px-4 py-3 text-xs leading-5 text-[#c8d1cd]">Gadaba couple, Koraput · Photograph released by the Government of Odisha</figcaption>
            </figure>
            <div className="max-w-2xl">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl text-[#d6b25e]">05</span>
                <p className="text-[11px] font-bold tracking-[0.2em] text-[#c8d1cd]">LIVING CULTURES</p>
              </div>
              <h2 id="chapter-05" className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">Culture belongs to the present</h2>
              <p className="mt-5 text-base leading-8 text-[#e2eee8] sm:text-lg">{chapters[4].text}</p>
              <p className="mt-6 border-l-2 border-[#d6b25e] pl-4 text-sm leading-6 text-[#c8d1cd]">Community names describe distinct peoples and histories. They should never be used as a single visual shorthand for the whole region.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="heritage-reveal border-t border-[#dfd6c4] bg-[#fcfbf8]" aria-labelledby="chapter-06">
        <Container size="wide" className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="max-w-2xl">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl text-[#8c671b]">06</span>
                <p className="text-[11px] font-bold tracking-[0.2em] text-[#78716c]">CRAFT &amp; POSSIBILITY</p>
              </div>
              <h2 id="chapter-06" className="mt-5 font-serif text-3xl font-bold leading-tight text-[#1c1917] sm:text-4xl">Where heritage inspires new possibilities</h2>
              <p className="mt-5 text-base leading-8 text-[#4a5752] sm:text-lg">{chapters[5].text}</p>
            </div>
            <figure className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.5rem] border border-[#dfd6c4] bg-white shadow-xl lg:mx-0 lg:ml-auto">
              <div className="relative aspect-[4/5]">
                <Image src="/images/dandakaranya/saura-painting-odisha.jpg" alt="A contemporary Saura painting from Odisha featuring a tree motif and detailed geometric border" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover" />
              </div>
              <figcaption className="px-4 py-3 text-xs leading-5 text-[#6b6257]">Saura painting from Odisha · Photograph by Sumita Roy Dutta</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="heritage-reveal border-t border-[#255141] bg-[#0d281e] py-16 text-white sm:py-20">
        <Container size="wide" className="grid gap-7 md:grid-cols-[220px_1fr] lg:gap-16">
          <div><span className="font-serif text-4xl text-[#d6b25e]">A NEW CHAPTER</span></div>
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">A place to meet with curiosity</h2>
            <p className="mt-5 text-base leading-8 text-[#e2eee8]">Startup Jathara 2026 meets in Gunupur, in the broader southern Odisha landscape introduced here. May the gathering begin by listening to the place: its people, its work and the many histories held in its landscapes.</p>
            <Link href="/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-[#d6b25e] underline-offset-4 hover:text-[#e1c77f]">Return to the Jathara overview <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </Container>
      </section>

    </article>
  );
}
