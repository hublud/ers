const fs = require('fs');

const html = fs.readFileSync('scratch/homepage.html', 'utf8');

const heroPos = html.indexOf('Building Well Beyond Today');
console.log('--- FIRST HERO SECTION HTML ---');
console.log(html.substring(heroPos - 800, heroPos + 800));

const introPos = html.indexOf('Introduction');
console.log('\n--- INTRODUCTION SECTION HTML ---');
console.log(html.substring(introPos - 800, introPos + 1200));
