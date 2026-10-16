const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'behind-the-build.html'), 'utf8');

const start = html.indexOf('Behind the Build');
const end = html.indexOf('<footer');
const sub = html.substring(start, end !== -1 ? end : undefined);

console.log('--- HEADINGS & TEXT ---');
const items = [...sub.matchAll(/<(h[1-6]|p|li|a)[^>]*>([\s\S]*?)<\/\1>/gi)]
  .map(m => `[${m[1]}] ${m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`)
  .filter(t => t.length > 3);
console.log(items.slice(0, 40).join('\n'));

console.log('\n--- ALL POST CARDS / ELEMENTS ---');
const postRegex = /<article[^>]*>([\s\S]*?)<\/article>/gi;
const articles = [...sub.matchAll(postRegex)];
console.log('Articles count:', articles.length);

if (articles.length === 0) {
  // Let's check e-grid or elementor posts widget
  const cardRegex = /<div class="[^"]*(?:elementor-post|e-loop-item|e-con|gallery-item)[^"]*"[\s\S]*?(?=<div class="[^"]*(?:elementor-post|e-loop-item|gallery-item)|$)/gi;
  const cards = [...sub.matchAll(cardRegex)];
  console.log('Card count:', cards.length);
}

// Let's also check all links and images
const links = [...sub.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
  .map(m => ({ href: m[1], text: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() }))
  .filter(l => l.text.length > 0 && !l.href.startsWith('#'));
console.log('\n--- LINKS ---');
console.log(links);
