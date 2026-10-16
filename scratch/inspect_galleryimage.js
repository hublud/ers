const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'galleryimage.html'), 'utf8');

console.log('Title:', html.match(/<title>([^<]+)<\/title>/i)?.[1]);

// Headings
const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)]
  .map(m => `[${m[1]}] ${m[2].replace(/<[^>]+>/g, '').trim()}`);
console.log('Headings:', headings);

// All images
const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)]
  .map(m => m[1])
  .filter(src => !src.includes('logo') && !src.includes('svg'));
console.log('Images count:', imgs.length);
console.log('Sample images:', imgs.slice(0, 15));

// Check widgets / filters / gallery plugins
const widgets = [...html.matchAll(/class=["']([^"']*(?:gallery|filter|e-grid|elementor-widget)[^"']*)["']/gi)]
  .map(m => m[1]);
console.log('Gallery classes sample:', [...new Set(widgets)].slice(0, 15));
