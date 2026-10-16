const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'our-people.html'), 'utf8');

const modalRegex = /<div class="[^"]*elementskit-team-popup[^"]*"[\s\S]*?id="([^"]+)"[\s\S]*?<div class="modal-body">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/gi;

let m;
const team = [];
while ((m = modalRegex.exec(html)) !== null) {
  const body = m[2];
  const name = body.match(/<h2 class="ekit-team-modal-title">([\s\S]*?)<\/h2>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const role = body.match(/<p class="ekit-team-modal-position">([\s\S]*?)<\/p>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const bio = body.match(/<div class="ekit-team-modal-content">([\s\S]*?)<\/div>/i)?.[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const img = body.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  team.push({ name, role, bio, img });
}

console.log('Total extracted team members:', team.length);
console.log(JSON.stringify(team, null, 2));
fs.writeFileSync(path.join(__dirname, 'team_complete.json'), JSON.stringify(team, null, 2));
