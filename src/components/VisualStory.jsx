"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function VisualStory() {
  return (
    <section className="py-20 sm:py-32 w-full bg-[#214748] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <Reveal direction="fade" duration={1200}>
          <div className="relative aspect-[16/10] sm:aspect-[16/9] min-h-[400px] sm:min-h-[500px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border shadow-2xl group image-reveal-wrapper">
            <Image
              src="/images/visual-story.jpg"
              alt="OREN Kasauli - Mountain horizon and infinity vista"
              fill
              quality={95}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/* Clean Subtle Editorial Caption Below Image */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between text-brand-cream/80 text-xs font-sans tracking-widest uppercase">
            <span className="text-brand-gold-light">
              Kasauli / Himachal Pradesh
            </span>
            <span className="text-brand-faint mt-1 sm:mt-0">
              Where mist and mountain architecture harmonize
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
