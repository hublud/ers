const fs = require('fs');

const html = fs.readFileSync('scratch/homepage.html', 'utf8');

// Find all video occurrences or widgets
const matches = [...html.matchAll(/<(?:video|iframe)[^>]*>[\s\S]*?<\/(?:video|iframe)>|<div[^>]*class="[^"]*elementor-widget-video[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi)];

console.log('Video matches count:', matches.length);
for (const m of matches) {
  console.log('--- VIDEO MATCH ---');
  console.log(m[0].slice(0, 500));
}

// Also search for "Experience" or wherever the video player is
const expPos = html.indexOf('Our Experience');
if (expPos !== -1) {
  console.log('\n--- OUR EXPERIENCE SECTION ---');
  console.log(html.substring(expPos - 200, expPos + 2500));
}
