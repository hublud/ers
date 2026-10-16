const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'behind-the-build.html'), 'utf8');

const regex = /<div class="elementor-element elementor-element-[^"]* e-con-full[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi;

// Let's print the HTML around the cards
const pos = html.indexOf('The People Behind the Projects');
console.log(html.substring(pos, pos + 5000));
