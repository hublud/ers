const fs = require('fs');

const html = fs.readFileSync('scratch/commercial_retail.html', 'utf8');

// Find all project cards in commercial page
const cardRegex = /<div class="elementor-element[^"]*elementor-widget-(image-box|elementskit-heading|button)[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi;
// Let's find each card container
const start = html.indexOf('Lehign Northamton');
if (start !== -1) {
  console.log(html.slice(start - 400, start + 3000));
}
