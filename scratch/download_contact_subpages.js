const https = require('https');
const fs = require('fs');

const pages = [
  { name: 'construction-project', path: '/construction-project/' },
  { name: 'enquiries', path: '/enquiries/' },
  { name: 'become-a-sub', path: '/become-a-sub/' },
  { name: 'careers', path: '/careers/' }
];

async function fetchPage(page) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'ersconstruction.com',
      path: page.path,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };
    https.get(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Redirect for ${page.name}:`, res.headers.location);
        // Follow redirect
        const redirUrl = new URL(res.headers.location);
        https.get({
          hostname: redirUrl.hostname,
          path: redirUrl.pathname + redirUrl.search,
          headers: options.headers
        }, (res2) => {
          let html = '';
          res2.on('data', chunk => html += chunk);
          res2.on('end', () => {
            fs.writeFileSync(`scratch/${page.name}.html`, html);
            console.log(`Saved scratch/${page.name}.html, length:`, html.length);
            resolve();
          });
        });
        return;
      }
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => {
        fs.writeFileSync(`scratch/${page.name}.html`, html);
        console.log(`Saved scratch/${page.name}.html, length:`, html.length);
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  for (const page of pages) {
    await fetchPage(page);
  }
  console.log('All pages fetched!');
})();
