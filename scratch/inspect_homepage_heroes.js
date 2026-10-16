const fs = require('fs');

const html = fs.readFileSync('scratch/homepage.html', 'utf8');

// First hero section (Building Well Beyond Today)
const heroStart = html.indexOf('BUILDING WELL BEYOND TODAY');
console.log('--- FIRST HERO CONTEXT ---');
if (heroStart !== -1) {
  console.log(html.substring(heroStart - 1200, heroStart + 800));
}

// Second hero section (Introduction / Over 7 Decades / Forward Thinking)
const introStart = html.indexOf('FORWARD THINKING');
console.log('\n--- SECOND HERO CONTEXT ---');
if (introStart !== -1) {
  console.log(html.substring(introStart - 1200, introStart + 1200));
}
