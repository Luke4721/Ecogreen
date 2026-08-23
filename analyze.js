const { Jimp } = require('jimp');

async function analyze() {
  const img = await Jimp.read('public/logo.png');
  let greens = [];
  let darks = [];
  img.scan((x, y, idx) => {
    const r = img.bitmap.data[idx];
    const g = img.bitmap.data[idx + 1];
    const b = img.bitmap.data[idx + 2];
    if (g > r + 30 && g > b + 30) {
      greens.push([r, g, b]);
    } else if (r < 100 && g < 100 && b < 100) {
      darks.push([r, g, b]);
    }
  });
  console.log('Greens:', greens.length);
  console.log('Darks:', darks.length);
}
analyze();
