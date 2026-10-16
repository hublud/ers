const fs = require('fs');
const html = fs.readFileSync('scratch/careers.html', 'utf8');

console.log('Length:', html.length);

// CSS links
const css = [...html.matchAll(/href=["']([^"']*\.css[^"']*)["']/gi)].map(m => m[1]);
console.log('CSS files:', css.filter(c => c.includes('elementor') || c.includes('post-')));

// Headings
const headings = [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Headings:', headings);

// Images
const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Images:', [...new Set(imgs)].filter(s => !s.includes('cropped-Stuebner')));

// Background images
const bgs = [...html.matchAll(/background-image:\s*url\(([^)]+)\)/gi)].map(m => m[1]);
console.log('Background images:', [...new Set(bgs)]);

// Sections & widgets in order
const widgets = [...html.matchAll(/<div[^>]*data-widget_type=["']([^"']+)["'][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)];
console.log('\n--- WIDGETS IN ORDER (' + widgets.length + ') ---');
widgets.forEach((w, i) => {
  const type = w[1];
  const text = w[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`[${i}] (${type}): ${text.substring(0, 120)}`);
});
