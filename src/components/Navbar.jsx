"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 sm:py-8 md:py-10 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-start pointer-events-auto">
        {/* ENLARGED OREN LOGO */}
        <Link
          href="#hero"
          onClick={scrollToTop}
          className="group relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50 rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          aria-label="OREN Kasauli Home"
        >
          <div className="relative w-56 sm:w-72 md:w-88 lg:w-96 h-16 sm:h-20 md:h-24 lg:h-28 transition-opacity duration-300 group-hover:opacity-90">
            <Image
              src="/images/logo.png"
              alt="OREN Kasauli Logo"
              fill
              priority
              className="object-contain object-left drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 420px"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

