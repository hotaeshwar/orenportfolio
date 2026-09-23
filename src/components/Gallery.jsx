"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryFrames } from "@/data/gallery";
import Reveal from "./Reveal";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (idx) => setSelectedIdx(idx);
  const closeLightbox = () => setSelectedIdx(null);

  const nextImage = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev + 1) % galleryFrames.length);
    }
  }, [selectedIdx]);

  const prevImage = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev - 1 + galleryFrames.length) % galleryFrames.length);
    }
  }, [selectedIdx]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, nextImage, prevImage]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIdx]);

  const activeFrame = selectedIdx !== null ? galleryFrames[selectedIdx] : null;

  // Duplicate for seamless infinite marquee loop
  const duplicatedFrames = [...galleryFrames, ...galleryFrames];

  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-40 bg-[#214748] text-brand-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        {/* SECTION HEADER */}
        <Reveal direction="up">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xs font-sans tracking-widest-2xl uppercase text-brand-gold font-semibold">
              GALLERY
            </span>
            <div className="h-px flex-1 max-w-xs bg-brand-border" />
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h2 className="fluid-section-title font-serif font-normal text-[#fcfaf6] mb-4">
            OREN in Frames
          </h2>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p className="text-sm sm:text-base lg:text-lg font-sans text-[#f5f0e6] font-normal leading-relaxed max-w-3xl">
            A visual anthology capturing the architecture, serene valley horizons, craftsmanship, and quiet luxury of OREN Kasauli.
          </p>
        </Reveal>
      </div>

      {/* CONTINUOUS AUTO-CAROUSEL TRACK (ZERO BUTTONS, CARDLESS, NO HOVER ZOOM) */}
      <div className="w-full overflow-hidden select-none py-2">
        <div className="marquee-track animate-marquee flex gap-6 sm:gap-8 items-center cursor-pointer">
          {duplicatedFrames.map((frame, idx) => {
            const originalIdx = idx % galleryFrames.length;

            return (
              <div
                key={`${frame.id}-${idx}`}
                onClick={() => openLightbox(originalIdx)}
                className="flex-shrink-0 w-[300px] sm:w-[420px] md:w-[500px] lg:w-[560px] group relative overflow-hidden image-reveal-wrapper rounded-lg"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    quality={95}
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 450px, 560px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {selectedIdx !== null && activeFrame && (
        <div
          className="fixed inset-0 z-50 bg-[#122828]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          {/* TOP BAR */}
          <div
            className="flex items-center justify-between z-10 max-w-7xl mx-auto w-full pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs font-sans tracking-widest-xl uppercase text-brand-gold font-semibold">
                {activeFrame.category}
              </span>
              <h4 className="text-lg sm:text-2xl font-serif text-[#fcfaf6]">
                {activeFrame.title}
              </h4>
            </div>

            <button
              onClick={closeLightbox}
              className="p-3 rounded-full bg-[#1b3d3e]/80 text-[#fcfaf6] hover:bg-brand-gold hover:text-brand-bg transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* MAIN IMAGE VIEWPORT */}
          <div
            className="relative flex-1 max-w-6xl w-full mx-auto my-4 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[82vh]">
              <Image
                src={activeFrame.src}
                alt={activeFrame.alt}
                fill
                quality={95}
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* PREV BUTTON */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1b3d3e]/80 text-[#fcfaf6] hover:bg-brand-gold hover:text-brand-bg transition-colors focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            {/* NEXT BUTTON */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1b3d3e]/80 text-[#fcfaf6] hover:bg-brand-gold hover:text-brand-bg transition-colors focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* BOTTOM BAR */}
          <div
            className="max-w-4xl mx-auto w-full text-center pb-2 text-xs font-mono text-brand-gold"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedIdx + 1} of {galleryFrames.length}
          </div>
        </div>
      )}
    </section>
  );
}
