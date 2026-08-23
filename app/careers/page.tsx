'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Senior Hydrometallurgist', dept: 'Engineering', loc: 'London, UK', type: 'Full-time' },
  { id: 2, title: 'Logistics Coordinator', dept: 'Operations', loc: 'Berlin, DE', type: 'Full-time' },
  { id: 3, title: 'ESG Compliance Auditor', dept: 'Legal', loc: 'Remote', type: 'Contract' },
  { id: 4, title: 'Robotics Technician', dept: 'Engineering', loc: 'London, UK', type: 'Full-time' },
  { id: 5, title: 'Sustainability Analyst', dept: 'Data', loc: 'Remote', type: 'Full-time' }
];

export default function Careers() {
  const [filter, setFilter] = useState('All');
  const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.dept === filter);

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
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">• Join The Mission</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-8">
              Build the Circular <br />Economy
            </motion.h1>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {['All', 'Engineering', 'Operations', 'Legal', 'Data'].map(dept => {
              const isActive = filter === dept;
              const btnClass = isActive 
                ? "px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all bg-green-500 text-white shadow-lg shadow-green-500/30" 
                : "px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800";
              return (
                <button 
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={btnClass}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map(job => (
                <motion.div 
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl hover:border-green-500 transition-all cursor-pointer group"
                >
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-green-500 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-500 uppercase tracking-wider">
                      <span className="flex items-center"><Briefcase size={16} className="mr-2" /> {job.dept}</span>
                      <span className="flex items-center"><MapPin size={16} className="mr-2" /> {job.loc}</span>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">{job.type}</span>
                    </div>
                  </div>
                  <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-green-500 hover:text-white transition-colors">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredJobs.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-slate-500 font-medium">
                <p>No open positions in this department. Check back later!</p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}