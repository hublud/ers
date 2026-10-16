const https = require('https');
const fs = require('fs');

const categories = [
  { slug: 'community-and-institutional', url: 'https://ersconstruction.com/community-and-institutional/' },
  { slug: 'education', url: 'https://ersconstruction.com/education/' },
  { slug: 'healthcare', url: 'https://ersconstruction.com/healthcare/' },
  { slug: 'public-sector', url: 'https://ersconstruction.com/public-sector/' },
];

function fetchCategory(c) {
  return new Promise((resolve) => {
    https.get(c.url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(`scratch/${c.slug}.html`, data);
        console.log(`Saved ${c.slug}.html (${data.length} bytes)`);
        
        // Extract project titles and detail links
        const titles = [];
        const tRegex = /<h3 class="elementor-image-box-title">([\s\S]*?)<\/h3>/gi;
        let m;
        while ((m = tRegex.exec(data)) !== null) {
          titles.push(m[1].trim());
        }
        
        const detailLinks = [];
        const lRegex = /href="([^"]*)"[^>]*>[\s\S]*?View Project Detail/gi;
        while ((m = lRegex.exec(data)) !== null) {
          detailLinks.push(m[1]);
        }
        
        console.log(`[${c.slug}] Titles:`, titles);
        console.log(`[${c.slug}] Links:`, detailLinks);
        resolve();
      });
    }).on('error', (err) => {
      console.error(c.slug, err);
      resolve();
    });
  });
}

async function run() {
  for (const c of categories) {
    await fetchCategory(c);
  }
}

run();
