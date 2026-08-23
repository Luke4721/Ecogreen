const { Jimp } = require('jimp');

async function findBoundingBox() {
  const img = await Jimp.read('public/logo.png');
  let maxGreenX = 0;
  img.scan((x, y, idx) => {
    const r = img.bitmap.data[idx];
    const g = img.bitmap.data[idx + 1];
    const b = img.bitmap.data[idx + 2];
    if (g > r + 30 && g > b + 30) {
      if (x > maxGreenX) maxGreenX = x;
    }
  });
  console.log('Max Green X:', maxGreenX);
}
findBoundingBox();
