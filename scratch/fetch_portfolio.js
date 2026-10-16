const https = require('https');
const fs = require('fs');

https.get('https://ersconstruction.com/our-portfolio/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('portfolio_page.html', data);
    console.log('Saved portfolio_page.html, length:', data.length);
  });
});
