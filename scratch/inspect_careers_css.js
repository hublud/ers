const fs = require('fs');
const css = fs.readFileSync('scratch/post-245.css', 'utf8');

// Find font families
const fonts = [...css.matchAll(/font-family:[^;]+/gi)].map(m => m[0]);
console.log('Fonts:', [...new Set(fonts)]);

// Find font sizes for main headings
const fontSizes = [...css.matchAll(/font-size:[^;]+/gi)].map(m => m[0]);
console.log('Font sizes sample:', [...new Set(fontSizes)].slice(0, 15));

// Find colors
const colors = [...css.matchAll(/#[0-9a-f]{3,8}|rgba?\([^)]+\)/gi)].map(m => m[0]);
console.log('Colors:', [...new Set(colors)].slice(0, 25));

// Find accordion styles
const accordionRules = [...css.matchAll(/[^}]*nested-accordion[^}]*\\}/gi)].map(m => m[0]);
console.log('Accordion rules count:', accordionRules.length);
accordionRules.slice(0, 5).forEach(r => console.log('  ', r));
