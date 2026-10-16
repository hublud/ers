const fs = require('fs');

['scratch/lehign-northamto-nairport-main-terminal.html', 'scratch/diamond-credit-union.html'].forEach(f => {
  console.log('------------------------------------');
  console.log('FILE:', f);
  const html = fs.readFileSync(f, 'utf8');
  const start = html.indexOf('Project Name');
  if (start !== -1) {
    console.log(html.slice(start, start + 3000));
  }
});
