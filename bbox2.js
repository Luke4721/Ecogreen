const { Jimp } = require('jimp');

async function findBoundingBox() {
  const img = await Jimp.read('public/logo.png');
  let minGreenTextX = 10000;
  let maxGreenTextX = 0;
  img.scan((x, y, idx) => {
    if (x > 330) {
      const r = img.bitmap.data[idx];
      const g = img.bitmap.data[idx + 1];
      const b = img.bitmap.data[idx + 2];
      if (g > r + 20 && g > b + 20 && g < 200) {
        if (x < minGreenTextX) minGreenTextX = x;
        if (x > maxGreenTextX) maxGreenTextX = x;
      }
    }
  });
  console.log('Green element in text area (X min-max):', minGreenTextX, '-', maxGreenTextX);
}
findBoundingBox();
