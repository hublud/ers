const fs = require('fs');
const html = fs.readFileSync('scratch/contact-us.html', 'utf8');

// Title & headings
const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'none');

// Find post css
const postCss = [...html.matchAll(/href=["']([^"']*post-\d+\.css[^"']*)["']/gi)].map(m => m[1]);
console.log('Post CSS:', postCss);

// Look for forms
const forms = [...html.matchAll(/<form[\s\S]*?<\/form>/gi)].map(m => m[0]);
console.log('Forms count:', forms.length);
forms.forEach((f, idx) => {
  console.log(`\n--- FORM ${idx} (length ${f.length}) ---`);
  // print form id or classes
  const idMatch = f.match(/id=["']([^"']+)["']/i);
  const classMatch = f.match(/class=["']([^"']+)["']/i);
  console.log('ID:', idMatch ? idMatch[1] : 'none');
  console.log('Class:', classMatch ? classMatch[1] : 'none');
  
  // input fields
  const inputs = [...f.matchAll(/<(?:input|textarea|select)[^>]*>/gi)].map(m => m[0]);
  console.log('Inputs count:', inputs.length);
  inputs.forEach(inp => console.log('  ', inp));
});

// Search for 'I have a project' or 'project'
const lines = html.split('\n');
lines.forEach((line, i) => {
  if (/project|career|subcontractor|general|inquiry|touch/i.test(line)) {
    if (line.trim().length > 0 && line.trim().length < 200) {
      console.log(`L${i}: ${line.trim()}`);
    }
  }
});
