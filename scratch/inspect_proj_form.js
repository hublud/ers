const fs = require('fs');
const html = fs.readFileSync('scratch/construction-project.html', 'utf8');

// Find form html
const formMatch = html.match(/<form[\s\S]*?<\/form>/i);
if (formMatch) {
  console.log('--- CONSTRUCTION PROJECT FORM HTML ---');
  fs.writeFileSync('scratch/form_construction_project.html', formMatch[0]);
  console.log('Saved scratch/form_construction_project.html, length:', formMatch[0].length);
}

// Find headings, banners, breadcrumbs, backgrounds
const headings = [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Headings in construction-project:', headings);

// Find background images
const bgs = [...html.matchAll(/background-image:\s*url\(([^)]+)\)/gi)].map(m => m[1]);
console.log('Background images:', [...new Set(bgs)]);

// Images
const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Images:', [...new Set(imgs)].filter(s => !s.includes('logo') && !s.includes('cropped-Stuebner')));
