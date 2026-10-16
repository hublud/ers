const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'our-people.html'), 'utf8');

const idx = html.indexOf('Doug-George');
console.log(html.substring(idx - 200, idx + 1500));
