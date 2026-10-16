const fs = require('fs');
const body = fs.readFileSync('scratch/contact_page_body.html', 'utf8');

// Print all text with structure
const cheerioLike = (html) => {
  // Find all elements with classes and text
  const tagRegex = /<([a-z0-9]+)[^>]*class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/\1>/gi;
  // Let's just find headings, paragraphs, images, links
  const items = [...html.matchAll(/<(h[1-6]|p|a|img|span)[^>]*>([\s\S]*?)<\/\1>|<img[^>]*>/gi)];
  items.forEach(m => {
    const tag = m[1] || 'img';
    const content = m[0];
    if (tag === 'img') {
      const src = content.match(/src=["']([^"']+)["']/i);
      console.log(`[IMG] src: ${src ? src[1] : ''}`);
    } else {
      const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const href = content.match(/href=["']([^"']+)["']/i);
      if (text.length > 0 && text.length < 200) {
        console.log(`[${tag.toUpperCase()}] ${href ? '(' + href[1] + ') ' : ''}${text}`);
      }
    }
  });
};

cheerioLike(body);
