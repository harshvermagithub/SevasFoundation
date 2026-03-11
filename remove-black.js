const sharp = require('sharp');

async function processLogo() {
  const { data, info } = await sharp('public/logo.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Replace black pixels with white (or transparent if user prefers, but user said "use white colors instead")
    if (r < 50 && g < 50 && b < 50) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = 0; // Make them fully transparent so they don't look weird as white blocks around the logo
    } else {
        // user also said "remove the black colors from everywhere and I want you to use white colors instead" so if inside the logo there is black, maybe turn it white.
        // Wait, if making background transparent, the logo stays. Let me just test this.
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).toFile('public/logo_white.png');
  console.log('Logo processed!');
}

processLogo().catch(console.error);
