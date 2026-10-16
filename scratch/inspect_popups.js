const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'our-people.html'), 'utf8');

// Find all elementskit-team-popup containers
const popups = [...html.matchAll(/<div[^>]*class="[^"]*elementskit-team-popup[^"]*"[^>]*id="([^"]+)"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/gi)];

console.log('Found popups:', popups.length);
for (const p of popups) {
  const id = p[1];
  const chunk = p[0];
  const name = chunk.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const desc = chunk.match(/<div class="modal-body">([\s\S]*?)<\/div>/i)?.[1]
    || chunk.match(/<p[^>]*class="[^"]*(?:desc|about|bio|text)[^"]*"[^>]*>([\s\S]*?)<\/p>/i)?.[1]
    || chunk.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  console.log(`ID: ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Text: ${desc?.slice(0, 300)}`);
  console.log('---');
}
