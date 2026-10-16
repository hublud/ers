const fs = require('fs');
const html = fs.readFileSync('scratch/contact-us.html', 'utf8');
const w1 = html.match(/<div[^>]*data-widget_type=["']elementskit-heading\.default["'][\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi);
if (w1) {
  w1.forEach((w, i) => console.log(`Heading widget #${i}:\n`, w.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(), '\n'));
}
