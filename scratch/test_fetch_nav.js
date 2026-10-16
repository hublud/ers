const https = require('https');

const options = {
  hostname: 'ersconstruction.com',
  path: '/',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get(options, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers location:', res.headers.location);
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('Length:', d.length);
    const titleMatch = d.match(/<title>([^<]+)<\/title>/i);
    console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
    
    // Find all links
    const linkRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;
    const links = [];
    while ((match = linkRegex.exec(d)) !== null) {
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      links.push({ href: match[1], text });
    }
    console.log('Links found:', links.filter(l => l.text.length > 0 && l.text.length < 50));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
