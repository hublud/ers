const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'res image', 'uploads', 'uploads', '2026');

const months = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

const projectGroups = {};
let totalImages = 0;
let cleanImages = [];

for (const m of months) {
  const mDir = path.join(baseDir, m);
  const files = fs.readdirSync(mDir);
  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
    // skip small generated thumbnails like -150x150, -300x225, -768x...
    const isThumb = /-\d+x\d+\.(jpg|jpeg|png|webp)$/i.test(f);
    if (!isThumb) {
      const fullPath = path.join(mDir, f);
      const stat = fs.statSync(fullPath);
      // skip icons or tiny images < 10KB
      if (stat.size > 15000 && !f.includes('logo') && !f.includes('icon') && !f.includes('avatar') && !f.includes('placeholder')) {
        cleanImages.push({
          month: m,
          filename: f,
          size: stat.size,
          relWebPath: `/images/gallery-all/2026/${m}/${f}`,
          fsPath: fullPath
        });
      }
    }
  }
}

console.log('Total full-res distinct project images found:', cleanImages.length);

// Group by name prefix/project
cleanImages.forEach(img => {
  // extract project name pattern (e.g. "bishop-mcdevitt", "CCA", "CooperTown", "Wilson", etc.)
  const baseName = img.filename.replace(/[-_]\d+.*$/i, '').replace(/\.(jpg|jpeg|png|webp)$/i, '');
  projectGroups[baseName] = (projectGroups[baseName] || 0) + 1;
});

console.log('Project categories / groups count:', Object.keys(projectGroups).length);
console.log('Top project groups:', Object.entries(projectGroups).sort((a,b) => b[1] - a[1]).slice(0, 30));
fs.writeFileSync(path.join(__dirname, 'clean_res_images.json'), JSON.stringify(cleanImages, null, 2));
