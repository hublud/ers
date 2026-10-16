const https = require('https');
const fs = require('fs');
const path = require('path');

const cssUrls = [
  { name: 'post-351.css', url: 'https://ersconstruction.com/wp-content/uploads/elementor/css/post-351.css' },
  { name: 'post-2491.css', url: 'https://ersconstruction.com/wp-content/uploads/elementor/css/post-2491.css' },
  { name: 'post-244.css', url: 'https://ersconstruction.com/wp-content/uploads/elementor/css/post-244.css' },
  { name: 'post-1058.css', url: 'https://ersconstruction.com/wp-content/uploads/elementor/css/post-1058.css' }
];

async function download() {
  for (const item of cssUrls) {
    await new Promise((resolve) => {
      https.get(item.url, res => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => {
          fs.writeFileSync(path.join(__dirname, item.name), d);
          console.log(`Saved ${item.name} (${d.length} bytes)`);
          
          const bgImgs = [...d.matchAll(/url\(['"]?([^"')]+)['"]?\)/gi)].map(m => m[1]);
          console.log(`  Background images in ${item.name}:`, bgImgs);
          resolve();
        });
      }).on('error', (e) => {
        console.error(`Error ${item.name}:`, e.message);
        resolve();
      });
    });
  }
}

download();
