const fs = require('fs');
const html = fs.readFileSync('scratch/contact-us.html', 'utf8');

// Find all elements with data-id in contact-us
const elements = [...html.matchAll(/data-id=["']([a-f0-9]+)["'][^>]*data-element_type=["']([^"']+)["']/gi)];
console.log('Total elementor elements:', elements.length);

// Let's inspect the sections in order
const sectionMatches = [...html.matchAll(/<(?:div|section)[^>]*class=["']([^"']*(?:elementor-section|e-con-boxed|e-con-full|e-parent)[^"']*)["'][^>]*>/gi)];
console.log('Top level containers:', sectionMatches.length);

// Let's extract the main text blocks and widget types in order
const widgets = [...html.matchAll(/<div[^>]*data-widget_type=["']([^"']+)["'][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)];
console.log('Widgets count:', widgets.length);
widgets.forEach((w, i) => {
  const type = w[1];
  const text = w[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`[${i}] (${type}): ${text.substring(0, 100)}`);
});
