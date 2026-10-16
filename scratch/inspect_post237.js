const https = require('https');

https.get('https://ersconstruction.com/wp-content/uploads/elementor/css/post-237.css', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    console.log('CSS length:', css.length);
    // Find grid, icon-box, heading styling
    const rules = css.split('}');
    rules.forEach(r => {
      if (r.includes('grid-template') || r.includes('icon-box') || r.includes('infobox') || r.includes('border') || r.includes('background') || r.includes('padding') || r.includes('font-size')) {
        if (!r.includes('@media') || r.includes('min-width: 1025px')) {
          console.log(r.trim() + '}');
        }
      }
    });
  });
});
