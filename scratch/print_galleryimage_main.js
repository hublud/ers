const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'galleryimage.html'), 'utf8');

const start = html.indexOf('Image Gallery');
const end = html.indexOf('<footer');
console.log(html.substring(start, end !== -1 ? end : start + 4000));
