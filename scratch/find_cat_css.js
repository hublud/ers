const fs = require('fs');

['community-and-institutional', 'education', 'healthcare', 'public-sector'].forEach(slug => {
  const html = fs.readFileSync(`scratch/${slug}.html`, 'utf8');
  const postCss = html.match(/post-(\d+)\.css/);
  const postId = html.match(/page-id-(\d+)/);
  console.log(slug, 'Post CSS:', postCss ? postCss[0] : 'none', 'Page ID:', postId ? postId[1] : 'none');
});
