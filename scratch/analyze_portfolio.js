const fs = require('fs');

const html = fs.readFileSync('portfolio_page.html', 'utf8');

// Find post-237 content
const startIdx = html.indexOf('data-elementor-id="237"');
if (startIdx !== -1) {
  const content = html.slice(startIdx, startIdx + 50000);
  
  // Extract all text inside elements
  const tags = content.match(/<(h[1-6]|p|a|span|div)[^>]*>([^<]+)<\/\1>/gi) || [];
  console.log('Clean text snippets:');
  const seen = new Set();
  tags.forEach(t => {
    const text = t.replace(/<[^>]+>/g, '').trim();
    if (text && text.length > 3 && !seen.has(text)) {
      seen.add(text);
      console.log('-', text);
    }
  });

  // Check for icons or images
  const icons = content.match(/<i[^>]*class="([^"]*)"[^>]*>/gi) || [];
  console.log('\nIcons found:', icons);

  // Check for svgs or images
  const imgs = content.match(/<img[^>]*src="([^"]*)"[^>]*>/gi) || [];
  console.log('\nImages found:', imgs);
} else {
  console.log('post-237 not found');
}
