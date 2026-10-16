const https = require('https');
const fs = require('fs');

const icons = [
  { name: 'home.png', url: 'https://img.icons8.com/ios-filled/100/000000/home.png' },
  { name: 'marker.png', url: 'https://img.icons8.com/ios-filled/100/000000/marker.png' },
  { name: 'under-construction.png', url: 'https://img.icons8.com/ios-filled/100/000000/under-construction.png' },
  { name: 'design.png', url: 'https://img.icons8.com/ios-filled/100/000000/design.png' },
  { name: 'maintenance.png', url: 'https://img.icons8.com/ios-filled/100/000000/maintenance.png' },
  { name: 'interior.png', url: 'https://img.icons8.com/ios-filled/100/000000/interior.png' }
];

if (!fs.existsSync('public/images/form-icons')) {
  fs.mkdirSync('public/images/form-icons', { recursive: true });
}

icons.forEach(({ name, url }) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(`public/images/form-icons/${name}`);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${name}`);
    });
  }).on('error', err => console.error(`Error downloading ${name}:`, err.message));
});
