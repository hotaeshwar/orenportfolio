const fs = require('fs');
const path = require('path');

const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 1. Copy out directory if Next.js export generated it
const outDir = path.join(process.cwd(), 'out');
if (fs.existsSync(outDir)) {
  fs.cpSync(outDir, distDir, { recursive: true });
}

// 2. Ensure public assets (CNAME, images, etc.) are in dist
const publicDir = path.join(process.cwd(), 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
}

// 3. Ensure static chunks are in dist/_next/static
const staticSrc = path.join(process.cwd(), '.next', 'static');
const staticDest = path.join(distDir, '_next', 'static');
if (fs.existsSync(staticSrc)) {
  fs.mkdirSync(path.dirname(staticDest), { recursive: true });
  fs.cpSync(staticSrc, staticDest, { recursive: true });
}

// 4. Ensure index.html and 404.html exist in dist
const serverIndexHtml = path.join(process.cwd(), '.next', 'server', 'app', 'index.html');
if (fs.existsSync(serverIndexHtml) && !fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(serverIndexHtml, path.join(distDir, 'index.html'));
}
if (fs.existsSync(path.join(distDir, 'index.html')) && !fs.existsSync(path.join(distDir, '404.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
}

console.log('Static export to ./dist complete.');
