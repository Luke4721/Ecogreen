const { Jimp } = require('jimp');

async function processPerfectLogo() {
  const img1 = await Jimp.read('public/logo.png'); // Header logo (black text)
  const img2 = await Jimp.read('public/logo.png'); // Footer logo (white text)

  const w = img1.bitmap.width;
  const h = img1.bitmap.height;

  // 1. Flood fill to find the OUTER white background
  const isOuterBg = new Uint8Array(w * h);
  const queue = [];
  
  function pushIfBg(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const idx = (y * w + x) * 4;
    if (isOuterBg[y * w + x]) return; // already visited
    
    const r = img1.bitmap.data[idx];
    const g = img1.bitmap.data[idx+1];
    const b = img1.bitmap.data[idx+2];
    
    // If it's very light (JPEG artifact white)
    if (r > 200 && g > 200 && b > 200) {
      isOuterBg[y * w + x] = 1;
      queue.push({x, y});
    }
  }

  // Start from all 4 edges
  for (let x = 0; x < w; x++) { pushIfBg(x, 0); pushIfBg(x, h-1); }
  for (let y = 0; y < h; y++) { pushIfBg(0, y); pushIfBg(w-1, y); }

  let head = 0;
  while(head < queue.length) {
    const {x, y} = queue[head++];
    pushIfBg(x+1, y);
    pushIfBg(x-1, y);
    pushIfBg(x, y+1);
    pushIfBg(x, y-1);
  }

  // 2. Process pixels
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = img1.bitmap.data[idx];
      const g = img1.bitmap.data[idx+1];
      const b = img1.bitmap.data[idx+2];
      
      const brightness = (r + g + b) / 3;
      
      if (isOuterBg[y * w + x]) {
        // It's the outer background!
        // We want a smooth alpha transition for anti-aliasing.
        // If brightness is 255, alpha is 0. If brightness is 200, alpha is higher.
        // Actually, just set alpha to 255 - brightness for the anti-aliased edge!
        // But we want it to be perfectly transparent if it's > 240.
        let alpha = 255 - brightness;
        if (brightness > 245) alpha = 0;
        else alpha = Math.min(255, Math.max(0, alpha * 2)); // boost opacity of edge
        
        // Header logo
        img1.bitmap.data[idx+3] = alpha;
        
        // Footer logo
        img2.bitmap.data[idx+3] = alpha;
        
      } else {
        // It's INSIDE the logo (either the green box, the white text inside it, or the black text)
        // Leave alpha = 255
        img1.bitmap.data[idx+3] = 255;
        img2.bitmap.data[idx+3] = 255;
        
        // For the footer logo, if x > 330, it's the text. We want it WHITE!
        if (x > 330) {
          // It's the text area. 
          // If it's dark, make it white.
          // Wait, if it's anti-aliased text, it will be gray.
          // We want to invert it! White becomes black (but there is no white background here, because it's outerBg)
          // Wait, outerBg caught all the white background around the text!
          // So any pixel here is the text itself!
          // We can just make it pure white, and set its alpha based on how dark it was!
          // This gives perfect anti-aliased white text!
          const alpha = 255 - brightness; // Darker pixel -> more opaque white
          img2.bitmap.data[idx] = 255;
          img2.bitmap.data[idx+1] = 255;
          img2.bitmap.data[idx+2] = 255;
          img2.bitmap.data[idx+3] = alpha;
          
          // Also clean up the header logo text (make it pure black for crispness)
          img1.bitmap.data[idx] = 0;
          img1.bitmap.data[idx+1] = 0;
          img1.bitmap.data[idx+2] = 0;
          img1.bitmap.data[idx+3] = alpha;
        }
      }
    }
  }

  await img1.write('public/logo_transparent.png');
  await img2.write('public/logo_white_text.png');
  console.log('Successfully created perfect logos!');
}

processPerfectLogo();
