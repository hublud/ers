const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'our-people.html'), 'utf8');
const pos = html.indexOf('id="ekit_team_modal_21019207_244"');
console.log(html.substring(pos, pos + 2500));
