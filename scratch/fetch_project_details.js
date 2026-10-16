const https = require('https');
const fs = require('fs');

const pages = [
  { name: 'lehigh-airport', url: 'https://ersconstruction.com/index.php/lehign-northamto-nairport-main-terminal/' },
  { name: 'diamond-credit-union', url: 'https://ersconstruction.com/index.php/diamond-credit-union/' },
  { name: 'jeffersonville-clubhouse', url: 'https://ersconstruction.com/jeffersonville-new-clubhouse/' },
  { name: 'staybridge', url: 'https://ersconstruction.com/index.php/staybridge/' }
];

function fetchPage(p) {
  return new Promise((resolve) => {
    https.get(p.url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        fs.writeFileSync(`scratch/${p.name}.html`, data);
        console.log(`Saved ${p.name}.html, length: ${data.length}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(p.name, err);
      resolve();
    });
  });
}

async function run() {
  for (const p of pages) {
    await fetchPage(p);
  }
}

run();
