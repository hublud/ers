const sharp = require('sharp');
const fs = require('fs');

async function test() {
  const files = [
    'public/uploads/2026/04/cropped-Stuebner-Large-300x300.bmp',
    'public/uploads/2026/04/cropped-Stuebner-Large.bmp',
    'public/uploads/2026/04/Stuebner-Large.bmp',
    'public/uploads/2026/04/cropped-Stuebner-Large-192x192.bmp',
    'public/uploads/2026/04/cropped-Stuebner-Large-32x32.bmp'
  ];

  for (const f of files) {
    try {
      const meta = await sharp(f).metadata();
      console.log(f, meta.width, 'x', meta.height, meta.format);
    } catch (err) {
      console.error('Error for', f, err.message);
    }
  }
}

test();
