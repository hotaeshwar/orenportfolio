import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stay from "@/components/Stay";
import Surroundings from "@/components/Surroundings";
import Gallery from "@/components/Gallery";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#214748] text-brand-ivory selection:bg-brand-gold selection:text-brand-bg relative overflow-x-hidden">
      {/* TRANSPARENT FLOATING HEADER LOGO */}
      <Navbar />

      {/* 01 — HERO */}
      <Hero />

      {/* 02 — OREN */}
      <About />

      {/* 03 — THE STAY (ROOMS, EXPERIENCE & DINING COMBINED) */}
      <Stay />

      {/* 04 — EXPLORE */}
      <Surroundings />

      {/* 05 — GALLERY */}
      <Gallery />

      {/* 06 — CLOSING */}
      <Closing />

      {/* MINIMAL FOOTER */}
      <Footer />
    </main>
  );
}

