const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

const clientLogosRegex = /const clientLogos = \[[\s\S]*?\];/;
const newClientLogos = `const clientLogos = [
    { name: 'Samsung', url: 'https://logo.clearbit.com/samsung.com' },
    { name: 'Oppo', url: 'https://logo.clearbit.com/oppo.com' },
    { name: 'Vivo', url: 'https://logo.clearbit.com/vivo.com' },
    { name: 'Whirlpool', url: 'https://logo.clearbit.com/whirlpool.com' },
    { name: 'HCL', url: 'https://logo.clearbit.com/hcltech.com' },
    { name: 'ITC Limited', url: 'https://logo.clearbit.com/itcportal.com' },
    { name: 'Haier', url: 'https://logo.clearbit.com/haier.com' },
    { name: 'Wipro', url: 'https://logo.clearbit.com/wipro.com' },
    { name: 'Mercedes-Benz', url: 'https://logo.clearbit.com/mercedes-benz.com' },
    { name: 'Paytm', url: 'https://logo.clearbit.com/paytm.com' },
  ];`;

if (code.match(clientLogosRegex)) {
    code = code.replace(clientLogosRegex, newClientLogos);
    console.log("Logos replaced!");
}

// Safely replace the marquee return block without matching Home()
const targetStr = `<div className="relative flex overflow-x-hidden group w-full py-10">
        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {renderLogos()}
        </div>
        <div className="absolute top-10 animate-marquee2 whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {renderLogos()}
        </div>
      </div>`;

const newStr = `<div className="relative flex overflow-hidden group w-full py-10">
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {[...clientLogos, ...clientLogos].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-4 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
              <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>`;

if (code.includes(targetStr)) {
    code = code.replace(targetStr, newStr);
    console.log("Marquee loop fixed!");
} else {
    console.log("Could not find marquee target string!");
}

fs.writeFileSync('app/page.tsx', code);
