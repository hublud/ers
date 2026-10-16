const fs = require('fs');
const html = fs.readFileSync('scratch/construction-project.html', 'utf8');

const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
console.log('Style tags count:', styles.length);

styles.forEach((s, i) => {
  if (s.includes('icons8') || s.includes('radio') || s.includes('fluent') || s.includes('checkbox')) {
    console.log(`\n=== Style tag #${i} ===`);
    console.log(s);
  }
});

const cssLinks = [...html.matchAll(/href=["']([^"']*\.css[^"']*)["']/gi)].map(m => m[1]);
console.log('CSS links:', cssLinks.filter(c => c.includes('fluent') || c.includes('post-')));
