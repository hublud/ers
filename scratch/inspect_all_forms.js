const fs = require('fs');

const pages = ['construction-project', 'enquiries', 'become-a-sub', 'careers'];

pages.forEach(p => {
  console.log(`\n================== ${p.toUpperCase()} ==================`);
  const html = fs.readFileSync(`scratch/${p}.html`, 'utf8');
  
  // Title
  const title = html.match(/<title>([^<]+)<\/title>/i);
  console.log('Title:', title ? title[1] : 'none');

  // Headings
  const headings = [...html.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('Headings:', headings);

  // Forms
  const forms = [...html.matchAll(/<form[\s\S]*?<\/form>/gi)].map(m => m[0]);
  console.log('Forms count:', forms.length);
  
  forms.forEach((f, i) => {
    console.log(`\n--- Form ${i} ---`);
    // labels and inputs
    const elements = [...f.matchAll(/<(?:label|input|textarea|select|button)[^>]*>([\s\S]*?<\/(?:label|button)>)?/gi)].map(m => m[0]);
    console.log('Form elements count:', elements.length);
    elements.forEach(el => {
      // trim long attributes
      const clean = el.replace(/\s+/g, ' ');
      if (clean.length < 250) console.log('  ', clean);
      else console.log('  ', clean.substring(0, 250) + '...');
    });
  });
});
