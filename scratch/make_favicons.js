const fs = require('fs');
const sharp = require('sharp');

// BMP decoder
function decodeBMP(buffer) {
  const dataOffset = buffer.readUInt32LE(10);
  const width = buffer.readInt32LE(18);
  const height = buffer.readInt32LE(22);
  const bpp = buffer.readUInt16LE(28);

  const isBottomUp = height > 0;
  const absHeight = Math.abs(height);
  const absWidth = Math.abs(width);

  const rgba = Buffer.alloc(absWidth * absHeight * 4);
  const rgbaTransparent = Buffer.alloc(absWidth * absHeight * 4);

  const rowSize = Math.floor((bpp * absWidth + 31) / 32) * 4;
  for (let y = 0; y < absHeight; y++) {
    const srcY = isBottomUp ? (absHeight - 1 - y) : y;
    const rowOffset = dataOffset + srcY * rowSize;
    for (let x = 0; x < absWidth; x++) {
      const pxOffset = rowOffset + x * 3;
      const b = buffer[pxOffset];
      const g = buffer[pxOffset + 1];
      const r = buffer[pxOffset + 2];
      const outOffset = (y * absWidth + x) * 4;

      // Original with white
      rgba[outOffset] = r;
      rgba[outOffset + 1] = g;
      rgba[outOffset + 2] = b;
      rgba[outOffset + 3] = 255;

      // Transparent version (if white or very close to white)
      const isWhite = r > 245 && g > 245 && b > 245;
      rgbaTransparent[outOffset] = r;
      rgbaTransparent[outOffset + 1] = g;
      rgbaTransparent[outOffset + 2] = b;
      rgbaTransparent[outOffset + 3] = isWhite ? 0 : 255;
    }
  }

  return { width: absWidth, height: absHeight, rgba, rgbaTransparent };
}

async function generate() {
  const buf = fs.readFileSync('public/uploads/2026/04/cropped-Stuebner-Large-300x300.bmp');
  const { width, height, rgba, rgbaTransparent } = decodeBMP(buf);

  // Generate 32x32, 180x180, 192x192, 512x512 with transparent background
  // and also with white background
  
  // Let's create sharp instances
  const baseImg = sharp(rgbaTransparent, {
    raw: { width, height, channels: 4 }
  });

  // Save 512x512
  await baseImg.clone().resize(512, 512).png().toFile('public/icon-512x512.png');
  // Save 192x192
  await baseImg.clone().resize(192, 192).png().toFile('public/favicon-192x192.png');
  // Save 180x180 for apple-touch-icon
  await baseImg.clone().resize(180, 180).png().toFile('public/apple-touch-icon.png');
  // Save 32x32
  await baseImg.clone().resize(32, 32).png().toFile('public/favicon-32x32.png');
  // Save 16x16
  await baseImg.clone().resize(16, 16).png().toFile('public/favicon-16x16.png');
  // Save app icon.png for Next.js app router
  await baseImg.clone().resize(192, 192).png().toFile('src/app/icon.png');
  // Save apple-icon.png for Next.js app router
  await baseImg.clone().resize(180, 180).png().toFile('src/app/apple-icon.png');

  // Let's also create a valid ICO file container with 16x16, 32x32, 48x48 PNGs
  const p16 = await baseImg.clone().resize(16, 16).png().toBuffer();
  const p32 = await baseImg.clone().resize(32, 32).png().toBuffer();
  const p48 = await baseImg.clone().resize(48, 48).png().toBuffer();

  const icoBuffer = createIco([
    { size: 16, buffer: p16 },
    { size: 32, buffer: p32 },
    { size: 48, buffer: p48 }
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);

  console.log('Successfully generated all favicons and icons!');
}

function createIco(images) {
  // ICO header: 6 bytes
  // Reserved (2 bytes) = 0
  // Type (2 bytes) = 1 (ICO)
  // Image count (2 bytes)
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  // Each directory entry: 16 bytes
  const dirSize = 16 * count;
  let offset = 6 + dirSize;

  const entries = [];
  const imgBuffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.size >= 256 ? 0 : img.size, 0); // width
    entry.writeUInt8(img.size >= 256 ? 0 : img.size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset

    entries.push(entry);
    imgBuffers.push(img.buffer);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...imgBuffers]);
}

generate().catch(console.error);
