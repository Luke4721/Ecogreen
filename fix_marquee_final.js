const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Replace clientLogos array using regex to avoid spacing issues
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

// 2. Replace the entire return block of ClientsMarquee
const returnBlockRegex = /return \([\s\S]*?<section className="py-32 bg-gray-50 dark:bg-\[\#0a0a0a\] overflow-hidden relative border-t border-slate-200 dark:border-slate-900">[\s\S]*?<\/section>\s*\);\s*\}/;

const newReturnBlock = `return (
    <section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden relative border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">• Trusted By</motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">INDUSTRY LEADERS</motion.h2>
      </div>
      
      <div className="relative flex overflow-hidden group w-full py-10">
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-4 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
              <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

if (code.match(returnBlockRegex)) {
    code = code.replace(returnBlockRegex, newReturnBlock);
    console.log("Marquee loop replaced!");
} else {
    console.log("Could not find marquee return block!");
}

fs.writeFileSync('app/page.tsx', code);
