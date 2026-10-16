const fs = require('fs');
const html = fs.readFileSync('scratch/contact-us.html', 'utf8');

// Find the 4 boxes
const boxIds = ['eaaa66e', '999f2aa', 'c4337b7', 'd1f2e34'];
boxIds.forEach(id => {
  const re = new RegExp(`<div[^>]*elementor-element-${id}[\\s\\S]*?<\/div>\\s*<\/div>\\s*<\/div>`, 'i');
  const m = html.match(re);
  console.log(`\n================ BOX ${id} ================`);
  if (m) {
    console.log(m[0].substring(0, 1000));
  } else {
    // search for id
    const idx = html.indexOf(id);
    if (idx !== -1) {
      console.log(html.substring(idx - 100, idx + 800));
    }
  }
});

// Search for popup or modal or ekit-popup or elementor-popup or dialog
const popups = [...html.matchAll(/popup|modal|dialog|data-settings/gi)].map(m => m[0]);
console.log('Popup/modal occurrences:', popups.length);

// Search for form elements or shortcodes or wpcf7 or ninja or gravity
const cf7 = [...html.matchAll(/wpcf7|ninja-forms|gform|forminator|fluentform|elementor-form/gi)].map(m => m[0]);
console.log('Form plugins detected:', [...new Set(cf7)]);

// Find all data-settings or links on those boxes
const boxMatches = html.match(/class="[^"]*(?:eaaa66e|999f2aa|c4337b7|d1f2e34)[^"]*"[\s\S]{0,1500}/gi);
if (boxMatches) {
  boxMatches.forEach(b => console.log('\n--- BOX SNIPPET ---\n', b.substring(0, 600)));
}
