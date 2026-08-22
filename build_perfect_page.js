const fs = require('fs');

function build() {
  // 1. Start with original_page.tsx
  let code = fs.readFileSync('original_page.tsx', 'utf16le');
  
  // Convert to utf8
  code = code.replace(/^\uFEFF/, '');
  
  // 2. Add "use client" if missing
  if (!code.includes('"use client"')) {
    code = '"use client";\n' + code;
  }
  
  // 3. Import CountUp
  if (!code.includes('CountUp')) {
    code = code.replace("import { Phone", "import CountUp from 'react-countup';\nimport { Phone");
  }

  // 4. Update the Impact Cards (from apply_updates.js)
  const impactStart = code.indexOf('{/* IMPACT CARDS */}');
  const impactEnd = code.indexOf('</section>', impactStart) + 10;
  if (impactStart !== -1) {
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
    code = code.substring(0, impactStart) + newImpactSection + code.substring(impactEnd);
  }

  // 5. Update the Client Strip with HIGH-RES LOGOS
  const clientStripStart = code.indexOf('{/* CLIENTS STRIP */}');
  const clientStripEnd = code.indexOf('</section>', clientStripStart) + 10;
  
  const clientLogos = [
    { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Oppo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/OPPO_Logo.svg' },
    { name: 'Vivo', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_mobile_logo.png' },
    { name: 'Whirlpool', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Whirlpool_Corporation_Logo.svg' },
    { name: 'HCL', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg' },
    { name: 'ITC Limited', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg' },
    { name: 'Haier', url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Haier_logo.svg' },
    { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Mercedes-Benz', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
    { name: 'Paytm', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg' },
  ];
  
  const clientLogosJSX = clientLogos.map(client => `
                <div className="flex items-center justify-center gap-3 bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-100 min-w-[240px] mx-3 h-20">
                  <img src="${client.url}" alt="${client.name}" className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>`
  ).join('');

  if (clientStripStart !== -1) {
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
    code = code.substring(0, clientStripStart) + newClientStripSection + code.substring(clientStripEnd);
  }

  // 6. Fix Hero Section Video and Padding
  // Replace the image with the Garbox video
  const heroImageRegex = /<div[\s\S]*?className="absolute inset-0 opacity-40 bg-cover bg-center"[\s\S]*?style=\{\{ backgroundImage: "url\('https:\/\/goecogreen\.in\/wp-content\/uploads\/2026\/05\/eco_green_home_cover_img\.webp'\)" \}\}[\s\S]*?><\/div>/;
  const newHeroBg = `<div className="absolute inset-0 z-0 bg-slate-900">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/06/video_home3.mp4" type="video/mp4" />
          </video>
        </div>`;
  code = code.replace(heroImageRegex, newHeroBg);

  // Fix Hero overlap by adding pt-24 to the container
  code = code.replace('<div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">', '<div className="container mx-auto px-4 relative z-10 text-center max-w-4xl pt-24">');

  // Fix logo src
  code = code.replace(/<img src="http:\/\/goecogreen.in\/[^"]+" alt="EcoGreen Logo"/g, '<img src="/logo.png" alt="EcoGreen Logo"');

  // Also replace footer logo src if any
  code = code.replace(/<span className="font-bold text-2xl text-white tracking-tight">Eco Green<\/span>/g, '<img src="/logo.png" alt="Eco Green" className="h-10 w-auto object-contain" />');
  
  // Make sure nav is fixed properly
  // <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
  code = code.replace(
    '<header className="fixed w-full top-0 z-50 bg-white shadow-sm">',
    '<header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">'
  );

  fs.writeFileSync('app/page.tsx', code);
  console.log('Restored the PERFECT layout!');
}

build();
