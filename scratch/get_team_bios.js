const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'our-people.html'), 'utf8');

const regex = /<div class="zoom-anim-dialog[^"]*elementskit-team-popup[^"]*"[\s\S]*?id="([^"]+)"[\s\S]*?<h2 class="ekit-team-modal-title">([\s\S]*?)<\/h2>[\s\S]*?<p class="ekit-team-modal-position">([\s\S]*?)<\/p>[\s\S]*?<div class="ekit-team-modal-content">([\s\S]*?)<\/div>/gi;

let m;
const team = [];
while ((m = regex.exec(html)) !== null) {
  const id = m[1];
  const name = m[2].trim();
  const role = m[3].trim();
  const bio = m[4].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Find img
  const chunk = html.substring(m.index, m.index + 2500);
  const img = chunk.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  
  team.push({ id, name, role, bio, img });
}

console.log('Extracted:', team.length);
for (const t of team) {
  console.log(`\n### ${t.name} - ${t.role}`);
  console.log(`Bio: ${t.bio}`);
}
fs.writeFileSync(path.join(__dirname, 'team_final.json'), JSON.stringify(team, null, 2));
