const fs = require('fs');
const html = fs.readFileSync('portfolio_page.html', 'utf8');

const whatIdx = html.indexOf('f72282f');
if (whatIdx !== -1) {
  console.log(html.slice(whatIdx, whatIdx + 2000));
}
