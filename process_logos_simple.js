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
      
      const maxVal = Math.max(r, g, b);
      let alpha = 255;
      
      if (maxVal > 245) {
        alpha = 0;
      } else if (maxVal > 180) {
        // Smooth transition from opaque to transparent for anti-aliased edges
        alpha = 255 - ((maxVal - 180) * (255 / 65));
      }
      
      // Keep original colors, just set alpha
      image1.bitmap.data[idx + 3] = Math.max(0, Math.min(255, alpha));
    });
    
    await image1.write('public/logo_transparent.png');
    console.log('Successfully created logo_transparent.png!');

    // Create transparent version with WHITE text for the footer
    image2.scan((x, y, idx) => {
      const r = image2.bitmap.data[idx];
      const g = image2.bitmap.data[idx + 1];
      const b = image2.bitmap.data[idx + 2];
      
      const maxVal = Math.max(r, g, b);
      let alpha = 255;
      
      if (maxVal > 245) {
        alpha = 0;
      } else if (maxVal > 180) {
        alpha = 255 - ((maxVal - 180) * (255 / 65));
      }
      
      // Now, turn black text to white, but keep green icon green
      // The green icon has high Green and lower Red/Blue.
      // E.g. Green = 150, Red = 50. So Green - Red > 20.
      // Black text has R, G, B very close to each other.
      // If it's grayscale (max - min is small) and it's dark, it's text.
      const minVal = Math.min(r, g, b);
      const isGrayscale = (maxVal - minVal) < 30;
      
      if (isGrayscale && maxVal < 150) {
        // It's the black text. Turn it white.
        image2.bitmap.data[idx] = 255;
        image2.bitmap.data[idx + 1] = 255;
        image2.bitmap.data[idx + 2] = 255;
      }
      
      image2.bitmap.data[idx + 3] = Math.max(0, Math.min(255, alpha));
    });
    
    await image2.write('public/logo_white_text.png');
    console.log('Successfully created logo_white_text.png!');

  } catch (err) {
    console.error('Error processing images:', err);
  }
}

processLogos();
