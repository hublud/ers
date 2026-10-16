const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Commercial Hero background
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-02-scaled.jpg', file: 'commercial-hero.jpg' },
  // Category cards
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/lvi-int-1.jpg', file: 'lehigh-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-01-1-scaled.jpg', file: 'diamond-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Banquet_01-1-scaled.jpg', file: 'jeffersonville-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Picture6.jpg', file: 'staybridge-card.jpg' },

  // Lehigh Airport
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/lvi-ext-1-300x229-1.jpg', file: 'lehigh-ext-1.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/lvi-int-2-1-300x237-1.jpg', file: 'lehigh-int-2.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/lvi-int-1-2-300x238-1.jpg', file: 'lehigh-int-1.jpg' },

  // Diamond Credit Union
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-10-1-scaled-1-1024x683.jpg', file: 'diamond-10.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-09-1-scaled-1-1024x683.jpg', file: 'diamond-09.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-08-1-scaled-1-1024x683.jpg', file: 'diamond-08.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-06-1-scaled-1-1024x683.jpg', file: 'diamond-06.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-07-1-scaled-1-1024x683.jpg', file: 'diamond-07.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-04-1-scaled-1-1024x683.jpg', file: 'diamond-04.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-03-1-scaled-1-1024x682.jpg', file: 'diamond-03.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-02-1-1-scaled-1-1024x683.jpg', file: 'diamond-02.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/DCU-Exeter-01-2-scaled-1-1024x683.jpg', file: 'diamond-01.jpg' },

  // Jeffersonville New Clubhouse
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Simulator_03-scaled-1.jpg', file: 'jeff-simulator-03.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Stair_02-scaled-1.jpg', file: 'jeff-stair-02.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Simulator_01-scaled-1.jpg', file: 'jeff-simulator-01.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Proshop_02-scaled-1.jpg', file: 'jeff-proshop-02.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Exterior_06-scaled-1.jpg', file: 'jeff-exterior-06.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/MainLobby_03-scaled-1.jpg', file: 'jeff-lobby-03.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Exterior_03-scaled-1.jpg', file: 'jeff-exterior-03.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Burgess_03-scaled-1.jpg', file: 'jeff-burgess-03.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Burgess_01-scaled-1.jpg', file: 'jeff-burgess-01.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/09/Banquet_01-scaled-1.jpg', file: 'jeff-banquet-01.jpg' },

  // Staybridge Hotel
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Picture6.jpg', file: 'staybridge-06.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Picture7.jpg', file: 'staybridge-07.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Picture8.jpg', file: 'staybridge-08.jpg' },
];

const destDir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function download(img) {
  return new Promise((resolve) => {
    const dest = path.join(destDir, img.file);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already exists: ${img.file}`);
      return resolve();
    }
    const fileStream = fs.createWriteStream(dest);
    https.get(img.url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${img.file}: status ${res.statusCode}`);
        fileStream.close();
        return resolve();
      }
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded ${img.file} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error ${img.file}:`, err);
      fileStream.close();
      resolve();
    });
  });
}

async function run() {
  console.log(`Starting download of ${images.length} images...`);
  for (const img of images) {
    await download(img);
  }
  console.log('All downloads completed!');
}

run();
