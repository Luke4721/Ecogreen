"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const toggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500 font-sans overflow-hidden">
      {/* NAVIGATION - GLASS UI + TRUE PNG LOGO */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 shadow-xl' : 'py-6'} bg-white/80 dark:bg-black/20 backdrop-blur-xl border-b border-white/20 dark:border-white/10`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo_transparent.png" 
              alt="Eco Green" 
              className="h-12 md:h-14 w-auto object-contain transition-all duration-300 drop-shadow-md"
            />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-10 font-bold text-[15px] uppercase tracking-wider text-slate-800 dark:text-slate-200">
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

      {/* ABOUT US / FEATURES - CRAZY SCROLL ANIMATIONS */}
      <section className="py-32 bg-gray-50 dark:bg-slate-900 overflow-hidden relative">
        {/* Decorative background element */}
        <motion.div 
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 border-[40px] border-green-500/5 rounded-full"
        ></motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.p variants={fadeInUp} className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Who We Are</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              INDIA'S LEADING PLATFORM <br/> FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">ZERO-WASTE</span> INFRASTRUCTURE
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {[
              { icon: <CheckCircle2 size={40}/>, title: "Verified Impact", desc: "We ensure full transparency by providing independently verified environmental data." },
              { icon: <BarChart3 size={40}/>, title: "Tools to Grow", desc: "GreenTech startups on our platform grow 3x faster with tailored resources." },
              { icon: <Recycle size={40}/>, title: "Collaborative Ecosystem", desc: "Tap into a dynamic global ecosystem of green tech startups and partners." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 100, rotateY: 90 },
                  visible: { opacity: 1, y: 0, rotateY: 0, transition: { type: 'spring' as const, delay: i * 0.1, duration: 0.6 } }
                }}
                className="bg-white dark:bg-slate-950 p-10 rounded-[2rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 group hover:-translate-y-4 transition-transform duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" alt="Nature" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl border-4 border-gray-50 dark:border-slate-900 max-w-xs"
              >
                <div className="text-6xl font-black text-green-500 mb-2">10+</div>
                <p className="font-bold text-slate-900 dark:text-white text-lg">Years of Excellence in Recycling</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl lg:translate-y-20">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Tech" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
            </motion.div>
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
              { title: 'E-Waste Management', img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80', icon: <MonitorPlay size={32}/> },
              { title: 'Lithium Battery', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80', icon: <Zap size={32}/> },
              { title: 'Plastic Waste', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80', icon: <Droplets size={32}/> },
              { title: 'Green Metal Recovery', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', icon: <Factory size={32}/> }
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
                className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl"
              >
                <img src={srv.img} alt={srv.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mb-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-green-500/50">
                    {srv.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{srv.title}</h3>
                  <div className="w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS/IMPACT - CRAZY BIG */}
      <section className="py-32 bg-green-600 relative overflow-hidden">
        {/* Background texture/image */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="texture" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
              <h3 className="text-7xl md:text-9xl font-black text-white mb-4 drop-shadow-2xl">
                <CountUp end={60} duration={3} />K<span className="text-green-300 text-5xl">+</span>
              </h3>
              <p className="text-xl font-bold text-green-100 uppercase tracking-widest">MT E-Waste Recycled</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
              <h3 className="text-7xl md:text-9xl font-black text-white mb-4 drop-shadow-2xl">
                <CountUp end={700} duration={3} /><span className="text-green-300 text-5xl">+</span>
              </h3>
              <p className="text-xl font-bold text-green-100 uppercase tracking-widest">tCO2e Emissions Saved</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
              <h3 className="text-7xl md:text-9xl font-black text-white mb-4 drop-shadow-2xl">
                <CountUp end={200} duration={3} />K<span className="text-green-300 text-5xl">+</span>
              </h3>
              <p className="text-xl font-bold text-green-100 uppercase tracking-widest">MT Paper Recycled</p>
            </motion.div>
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
    { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Oppo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/OPPO_Logo.svg' },
    { name: 'Vivo', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_mobile_logo.png' },
    { name: 'Whirlpool', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Whirlpool_Corporation_Logo.svg' },
    { name: 'HCL', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/HCL_Technologies_logo.svg' },
    { name: 'ITC Limited', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg' },
    { name: 'Haier', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Haier_logo.svg' },
    { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Mercedes-Benz', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
    { name: 'Paytm', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Paytm_logo.svg' },
  ];

  const renderLogos = () => clientLogos.map((client, idx) => (
    <div key={idx} className="flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-10 py-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 w-[280px] h-[140px] mx-6 hover:-translate-y-2 transition-transform duration-300 grayscale hover:grayscale-0">
      <img src={client.url} alt={client.name} className="max-h-12 max-w-full object-contain" />
    </div>
  ));

  return (
    <section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden relative border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-green-600 font-black tracking-[0.2em] uppercase mb-4">Trusted By</motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">INDUSTRY LEADERS</motion.h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group w-full py-10">
        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {renderLogos()}
        </div>
        <div className="absolute top-10 animate-marquee2 whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {renderLogos()}
        </div>
      </div>
    </section>
  );
}