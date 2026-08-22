const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Hero Image
code = code.replace(/<img src="https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+\?auto=format&fit=crop&w=2500&q=80" alt="Sustainability Background"/, '<img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2500&q=80" alt="Sustainability Background"');

// 2. About 1 Image (currently 1542601906990-b4d3fb778b09, let's keep it or change to forest, let's change to forest to avoid repeats)
code = code.replace(/<img src="https:\/\/images\.unsplash\.com\/photo-1542601906990-b4d3fb778b09\?auto=format&fit=crop&w=800&q=80" alt="Eco Plant"/, '<img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80" alt="Eco Plant"');

// 3. Carousel 3 (currently 1473341304170-971dccb5ac1e, change to 1500382017468-9049fed747ef)
code = code.replace(/1473341304170-971dccb5ac1e/g, '1500382017468-9049fed747ef');

// 4. Impact Images
const impactRegex = /const images = \[\s*\{ pct: 39, img: "[^"]+" \},\s*\{ pct: 45, img: "[^"]+" \},\s*\{ pct: 100, img: "[^"]+" \}\s*\];/;
const newImpacts = `const images = [
    { pct: 39, img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80" },
    { pct: 45, img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&q=80" },
    { pct: 100, img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2000&q=80" }
  ];`;
code = code.replace(impactRegex, newImpacts);

fs.writeFileSync('app/page.tsx', code);
console.log('Images fixed');
