import React from 'react';
import Link from 'next/link';
import { Phone, CheckCircle2, ChevronDown, Mail, MapPin, ArrowRight, Quote, Plus, Award, ShieldCheck, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">EG</span>
            </div>
            <span className="font-bold text-xl text-green-900 tracking-tight">Eco Green</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm text-gray-700">
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <Link href="/business-solutions" className="hover:text-green-600 transition-colors">Business Solutions</Link>
            <Link href="/about-us" className="hover:text-green-600 transition-colors">About Us</Link>
            <Link href="/sustainability" className="hover:text-green-600 transition-colors">Sustainability</Link>
            <Link href="/careers" className="hover:text-green-600 transition-colors">Careers</Link>
          </nav>
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium">Call Anytime</span>
                <span className="font-bold text-sm text-gray-900">+91 9140541765</span>
              </div>
            </div>
            <Link href="/request-quote" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded font-medium transition-colors text-sm">
              Request a Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative h-[600px] flex items-center bg-gray-900 overflow-hidden">
          {/* REAL HERO IMAGE FROM SITE */}
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: "url('https://goecogreen.in/wp-content/uploads/2026/05/eco_green_home_cover_img.webp')" }}
          ></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <span className="inline-block py-1 px-3 border border-orange-500 text-orange-400 font-medium text-sm rounded-full mb-6">
              Sustainable Solutions for circular economy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Enterprise-grade zero-waste management and tech-driven recycling
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Redefining how the world recovers green metals and powers the next generation of industry. Redefining Green Metals: Iron • Copper • Lithium • Cobalt • Aluminum
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/business-solutions" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded font-medium transition-colors">
                Explore Our Solutions
              </Link>
              <Link href="/about-us" className="bg-white hover:bg-gray-100 text-green-900 px-8 py-3.5 rounded font-medium transition-colors">
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

        {/* IMPACT CARDS - UPDATED TO MATCH TARGET DESIGN */}
        <section className="py-20 bg-slate-800 relative z-20 shadow-lg border-b border-slate-700">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">OUR IMPACT</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
              {[
                { title: 'E-Waste Recycled', val: '60,000', unit: 'MT' },
                { title: 'Emissions Saved\n(2023 onwards)', val: '700', unit: 'tCO2e' },
                { title: 'Paper Waste Recycled', val: '2,00,000', unit: 'MT' },
                { title: 'Plastic Waste Recycled', val: '70,000', unit: 'MT' },
              ].map((impact, idx) => (
                <div key={idx} className="bg-slate-700/50 p-6 md:p-8 rounded-xl flex flex-col items-center justify-center min-w-[200px] flex-1 text-center border border-slate-600/50">
                  <div className="flex items-end justify-center mb-2">
                    <h3 className="font-bold text-4xl text-white">{impact.val}</h3>
                    <span className="text-green-400 font-bold ml-1 text-lg mb-1">{impact.unit}</span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium whitespace-pre-line">{impact.title}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 text-sm text-gray-400 font-medium tracking-wide">
              Redefining Green Metals: Iron • Copper • Lithium • Cobalt • Aluminum
            </div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <span className="text-orange-500 font-medium text-sm mb-2 block">Our Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Core Services & Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: 'E-Waste Management' },
                { name: 'Lithium Battery Recycling' },
                { name: 'Plastic Waste Recycling' },
                { name: 'Paper Recycling' },
                { name: 'Green Metal Recovery' },
                { name: 'EPR Consulting' },
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-50 shadow-md">
                    <div className="w-full h-full bg-green-100 flex items-center justify-center p-4">
                      {/* Generative fallback using gradient */}
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-green-300 to-green-100"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm max-w-[120px]">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT & TRUSTED BY */}
        <section className="py-20 bg-orange-50/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg border-4 border-white">
                  <span className="font-bold text-2xl">10+</span>
                  <span className="text-xs text-center font-medium leading-tight">Years Of<br/>Experience</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-orange-500 font-medium text-sm mb-2 block">Partner With Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Partnering with global brands to ensure secure, compliant, and zero-waste IT asset disposition and green metal recovery. Enterprise-grade solutions powering the circular economy through secure, compliant, and sustainable resource recovery.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-medium text-gray-700">E-Waste Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-medium text-gray-700">Lithium Battery Recycling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-medium text-gray-700">Plastic Waste Recycling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-medium text-gray-700">Green Metal Recovery</span>
                  </div>
                </div>
                
                <Link href="/about-us" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-medium transition-colors">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE & ACHIEVEMENTS - FIXED IMAGES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-medium text-sm mb-2 block">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Verified Compliance Certifications & Achievements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'ISO Certification', desc: 'Ensuring operational excellence, rigorous quality management, and strict environmental compliance across all asset disposition facilities.', icon: ShieldCheck, color: 'bg-blue-100 text-blue-600' },
                { title: 'Global Recycled Standard', desc: 'Verifying safe, equitable, and transparent supply chains from end-of-life processing all the way to secondary raw material production.', icon: Award, color: 'bg-orange-100 text-orange-600' },
                { title: 'Green Air Standard', desc: 'Maintaining industry-leading emission controls and zero-harm atmospheric processing during complex metal extraction and dismantling.', icon: Leaf, color: 'bg-green-100 text-green-600' },
              ].map((cert, idx) => (
                <div key={idx} className="group cursor-pointer border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 rounded-lg ${cert.color} flex items-center justify-center mb-6`}>
                    <cert.icon size={32} />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-5/12">
               <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-tr from-green-800 to-green-600 opacity-80 mix-blend-multiply"></div>
               </div>
            </div>
            <div className="lg:w-7/12">
              <span className="text-orange-500 font-medium text-sm mb-2 block">Future Vision & FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Know About Our Business Process</h2>
              <p className="text-gray-600 mb-8">Start Your Green Transition</p>
              
              <div className="space-y-4">
                {[
                  { q: 'What specific materials and metals can be recovered?', a: 'We utilize advanced, clean metallurgical processes to extract up to 99% of precious and base metals. This includes high-yield recovery of Gold, Silver, Palladium, Copper, Aluminum, and highly sought-after battery components like Lithium and Cobalt from end-of-life electronics.' },
                  { q: 'How do you guarantee the destruction of sensitive corporate data?', a: 'Security is our absolute priority. We employ military-grade, certified data destruction protocols. Assets undergo physical micro-shredding and cryptographic wiping to ensure complete data sanitization before any physical recycling begins. A comprehensive Certificate of Destruction is provided for your compliance audits.' },
                  { q: 'How does the EPR (Extended Producer Responsibility) consulting work?', a: 'We act as an extension of your compliance team. EcoGreen manages the complex regulatory landscape on your behalf, handling collection targets, statutory documentation, and government liaison to ensure your brand meets all legal EPR mandates seamlessly and transparently.' },
                  { q: 'Are your extraction processes environmentally safe?', a: 'Unlike traditional smelting which causes severe pollution, our proprietary closed-loop hydrometallurgical technology operates with zero-harm atmospheric emissions and minimal water discharge. This drastically reduces the carbon footprint of metal recovery.' },
                  { q: 'Do you provide tracking and reporting for ESG goals?', a: 'Yes. Every batch processed through our facilities generates a comprehensive sustainability dashboard. We provide exact metrics on carbon offsets, materials recovered, and landfill diversion rates to directly support and validate your corporate ESG reporting.' }
                ].map((faq, idx) => (
                  <div key={idx} className={`border ${idx === 0 ? 'border-green-600 bg-white' : 'border-gray-200 bg-transparent'} rounded-lg overflow-hidden`}>
                    <button className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-900">
                      <span>{faq.q}</span>
                      {idx === 0 ? <ChevronDown className="text-green-600" /> : <Plus className="text-gray-400" />}
                    </button>
                    {idx === 0 && (
                      <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-green-900">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-5/12 hidden md:block">
              <div className="h-full w-full bg-green-800"></div>
            </div>
            <div className="md:w-7/12 p-12 md:p-20 flex flex-col justify-center">
              <Quote className="text-orange-500 w-16 h-16 mb-8 opacity-80" />
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-6 h-6 text-orange-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-white font-medium leading-snug mb-8 italic">
                "Our vision is a zero-waste future driven by continuous innovation, where end-of-life technology fuels the next generation of manufacturing."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gray-300"></div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">EcoGreen Leadership</h4>
                  <p className="text-green-300 text-sm">Future Vision</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTS STRIP */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 overflow-hidden">
            <div className="flex items-center justify-between gap-8 opacity-60 grayscale flex-wrap">
              {['Samsung', 'Oppo', 'Vivo', 'Whirlpool', 'HCL', 'ITC Limited', 'Haier', 'Wipro', 'Mercedes-Benz', 'Paytm'].slice(0, 6).map((client, idx) => (
                <span key={idx} className="text-xl font-bold uppercase tracking-wider text-gray-400">{client}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-2xl text-white mb-8 md:mb-0">
                  <span className="text-orange-100 font-medium text-sm mb-2 block uppercase tracking-wider">Ready to Get Started?</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Recognized for Excellence in Waste Management</h2>
                  <div className="flex gap-4 mt-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <CheckCircle2 size={32} className="text-white" />
                    </div>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <CheckCircle2 size={32} className="text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <Link href="/request-quote" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg">
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-green-950 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EG</span>
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">Eco Green</span>
              </div>
              <p className="text-green-200/70 mb-6 text-sm leading-relaxed">
                Sustainable Solutions for Circular Economy. Subscribe For Sustainability Insights.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors"><span className="sr-only">Facebook</span>f</a>
                <a href="#" className="w-10 h-10 rounded bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors"><span className="sr-only">Instagram</span>ig</a>
                <a href="#" className="w-10 h-10 rounded bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors"><span className="sr-only">X</span>x</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">SOLUTIONS</h4>
              <ul className="space-y-3">
                <li><Link href="/business-solutions" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> E Waste Management</Link></li>
                <li><Link href="/business-solutions" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> Plastic Waste Recycling</Link></li>
                <li><Link href="/business-solutions" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> Paper Recycling</Link></li>
                <li><Link href="/business-solutions" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> Green Metal Recovery</Link></li>
                <li><Link href="/business-solutions" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> EPR Consulting</Link></li>
                <li><Link href="/business-solutions" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> Lithium Battery Recycling</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">COMPANY</h4>
              <ul className="space-y-3">
                <li><Link href="/about-us" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> About Us</Link></li>
                <li><Link href="/careers" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> Careers</Link></li>
                <li><Link href="/sustainability" className="text-green-200/70 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14}/> Environment Sustainability</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">GET IN TOUCH</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-green-200/70 text-sm">Khasra No.193/1, 199/1 and 199/2, Noorpur Bangar Bajna, Tehsil Maant, Mathura, Uttar Pradesh, 281201</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-orange-500 flex-shrink-0" size={18} />
                  <span className="text-green-200/70 text-sm">+91 9140541765</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-orange-500 flex-shrink-0" size={18} />
                  <span className="text-green-200/70 text-sm break-all">operations@ecogreenrecyclingpvtltd.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-green-900/50 flex flex-col md:flex-row items-center justify-between text-sm text-green-200/50">
            <p>© 2026 Eco Green. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Terms & Condition</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
