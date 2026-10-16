const https = require('https');
const fs = require('fs');

function fetchUrl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(dest, data);
        console.log(`Saved ${dest}, length: ${data.length}`);
        resolve(data);
      });
    }).on('error', reject);
  });
}

async function main() {
  const html = await fetchUrl('https://ersconstruction.com/commercial-retail-and-hospitality/', 'scratch/commercial_retail.html');
  
  // Find project cards and detail links
  const links = [];
  const linkRegex = /href="([^"]*)"/g;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    if (match[1].includes('project') || match[1].includes('portfolio') || match[1].includes('commercial') || match[1].includes('ersconstruction.com/')) {
      links.push(match[1]);
    }
  }
  console.log('Sample links found:', [...new Set(links)].slice(0, 30));
}

main().catch(console.error);
