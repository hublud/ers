const fs = require('fs');
const html = fs.readFileSync('scratch/contact-us.html', 'utf8');

// Find all text elements in the elementor page
const cheerio = null; // Let's use regex

// Find section headings, titles, links
const matches = [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Headings:', matches);

// Find elementor widget names or classes
const widgets = [...html.matchAll(/class=["']([^"']*elementor-widget-[^"']*)["']/gi)].map(m => m[1]);
console.log('Widgets:', [...new Set(widgets)]);

// Find all text inside elementor-widget-container
const containers = [...html.matchAll(/<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi)].map(m => m[1].trim());
console.log('Total containers:', containers.length);
containers.forEach((c, i) => {
  const text = c.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length > 0 && text.length < 300) {
    console.log(`[${i}]`, text);
  }
});
