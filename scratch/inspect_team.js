const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'our-people.html'), 'utf8');

// The team widget is elementskit team widget
const matches = [...html.matchAll(/<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/gi)];

for (const m of matches) {
  const c = m[1];
  if (c.includes('ekit-team')) {
    const name = c.match(/<h[1-4][^>]*class="[^"]*elementskit-team-title[^"]*"[^>]*>([\s\S]*?)<\/h[1-4]>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
    const position = c.match(/<span[^>]*class="[^"]*elementskit-team-position[^"]*"[^>]*>([\s\S]*?)<\/span>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
    const bio = c.match(/<div[^>]*class="[^"]*elementskit-team-desc[^"]*"[^>]*>([\s\S]*?)<\/div>/i)?.[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const img = c.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
    console.log({ name, position, bio, img });
  }
}
