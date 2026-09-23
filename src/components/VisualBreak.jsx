"use client";

import Reveal from "./Reveal";

export default function VisualBreak() {
  return (
    <section className="py-28 sm:py-40 lg:py-52 bg-[#214748] text-brand-ivory relative overflow-hidden flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-4 sm:space-y-6">
          <Reveal direction="up" delay={100} duration={1200}>
            <h2 className="fluid-quote font-serif font-normal text-brand-ivory tracking-tight">
              Slow mornings.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={300} duration={1200}>
            <h2 className="fluid-quote font-serif italic text-brand-gold-light font-light tracking-tight">
              Quiet hills.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={500} duration={1200}>
            <h2 className="fluid-quote font-serif font-normal text-brand-cream/90 tracking-tight">
              Spaces to reconnect.
            </h2>
          </Reveal>
        </div>

        <Reveal direction="fade" delay={700} duration={1400}>
          <div className="mt-12 inline-flex items-center space-x-4">
            <span className="w-12 sm:w-20 h-px bg-brand-gold/40" />
            <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-cream/60">
              OREN Kasauli
            </span>
            <span className="w-12 sm:w-20 h-px bg-brand-gold/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
