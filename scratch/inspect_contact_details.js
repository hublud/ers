const fs = require('fs');
const html = fs.readFileSync('scratch/contact-us.html', 'utf8');

// Download post-258.css to inspect exact Contact Us page styles
const postCssMatch = html.match(/href=["']([^"']*post-258\.css[^"']*)["']/i);
console.log('Post 258 CSS URL:', postCssMatch ? postCssMatch[1] : 'none');

// Find all images in contact-us.html
const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Images in contact-us.html:');
[...new Set(imgs)].forEach(img => console.log('  ', img));

// Find background-image in contact-us.html
const bgs = [...html.matchAll(/background-image:\s*url\(([^)]+)\)/gi)].map(m => m[1]);
console.log('Background images in contact-us.html:');
[...new Set(bgs)].forEach(bg => console.log('  ', bg));

// Find all icons (e.g. font-awesome, huge-icons, svgs)
const icons = [...html.matchAll(/class=["']([^"']*(?:icon|fa-|huge)[^"']*)["']/gi)].map(m => m[1]);
console.log('Icon classes:', [...new Set(icons)].slice(0, 20));

// Find phone, address, email, hours
const info = [...html.matchAll(/<(?:a|p|h\d)[^>]*>([\s\S]*?)<\/(?:a|p|h\d)>/gi)]
  .map(m => m[1].replace(/<[^>]+>/g, '').trim())
  .filter(t => /Reading|Blair|610|info@|business|Monday|Friday|Hour/i.test(t));
console.log('Contact info matches:', [...new Set(info)]);
