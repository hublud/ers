const fs = require('fs');
const html = fs.readFileSync('scratch/homepage.html', 'utf8');
const iconTags = [...html.matchAll(/<link[^>]*rel=["'](?:icon|shortcut icon|apple-touch-icon)[^"']*["'][^>]*>/gi)].map(m => m[0]);
console.log('Icon tags in reference homepage:');
iconTags.forEach(t => console.log(' ', t));
