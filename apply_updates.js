const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

if (!code.includes('"use client"')) {
  code = '"use client";\n' + code;
}
if (!code.includes('CountUp')) {
  code = code.replace('import { Monitor', "import CountUp from 'react-countup';\nimport { Monitor");
}

const impactStart = code.indexOf('{/* IMPACT CARDS - UPDATED TO MATCH TARGET DESIGN */}');
const impactEnd = code.indexOf('</section>', impactStart) + 10;
const impactSection = code.substring(impactStart, impactEnd);

const newImpactSection = `        {/* IMPACT CARDS - UPDATED TO MATCH TARGET DESIGN */}
        <section className="py-20 bg-slate-800 relative z-20 shadow-lg border-b border-slate-700">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">OUR IMPACT</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
              {[
                { title: 'E-Waste Recycled', val: 60000, unit: 'MT' },
                { title: 'Emissions Saved\\n(2023 onwards)', val: 700, unit: 'tCO2e' },
                { title: 'Paper Waste Recycled', val: 200000, unit: 'MT' },
                { title: 'Plastic Waste Recycled', val: 70000, unit: 'MT' },
              ].map((impact, idx) => (
                <div key={idx} className="bg-slate-700/50 p-6 md:p-8 rounded-xl flex flex-col items-center justify-center min-w-[200px] flex-1 text-center border border-slate-600/50 hover:border-green-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-green-500/20 group">
                  <div className="flex items-end justify-center mb-2">
                    <h3 className="font-bold text-4xl text-white group-hover:text-green-50 transition-colors">
                      <CountUp end={impact.val} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
                    </h3>
                    <span className="text-green-400 font-bold ml-1 text-lg mb-1">{impact.unit}</span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium whitespace-pre-line group-hover:text-white transition-colors">{impact.title}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 text-sm text-gray-400 font-medium tracking-wide">
              Redefining Green Metals: Iron • Copper • Lithium • Cobalt • Aluminum
            </div>
          </div>
        </section>`;

code = code.replace(impactSection, newImpactSection);

const clientStripStart = code.indexOf('{/* CLIENTS STRIP */}');
const clientStripEnd = code.indexOf('</section>', clientStripStart) + 10;
const clientStripSection = code.substring(clientStripStart, clientStripEnd);

const clientLogos = [
  { name: 'Samsung', domain: 'samsung.com' },
  { name: 'Oppo', domain: 'oppo.com' },
  { name: 'Vivo', domain: 'vivo.com' },
  { name: 'Whirlpool', domain: 'whirlpool.com' },
  { name: 'HCL', domain: 'hcltech.com' },
  { name: 'ITC Limited', domain: 'itcportal.com' },
  { name: 'Haier', domain: 'haier.com' },
  { name: 'Wipro', domain: 'wipro.com' },
  { name: 'Mercedes-Benz', domain: 'mercedes-benz.com' },
  { name: 'Paytm', domain: 'paytm.com' },
];

const clientLogosJSX = clientLogos.map(client => `
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-100 min-w-[200px] mx-3">
                  <img src="https://logo.clearbit.com/${client.domain}" alt="${client.name}" className="h-8 w-8 object-contain" />
                  <span className="font-bold text-slate-800">${client.name}</span>
                </div>`
).join('');

const newClientStripSection = `        {/* INFINITE CLIENT LOGOS SLIDER */}
        <section className="py-20 bg-slate-900 border-t border-slate-800 overflow-hidden relative">
          <div className="container mx-auto px-4 text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Partnering with global brands to ensure secure, compliant, and zero-waste IT asset disposition and green metal recovery.
            </p>
          </div>
          
          <div className="relative flex overflow-x-hidden group w-full py-4">
            <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
              ${clientLogosJSX}
            </div>
            <div className="absolute top-4 animate-marquee2 whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
              ${clientLogosJSX}
            </div>
          </div>
        </section>`;

code = code.replace(clientStripSection, newClientStripSection);

fs.writeFileSync('app/page.tsx', code);
console.log('Update complete.');
