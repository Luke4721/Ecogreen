const fs = require('fs');

const code = fs.readFileSync('app/page.tsx', 'utf8');

const newAboutSection = `
      {/* GARBOX FEATURES REPLICA */}
      <section id="about" className="py-32 bg-[#f4fbf4] dark:bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">• Our Features</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.2] tracking-tight max-w-3xl mx-auto">
              Transforming Everyday Waste Challenges into Effective Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Eco-Friendly Approach', desc: 'Focus on recycling and sustainable disposal to reduce environmental impact', icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' },
                { title: 'Timely Service', desc: 'Consistent and punctual waste collection you can depend on every time of disposal', icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
                { title: 'Quality Results', desc: 'Most Flexible services tailored to residential, commercial, household & industrial needs', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3' },
                { title: 'Awarded Cleaners', desc: 'Our well trained cleaners use proper techniques for longer-lasting clean, which makes us trustworthy', icon: 'M12 15l-2 5l9-5l-9-5l2 5z' }
              ].map((card, i) => (
                <div key={i} className="bg-white dark:bg-slate-950 p-8 rounded-[1.5rem] shadow-xl shadow-green-900/5 dark:shadow-black/50 border border-transparent dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#3b9347] flex items-center justify-center text-white mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={card.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Image with Animated Background */}
            <div className="relative">
              {/* Animated Blob Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-green-200 to-green-100 dark:from-green-900 dark:to-green-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-yellow-100 to-green-200 dark:from-yellow-900/30 dark:to-green-800/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="relative z-10 rounded-[3rem] overflow-hidden">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image13.webp" alt="Woman Recycling" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
`;

const startIndex = code.indexOf('{/* ABOUT US / FEATURES - CRAZY SCROLL ANIMATIONS */}');
const endIndex = code.indexOf('{/* CORE SERVICES - GARBOX CARD STYLE */}');

if (startIndex > -1 && endIndex > -1) {
    const newCode = code.substring(0, startIndex) + newAboutSection + '\n      ' + code.substring(endIndex);
    fs.writeFileSync('app/page.tsx', newCode);
    console.log('Replaced About Us section successfully');
} else {
    console.log('Could not find About Us section bounds');
}
