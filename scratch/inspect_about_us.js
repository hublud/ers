const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'about-us.html'), 'utf8');

// Find all text between <div data-elementor-type="wp-page" ...> and footer
const start = html.indexOf('data-elementor-type="wp-page"');
const end = html.indexOf('<footer');
const main = start !== -1 ? html.substring(start, end !== -1 ? end : undefined) : html;

// Print all headings and paragraphs in order
const items = [...main.matchAll(/<(h[1-6]|p|li)[^>]*>([\s\S]*?)<\/\1>/gi)]
  .map(m => `[${m[1]}] ${m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`)
  .filter(t => t.length > 5);

console.log(items.join('\n\n'));
