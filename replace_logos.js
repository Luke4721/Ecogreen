const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const oldMarqueeStart = "const clientLogos = [";
const oldMarqueeEnd = "  return (";

const startIndex = code.indexOf(oldMarqueeStart);
const endIndex = code.indexOf(oldMarqueeEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const newMarqueeCode = `const clientLogos = [
    { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Oppo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/OPPO_Logo.svg' },
    { name: 'Vivo', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_mobile_logo.png' },
    { name: 'Whirlpool', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Whirlpool_Corporation_Logo.svg' },
    { name: 'HCL', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/HCL_Technologies_logo.svg' },
    { name: 'ITC Limited', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg' },
    { name: 'Haier', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Haier_logo.svg' },
    { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Mercedes-Benz', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
    { name: 'Paytm', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Paytm_logo.svg' },
  ];

  const renderLogos = () => clientLogos.map((client, idx) => (
    <div key={idx} className="flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-6 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
      <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain" />
    </div>
  ));

`;
  
  code = code.substring(0, startIndex) + newMarqueeCode + code.substring(endIndex);
  fs.writeFileSync('app/page.tsx', code);
  console.log('Successfully replaced logos!');
} else {
  console.log('Could not find indices!');
}
