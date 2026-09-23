const fs = require('fs');
const path = require('path');

const downloadsDir = 'C:\\Users\\10 Pro\\Downloads';
const targetDir = path.join(process.cwd(), 'raw_images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = [
  'orenkasauli-logo.png',
  '21 (1).png',
  'ChatGPT Image Sep 19, 2026, 09_38_29 AM.png',
  'ChatGPT Image Sep 19, 2026, 09_33_33 AM.png',
  'ChatGPT Image Sep 19, 2026, 09_30_42 AM.png',
  'ChatGPT Image Sep 19, 2026, 09_24_01 AM.png',
  'ChatGPT Image Sep 19, 2026, 09_22_34 AM.png',
  'ChatGPT Image Sep 19, 2026, 09_06_54 AM.png',
  'ChatGPT Image Sep 19, 2026, 09_02_39 AM.png',
  'ChatGPT Image Sep 19, 2026, 08_59_09 AM.png',
  'ChatGPT Image Sep 19, 2026, 08_57_33 AM.png',
  'ChatGPT Image Sep 19, 2026, 08_56_07 AM.png',
  'ChatGPT Image Sep 19, 2026, 08_54_48 AM.png',
  'ChatGPT Image Sep 19, 2026, 08_52_53 AM.png',
  'ChatGPT Image Sep 19, 2026, 08_51_45 AM.png',
  'ChatGPT Image Sep 19, 2026, 09_38_31 AM.png'
];

files.forEach(file => {
  const src = path.join(downloadsDir, file);
  if (fs.existsSync(src)) {
    const dest = path.join(targetDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${file} (${fs.statSync(dest).size} bytes)`);
  } else {
    console.warn(`Not found: ${src}`);
  }
});
