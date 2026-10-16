const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'res image', 'uploads', 'uploads', '2026');
const months = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

const categorizedImages = [];

function categorize(filename) {
  const f = filename.toLowerCase();
  if (f.includes('school') || f.includes('es-') || f.includes('ms-') || f.includes('coopertown') || f.includes('downingtown') || f.includes('wilson') || f.includes('uwchlan') || f.includes('bradford') || f.includes('lincoln') || f.includes('racc') || f.includes('norristown')) {
    return 'Education';
  }
  if (f.includes('health') || f.includes('thrh') || f.includes('varian') || f.includes('hospital') || f.includes('medical') || f.includes('clinic')) {
    return 'Healthcare';
  }
  if (f.includes('dcu') || f.includes('commercial') || f.includes('retail') || f.includes('banquet') || f.includes('restaurant') || f.includes('staybridge') || f.includes('jeffersonville') || f.includes('credit-union')) {
    return 'Commercial';
  }
  if (f.includes('cca') || f.includes('bishop') || f.includes('municipal') || f.includes('transit') || f.includes('berks') || f.includes('bluebell') || f.includes('northampton') || f.includes('memorial') || f.includes('airport')) {
    return 'Institutional';
  }
  if (f.includes('ardmore') || f.includes('img_') || f.includes('team') || f.includes('building') || f.includes('framing') || f.includes('exterior')) {
    return 'Field & Construction';
  }
  return 'General';
}

function formatTitle(filename) {
  return filename
    .replace(/\.(jpg|jpeg|png|webp)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b(img|es|ms|cca|dcu|racc|thrh)\b/gi, m => m.toUpperCase())
    .replace(/\b\w/g, l => l.toUpperCase())
    .trim();
}

let idCounter = 1;
for (const m of months) {
  const mDir = path.join(baseDir, m);
  const files = fs.readdirSync(mDir);
  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
    // skip generated thumbnails
    if (/-\d+x\d+\.(jpg|jpeg|png|webp)$/i.test(f)) continue;
    
    const fullPath = path.join(mDir, f);
    const stat = fs.statSync(fullPath);
    if (stat.size > 20000 && !f.includes('logo') && !f.includes('icon') && !f.includes('placeholder')) {
      const category = categorize(f);
      categorizedImages.push({
        id: `img-${idCounter++}`,
        src: `/uploads/2026/${m}/${f}`,
        title: formatTitle(f),
        category: category,
        filename: f,
        size: stat.size,
      });
    }
  }
}

console.log('Total categorized images:', categorizedImages.length);

const catCounts = {};
categorizedImages.forEach(img => catCounts[img.category] = (catCounts[img.category] || 0) + 1);
console.log('Category breakdown:', catCounts);

// Save to src/data/galleryImages.json
const targetFile = path.join(__dirname, '..', 'src', 'data', 'galleryImages.json');
fs.mkdirSync(path.dirname(targetFile), { recursive: true });
fs.writeFileSync(targetFile, JSON.stringify(categorizedImages, null, 2));
console.log('Saved to src/data/galleryImages.json');
