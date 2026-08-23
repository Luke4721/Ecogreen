const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Imports
if (!code.includes('ShaderImage')) {
    code = code.replace(
        "import LiveMagneticNumber from '@/components/LiveMagneticNumber';",
        "import LiveMagneticNumber from '@/components/LiveMagneticNumber';\nimport ShaderImage from '@/components/ShaderImage';\nimport LiveDataBackground from '@/components/LiveDataBackground';"
    );
}

// 2. Core Solutions img to ShaderImage
const oldImg = /<img src=\{srv\.img\} alt=\{srv\.title\} className="[^"]*" \/>/g;
const newImg = `<ShaderImage src={srv.img} />`;
code = code.replace(oldImg, newImg);

// 3. Numbers section theme shift
const oldNumbersSectionRegex = /<section className="py-32 bg-slate-900 relative overflow-hidden" style=\{\{ perspective: 2000 \}\}>[\s\S]*?<div className="container mx-auto px-6 relative z-10">/;

const newNumbersSection = `<section className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden" style={{ perspective: 2000 }}>
        <LiveDataBackground />
        <div className="container mx-auto px-6 relative z-10">`;

if (code.match(oldNumbersSectionRegex)) {
    code = code.replace(oldNumbersSectionRegex, newNumbersSection);
}

fs.writeFileSync('app/page.tsx', code);
console.log("Updated page.tsx for Phase 3!");
