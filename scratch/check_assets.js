const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of list) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) results = results.concat(getFiles(full));
    else results.push(full);
  }
  return results;
}

const srcFiles = getFiles('./src');
const imgRegex = /['"](\/(?:uploads|images|videos)\/[^'"]+)['"]/g;
const missing = new Set();
let checked = 0;

for (const file of srcFiles) {
  if (!file.match(/\.(tsx?|jsx?|json)$/)) continue;
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    checked++;
    const assetPath = match[1];
    const localPath = path.join('./public', assetPath);
    if (!fs.existsSync(localPath)) {
      missing.add(assetPath + ' (in ' + path.basename(file) + ')');
    }
  }
}

console.log('Checked references:', checked);
console.log('Missing count:', missing.size);
if (missing.size > 0) {
  console.log('Missing files:', Array.from(missing).slice(0, 20));
}
