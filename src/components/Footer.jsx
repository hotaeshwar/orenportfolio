import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 bg-[#173536] text-brand-ivory border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-6">
        {/* LOGO IN FOOTER */}
        <div className="relative w-48 sm:w-56 md:w-64 h-16 sm:h-20 opacity-95">
          <Image
            src="/images/logo.png"
            alt="OREN Kasauli Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* MINIMAL FOOTER TEXT */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-sans tracking-widest-2xl uppercase text-[#f5f0e6] font-medium">
            OREN KASAULI — HIMACHAL PRADESH
          </p>
          <p className="text-[11px] font-sans tracking-widest text-[#fcfaf6]/60">
            © {new Date().getFullYear()} OREN Kasauli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
