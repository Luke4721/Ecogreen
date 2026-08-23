'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { ArrowLeft, Leaf, Droplets, Wind } from 'lucide-react';

const CircularProgress = ({ value, color, label, icon: Icon }: any) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setCurrent(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="8" fill="none" />
          <motion.circle 
            cx="50" cy="50" r="40" 
            className={color} strokeWidth="8" fill="none" 
            strokeDasharray="251.2"
            initial={{ strokeDashoffset: 251.2 }}
            whileInView={{ strokeDashoffset: 251.2 - (251.2 * current) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={24} className="mb-2 text-slate-400" />
          <span className="text-3xl font-black text-slate-900 dark:text-white">{current}%</span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{label}</h4>
    </div>
  );
};

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] selection:bg-green-500 selection:text-white">
      <header className="fixed w-full z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="inline-flex items-center text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 font-bold uppercase tracking-wider text-sm transition-colors">
            <ArrowLeft className="mr-2" size={18} /> Home
          </Link>
        </div>
      </header>

      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-24">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">• Impact Report</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-8">
              Data-Driven <br/>Conservation
            </motion.h1>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 mb-20">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-16 text-center">2026 Recovery Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <CircularProgress value={98} color="stroke-green-500" label="Metals Recovered" icon={Leaf} />
              <CircularProgress value={85} color="stroke-blue-500" label="Water Recycled" icon={Droplets} />
              <CircularProgress value={92} color="stroke-teal-500" label="Emissions Cut" icon={Wind} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white rounded-[3rem] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-[80px]"></div>
              <h3 className="text-6xl font-black mb-4">Zero</h3>
              <p className="text-xl text-slate-300 font-medium">Landfill Policy. We ensure 100% of received e-waste is processed, repurposed, or securely destroyed.</p>
            </div>
            <div className="bg-green-600 text-white rounded-[3rem] p-12 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px]"></div>
              <h3 className="text-6xl font-black mb-4">100%</h3>
              <p className="text-xl text-green-100 font-medium">Renewable energy powers our primary sorting facilities in London and Berlin.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}