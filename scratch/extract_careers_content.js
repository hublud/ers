const https = require('https');
const fs = require('fs');

// Download post-245.css
https.get('https://ersconstruction.com/wp-content/uploads/elementor/css/post-245.css', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  let css = '';
  res.on('data', c => css += c);
  res.on('end', () => {
    fs.writeFileSync('scratch/post-245.css', css);
    console.log('Saved scratch/post-245.css, length:', css.length);
  });
});

// Check if Career_IMG01-1024x768.png exists locally
const imgPath = 'public/uploads/2026/07/Career_IMG01-1024x768.png';
console.log('Career image exists:', fs.existsSync(imgPath));

// If not, let's also download it if needed
if (!fs.existsSync(imgPath)) {
  const imgUrl = 'https://ersconstruction.com/wp-content/uploads/2026/07/Career_IMG01-1024x768.png';
  https.get(imgUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  }, (res) => {
    const file = fs.createWriteStream(imgPath);
    res.pipe(file);
    file.on('finish', () => console.log('Downloaded Career_IMG01'));
  });
}

// Print full text of careers page
const body = fs.readFileSync('scratch/careers_body.html', 'utf8');

// Print all headings and text blocks
const textBlocks = [...body.matchAll(/<(h[1-6]|p|li|span|a|summary|details)[^>]*>([\s\S]*?)<\/\1>/gi)]
  .map(m => {
    const tag = m[1];
    const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return { tag, text };
  })
  .filter(item => item.text.length > 0 && !item.text.includes('Why Stuebner') && !item.text.includes('Services Projects'));

fs.writeFileSync('scratch/careers_content.json', JSON.stringify(textBlocks, null, 2));
console.log('Saved scratch/careers_content.json, items:', textBlocks.length);
