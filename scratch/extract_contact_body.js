const fs = require('fs');
const html = fs.readFileSync('scratch/contact-us.html', 'utf8');

// Find the main content between header and footer
// In Elementor, usually inside <div data-elementor-type="wp-page" class="elementor elementor-258"> ... </div>
const mainMatch = html.match(/<div data-elementor-type="wp-page"[\s\S]*?<\/main>|<div data-elementor-type="wp-page"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);

// Let's find all top-level containers/sections in elementor-258
const pageIdx = html.indexOf('elementor-258');
const footerIdx = html.indexOf('elementor-7'); // 7 is usually footer or header

const pageHtml = html.substring(pageIdx, footerIdx > pageIdx ? footerIdx : pageIdx + 20000);

console.log('Page HTML length:', pageHtml.length);

// Let's write pageHtml to scratch/contact_page_body.html so we can inspect easily
fs.writeFileSync('scratch/contact_page_body.html', pageHtml);
console.log('Saved scratch/contact_page_body.html');
