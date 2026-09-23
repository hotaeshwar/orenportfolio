"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const KEY_HIGHLIGHTS = [
  "Valley Views",
  "Private Balconies",
  "Jacuzzi Experiences",
  "Infinity Plunge Pool",
  "Pure Vegetarian Dining"
];

export default function About() {
  return (
    <section id="oren" className="py-24 sm:py-32 lg:py-40 bg-[#214748] text-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* SECTION LABEL */}
        <Reveal direction="up">
          <div className="flex items-center space-x-4 mb-8 sm:mb-12">
            <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold font-semibold">
              OREN
            </span>
            <div className="h-px flex-1 max-w-xs bg-brand-border" />
          </div>
        </Reveal>

        {/* CARDLESS EDITORIAL ARCHITECTURE SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: SHORT EDITORIAL TEXT & FLOATING TYPOGRAPHY HIGHLIGHTS (INCREASED VISIBILITY) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Reveal direction="up" delay={100}>
                <h2 className="fluid-section-title font-serif font-normal text-[#fcfaf6]">
                  Comfort Meets Calm
                </h2>
              </Reveal>

              <Reveal direction="up" delay={200}>
                <p className="fluid-body font-sans text-[#f5f0e6] font-normal leading-relaxed">
                  Nestled in the peaceful hills of Kasauli, OREN brings together comfort, privacy and beautiful valley views.
                </p>
              </Reveal>
            </div>

            {/* PURE TYPOGRAPHY HIGHLIGHTS */}
            <div className="pt-6 border-t border-brand-border/60">
              <ul className="space-y-3.5">
                {KEY_HIGHLIGHTS.map((item, idx) => (
                  <Reveal key={item} direction="up" delay={280 + idx * 80}>
                    <li className="flex items-center space-x-3.5 text-base sm:text-lg font-serif text-[#fcfaf6] tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-brand-gold" />
                      <span>{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: ONE LARGE PROPERTY IMAGE (ZERO HOVER ZOOM, EXACT 3:2 PROPORTION) */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={200}>
              <div className="relative aspect-[3/2] w-full overflow-hidden image-reveal-wrapper rounded-xl shadow-2xl">
                <Image
                  src="/images/about.png"
                  alt="OREN Kasauli — Property architecture nestled in peaceful hills"
                  fill
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
