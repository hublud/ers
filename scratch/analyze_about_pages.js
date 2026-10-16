const fs = require('fs');
const path = require('path');

const files = ['about-us', 'gallery', 'our-people', 'behind-the-build'];

for (const name of files) {
  const filePath = path.join(__dirname, `${name}.html`);
  if (!fs.existsSync(filePath)) continue;
  const html = fs.readFileSync(filePath, 'utf8');
  console.log(`\n=================== ${name.toUpperCase()} (${html.length} bytes) ===================`);
  
  // Title
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  console.log('Title:', title);

  // Headings
  const headings = [...html.matchAll(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map(m => `[${m[1]}] ${m[2].replace(/<[^>]+>/g, '').trim()}`)
    .filter(h => h.length > 5);
  console.log('Headings:', headings.slice(0, 20));

  // Images in main content
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)]
    .map(m => m[1])
    .filter(src => !src.includes('logo') && !src.includes('svg') && !src.includes('gravatar') && !src.includes('favicon'));
  console.log(`Images count: ${imgs.length}`);
  console.log('Sample images:', imgs.slice(0, 10));

  // Background images in CSS/style
  const bgImgs = [...html.matchAll(/background-image:\s*url\(['"]?([^'")]+)['"]?\)/gi)]
    .map(m => m[1]);
  console.log('Background images:', bgImgs);

  // Check for elementor post css or custom css links
  const cssLinks = [...html.matchAll(/<link[^>]+href=["']([^"']*(?:elementor|post-\d+)[^"']*\.css[^"']*)["']/gi)]
    .map(m => m[1]);
  console.log('Elementor post CSS:', cssLinks);
}
