const fs = require('fs');
const path = require('path');
const css = fs.readFileSync(path.join(__dirname, 'post-351.css'), 'utf8');

const matches = [...css.matchAll(/([^{}]+)\{([^}]*url\([^)]+\)[^}]*)\}/gi)];
for (const m of matches) {
  console.log('Selector:', m[1].trim());
  console.log('Rule:', m[2].trim());
  console.log('---');
}
