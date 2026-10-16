const fs = require('fs');
const html = fs.readFileSync('scratch/careers.html', 'utf8');

const startIdx = html.indexOf('elementor-245');
// Find footer
const footerIdx = html.lastIndexOf('elementor-7');

console.log('startIdx:', startIdx, 'footerIdx:', footerIdx);
const mainContent = html.substring(startIdx, footerIdx > startIdx ? footerIdx : html.length);
console.log('Main content length:', mainContent.length);

fs.writeFileSync('scratch/careers_main_full.html', mainContent);
console.log('Saved scratch/careers_main_full.html');

// Now extract all text lines
const lines = mainContent.replace(/<[^>]+>/g, '\n').split('\n').map(s => s.trim()).filter(Boolean);
console.log('Total text lines:', lines.length);

fs.writeFileSync('scratch/careers_lines.txt', lines.join('\n'));
console.log('Saved scratch/careers_lines.txt');
