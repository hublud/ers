const fs = require('fs');
const path = require('path');

function findImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findImages(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        // filter out thumbnails like -150x150, -300x225 if there is a main image or keep good resolution
        fileList.push({
          path: filePath,
          relPath: path.relative(path.join(__dirname, '..'), filePath),
          size: stat.size,
          name: file
        });
      }
    }
  }
  return fileList;
}

const allImages = findImages(path.join(__dirname, '..', 'res image'));
console.log('Total images found in res image:', allImages.length);

// Let's inspect some of the image names and paths
console.log('Sample images:', allImages.slice(0, 20).map(i => ({ name: i.name, size: i.size, rel: i.relPath })));

// Check for large / medium resolution vs thumbnails
const fullRes = allImages.filter(i => !/-\d+x\d+\.(jpg|jpeg|png|webp)$/i.test(i.name) && i.size > 20000);
console.log('Full-res non-thumbnail images count:', fullRes.length);
console.log('Sample full-res:', fullRes.slice(0, 30).map(i => i.name));
