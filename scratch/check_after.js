const fs = require('fs');
const html = fs.readFileSync('portfolio_page.html', 'utf8');

const afterIdx = html.indexOf('a7c1482');
if (afterIdx !== -1) {
  console.log(html.slice(afterIdx, afterIdx + 4000));
}
