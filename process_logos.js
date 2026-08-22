const { Jimp } = require('jimp');

async function processLogos() {
  try {
    const image1 = await Jimp.read('public/logo.png'); // Read the original JPG
    const image2 = await Jimp.read('public/logo.png'); 

    // Create transparent version with black text
    image1.scan((x, y, idx) => {
      const r = image1.bitmap.data[idx];
      const g = image1.bitmap.data[idx + 1];
      const b = image1.bitmap.data[idx + 2];
      
      // If it's very close to white (JPEG artifacts), just make it fully transparent
      if (r > 240 && g > 240 && b > 240) {
        image1.bitmap.data[idx + 3] = 0;
      } else {
        // Calculate alpha based on how dark the pixel is (assuming white bg)
        // White (255) = 0 alpha. Black (0) = 255 alpha.
        const minColor = Math.min(r, g, b);
        let a = (255 - minColor) / 255;
        
        // Recover original colors
        const r0 = Math.max(0, Math.min(255, (r - 255 * (1 - a)) / a));
        const g0 = Math.max(0, Math.min(255, (g - 255 * (1 - a)) / a));
        const b0 = Math.max(0, Math.min(255, (b - 255 * (1 - a)) / a));
        
        image1.bitmap.data[idx] = Math.round(r0);
        image1.bitmap.data[idx + 1] = Math.round(g0);
        image1.bitmap.data[idx + 2] = Math.round(b0);
        image1.bitmap.data[idx + 3] = Math.round(a * 255);
      }
    });
    
    await image1.write('public/logo_transparent.png');
    console.log('Successfully created logo_transparent.png!');

    // Create transparent version with WHITE text for the footer
    image2.scan((x, y, idx) => {
      const r = image2.bitmap.data[idx];
      const g = image2.bitmap.data[idx + 1];
      const b = image2.bitmap.data[idx + 2];
      
      if (r > 240 && g > 240 && b > 240) {
        image2.bitmap.data[idx + 3] = 0;
      } else {
        const minColor = Math.min(r, g, b);
        let a = (255 - minColor) / 255;
        
        let r0 = Math.max(0, Math.min(255, (r - 255 * (1 - a)) / a));
        let g0 = Math.max(0, Math.min(255, (g - 255 * (1 - a)) / a));
        let b0 = Math.max(0, Math.min(255, (b - 255 * (1 - a)) / a));
        
        // Is it the black text? Black/gray text will have low values for all RGB.
        // The green icon will have high Green and low Red/Blue.
        // E.g. Green might be (50, 150, 50). Black text is (30, 30, 30).
        if (r0 < 80 && g0 < 80 && b0 < 80) {
          // It's the text! Turn it white.
          r0 = 255;
          g0 = 255;
          b0 = 255;
        }
        
        image2.bitmap.data[idx] = Math.round(r0);
        image2.bitmap.data[idx + 1] = Math.round(g0);
        image2.bitmap.data[idx + 2] = Math.round(b0);
        image2.bitmap.data[idx + 3] = Math.round(a * 255);
      }
    });
    
    await image2.write('public/logo_white_text.png');
    console.log('Successfully created logo_white_text.png!');

  } catch (err) {
    console.error('Error processing images:', err);
  }
}

processLogos();
