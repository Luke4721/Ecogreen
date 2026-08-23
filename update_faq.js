const fs = require('fs');

const code = fs.readFileSync('app/page.tsx', 'utf8');

const targetStr = `<div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-green-50">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image11.png" alt="FAQ" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-green-600 p-10 rounded-[2rem] shadow-2xl border-8 border-white dark:border-[#0a0a0a] hidden md:block">`;

const replaceStr = `<div className="relative order-2 lg:order-1">
              {/* Animated Blob Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-green-200 to-green-100 dark:from-green-900 dark:to-green-800 rounded-[4rem] mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-60 animate-blob"></div>
              
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-green-50/50 dark:bg-green-900/20 relative z-10">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image11.png" alt="FAQ" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#00a93c] p-8 rounded-3xl shadow-2xl border-4 border-white dark:border-[#0a0a0a] hidden md:block z-20">`;

if (code.includes(targetStr)) {
    const newCode = code.replace(targetStr, replaceStr);
    fs.writeFileSync('app/page.tsx', newCode);
    console.log('Successfully updated FAQ image background');
} else {
    console.log('Failed to find FAQ image block');
}
