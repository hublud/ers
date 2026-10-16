const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'behind-the-build.html'), 'utf8');

const pos = html.indexOf('Memorial Day Picnic');
const footerPos = html.indexOf('<footer');
console.log(html.substring(pos, footerPos).replace(/<style[\s\S]*?<\/style>/gi, ''));
