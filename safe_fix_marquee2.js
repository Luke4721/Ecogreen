const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

const regex = /<div className="relative flex overflow-x-hidden group w-full py-10">[\s\S]*?<\/div>\s*<\/div>/;

const newStr = `<div className="relative flex overflow-hidden group w-full py-10">
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {[...clientLogos, ...clientLogos].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-4 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
              <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>`;

if (code.match(regex)) {
    code = code.replace(regex, newStr);
    console.log("Marquee loop fixed!");
} else {
    console.log("Could not find marquee target string!");
}

fs.writeFileSync('app/page.tsx', code);
