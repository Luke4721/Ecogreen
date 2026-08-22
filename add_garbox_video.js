const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Replace the fallback image in hero with the actual video from the Garbox theme
const oldHeroBgRegex = /<div className="absolute inset-0 z-0 bg-slate-900">[\s\S]*?<img src="https:\/\/images\.unsplash\.com\/photo-1501854140801-50d01698950b\?auto=format&fit=crop&w=2500&q=80" alt="Sustainability Background" className="w-full h-full object-cover" \/>/g;

const newHeroBg = `<div className="absolute inset-0 z-0 bg-slate-900">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/06/video_home3.mp4" type="video/mp4" />
          </video>`;

code = code.replace(oldHeroBgRegex, newHeroBg);

fs.writeFileSync('app/page.tsx', code);
console.log('Added video from Garbox theme');
