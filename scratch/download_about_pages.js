const https = require('https');
const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'about-us', url: 'https://ersconstruction.com/about-us/' },
  { name: 'gallery', url: 'https://ersconstruction.com/gallery/' },
  { name: 'our-people', url: 'https://ersconstruction.com/our-people/' },
  { name: 'behind-the-build', url: 'https://ersconstruction.com/index.php/behind-the-build/' }
];

function fetchPage(page) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(page.url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    https.get(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Redirect for ${page.name} -> ${res.headers.location}`);
        const redirectUrl = new URL(res.headers.location, page.url).toString();
        return fetchPage({ name: page.name, url: redirectUrl }).then(resolve).catch(reject);
      }
      let d = '';
      res.on('data', chunk => d += chunk);
      res.on('end', () => {
        const filePath = path.join(__dirname, `${page.name}.html`);
        fs.writeFileSync(filePath, d);
        console.log(`Saved ${page.name}.html (${d.length} bytes)`);
        resolve({ name: page.name, length: d.length, html: d });
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const page of pages) {
    try {
      await fetchPage(page);
    } catch (e) {
      console.error(`Failed to fetch ${page.name}:`, e.message);
    }
  }
}

run();
