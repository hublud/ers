const fs = require('fs');
const html = fs.readFileSync('portfolio_page.html', 'utf8');

const whatIdx = html.indexOf('What We Build');
if (whatIdx !== -1) {
  // Grab 8000 characters around it
  console.log(html.slice(whatIdx - 500, whatIdx + 6000));
}
