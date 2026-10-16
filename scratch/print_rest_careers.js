const fs = require('fs');
const html = fs.readFileSync('scratch/careers_body.html', 'utf8');

const idx = html.indexOf('Comprehensive benefits package');
const rest = html.substring(idx);

// Print all text blocks
const blocks = rest.replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean);
console.log('Rest of text blocks:');
blocks.forEach((b, i) => console.log(`${i}: ${b}`));
