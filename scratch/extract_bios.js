const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'our-people.html'), 'utf8');

const regex = /id="(ekit_team_modal_[^"]+)"[\s\S]*?<div class="modal-body">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/gi;

let m;
const bios = {};
while ((m = regex.exec(html)) !== null) {
  const id = m[1];
  const body = m[2];
  const name = body.match(/<h2[^>]*class="[^"]*profile-title[^"]*"[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const role = body.match(/<p[^>]*class="[^"]*profile-designation[^"]*"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const desc = body.match(/<div[^>]*class="[^"]*elementskit-team-desc[^"]*"[^>]*>([\s\S]*?)<\/div>/i)?.[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const img = body.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  bios[id] = { name, role, desc, img };
}

console.log(JSON.stringify(bios, null, 2));
fs.writeFileSync(path.join(__dirname, 'team_detailed.json'), JSON.stringify(bios, null, 2));
