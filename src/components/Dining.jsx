"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Dining() {
  return (
    <section id="dining" className="py-24 sm:py-32 lg:py-40 bg-[#214748] text-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Reveal direction="up">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold font-semibold">
                DINING
              </span>
              <div className="h-px flex-1 max-w-xs bg-brand-border" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h2 className="fluid-section-title font-serif font-normal text-[#fcfaf6]">
              Wholesome Flavours. <br />
              <span className="italic text-brand-gold font-light">Fresh Mornings.</span>
            </h2>
          </Reveal>
        </div>

        {/* CARDLESS EDITORIAL DINING HERO SHOWCASE (ZERO HOVER ZOOM) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            <Reveal direction="right">
              <div className="relative aspect-[16/10] sm:aspect-[3/2] w-full overflow-hidden image-reveal-wrapper">
                <Image
                  src="/images/dining/dining-01.jpg"
                  alt="OREN Kasauli — Open-air dining terrace"
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 space-y-5">
            <Reveal direction="up" delay={150}>
              <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold font-semibold">
                CULINARY
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#fcfaf6]">
                100% Pure Vegetarian
              </h3>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <p className="text-lg sm:text-2xl font-serif italic text-brand-gold font-light">
                Simple flavours. Thoughtfully served.
              </p>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p className="text-sm sm:text-base font-sans text-[#f5f0e6] font-normal leading-relaxed">
                Fresh ingredients, regional delicacies and comforting contemporary pure vegetarian recipes crafted for relaxed mountain mornings and sunset dining.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
