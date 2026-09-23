const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'images');

// Check all image references across components
const componentsDir = path.join(__dirname, 'src');

function findImageRefs(dir, results = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findImageRefs(fullPath, results);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/\/images\/[a-zA-Z0-9_\-\/]+\.(jpg|png|webp)/g);
      if (matches) {
        matches.forEach(m => {
          if (!results.includes(m)) results.push(m);
        });
      }
    }
  });
  return results;
}

const refs = findImageRefs(componentsDir);
console.log('Referenced images:', refs);

refs.forEach(ref => {
  const filePath = path.join(__dirname, 'public', ref);
  if (fs.existsSync(filePath)) {
    console.log(`OK: ${ref} (${fs.statSync(filePath).size} bytes)`);
  } else {
    console.warn(`MISSING: ${ref}`);
  }
});
