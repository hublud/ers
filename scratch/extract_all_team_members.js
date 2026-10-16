const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'our-people.html'), 'utf8');

// Also find the intro section in our-people.html
console.log('--- INTRO SECTION ---');
const introIdx = html.indexOf('Meet the Stuebner Team');
console.log(html.substring(introIdx, introIdx + 1500).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

// Extract all profile cards and their modals
const cardRegex = /<div class="[^"]*profile-card[^"]*"[\s\S]*?(?=<div class="[^"]*profile-card|$)/gi;
const cards = [...html.matchAll(cardRegex)];

// Extract all modals
const modalRegex = /<div class="[^"]*elementskit-team-popup[^"]*"[\s\S]*?id="([^"]+)"[\s\S]*?<div class="modal-body">([\s\S]*?)<\/div>/gi;
const modalMap = {};
for (const m of html.matchAll(modalRegex)) {
  const id = m[1];
  const body = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  modalMap[id] = body;
}

const team = [];
for (const c of cards) {
  const content = c[0];
  const name = content.match(/<h2 class="profile-title">[\s\S]*?>([^<]+)</i)?.[1]?.trim();
  const role = content.match(/<p class="profile-designation">([^<]+)<\/p>/i)?.[1]?.trim();
  const img = content.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  const popupId = content.match(/data-mfp-src="#([^"]+)"/i)?.[1];
  const bio = popupId && modalMap[popupId] ? modalMap[popupId] : '';
  
  if (name && !team.some(t => t.name === name)) {
    team.push({ name, role, img, bio });
  }
}

console.log('--- TEAM MEMBERS (' + team.length + ') ---');
console.log(JSON.stringify(team, null, 2));
fs.writeFileSync(path.join(__dirname, 'team_members.json'), JSON.stringify(team, null, 2));
