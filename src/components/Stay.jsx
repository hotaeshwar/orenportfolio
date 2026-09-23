"use client";

import Image from "next/image";
import { roomsData } from "@/data/rooms";
import Reveal from "./Reveal";

export default function Stay() {
  return (
    <section id="stay" className="py-24 sm:py-32 lg:py-40 bg-[#214748] text-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <Reveal direction="up">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold font-semibold">
                THE STAY
              </span>
              <div className="h-px flex-1 max-w-xs bg-brand-border" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h2 className="fluid-section-title font-serif font-normal text-[#fcfaf6] mb-4">
              Find Your Kind of Comfort
            </h2>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="text-sm sm:text-base lg:text-lg font-sans text-[#f5f0e6] font-normal leading-relaxed max-w-2xl">
              From warm wooden attics and private jacuzzi balconies to plunge pools and 100% pure vegetarian fine dining, every stay at OREN is thoughtfully curated for mountain tranquility.
            </p>
          </Reveal>
        </div>

        {/* 2-COLUMN LUXURY VISUAL GRID (NATURAL 3:2 RATIO, NO ZOOMING) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {roomsData.map((room, idx) => {
            const indexNumber = String(idx + 1).padStart(2, "0");

            return (
              <Reveal key={room.id} direction="up" delay={(idx % 2) * 150}>
                <div
                  id={`stay-${room.id}`}
                  className="group flex flex-col space-y-4 scroll-mt-28"
                >
                  {/* IMAGE CONTAINER WITH NATURAL 3:2 ASPECT RATIO (ZERO ZOOM) */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-brand-bg-surface/50 shadow-lg">
                    <Image
                      src={room.image}
                      alt={room.alt}
                      fill
                      quality={95}
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* ROOM DETAILS */}
                  <div className="pt-2 flex flex-col space-y-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline space-x-3 sm:space-x-4">
                        <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold font-semibold">
                          {indexNumber}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#fcfaf6]">
                          {room.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-serif italic text-brand-gold/90 pl-7 sm:pl-8">
                      {room.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
