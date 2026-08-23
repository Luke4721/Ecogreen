const fs = require('fs');

const code = fs.readFileSync('app/page.tsx', 'utf8');

const newSections = `
      {/* ----------------- WORK PROCESS ----------------- */}
      <section className="py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden relative border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20" style={{opacity: 1}}>
            <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Our Work Process</p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              EFFICIENT PROCESSES BEHIND <br/> OUR RELIABLE SOLUTIONS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-100 via-green-500 to-green-100 dark:from-green-900 dark:via-green-500 dark:to-green-900 z-0"></div>
            
            {[
              { num: '01', title: 'Collection', desc: 'Secure and scheduled pickup of waste from your premises using our specialized fleet.', icon: 'Truck' },
              { num: '02', title: 'Sorting', desc: 'Advanced AI-driven sorting to segregate recyclable materials with maximum precision.', icon: 'Layers' },
              { num: '03', title: 'Processing', desc: 'Eco-friendly processing facilities that transform waste back into raw usable materials.', icon: 'Settings' },
              { num: '04', title: 'Distribution', desc: 'Safe disposal of toxic elements and redistribution of recovered green materials.', icon: 'Recycle' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-center relative mb-8 group-hover:border-green-500 transition-colors duration-500">
                  <div className="absolute inset-0 bg-green-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out opacity-10"></div>
                  <span className="absolute -top-4 -right-2 text-6xl font-black text-slate-100 dark:text-slate-800 group-hover:text-green-100 dark:group-hover:text-green-900 transition-colors duration-500 -z-10 select-none">
                    {step.num}
                  </span>
                  <div className="text-green-600">
                    {i === 0 && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>}
                    {i === 1 && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>}
                    {i === 2 && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>}
                    {i === 3 && <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- OUR PROJECTS ----------------- */}
      <section className="py-32 bg-gray-50 dark:bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Our Projects</p>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                SUCCESS STORIES THAT <br/> DEMONSTRATE OUR IMPACT
              </h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 font-bold uppercase tracking-wider text-green-600 hover:text-green-700 transition-colors">
              Explore All Cases <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/04/project1-1256x620.webp', title: 'Optimizing Industrial waste for Safer Operations', cat: 'Collection System' },
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/04/project2-1256x620.webp', title: 'Zenith Corporate Campus Zero-Waste Transition', cat: 'E-Waste Recovery' },
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/04/project3-1256x620.webp', title: 'Eco-Friendly Tech Parks Plastic Recycling', cat: 'Plastic Recycling' }
            ].map((proj, i) => (
              <div key={i} className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[1.5rem] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <p className="text-green-400 font-bold uppercase tracking-widest text-sm mb-3">{proj.cat}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-0 leading-snug pr-8">{proj.title}</h3>
                    <div className="absolute right-6 bottom-8 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- FAQ SECTION ----------------- */}
      <section className="py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-green-50">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image11.png" alt="FAQ" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-green-600 p-10 rounded-[2rem] shadow-2xl border-8 border-white dark:border-[#0a0a0a] hidden md:block">
                <div className="flex items-center gap-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <div>
                    <p className="font-bold text-green-200 text-sm uppercase tracking-wider mb-1">Call for support</p>
                    <p className="text-2xl font-black">+(91) 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Frequently Asked Questions</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-12">
                EVERYTHING YOU NEED TO KNOW ABOUT OUR PROCESS
              </h2>
              
              <div className="space-y-6" style={{contentVisibility: 'auto'}}>
                {[
                  { q: 'How do you ensure safe disposal of hazardous e-waste?', a: 'Our facilities use EPA-certified extraction methods that safely isolate hazardous materials like lead and mercury before they are neutralized and disposed of in certified containment centers.' },
                  { q: 'Do you provide waste collection services for small businesses?', a: 'Yes, we offer tailored collection schedules starting from weekly pickups for small and medium enterprises across all our serviceable regions.' },
                  { q: 'What certifications does EcoGreen hold?', a: 'We hold ISO 14001 for Environmental Management, ISO 45001 for Occupational Health, and are fully compliant with the latest government EPR regulations.' },
                  { q: 'Can I track the environmental impact of my recycled waste?', a: 'Absolutely. All our enterprise partners receive access to a real-time dashboard showing exactly how much CO2 emissions their recycling efforts have offset.' }
                ].map((faq, i) => (
                  <details key={i} className="group border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm overflow-hidden" open={i === 0}>
                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-slate-900 dark:text-white group-open:text-green-600 dark:group-open:text-green-400 transition-colors">
                      <span>{faq.q}</span>
                      <span className="transition group-open:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      </span>
                    </summary>
                    <div className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed p-6 pt-0 animate-fade-in">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- TESTIMONIALS ----------------- */}
      <section className="py-32 bg-gray-50 dark:bg-[#050505] overflow-hidden relative border-t border-slate-200 dark:border-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              WHAT PEOPLE SAY ABOUT US
            </h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 hide-scrollbar" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {[
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/04/author1-91x91.webp', name: 'SARAH JENKINS', pos: 'Operations Manager', quote: 'Garbox has completely transformed how we manage waste in our facility. Their team is punctual, professional, and always ensures everything is handled properly.' },
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/user1-91x91.webp', name: 'MICHAEL CHEN', pos: 'Facility Director', quote: 'The real-time tracking dashboard is a game changer. We finally have transparent data for our ESG reporting, and their pickup fleet is perfectly reliable.' },
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/user2-91x91.webp', name: 'EMILY ROBERTSON', pos: 'Sustainability Lead', quote: 'We audited several recycling partners, but none came close to the rigorous environmental standards and transparent processing that this team provides.' },
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/04/author1-91x91.webp', name: 'DAVID KHOO', pos: 'Corporate VP', quote: 'Seamless integration into our existing logistics flow. They handled our massive e-waste purge during the server upgrade with zero hiccups.' }
            ].map((t, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[400px] snap-center bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 relative">
                <div className="absolute top-10 right-10 text-green-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"></path></svg>
                </div>
                <div className="flex gap-1 mb-6 text-green-500">
                  {[...Array(5)].map((_, i) => <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>)}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-lg mb-10 italic leading-relaxed relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-green-500" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">{t.name}</h4>
                    <p className="text-green-600 font-medium text-sm">{t.pos}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- LATEST NEWS ----------------- */}
      <section className="py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Latest News</p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                SUSTAINABILITY NEWS & <br/> RECYCLING UPDATES
              </h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 font-bold uppercase tracking-wider text-green-600 hover:text-green-700 transition-colors">
              Read All Articles <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/04/post1-969x701.webp', cat: 'Recycling', date: 'Aug 15, 2026', title: 'Why Effective Waste Management is Essential for a Sustainable Future' },
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/04/post2-969x701.webp', cat: 'E-Waste', date: 'Aug 10, 2026', title: 'The Hidden Dangers of E-Waste and How to Dispose of it Properly' },
              { img: 'https://demo.casethemes.net/garbox/wp-content/uploads/2026/04/post3-969x701.webp', cat: 'Corporate', date: 'Aug 02, 2026', title: 'How Our Zero-Waste Infrastructure helps Tech Parks reduce emissions' }
            ].map((post, i) => (
              <div key={i} className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 hover:-translate-y-4 transition-transform duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-6 right-6 bg-green-500 text-white font-bold text-sm tracking-wider uppercase px-4 py-2 rounded-full shadow-lg">
                    {post.date}
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4">{post.cat}</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 leading-snug line-clamp-2 hover:text-green-600 transition-colors cursor-pointer">{post.title}</h3>
                  <a href="#" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    Read Article <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
`;

const lines = code.split('\\n');
const idx = code.indexOf('<section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden relative border-t border-slate-200 dark:border-slate-900">');

if (idx > -1) {
   const newCode = code.slice(0, idx) + newSections + code.slice(idx);
   fs.writeFileSync('app/page.tsx', newCode);
   console.log('Successfully injected new sections!');
} else {
   console.log('Failed to find Trusted By section via exact match. Using Regex.');
   const regex = /<section[^>]*>[^<]*<div[^>]*>[^<]*<p[^>]*>Trusted By<\\/p>/;
   const match = code.match(regex);
   if (match) {
       const sectionStartIndex = code.lastIndexOf('<section', match.index);
       const newCode = code.slice(0, sectionStartIndex) + newSections + code.slice(sectionStartIndex);
       fs.writeFileSync('app/page.tsx', newCode);
       console.log('Successfully injected new sections via regex!');
   } else {
       console.log('Failed completely to find Trusted By section');
   }
}
