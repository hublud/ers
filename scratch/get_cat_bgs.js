const https = require('https');

const cssFiles = [
  'https://ersconstruction.com/wp-content/uploads/elementor/css/post-1504.css',
  'https://ersconstruction.com/wp-content/uploads/elementor/css/post-1508.css',
  'https://ersconstruction.com/wp-content/uploads/elementor/css/post-1308.css',
  'https://ersconstruction.com/wp-content/uploads/elementor/css/post-2985.css'
];

cssFiles.forEach(url => {
  https.get(url, (res) => {
    let css = '';
    res.on('data', c => css += c);
    res.on('end', () => {
      const bgs = css.match(/url\([^)]+\)/gi) || [];
      console.log(url.split('/').pop(), 'BGs:', bgs);
    });
  });
});
