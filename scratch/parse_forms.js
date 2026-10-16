const fs = require('fs');

function analyzeFile(filename) {
  const html = fs.readFileSync(`scratch/${filename}.html`, 'utf8');
  console.log(`\n============================ ${filename} ============================`);
  
  // Find all form elements or if no <form>, search for inputs or iframes or fluentform
  const forms = [...html.matchAll(/<form[\s\S]*?<\/form>/gi)].map(m => m[0]);
  console.log(`Forms found: ${forms.length}`);
  
  if (forms.length > 0) {
    forms.forEach((f, idx) => {
      console.log(`\n--- FORM #${idx} ---`);
      // Find all label + input / textarea / select groupings
      // Fluent form wraps each field in ff-el-group or similar
      const groups = [...f.matchAll(/<div class=['"][^'"]*ff-el-group[^'"]*['"][\s\S]*?<\/div>\s*<\/div>/gi)].map(m => m[0]);
      console.log(`Total groups: ${groups.length}`);
      
      // Also get all labels and inputs
      const labels = [...f.matchAll(/<label[^>]*>([\s\S]*?)<\/label>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
      console.log('Labels:', labels);
      
      const submitBtn = f.match(/<button[^>]*type=['"]submit['"][^>]*>([\s\S]*?)<\/button>/i);
      console.log('Submit button:', submitBtn ? submitBtn[1].replace(/<[^>]+>/g, '').trim() : 'none');
    });
  } else {
    // Check if there are iframes or fluent form shortcodes or other form markers
    const iframes = [...html.matchAll(/<iframe[^>]*>/gi)].map(m => m[0]);
    console.log('Iframes:', iframes);
    const ffMarkers = [...html.matchAll(/fluentform|wpcf7|form/gi)].map(m => m[0]);
    console.log('Form markers:', ffMarkers.length);
  }
}

['construction-project', 'enquiries', 'careers'].forEach(analyzeFile);
