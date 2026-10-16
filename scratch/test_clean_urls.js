const https = require('https');
const fs = require('fs');

const urls = [
  'https://ersconstruction.com/lehign-northamto-nairport-main-terminal/',
  'https://ersconstruction.com/diamond-credit-union/',
  'https://ersconstruction.com/staybridge/',
  'https://ersconstruction.com/lehigh-northampton-airport-main-terminal/'
];

function testUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(url, 'Status:', res.statusCode, 'Location:', res.headers.location);
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        console.log('Length:', data.length);
        if (data.length > 1000) {
          const name = url.replace(/https:\/\/[^/]+\//, '').replace(/\//g, '');
          fs.writeFileSync(`scratch/${name}.html`, data);
        }
        resolve();
      });
    }).on('error', (err) => { console.error(err); resolve(); });
  });
}

async function run() {
  for (const u of urls) await testUrl(u);
}

run();
