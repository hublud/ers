const fs = require('fs');

const files = [
  'scratch/lehign-northamto-nairport-main-terminal.html',
  'scratch/diamond-credit-union.html',
  'scratch/jeffersonville-clubhouse.html',
  'scratch/staybridge.html'
];

files.forEach(f => {
  console.log('----------------------------------------------------');
  console.log('FILE:', f);
  const html = fs.readFileSync(f, 'utf8');
  
  // Find "BACK TO PROJECTS" and print the next 4000 chars
  const backIdx = html.indexOf('BACK TO PROJECTS');
  if (backIdx !== -1) {
    console.log(html.slice(backIdx, backIdx + 4000));
  }
});
