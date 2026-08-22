const { Jimp } = require('jimp');

async function restoreLogo() {
  try {
    const image = await Jimp.read('http://goecogreen.in/wp-content/uploads/2024/10/cropped-go_eco_green_logo-1-e1730535315217-1024x232.jpg');
    image.write('public/logo.png');
    console.log('Restored original logo as PNG');
  } catch (err) {
    console.error('Error:', err);
  }
}

restoreLogo();
