const fs = require('fs');
const sharp = require('sharp');

// Simple BMP decoder
function decodeBMP(buffer) {
  if (buffer.readUInt16LE(0) !== 0x4D42) {
    throw new Error('Not a BMP file');
  }
  const fileSize = buffer.readUInt32LE(2);
  const dataOffset = buffer.readUInt32LE(10);
  const dibHeaderSize = buffer.readUInt32LE(14);
  const width = buffer.readInt32LE(18);
  const height = buffer.readInt32LE(22);
  const planes = buffer.readUInt16LE(26);
  const bpp = buffer.readUInt16LE(28);
  const compression = buffer.readUInt32LE(30);

  console.log({ width, height, bpp, compression, dataOffset });

  const isBottomUp = height > 0;
  const absHeight = Math.abs(height);
  const absWidth = Math.abs(width);

  // Raw RGBA output buffer
  const rgba = Buffer.alloc(absWidth * absHeight * 4);

  if (bpp === 24) {
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
        rgba[outOffset] = r;
        rgba[outOffset + 1] = g;
        rgba[outOffset + 2] = b;
        rgba[outOffset + 3] = 255;
      }
    }
  } else if (bpp === 32) {
    const rowSize = absWidth * 4;
    for (let y = 0; y < absHeight; y++) {
      const srcY = isBottomUp ? (absHeight - 1 - y) : y;
      const rowOffset = dataOffset + srcY * rowSize;
      for (let x = 0; x < absWidth; x++) {
        const pxOffset = rowOffset + x * 4;
        const b = buffer[pxOffset];
        const g = buffer[pxOffset + 1];
        const r = buffer[pxOffset + 2];
        const a = buffer[pxOffset + 3];
        const outOffset = (y * absWidth + x) * 4;
        rgba[outOffset] = r;
        rgba[outOffset + 1] = g;
        rgba[outOffset + 2] = b;
        rgba[outOffset + 3] = a;
      }
    }
  } else {
    throw new Error('Unsupported bpp: ' + bpp);
  }

  return { width: absWidth, height: absHeight, data: rgba };
}

async function run() {
  const buf = fs.readFileSync('public/uploads/2026/04/cropped-Stuebner-Large-300x300.bmp');
  const decoded = decodeBMP(buf);
  console.log('Decoded successfully:', decoded.width, 'x', decoded.height);

  await sharp(decoded.data, {
    raw: {
      width: decoded.width,
      height: decoded.height,
      channels: 4
    }
  })
  .png()
  .toFile('scratch/decoded_favicon.png');

  console.log('Saved scratch/decoded_favicon.png');
}

run().catch(console.error);
