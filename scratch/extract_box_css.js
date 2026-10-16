const fs = require('fs');
const css = fs.readFileSync('scratch/post-258.css', 'utf8');

const boxIds = ['eaaa66e', '999f2aa', 'c4337b7', 'd1f2e34'];
boxIds.forEach(id => {
  const matches = [...css.matchAll(new RegExp('[^}]*' + id + '[^}]*\\}', 'g'))].map(m => m[0]);
  console.log(`\nCSS for ${id}:`, matches);
});

// Also search for general image-box styling in post-258.css
const imgBoxStyles = [...css.matchAll(/[^}]*elementor-widget-image-box[^}]*\\}/g)].map(m => m[0]);
console.log('\nImage Box styles:', imgBoxStyles);

// Search for parent container styling of the 4 boxes
const containerStyles = [...css.matchAll(/[^}]*(?:background|border-radius|box-shadow|transition|transform)[^}]*\\}/g)].map(m => m[0]);
console.log(`Total styling rules: ${containerStyles.length}`);
