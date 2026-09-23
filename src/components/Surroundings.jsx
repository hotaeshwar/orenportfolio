"use client";

import Image from "next/image";
import { destinationsData } from "@/data/destinations";
import Reveal from "./Reveal";

export default function Surroundings() {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedDestinations = [...destinationsData, ...destinationsData];

  return (
    <section id="explore" className="py-24 sm:py-32 lg:py-40 bg-[#214748] text-brand-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        {/* SECTION HEADER */}
        <Reveal direction="up">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold font-semibold">
              EXPLORE
            </span>
            <div className="h-px flex-1 max-w-xs bg-brand-border" />
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h2 className="fluid-section-title font-serif font-normal text-[#fcfaf6] mb-4">
            Beyond OREN
          </h2>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p className="fluid-body font-sans text-[#f5f0e6] font-normal leading-relaxed max-w-2xl">
            Discover the quiet mountain charm, heritage horizons and scenic valleys surrounding Kasauli.
          </p>
        </Reveal>
      </div>

      {/* CONTINUOUS AUTO-CAROUSEL TRACK (ZERO BUTTONS, CARDLESS, NO HOVER ZOOM) */}
      <div className="w-full overflow-hidden select-none py-2">
        <div className="marquee-track animate-marquee-slow flex gap-6 sm:gap-8 items-center">
          {duplicatedDestinations.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] group relative overflow-hidden image-reveal-wrapper"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 450px, 540px"
                />
              </div>

              <div className="pt-4 pb-1 border-b border-brand-border/40">
                <h3 className="text-xl sm:text-2xl font-serif text-[#fcfaf6]">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base font-serif italic text-brand-gold font-normal mt-0.5">
                  {item.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
