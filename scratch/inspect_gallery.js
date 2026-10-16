const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'gallery.html'), 'utf8');

const start = html.indexOf('data-elementor-type="wp-page"');
const end = html.indexOf('<footer');
const main = start !== -1 ? html.substring(start, end !== -1 ? end : undefined) : html;

// All text and all images / iframes
console.log('--- HEADINGS & TEXT ---');
const items = [...main.matchAll(/<(h[1-6]|p|li|a)[^>]*>([\s\S]*?)<\/\1>/gi)]
  .map(m => `[${m[1]}] ${m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`)
  .filter(t => t.length > 3);
console.log(items.slice(0, 30).join('\n'));

console.log('\n--- IMAGES ---');
const imgs = [...main.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
console.log(imgs);

console.log('\n--- IFRAMES / VIDEOS ---');
const vids = [...main.matchAll(/<(iframe|video|source)[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[2]);
console.log(vids);

console.log('\n--- DATA SETTINGS / GALLERIES ---');
const galleries = [...main.matchAll(/data-settings=["']([^"']+)["']/gi)].map(m => m[1]);
for (const g of galleries) {
  if (g.includes('gallery') || g.includes('image') || g.includes('video') || g.includes('youtube')) {
    console.log('Setting:', g);
  }
}
