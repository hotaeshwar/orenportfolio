"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const EXPERIENCE_ITEMS = [
  "Private Jacuzzi",
  "Infinity Pool",
  "Valley Mornings",
  "Celebrations",
  "Time Together",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 lg:py-40 bg-[#214748] text-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Reveal direction="up">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold font-semibold">
                EXPERIENCE
              </span>
              <div className="h-px flex-1 max-w-xs bg-brand-border" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h2 className="fluid-section-title font-serif font-normal text-[#fcfaf6]">
              Every Stay Feels Different
            </h2>
          </Reveal>
        </div>

        {/* CARDLESS PHOTOGRAPHY COMPOSITION (SLIGHTLY LARGER, ZERO HOVER ZOOM) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch mb-16 sm:mb-24">
          {/* PRIMARY PANORAMIC IMAGE */}
          <div className="lg:col-span-8">
            <Reveal direction="up" delay={150}>
              <div className="relative aspect-[16/10] w-full overflow-hidden image-reveal-wrapper h-full min-h-[340px] sm:min-h-[460px]">
                <Image
                  src="/images/rooms/infinity-pool.jpg"
                  alt="OREN Kasauli — Infinity pool experience overlooking pine hills"
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </Reveal>
          </div>

          {/* TWO STACKED SUPPORTING PHOTOGRAPHS */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8">
            <Reveal direction="left" delay={250} className="flex-1">
              <div className="relative aspect-[16/10] w-full overflow-hidden image-reveal-wrapper h-full min-h-[210px]">
                <Image
                  src="/images/rooms/jacuzzi-room.jpg"
                  alt="OREN Kasauli — Private Jacuzzi experience"
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
            </Reveal>

            <Reveal direction="left" delay={350} className="flex-1">
              <div className="relative aspect-[16/10] w-full overflow-hidden image-reveal-wrapper h-full min-h-[210px]">
                <Image
                  src="/images/dining/dining-01.jpg"
                  alt="OREN Kasauli — Open-air dining experience"
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* FLOATING TYPOGRAPHY HIGHLIGHTS */}
        <Reveal direction="up" delay={200}>
          <div className="flex flex-wrap items-center justify-between gap-4 py-8 border-y border-brand-border/60 mb-20 sm:mb-28">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <div key={item} className="flex items-center space-x-3">
                <span className="text-sm sm:text-base lg:text-lg font-serif uppercase tracking-widest text-[#fcfaf6]">
                  {item}
                </span>
                {idx < EXPERIENCE_ITEMS.length - 1 && (
                  <span className="hidden md:inline-block text-brand-gold ml-4">•</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* LARGE EDITORIAL STATEMENT */}
        <div className="text-center max-w-4xl mx-auto py-8 sm:py-12 space-y-3 sm:space-y-4">
          <Reveal direction="up" delay={100}>
            <h3 className="fluid-quote font-serif font-normal text-[#fcfaf6] tracking-tight">
              Slow mornings.
            </h3>
          </Reveal>
          <Reveal direction="up" delay={250}>
            <h3 className="fluid-quote font-serif italic text-brand-gold font-light tracking-tight">
              Quiet hills.
            </h3>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <h3 className="fluid-quote font-serif font-normal text-[#f5f0e6] tracking-tight">
              Moments that stay.
            </h3>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
