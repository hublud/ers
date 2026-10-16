const fs = require('fs');

const html = fs.readFileSync('scratch/commercial_retail.html', 'utf8');

// Find page id
const pageIdMatch = html.match(/page-id-(\d+)/);
console.log('Page ID:', pageIdMatch ? pageIdMatch[1] : 'not found');

// Find the main section content between header and footer
const start = html.indexOf('data-elementor-type="wp-page"');
const end = html.indexOf('<footer');
const main = html.slice(start, end !== -1 ? end : undefined);

console.log('Main length:', main.length);

// Extract headings
const headings = main.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi) || [];
console.log('Headings:\n', headings.map(h => h.replace(/<[^>]+>/g, '').trim()).join('\n'));

// Extract project cards
const cards = main.match(/<div class="elementor-element[^"]*elementor-widget-elementskit-[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi) || [];
console.log('Number of widgets:', cards.length);

// Find all buttons or links with "Project Details" or similar
const detailLinks = [];
const btnRegex = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
let m;
while ((m = btnRegex.exec(main)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, '').trim();
  if (text.toLowerCase().includes('detail') || text.toLowerCase().includes('project') || text.toLowerCase().includes('view') || text.toLowerCase().includes('more') || m[1].includes('airport') || m[1].includes('diamond') || m[1].includes('jeffersonville') || m[1].includes('staybridge')) {
    detailLinks.push({ href: m[1], text });
  }
}
console.log('\nDetail Links:', JSON.stringify(detailLinks, null, 2));

// Extract all images
const imgs = [];
const imgRegex = /<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi;
while ((m = imgRegex.exec(main)) !== null) {
  imgs.push({ src: m[1], alt: m[2] });
}
console.log('\nImages in main:', imgs);

