"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import LiveMagneticNumber from '@/components/LiveMagneticNumber';
import AbstractConstruct from '@/components/AbstractConstruct';
import StackingWasteGraph from '@/components/StackingWasteGraph';
import CountUp from 'react-countup';
import { 
  Sun, Moon, ArrowRight, Zap, ShieldCheck, Leaf, 
  BarChart3, Recycle, Truck, MapPin, CheckCircle2,
  Factory, MonitorPlay, Droplets
} from 'lucide-react';

const ECO_GREEN_LOGO = "http://goecogreen.in/wp-content/uploads/2024/10/cropped-go_eco_green_logo-1-e1730535315217-1024x232.jpg";

// Crazy "bakchodh" animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80, scale: 0.9, rotateX: -15 },
  visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { type: 'spring' as const, bounce: 0.4, duration: 1.2 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100, skewX: 10 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring' as const, duration: 1.5 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100, skewX: -10 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring' as const, duration: 1.5 } }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, duration: 1.5 } }
};

export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > (window.innerHeight - 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const toggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500 font-sans overflow-hidden">
      {/* NAVIGATION - GLASS UI + TRUE PNG LOGO */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 shadow-xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800' : 'py-6 bg-transparent border-transparent'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo_transparent.png" 
              alt="Eco Green" 
              className="h-12 md:h-14 w-auto object-contain transition-all duration-300 drop-shadow-md"
            />
          </Link>
          
          <nav className={`hidden lg:flex items-center gap-10 font-bold text-[15px] uppercase tracking-wider ${scrolled ? "text-slate-800 dark:text-slate-200" : "text-white"}`}>
            <Link href="/business-solutions" className="hover:text-green-600 dark:hover:text-green-400 transition-colors relative group">
              Business Solutions
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about-us" className="hover:text-green-600 dark:hover:text-green-400 transition-colors relative group">
              About Us
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/sustainability" className="hover:text-green-600 dark:hover:text-green-400 transition-colors relative group">
              Sustainability
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/careers" className="hover:text-green-600 dark:hover:text-green-400 transition-colors relative group">
              Careers
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          <div className="flex items-center gap-6">
            {mounted && (
              <button 
                onClick={toggleTheme} 
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-all transform hover:scale-110 hover:rotate-180 duration-500"
              >
                {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <Link href="/request-quote" className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wide transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-600/30">
              Request Quote
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION - NO GLASS, FULL GARBOX REPLICA */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
          >
            <source src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/06/video_home3.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-6 py-2.5 rounded-full text-green-400 font-bold tracking-widest uppercase text-sm mb-8">
                <CheckCircle2 size={18} />
                Leading Waste Management 2026
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight">
                ENTERPRISE-GRADE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">ZERO-WASTE</span> <br/>
                MANAGEMENT
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 font-medium leading-relaxed border-l-4 border-green-500 pl-6">
                Discover, support, and collaborate with India's most advanced tech-driven recycling facilities driving real impact for a sustainable future.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 mb-16">
                <Link href="/business-solutions" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-600/40 flex items-center justify-center gap-3 group">
                  Explore Solutions
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/request-quote" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 flex items-center justify-center">
                  Request Quote
                </Link>
              </motion.div>

              <motion.div variants={staggerContainer} className="flex flex-wrap gap-10 text-white font-bold tracking-wide text-sm uppercase">
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Truck size={24} />
                  </div>
                  Pan-India Logistics
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <ShieldCheck size={24} />
                  </div>
                  100% Data Security
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Zap size={24} />
                  </div>
                  Tech-Driven Recovery
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      
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
              
              <div className="relative z-10 animate-float drop-shadow-2xl">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image13.webp" alt="Woman Recycling" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES - GARBOX CARD STYLE */}
      <section className="py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20"
          >
            <div className="max-w-2xl">
              <p className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Our Expertise</p>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                CORE SOLUTIONS
              </h2>
            </div>
            <Link href="/business-solutions" className="mt-8 md:mt-0 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-green-600 dark:hover:bg-green-500 hover:text-white transition-all transform hover:-translate-y-1 inline-flex items-center gap-3">
              View All Services <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'E-Waste Management', type: 'ewaste', icon: <MonitorPlay size={32}/>, color: 'from-emerald-400 to-green-600' },
              { title: 'Lithium Battery', type: 'battery', icon: <Zap size={32}/>, color: 'from-blue-400 to-indigo-600' },
              { title: 'Plastic Waste', type: 'plastic', icon: <Droplets size={32}/>, color: 'from-teal-400 to-emerald-600' },
              { title: 'Green Metal Recovery', type: 'metal', icon: <Factory size={32}/>, color: 'from-yellow-400 to-amber-600' }
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
                  <div className="w-full h-full"><AbstractConstruct type={srv.type} /></div>
                </div>
                
                {/* Content layer (bottom info box) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/80 backdrop-blur-xl border-t border-slate-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${srv.color} text-white flex items-center justify-center mb-4 shadow-lg`}>
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
      </section>

      {/* NUMBERS/IMPACT - CRAZY BIG (Magnetic Live Ticker) */}
      <section className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden" style={{ perspective: 2000 }}>
        <StackingWasteGraph />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <LiveMagneticNumber baseValue={60142.00} label="MT E-Waste Recycled" suffix="+" />
            <LiveMagneticNumber baseValue={728.50} label="tCO2e Emissions Saved" suffix="+" />
            <LiveMagneticNumber baseValue={205419.00} label="MT Paper Recycled" suffix="+" />
          </div>
        </div>
      </section>

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
              {/* Animated Blob Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-green-200 to-green-100 dark:from-green-900 dark:to-green-800 rounded-[4rem] mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-60 animate-blob"></div>
              
              <div className="relative z-10 animate-float drop-shadow-2xl">
                <img src="https://demo.casethemes.net/garbox/wp-content/uploads/2026/05/image11.png" alt="FAQ" className="w-full h-auto object-contain" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#00a93c] p-8 rounded-3xl shadow-2xl border-4 border-white dark:border-[#0a0a0a] hidden md:block z-20">
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
      <section className="py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden relative border-t border-slate-100 dark:border-slate-900">
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

      {/* INFINITE CLIENT SLIDER */}
      <ClientsMarquee />

      {/* FOOTER */}
      <footer className="bg-green-950 text-white pt-24 pb-12 relative overflow-hidden">
        {/* Giant background text just for style */}
        

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8 bg-white/5 inline-block p-4 rounded-xl">
                <img 
                  src="/logo_white_text.png" 
                  alt="Eco Green" 
                  className="h-16 md:h-20 w-auto object-contain drop-shadow-lg" 
                />
              </div>
              <p className="text-gray-400 text-lg mb-8 max-w-sm font-medium leading-relaxed">
                Sustainable Solutions for Circular Economy. Subscribe For Sustainability Insights.
              </p>
              <div className="flex gap-4">
                {[{ icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, link: '#' }, 
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, link: '#' }, 
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, link: '#' }, 
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>, link: '#' }].map((social, i) => (
                  <a key={i} href={social.link} className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:-translate-y-2 transition-all duration-300 text-white">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8 uppercase tracking-widest border-b border-slate-800 pb-4 inline-block">Solutions</h4>
              <ul className="space-y-4 font-medium text-gray-400">
                {['E Waste Management', 'Plastic Waste Recycling', 'Paper Recycling', 'Green Metal Recovery', 'EPR Consulting', 'Lithium Battery Recycling'].map((item, i) => (
                  <li key={i}>
                    <Link href="/business-solutions" className="hover:text-green-400 transition-colors flex items-center gap-3 group">
                      <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors"></span> 
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xl mb-8 uppercase tracking-widest border-b border-slate-800 pb-4 inline-block">Company</h4>
              <ul className="space-y-4 font-medium text-gray-400">
                {['About Us', 'Careers', 'Environment Sustainability'].map((item, i) => (
                  <li key={i}>
                    <Link href="/about-us" className="hover:text-green-400 transition-colors flex items-center gap-3 group">
                      <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors"></span> 
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 font-medium">
            <p>© 2026 Eco Green Recycling Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// CLIENTS MARQUEE COMPONENT
// ==========================================

function ClientsMarquee() {
  const clientLogos = [
    { name: 'Samsung', url: '/client-logos/samsung.png' },
    { name: 'Oppo', url: '/client-logos/oppo.png' },
    { name: 'Vivo', url: '/client-logos/vivo.png' },
    { name: 'Whirlpool', url: '/client-logos/whirlpool.png' },
    { name: 'HCL', url: '/client-logos/hcl.png' },
    { name: 'ITC Limited', url: '/client-logos/itc.png' },
    { name: 'Haier', url: '/client-logos/haier.png' },
    { name: 'Wipro', url: '/client-logos/wipro.png' },
    { name: 'Mercedes-Benz', url: '/client-logos/mercedes.png' },
    { name: 'Paytm', url: '/client-logos/paytm.png' },
  ];

  const renderLogos = () => clientLogos.map((client, idx) => (
    <div key={idx} className="flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-6 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
      <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" />
    </div>
  ));

  return (
    <section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden relative border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Trusted By</motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">INDUSTRY LEADERS</motion.h2>
      </div>
      
      <div className="relative flex overflow-hidden group w-full py-10">
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {[...clientLogos, ...clientLogos].map((client, idx) => (
            <div key={idx} className="flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-4 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
              <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}