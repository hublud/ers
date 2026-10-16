const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'gallery.html'), 'utf8');

const idx = html.indexOf('On Site Virtual Tour');
if (idx !== -1) {
  console.log(html.substring(idx - 500, idx + 4000));
}
