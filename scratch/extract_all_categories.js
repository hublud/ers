const fs = require('fs');

const categories = [
  { name: 'Community & Institutional', file: 'scratch/community-and-institutional.html', slug: 'community-and-institutional' },
  { name: 'Education', file: 'scratch/education.html', slug: 'education' },
  { name: 'Healthcare', file: 'scratch/healthcare.html', slug: 'healthcare' },
  { name: 'Public Sector', file: 'scratch/public-sector.html', slug: 'public-sector' }
];

categories.forEach(cat => {
  console.log('========================================================');
  console.log('CATEGORY:', cat.name, `(${cat.slug})`);
  if (!fs.existsSync(cat.file)) {
    console.log('File missing:', cat.file);
    return;
  }
  const html = fs.readFileSync(cat.file, 'utf8');

  // Find hero background image
  const bgMatch = html.match(/background-image:\s*url\(([^)]+)\)/i) || html.match(/url\("([^"]+uploads[^"]+)"\)/i);
  console.log('Hero BG:', bgMatch ? bgMatch[1] : 'not found in html');

  // Extract all cards: image, title, detail link
  const titles = (html.match(/<h3 class="elementor-image-box-title">([\s\S]*?)<\/h3>/gi) || []).map(t => t.replace(/<[^>]+>/g, '').trim());
  const imgs = (html.match(/<div class="elementor-image-box-wrapper">[\s\S]*?<img[^>]*src="([^"]*)"/gi) || []).map(i => {
    const match = i.match(/src="([^"]*)"/);
    return match ? match[1] : '';
  });
  const btns = (html.match(/<a class="elementor-button[^"]*" href="([^"]*)"/gi) || []).map(b => {
    const match = b.match(/href="([^"]*)"/);
    return match ? match[1] : '';
  });
  
  console.log(`Found ${titles.length} titles, ${imgs.length} images, ${btns.length} buttons:`);
  for (let i = 0; i < titles.length; i++) {
    console.log(` ${i + 1}. "${titles[i]}" | link: ${btns[i] || 'N/A'} | img: ${imgs[i] || 'N/A'}`);
  }
});
