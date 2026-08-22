const { Jimp } = require('jimp');

async function processLogo() {
  try {
    const image = await Jimp.read('http://goecogreen.in/wp-content/uploads/2024/10/cropped-go_eco_green_logo-1-e1730535315217-1024x232.jpg');
    
    // Remove white background
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If pixel is near white
      if (red > 220 && green > 220 && blue > 220) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0
      }
    });

    image.write('public/logo.png');
    console.log('Logo successfully processed and saved as public/logo.png');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processLogo();
