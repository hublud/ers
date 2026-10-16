const https = require('https');
const fs = require('fs');

const bldIcons = [
  { name: 'education.png', url: 'https://img.icons8.com/ios-filled/100/000000/graduation-cap.png' },
  { name: 'healthcare.png', url: 'https://img.icons8.com/ios-filled/100/000000/hospital-room.png' },
  { name: 'industrial.png', url: 'https://img.icons8.com/ios-filled/100/000000/factory.png' },
  { name: 'hospitality.png', url: 'https://img.icons8.com/ios-filled/100/000000/hotel.png' }
];

bldIcons.forEach(({ name, url }) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(`public/images/form-icons/${name}`);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${name}`);
    });
  }).on('error', err => console.error(`Error downloading ${name}:`, err.message));
});
