const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('scratch').filter(f => f.endsWith('.html'));
for (const f of files) {
  const c = fs.readFileSync(path.join('scratch', f), 'utf8');
  const vids = [...c.matchAll(/(https?:\/\/[^"'\s<>]+\.(?:mp4|webm|mov)|(?:youtube\.com|youtu\.be)\/[^"'\s<>]+)/gi)].map(m => m[0]);
  if (vids.length > 0) {
    console.log(f, ':', [...new Set(vids)]);
  }
}
