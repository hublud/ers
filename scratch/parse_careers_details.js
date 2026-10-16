const fs = require('fs');
const html = fs.readFileSync('scratch/careers.html', 'utf8');

// Find all text in elementor-245 (Careers page)
const startIdx = html.indexOf('elementor-245');
const endIdx = html.indexOf('elementor-7'); // footer
const careersHtml = html.substring(startIdx, endIdx !== -1 ? endIdx : startIdx + 30000);

fs.writeFileSync('scratch/careers_body.html', careersHtml);
console.log('Saved scratch/careers_body.html, length:', careersHtml.length);

// Let's inspect the accordion content specifically
const accordionMatch = careersHtml.match(/<div[^>]*class=["'][^"']*elementor-widget-nested-accordion[^"']*["'][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
if (accordionMatch) {
  console.log('\n--- ACCORDION FOUND ---');
  fs.writeFileSync('scratch/careers_accordion.html', accordionMatch[0]);
  console.log('Saved scratch/careers_accordion.html, length:', accordionMatch[0].length);
}

// Download post-245.css to see the exact styling
const postCssMatch = html.match(/href=["']([^"']*post-245\.css[^"']*)["']/i);
console.log('Post 245 CSS:', postCssMatch ? postCssMatch[1] : 'none');
