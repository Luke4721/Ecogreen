const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Add import for LiveMagneticNumber
if (!code.includes('import LiveMagneticNumber')) {
    code = code.replace(
        "import { motion } from 'framer-motion';",
        "import { motion } from 'framer-motion';\nimport LiveMagneticNumber from '@/components/LiveMagneticNumber';"
    );
}

// 2. Replace CORE SERVICES Array and Card Style
const oldCoreServicesRegex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">[\s\S]*?<\/section>/;
const newCoreServices = `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'E-Waste Management', img: '/services/1.jpg', icon: <MonitorPlay size={32}/>, color: 'from-emerald-400 to-green-600' },
              { title: 'Lithium Battery', img: '/services/2.jpg', icon: <Zap size={32}/>, color: 'from-blue-400 to-indigo-600' },
              { title: 'Plastic Waste', img: '/services/3.jpg', icon: <Droplets size={32}/>, color: 'from-teal-400 to-emerald-600' },
              { title: 'Green Metal Recovery', img: '/services/4.jpg', icon: <Factory size={32}/>, color: 'from-yellow-400 to-amber-600' }
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 150, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, delay: idx * 0.15, duration: 1.5 } }
                }}
                className="group relative h-[450px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl bg-white border border-slate-100"
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                {/* Image layer */}
                <div className="absolute inset-0 p-6 pb-32 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                {/* Content layer (bottom info box) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/80 backdrop-blur-xl border-t border-slate-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className={\`w-14 h-14 rounded-2xl bg-gradient-to-br \${srv.color} text-white flex items-center justify-center mb-4 shadow-lg\`}>
                    {srv.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2">
                    {srv.title}
                  </h3>
                  <div className="w-12 h-1 bg-slate-900 rounded-full transition-all duration-500 group-hover:w-full group-hover:bg-green-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>`;

code = code.replace(oldCoreServicesRegex, newCoreServices);


// 3. Replace Numbers Section
const oldNumbersRegex = /{([^}]*)} NUMBERS\/IMPACT - CRAZY BIG([^}]*)}[\s\S]*?<section className="py-32 bg-green-600 relative overflow-hidden">[\s\S]*?<\/section>/;

const newNumbers = `{/* NUMBERS/IMPACT - CRAZY BIG (Magnetic Live Ticker) */}
      <section className="py-32 bg-slate-900 relative overflow-hidden" style={{ perspective: 2000 }}>
        {/* Animated Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <LiveMagneticNumber baseValue={60142.00} label="MT E-Waste Recycled" suffix="+" />
            <LiveMagneticNumber baseValue={728.50} label="tCO2e Emissions Saved" suffix="+" />
            <LiveMagneticNumber baseValue={205419.00} label="MT Paper Recycled" suffix="+" />
          </div>
        </div>
      </section>`;

code = code.replace(oldNumbersRegex, newNumbers);

fs.writeFileSync('app/page.tsx', code);
console.log("Updated page.tsx!");
