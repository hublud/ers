const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'gallery.html'), 'utf8');

// Find all elements between "Our Gallery" and footer
const start = html.indexOf('Our Gallery');
const end = html.indexOf('<footer');
const sub = html.substring(start, end);

// Let's find all images, links, youtube urls, classes
console.log('--- ALL YOUTUBE MATCHES ---');
console.log([...sub.matchAll(/youtube\.com[^"'\s<>&]+/gi)].map(m => m[0]));

console.log('--- ALL IMAGES ---');
console.log([...sub.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]));

console.log('--- ALL LINKS ---');
console.log([...sub.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]));

console.log('--- BACKGROUND IMAGES ---');
console.log([...sub.matchAll(/url\(([^)]+)\)/gi)].map(m => m[1]));
