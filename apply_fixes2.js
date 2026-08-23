const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Replace Numbers Section
const oldNumbersRegex = /\{\/\*\s*NUMBERS\/IMPACT - CRAZY BIG\s*\*\/\}[\s\S]*?<section className="py-32 bg-green-600 relative overflow-hidden">[\s\S]*?<\/section>/;

const newNumbers = `{/* NUMBERS/IMPACT - CRAZY BIG (Magnetic Live Ticker) */}
      <section className="py-32 bg-slate-900 relative overflow-hidden" style={{ perspective: 2000 }}>
        {/* Animated Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <LiveMagneticNumber baseValue={60142.00} label="MT E-Waste Recycled" suffix="+" />
            <LiveMagneticNumber baseValue={728.50} label="tCO2e Emissions Saved" suffix="+" />
            <LiveMagneticNumber baseValue={205419.00} label="MT Paper Recycled" suffix="+" />
          </div>
        </div>
      </section>`;

if (code.match(oldNumbersRegex)) {
    code = code.replace(oldNumbersRegex, newNumbers);
    console.log("Replaced Numbers!");
} else {
    console.log("Could NOT find Numbers section to replace!");
}

// 2. Add continuous floating animation to the 4 generated images
// The images are currently:
// <img src={srv.img} alt={srv.title} className="w-full h-full object-contain mix-blend-multiply" />
// We need to add animate-float.
const oldImgTag = `className="w-full h-full object-contain mix-blend-multiply" />`;
const newImgTag = `className="w-full h-full object-contain mix-blend-multiply animate-float" />`;

if (code.includes(oldImgTag)) {
    code = code.replace(oldImgTag, newImgTag);
    console.log("Added animate-float to Core Solutions images!");
} else {
    console.log("Could not find image tag to add animate-float!");
}

fs.writeFileSync('app/page.tsx', code);
