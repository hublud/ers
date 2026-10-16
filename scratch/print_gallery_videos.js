const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'gallery.html'), 'utf8');

const vidIdx = html.indexOf('Video Gallery');
console.log('--- VIDEO GALLERY SECTION ---');
console.log(html.substring(vidIdx, vidIdx + 3000));

const imgIdx = html.indexOf('Image Gallery');
console.log('--- IMAGE GALLERY SECTION ---');
console.log(html.substring(imgIdx, imgIdx + 3000));
