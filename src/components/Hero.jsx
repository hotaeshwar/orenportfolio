"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 200);
    const t2 = setTimeout(() => setStage(2), 500);
    const t3 = setTimeout(() => setStage(3), 800);
    const t4 = setTimeout(() => setStage(4), 1100);
    const t5 = setTimeout(() => setStage(5), 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-end justify-start overflow-hidden bg-[#214748] pb-16 sm:pb-24 pt-36"
    >
      {/* 1. CINEMATIC OREN KASAULI PHOTOGRAPH - NATURAL UN-ZOOMED VIEW */}
      <div className="absolute inset-0 z-0">
        <div
          className={`relative w-full h-full transition-opacity duration-1000 ease-luxury ${
            stage >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/images/hero-kasauli.jpg"
            alt="OREN Kasauli — Architectural hillside sanctuary"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Seamless editorial overlays for readability on #214748 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#214748] via-[#214748]/50 to-[#214748]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#214748]/85 via-[#214748]/40 to-transparent" />
        </div>
      </div>

      {/* 2. CARDLESS EDITORIAL CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          {/* LOCATION LABEL */}
          <div
            className={`transition-all duration-1000 ease-luxury ${
              stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center space-x-3 text-xs sm:text-sm font-sans tracking-widest-xl uppercase text-brand-gold font-semibold">
              <span className="w-8 sm:w-12 h-px bg-brand-gold" />
              <span>Himachal Pradesh</span>
            </div>
          </div>

          {/* MAIN HERO TITLE */}
          <div
            className={`transition-all duration-1000 ease-luxury ${
              stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="fluid-hero-title font-serif font-normal text-[#fcfaf6] tracking-tight">
              OREN KASAULI
            </h1>
          </div>

          {/* SUBTITLE */}
          <div
            className={`transition-all duration-1000 ease-luxury ${
              stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="fluid-subheading font-serif text-[#f5f0e6] font-light">
              A Stay Above the Ordinary
            </h2>
          </div>

          {/* SUPPORTING TEXT */}
          <div
            className={`transition-all duration-1000 ease-luxury ${
              stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg sm:text-2xl font-serif italic text-brand-gold font-light">
              Comfort. Calm. Kasauli.
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div
            className={`pt-2 transition-all duration-1000 ease-luxury ${
              stage >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#fcfaf6] font-semibold">
              Pure Vegetarian <span className="text-brand-gold mx-2.5">•</span> Valley Views <span className="text-brand-gold mx-2.5">•</span> Premium Stays
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
