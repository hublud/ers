const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Heroes
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/04/lincoln-ms-1.jpg', file: 'community-hero.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/07/uwchlan-hills-es.jpg', file: 'education-hero.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/RACC-13-scaled.jpg', file: 'healthcare-hero.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Northampton-2.jpg', file: 'public-sector-hero.jpg' },

  // Community
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Ardmore-Image-1-1.jpeg', file: 'ardmore-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/06/hj.jpg', file: 'bishop-mcdevitt-card.jpg' },

  // Healthcare
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/04/bishop-mcdevitt-4.jpg', file: 'reading-health-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/07/montco-college-health-center-4-768x576-1.jpg', file: 'health-science-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/RACC-15-scaled.jpg', file: 'racc-theater-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/THRH-Varian-Images-4-1-scaled.jpg', file: 'thrh-varian-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/THPhoenixville_NursingAnnual_Exterior-1.jpg', file: 'phoenixville-maternity-card.jpg' },

  // Public Sector
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Northampton-4.jpg', file: 'northampton-fire-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Berks-Transit-3-scaled.jpeg', file: 'berks-transit-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/C1A0FBE6-6711-468E-888F-F4915D92F264-1.jpeg', file: 'harmonville-fire-card.jpg' },

  // Education (15 projects)
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/06/ds.jpg', file: 'wilson-hs-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/06/DCIU3.webp', file: 'dciu-marple-card.webp' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/07/uwchlan-hills-es-2.jpg', file: 'uwchlan-hills-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/06/ERS_SHS_image_4.webp', file: 'springfield-hs-card.webp' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/06/lincoln-ms.webp', file: 'lincoln-ms-card.webp' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/06/m.jpg', file: 'lynnewood-es-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Downingtown-25-scaled.jpg', file: 'downingtown-west-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/CCA-30-scaled.jpg', file: 'cca-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/BlueBell-IMG-009-scaled.jpeg', file: 'blue-bell-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/West-Bradford-ES-IMG-7-1-scaled.jpg', file: 'west-bradford-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Aquaponics-17-scaled.jpg', file: 'thomas-ford-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/IMG_20260623_154403-scaled.jpg', file: 'central-bucks-south-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/AF6963F1-AB6A-4668-ACA9-E3840E868823.jpeg', file: 'palmerton-sd-card.jpg' },
  { url: 'https://ersconstruction.com/wp-content/uploads/2026/08/Norristown-School.png', file: 'norristown-school-card.png' }
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
