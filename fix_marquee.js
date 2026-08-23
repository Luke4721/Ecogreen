const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

const oldMarqueeStart = `function ClientsMarquee() {`;
const oldMarqueeEnd = `    </section>
  );
}`;

const startIndex = code.indexOf(oldMarqueeStart);
const endIndex = code.indexOf(oldMarqueeEnd) + oldMarqueeEnd.length;

if (startIndex > -1 && endIndex > -1) {
    const newMarquee = `function ClientsMarquee() {
  const clientLogos = [
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
  ];

  const renderLogos = () => [...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
    <div key={idx} className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-6 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
      <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain" />
    </div>
  ));

  return (
    <section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden relative border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">• Trusted By</p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
          INDUSTRY LEADERS
        </h2>
      </div>

      {/* INFINITE SEAMLESS LOOP MARQUEE */}
      <div className="relative flex overflow-hidden group w-full">
        {/* We duplicated the array 3 times (30 items total). 
            Wait, if we translate -50%, it needs to be an EVEN multiple. Let's do [...clientLogos, ...clientLogos] which is 20 items. 
            Or just duplicate it enough times so it overflows the screen completely, and translate by the exact width of half the container. 
            Actually, the best way is flex w-max and translate -50%. */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-4 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
              <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

    code = code.substring(0, startIndex) + newMarquee + code.substring(endIndex);
    fs.writeFileSync('app/page.tsx', code);
    console.log('Fixed ClientsMarquee!');
} else {
    console.log('Could not find ClientsMarquee bounds');
}
