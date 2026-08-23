'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Target, Globe2, Cpu, ChevronRight } from 'lucide-react';

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white">
      {/* Dynamic Header */}
      <header className="fixed w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="inline-flex items-center text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 font-bold uppercase tracking-wider text-sm transition-colors">
            <ArrowLeft className="mr-2" size={18} /> Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
        <motion.div style={{ y: y2 }} className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-green-600 font-black tracking-[0.2em] uppercase mb-6"
            >
              • The EcoGreen Story
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8"
            >
              Engineering a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">Zero Waste</span> Future.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
            >
              Eco Green is an industrial-scale materials recovery pioneer. We transform corporate liability into high-value environmental assets.
            </motion.p>
          </div>
        </div>
      </section>

      <main className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 mb-24 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Target size={200} className="text-slate-900 dark:text-white" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Our Vision</h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  We are more than a recycling facility. We are your strategic partner in sustainability. By deploying advanced sorting infrastructure and precision recovery technologies, we future-proof enterprise supply chains, ensure absolute regulatory compliance, and lead the transition to a global circular economy.
                </p>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Our vision is a zero-waste future driven by continuous innovation, where end-of-life technology fuels the next generation of manufacturing rather than filling landfills.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-16 hover:-translate-y-2 transition-transform duration-500"
            >
              <Globe2 className="text-green-500 mb-8" size={64} />
              <h3 className="text-3xl font-black mb-6">Global Compliance</h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                We strictly adhere to international environmental laws, ISO standards, and data security mandates to ensure that your discarded assets are processed with 100% legal compliance and absolute transparency.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-600 text-white rounded-[3rem] p-12 md:p-16 hover:-translate-y-2 transition-transform duration-500"
            >
              <Cpu className="text-green-200 mb-8" size={64} />
              <h3 className="text-3xl font-black mb-6">Advanced Tech</h3>
              <p className="text-green-100 text-lg leading-relaxed font-medium">
                Our state-of-the-art facilities utilize proprietary hydrometallurgical processes and precision machinery to extract maximum value from e-waste, preventing toxic runoff and atmospheric emissions.
              </p>
            </motion.div>
          </div>

          {/* Timeline / Journey Section */}
          <div className="border-l-4 border-slate-200 dark:border-slate-800 ml-6 md:ml-12 space-y-16 py-10 relative">
            <div className="absolute top-0 -left-[14px] w-6 h-6 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>
            {[
              { year: '2015', title: 'The Inception', text: 'EcoGreen was founded with a single facility in London, processing basic consumer electronics.' },
              { year: '2018', title: 'Industrial Scaling', text: 'Expanded our hydrometallurgical operations to securely process enterprise data center waste.' },
              { year: '2023', title: 'Zero Waste Milestone', text: 'Achieved 99.8% material recovery rate, establishing the gold standard in circular economy.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pl-10 relative"
              >
                <div className="absolute top-2 -left-[30px] w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <span className="text-green-600 font-black tracking-widest text-lg mb-2 block">{item.year}</span>
                <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{item.title}</h4>
                <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}