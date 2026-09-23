"use client";

import Image from "next/image";
import { momentsData } from "@/data/moments";
import Reveal from "./Reveal";

export default function Occasions() {
  // Duplicate array for seamless infinite auto-slide marquee loop
  const duplicatedMoments = [...momentsData, ...momentsData];

  return (
    <section id="moments" className="py-24 sm:py-32 lg:py-40 bg-[#214748] text-brand-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        {/* SECTION HEADER */}
        <Reveal direction="up">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold font-semibold">
              MOMENTS
            </span>
            <div className="h-px flex-1 max-w-xs bg-brand-border" />
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h2 className="fluid-section-title font-serif font-normal text-[#fcfaf6] mb-4">
            Made for Moments
          </h2>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p className="text-sm sm:text-base lg:text-lg font-sans text-[#f5f0e6] font-normal leading-relaxed max-w-3xl">
            From intimate couple getaways and family gatherings to pre-wedding celebrations and executive retreats, OREN offers an unhurried mountain backdrop for life&apos;s meaningful occasions.
          </p>
        </Reveal>
      </div>

      {/* CONTINUOUS AUTO-SLIDING CAROUSEL TRACK (ZERO BUTTONS, NO HOVER ZOOM) */}
      <div className="w-full overflow-hidden select-none py-2">
        <div className="marquee-track animate-marquee-slow flex gap-6 sm:gap-8 items-stretch">
          {duplicatedMoments.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-[310px] sm:w-[420px] md:w-[480px] lg:w-[540px] group relative overflow-hidden image-reveal-wrapper flex flex-col justify-between"
            >
              {/* IMAGE CONTAINER - STRICT ZERO HOVER ZOOM */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#173536]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 310px, (max-width: 1024px) 450px, 540px"
                />
              </div>

              {/* CARD DETAILS - READABLE TYPOGRAPHY WITH PROPER FONT WEIGHT */}
              <div className="pt-4 pb-2 border-b border-brand-border/40 space-y-2">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-serif text-[#fcfaf6] font-normal tracking-wide">
                    {item.title}
                  </h3>
                  <span className="text-xs font-sans tracking-wider uppercase text-brand-gold font-semibold flex-shrink-0">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-sans text-[#e2e8e5] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

