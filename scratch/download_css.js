const https = require('https');
const fs = require('fs');

const cssFiles = [
  { url: 'https://ersconstruction.com/wp-content/uploads/elementor/css/post-258.css', out: 'scratch/post-258.css' },
  { url: 'https://ersconstruction.com/wp-content/uploads/elementor/css/post-1328.css', out: 'scratch/post-1328.css' },
  { url: 'https://ersconstruction.com/wp-content/plugins/fluentform/assets/css/fluent-forms-public.css', out: 'scratch/fluent-forms-public.css' }
];

cssFiles.forEach(({ url, out }) => {
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  }, (res) => {
    let css = '';
    res.on('data', chunk => css += chunk);
    res.on('end', () => {
      fs.writeFileSync(out, css);
      console.log(`Saved ${out}, length:`, css.length);
    });
  });
});
