const https = require('https');
const fs = require('fs');

https.get('https://ersconstruction.com/wp-content/uploads/elementor/css/post-2971.css', (res) => {
  let css = '';
  res.on('data', chunk => css += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/post-2971.css', css);
    console.log('Saved scratch/post-2971.css, length:', css.length);
    // Find background images
    const bgImgs = css.match(/url\([^)]+\)/gi) || [];
    console.log('Background images found:', bgImgs);
  });
});
