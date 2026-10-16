const fs = require('fs');

const html = fs.readFileSync('scratch/commercial_retail.html', 'utf8');

// Find post-2971 css
const cssMatch = html.match(/post-2971\.css[^"]*/);
console.log('CSS match:', cssMatch ? cssMatch[0] : 'not found');

// Find hero section
const heroIdx = html.indexOf('Commercial, Retail');
if (heroIdx !== -1) {
  console.log(html.slice(heroIdx - 500, heroIdx + 2000));
}
