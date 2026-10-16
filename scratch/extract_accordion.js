const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'behind-the-build.html'), 'utf8');

const regex = /<label[^>]*class="[^"]*elementskit-single-image-accordion[^"]*"[^>]*style="background-image:\s*url\(([^)]+)\)"[\s\S]*?<span class="elementskit-accordion-title[^"]*">\s*([\s\S]*?)\s*<\/span>[\s\S]*?<a[^>]*href="([^"]+)"/gi;

let m;
const items = [];
while ((m = regex.exec(html)) !== null) {
  items.push({
    bg: m[1].replace(/['"]/g, ''),
    title: m[2].trim(),
    link: m[3]
  });
}
console.log(JSON.stringify(items, null, 2));
fs.writeFileSync(path.join(__dirname, 'behind_build_accordion.json'), JSON.stringify(items, null, 2));
