const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Fix the Header background
const oldHeaderRegex = /<header className=\{\`fixed w-full top-0 z-50 transition-all duration-500 \$\{scrolled \? 'py-4 shadow-xl' : 'py-6'\} bg-white\/80 dark:bg-black\/20 backdrop-blur-xl border-b border-white\/20 dark:border-white\/10\`\}>/;

const newHeader = `<header className={\`fixed w-full top-0 z-50 transition-all duration-500 \${scrolled ? 'py-4 shadow-xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800' : 'py-6 bg-transparent border-transparent'}\`}>`;

if (code.match(oldHeaderRegex)) {
    code = code.replace(oldHeaderRegex, newHeader);
    console.log("Header fixed!");
} else {
    console.log("Could not find header regex!");
}

// 2. Fix Woman Image cutout container
const oldWomanContainer = `<div className="relative z-10 rounded-[3rem] overflow-hidden animate-float">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image13.webp" alt="Woman Recycling" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              </div>`;

const newWomanContainer = `<div className="relative z-10 animate-float drop-shadow-2xl">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image13.webp" alt="Woman Recycling" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
              </div>`;

if (code.includes(oldWomanContainer)) {
    code = code.replace(oldWomanContainer, newWomanContainer);
    console.log("Woman container fixed!");
} else {
    console.log("Could not find woman container!");
}


// 3. Fix FAQ Guy cutout container
const oldFaqContainer = `<div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-green-50/50 dark:bg-green-900/20 relative z-10 animate-float">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image11.png" alt="FAQ" className="w-full h-full object-cover" />
              </div>`;

const newFaqContainer = `<div className="relative z-10 animate-float drop-shadow-2xl">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image11.png" alt="FAQ" className="w-full h-auto object-contain" />
              </div>`;

if (code.includes(oldFaqContainer)) {
    code = code.replace(oldFaqContainer, newFaqContainer);
    console.log("FAQ container fixed!");
} else {
    console.log("Could not find FAQ container!");
}

fs.writeFileSync('app/page.tsx', code);
