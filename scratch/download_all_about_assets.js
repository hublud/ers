const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const downloads = [
  // About Us
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_20260623_155938-scaled.jpg',
    dest: 'public/images/about/about-hero.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/04/heading-full-city.png',
    dest: 'public/images/about/heading-full-city.png'
  },
  
  // Gallery
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/WilsonPhase2-12.webp',
    dest: 'public/images/gallery/gallery-hero.webp'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_20260623_153038-1024x768.jpg',
    dest: 'public/images/gallery/gallery-1.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/limerick-municipal-2-1024x768.jpg',
    dest: 'public/images/gallery/gallery-2.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_Office-Hallway-03-1024x768.jpg',
    dest: 'public/images/gallery/gallery-3.jpg'
  },

  // People
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_Office-Hallway-03-scaled.jpg',
    dest: 'public/images/people/people-hero.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/07/Ardmore_24-2026-img08-1-1-768x778.jpg',
    dest: 'public/images/people/ardmore-team.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/05/Doug-George-691x1024.png',
    dest: 'public/images/people/doug-george.png'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/05/Steve-Sostak-691x1024.png',
    dest: 'public/images/people/steve-sostak.png'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/05/Jim-Kline-691x1024.png',
    dest: 'public/images/people/jim-kline.png'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/recipt-676x1024.jpg',
    dest: 'public/images/people/jeff-albright.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/Untitled-1-1-691x1024.jpg',
    dest: 'public/images/people/julia-ramos.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/05/James-Gardner-691x1024.png',
    dest: 'public/images/people/james-gardner.png'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/07/Untitled-4-691x1024.jpg',
    dest: 'public/images/people/carlie-connor.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/08/nic-691x1024.jpg',
    dest: 'public/images/people/nic-zoretich.jpg'
  },

  // Behind the build
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_20260623_160903-scaled.jpg',
    dest: 'public/images/behind-the-build/build-hero.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_20260604_133342421_HDR-scaled.jpg',
    dest: 'public/images/behind-the-build/team-building.jpg'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_9206-1024x683-1.webp',
    dest: 'public/images/behind-the-build/memorial-day-2024.webp'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_5752-1-1024x768-1.webp',
    dest: 'public/images/behind-the-build/march-outing-2025.webp'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_0403.webp',
    dest: 'public/images/behind-the-build/reading-phils.webp'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/IMG_8945-1-1024x683-1.webp',
    dest: 'public/images/behind-the-build/march-madness-2024.webp'
  },
  {
    url: 'https://ersconstruction.com/wp-content/uploads/2026/06/memorial-3-1024x577-1.webp',
    dest: 'public/images/behind-the-build/memorial-day-picnic.webp'
  }
];

function downloadFile(item) {
  return new Promise((resolve) => {
    const fullDest = path.join(__dirname, '..', item.dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });

    if (fs.existsSync(fullDest) && fs.statSync(fullDest).size > 1000) {
      console.log(`Already exists: ${item.dest}`);
      return resolve();
    }

    const client = item.url.startsWith('https') ? https : http;
    client.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const origin = new URL(item.url).origin;
          redirectUrl = new URL(redirectUrl, origin).toString();
        }
        return downloadFile({ url: redirectUrl, dest: item.dest }).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.error(`Status ${res.statusCode} for ${item.url}`);
        return resolve();
      }
      const fileStream = fs.createWriteStream(fullDest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${item.dest} (${fs.statSync(fullDest).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error ${item.url}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const item of downloads) {
    await downloadFile(item);
  }
}

run();
