"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Closing() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#214748] py-24 sm:py-32">
      {/* FULL-SCREEN KASAULI / OREN PHOTOGRAPH */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/closing-kasauli.jpg"
          alt="OREN Kasauli — Twilight mountain sanctuary"
          fill
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Soft atmospheric overlay */}
        <div className="absolute inset-0 bg-[#214748]/75 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#214748] via-transparent to-[#214748]" />
      </div>

      {/* EDITORIAL CLOSING CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-brand-ivory space-y-8">
        <Reveal direction="up" delay={100}>
          <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold-light">
            OREN KASAULI
          </span>
        </Reveal>

        <Reveal direction="up" delay={250}>
          <div className="space-y-2 sm:space-y-4">
            <h2 className="fluid-quote font-serif font-normal text-brand-ivory tracking-tight">
              Some places you visit.
            </h2>
            <h2 className="fluid-quote font-serif italic text-brand-gold-light font-light tracking-tight">
              Some you experience.
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
