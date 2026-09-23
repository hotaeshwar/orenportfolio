"use client";

import { roomsData } from "@/data/rooms";
import Reveal from "./Reveal";

export default function RoomPortfolio() {
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
              Each room at OREN is thoughtfully curated with warm wooden craftsmanship, expansive private balconies, and soothing valley panoramas.
            </p>
          </Reveal>
        </div>

        {/* PURE TYPOGRAPHIC LUXURY ROOM DIRECTORY */}
        <div className="divide-y divide-brand-border/40 border-y border-brand-border/40">
          {roomsData.map((room, idx) => {
            const indexNumber = String(idx + 1).padStart(2, "0");

            return (
              <Reveal key={room.id} direction="up" delay={idx * 60}>
                <div
                  id={`room-${room.id}`}
                  className="py-8 sm:py-12 lg:py-14 group transition-colors duration-300 hover:bg-brand-bg-surface/30 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl flex flex-col md:flex-row md:items-baseline justify-between gap-4 sm:gap-8 scroll-mt-28"
                >
                  {/* LEFT: NUMBER & ROOM TITLE */}
                  <div className="flex items-baseline space-x-4 sm:space-x-8">
                    <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-gold font-semibold">
                      {indexNumber}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#fcfaf6] group-hover:text-brand-gold-light transition-colors duration-300">
                      {room.title}
                    </h3>
                  </div>

                  {/* RIGHT: ROOM TAGLINE / SUBTITLE */}
                  <div className="md:text-right pl-8 md:pl-0">
                    <p className="text-base sm:text-lg lg:text-xl font-serif italic text-brand-gold font-normal">
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

