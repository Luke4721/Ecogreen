'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MonitorPlay, Zap, Droplets, Factory, ShieldCheck, Recycle } from 'lucide-react';

export default function BusinessSolutions() {
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
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">• Enterprise Services</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-8">
              B2B Sustainability <br/>Architecture
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 dark:text-slate-400 font-medium">
              We design and execute closed-loop material recovery systems for the world's largest hardware manufacturers.
            </motion.p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Box 1 (Large) */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:col-span-2 bg-slate-900 rounded-[2rem] p-10 md:p-14 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 transform group-hover:scale-110 transition-transform duration-700">
                <MonitorPlay size={150} className="text-green-500" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-4xl font-black text-white mb-4">Secure ITAD</h3>
                <p className="text-slate-300 text-lg font-medium max-w-md">Military-grade data destruction and complete IT asset disposition for enterprise data centers.</p>
              </div>
            </motion.div>

            {/* Box 2 (Tall) */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:row-span-2 bg-green-600 rounded-[2rem] p-10 md:p-14 relative overflow-hidden group">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 transform group-hover:rotate-12 transition-transform duration-700">
                <Zap size={200} className="text-white" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Zap size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white mb-4">EV Battery Recycling</h3>
                  <p className="text-green-100 text-lg font-medium">Safe discharge and hydrometallurgical extraction of cobalt, lithium, and nickel from spent EV cells.</p>
                </div>
              </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-10 relative overflow-hidden group hover:border-green-500 transition-colors">
              <ShieldCheck size={48} className="text-slate-900 dark:text-white mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Compliance Audits</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Full ESG reporting and downstream auditing.</p>
            </motion.div>

            {/* Box 4 */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-10 relative overflow-hidden group hover:border-green-500 transition-colors">
              <Recycle size={48} className="text-slate-900 dark:text-white mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Plastic Aggregation</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Baled polymer recovery for manufacturing.</p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}