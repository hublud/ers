const fs = require('fs');
const html = fs.readFileSync('scratch/galleryimage.html', 'utf8');

const css = [...html.matchAll(/href=["']([^"']*\.css[^"']*)["']/gi)].map(m => m[1]);
console.log('CSS:', css.filter(l => l.includes('post-')));

// Look for image gallery widgets, happyaddons, elementskit, e-gallery, ea-gallery, etc.
const allWidgets = [...html.matchAll(/class=["']([^"']*(?:gallery|media|grid|photo)[^"']*)["']/gi)].map(m => m[1]);
console.log('Widgets:', [...new Set(allWidgets)].slice(0, 20));

// Check any scripts or JSON data in galleryimage.html
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log('Scripts containing gallery:', scripts.filter(s => s.includes('gallery') || s.includes('images')).map(s => s.slice(0, 200)));
