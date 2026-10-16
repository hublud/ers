const https = require('https');

https.get('https://ersconstruction.com/wp-content/uploads/elementor/css/post-237.css', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    const lines = css.split('}');
    lines.forEach(l => {
      if (l.includes('2dfbfee') || l.includes('178f0cc') || l.includes('f9212ff') || l.includes('6369fa98')) {
        console.log(l + '}');
      }
    });
  });
});
