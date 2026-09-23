const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imagesDir = path.join(publicDir, 'images');
const roomsDir = path.join(imagesDir, 'rooms');
const diningDir = path.join(imagesDir, 'dining');
const placesDir = path.join(imagesDir, 'places');
const momentsDir = path.join(imagesDir, 'moments');

[publicDir, imagesDir, roomsDir, diningDir, placesDir, momentsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const rawDir = path.join(__dirname, 'raw_images');

// Image mappings based on visual content inspection
const mappings = [
  // Logo
  { src: 'orenkasauli-logo.png', dest: 'images/logo.png' },

  // Hero - Night illuminated property facade with OREN Kasauli illuminated sign
  { src: 'ChatGPT Image Sep 19, 2026, 08_51_45 AM.png', dest: 'images/hero-kasauli.jpg' },

  // Visual Story transition - Sunset plunge pool & valley
  { src: 'ChatGPT Image Sep 19, 2026, 08_57_33 AM.png', dest: 'images/visual-story.jpg' },

  // Rooms
  // Room 01 - Attic Room
  { src: 'ChatGPT Image Sep 19, 2026, 09_02_39 AM.png', dest: 'images/rooms/attic-room.jpg' },
  // Room 02 - Superior Attic Room
  { src: 'ChatGPT Image Sep 19, 2026, 09_02_39 AM.png', dest: 'images/rooms/superior-attic.jpg' },
  // Room 03 - Superior Room
  { src: 'ChatGPT Image Sep 19, 2026, 09_06_54 AM.png', dest: 'images/rooms/superior-room.jpg' },
  // Room 04 - Superior Room with Hot Tub / Jacuzzi
  { src: 'ChatGPT Image Sep 19, 2026, 08_52_53 AM.png', dest: 'images/rooms/jacuzzi-room.jpg' },
  // Room 05 - Superior Room with Infinity Plunge Pool
  { src: 'ChatGPT Image Sep 19, 2026, 08_54_48 AM.png', dest: 'images/rooms/infinity-pool.jpg' },
  // Room 06 - Family Suite
  { src: 'ChatGPT Image Sep 19, 2026, 08_59_09 AM.png', dest: 'images/rooms/family-suite.jpg' },
  // Room 07 - OREN Club Room
  { src: 'ChatGPT Image Sep 19, 2026, 09_22_34 AM.png', dest: 'images/rooms/club-room.jpg' },
  // Room 08 - Presidential Suite
  { src: 'ChatGPT Image Sep 19, 2026, 09_24_01 AM.png', dest: 'images/rooms/presidential-suite.jpg' },

  // Dining
  { src: 'ChatGPT Image Sep 19, 2026, 08_56_07 AM.png', dest: 'images/dining/dining-01.jpg' },
  { src: '21 (1).png', dest: 'images/dining/dining-02.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 08_51_45 AM.png', dest: 'images/dining/dining-03.jpg' },

  // Surroundings / Destinations
  { src: 'ChatGPT Image Sep 19, 2026, 09_30_42 AM.png', dest: 'images/places/toy-train.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 09_33_33 AM.png', dest: 'images/places/christ-church.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 09_33_33 AM.png', dest: 'images/places/sunrise-spot.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 09_33_33 AM.png', dest: 'images/places/monkey-point.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 09_38_29 AM.png', dest: 'images/places/gurkha-fort.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 08_54_48 AM.png', dest: 'images/places/shimla.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 09_06_54 AM.png', dest: 'images/places/chail.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 08_57_33 AM.png', dest: 'images/places/manali.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 08_52_53 AM.png', dest: 'images/places/baba-balak-nath.jpg' },

  // Moments
  { src: '21 (1).png', dest: 'images/moments/occasions.jpg' },

  // Closing
  { src: 'ChatGPT Image Sep 19, 2026, 08_51_45 AM.png', dest: 'images/closing-kasauli.jpg' },
  { src: 'ChatGPT Image Sep 19, 2026, 08_51_45 AM.png', dest: 'images/hero-property.jpg' }
];

mappings.forEach(({ src, dest }) => {
  const srcPath = path.join(rawDir, src);
  const destPath = path.join(publicDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.warn(`Source not found: ${srcPath}`);
  }
});

console.log('Image setup complete.');
