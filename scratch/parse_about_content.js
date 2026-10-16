const fs = require('fs');
const path = require('path');

function extractPage(filename) {
  const html = fs.readFileSync(path.join(__dirname, filename), 'utf8');
  console.log(`\n=================== PARSING ${filename} ===================`);
  
  // Find all sections or elementor widgets
  // Let's strip scripts and styles
  const cleanHtml = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // Extract elementor-widget-container contents
  const widgetRegex = /<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/gi;
  let match;
  let i = 0;
  while ((match = widgetRegex.exec(cleanHtml)) !== null) {
    const raw = match[1].trim();
    // check if it has text or images or videos
    const text = raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const imgs = [...raw.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]);
    const iframes = [...raw.matchAll(/src=["']([^"']*(?:youtube|vimeo|embed)[^"']*)["']/gi)].map(m => m[1]);
    const links = [...raw.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);
    
    if (text.length > 0 || imgs.length > 0 || iframes.length > 0) {
      console.log(`[Widget ${++i}]`);
      if (text) console.log(`  Text: ${text.slice(0, 160)}${text.length > 160 ? '...' : ''}`);
      if (imgs.length) console.log(`  Imgs: ${imgs.join(', ')}`);
      if (iframes.length) console.log(`  Videos: ${iframes.join(', ')}`);
      if (links.length) console.log(`  Links: ${links.join(', ')}`);
    }
  }
}

['about-us.html', 'gallery.html', 'our-people.html', 'behind-the-build.html'].forEach(extractPage);
