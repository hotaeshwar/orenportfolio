/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#214748",
          'bg-deep': "#173536",
          'bg-surface': "#285455",
          'bg-card': "rgba(33, 71, 72, 0.7)",
          ivory: "#fcfaf6",
          cream: "#f5f0e6",
          linen: "#e8edea",
          gold: "#e2c056",
          'gold-light': "#f3de98",
          muted: "rgba(252, 250, 246, 0.85)",
          faint: "rgba(252, 250, 246, 0.6)",
          border: "rgba(252, 250, 246, 0.18)",
          'border-light': "rgba(252, 250, 246, 0.28)",
        },
      },
      fontFamily: {
        serif: ["var(--font-italiana)", "var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-italiana)", "var(--font-playfair)", "serif"],
        bodySerif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'marquee': 'marquee 45s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
