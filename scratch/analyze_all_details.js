const fs = require('fs');

const files = [
  { name: 'Lehigh Northampton Airport Main Terminal', file: 'scratch/lehign-northamto-nairport-main-terminal.html' },
  { name: 'Diamond Credit Union', file: 'scratch/diamond-credit-union.html' },
  { name: 'Jeffersonville New Clubhouse', file: 'scratch/jeffersonville-clubhouse.html' },
  { name: 'Staybridge', file: 'scratch/staybridge.html' }
];

files.forEach(p => {
  console.log('====================================');
  console.log('PROJECT:', p.name);
  if (!fs.existsSync(p.file)) {
    console.log('File not found:', p.file);
    return;
  }
  const html = fs.readFileSync(p.file, 'utf8');

  // Headings
  const headings = html.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi) || [];
  console.log('Headings:', headings.map(h => h.replace(/<[^>]+>/g, '').trim()).filter(h => h && !h.includes('Services') && !h.includes('Contact')));

  // Paragraphs in main
  const mainStart = html.indexOf('data-elementor-type="wp-page"') || html.indexOf('<main');
  const mainEnd = html.indexOf('<footer');
  const main = html.slice(mainStart, mainEnd !== -1 ? mainEnd : undefined);

  const ps = main.match(/<p[^>]*>[\s\S]*?<\/p>/gi) || [];
  console.log('\nParagraphs:');
  ps.forEach(pTag => {
    const text = pTag.replace(/<[^>]+>/g, '').trim();
    if (text.length > 20 && !text.includes('E.R. Stuebner will always be forward-thinking') && !text.includes('All rights reserved')) {
      console.log(' -', text);
    }
  });

  // Project meta / specs (like Client, Architect, Location, Square Feet, Completion Date)
  const metaLists = main.match(/<li[^>]*class="[^"]*elementor-icon-list-item[^"]*"[^>]*>[\s\S]*?<\/li>/gi) || [];
  if (metaLists.length > 0) {
    console.log('\nMeta list items:');
    metaLists.forEach(li => {
      const text = li.replace(/<[^>]+>/g, '').trim();
      if (text && !text.includes('Linkdln') && !text.includes('Facebook')) console.log('  *', text);
    });
  }

  // Images
  const imgs = [];
  const imgRegex = /<img[^>]*src="([^"]*)"[^>]*>/gi;
  let m;
  while ((m = imgRegex.exec(main)) !== null) {
    if (!m[1].includes('logo') && !m[1].includes('Stuebner-Large')) {
      imgs.push(m[1]);
    }
  }
  console.log('\nImages found (' + imgs.length + '):', imgs.slice(0, 10));

  // Background images in CSS
  const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;
  const bgs = [];
  while ((m = bgRegex.exec(main)) !== null) {
    if (m[1].includes('uploads') && !m[1].includes('logo')) bgs.push(m[1]);
  }
  if (bgs.length) console.log('Background images:', bgs);
});
