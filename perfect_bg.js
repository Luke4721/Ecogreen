const { Jimp } = require('jimp');

async function processLogo() {
  try {
    const image = await Jimp.read('public/logo.png');
    
    image.scan((x, y, idx) => {
      const r = image.bitmap.data[idx] / 255;
      const g = image.bitmap.data[idx + 1] / 255;
      const b = image.bitmap.data[idx + 2] / 255;
      
      // Calculate alpha assuming the background was pure white
      const minColor = Math.min(r, g, b);
      let a = 1 - minColor;
      
      if (a < 0.01) {
        // Pure white -> transparent
        image.bitmap.data[idx + 3] = 0;
      } else {
        // Recover original colors
        const r0 = Math.max(0, Math.min(1, (r - (1 - a)) / a));
        const g0 = Math.max(0, Math.min(1, (g - (1 - a)) / a));
        const b0 = Math.max(0, Math.min(1, (b - (1 - a)) / a));
        
        image.bitmap.data[idx] = Math.round(r0 * 255);
        image.bitmap.data[idx + 1] = Math.round(g0 * 255);
        image.bitmap.data[idx + 2] = Math.round(b0 * 255);
        image.bitmap.data[idx + 3] = Math.round(a * 255);
      }
    });
    
    await image.write('public/logo_transparent.png');
    console.log('Successfully created logo_transparent.png!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processLogo();
