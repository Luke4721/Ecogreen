"use client";


import React, { useState } from 'react';
import Link from 'next/link';
import { 
  X, ShieldCheck, Factory, Recycle, Leaf, Truck, BarChart3, 
  User, Building, Phone, Mail, MapPin, Weight, Calendar
} from 'lucide-react';

export default function RequestQuote() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const services = [
    { id: 'ewaste', label: 'E-Waste', icon: ShieldCheck },
    { id: 'lithium', label: 'Battery', icon: Factory },
    { id: 'plastic', label: 'Plastic', icon: Recycle },
    { id: 'paper', label: 'Paper', icon: Leaf },
    { id: 'metal', label: 'Metals', icon: Truck },
    { id: 'epr', label: 'EPR', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-green-50/50 flex flex-col font-sans relative overflow-hidden">
      <Link href="/" className="absolute top-8 left-8 text-green-700 hover:text-green-900 font-bold flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all z-50">
        ← Back to Home
      </Link>
      {/* Abstract Background Waves (similar to reference) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-100/40 blur-3xl"></div>
        <div className="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-green-100/60 blur-3xl"></div>
        {/* SVG Wave */}
        <svg className="absolute bottom-0 w-full h-auto text-green-600/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Main Form Container */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 z-10 relative w-full">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden relative border border-gray-100 dark:border-slate-800/50/50 mb-16">
          
          {/* Top Bar with X */}
          <div className="flex justify-between items-center p-8 pb-4">
            <div className="flex items-center gap-2">
              <img src="http://goecogreen.in/wp-content/uploads/2024/10/cropped-go_eco_green_logo-1-e1730535315217-1024x232.jpg" alt="Eco Green" className="h-8 w-auto object-contain" />
            </div>
            <Link href="/" className="text-gray-400 hover:text-gray-700 dark:text-slate-300 transition-colors">
              <X size={28} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="px-8 pb-12 sm:px-16 sm:pb-16">
            
            {/* Step 1: Services (Inspired by Image 1) */}
            <div className="mb-14">
              <h1 className="text-3xl sm:text-green-600xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2 uppercase">Get Quote</h1>
              <p className="text-gray-500 dark:text-slate-500 font-medium mb-8">What services are you looking for?</p>
              
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
                {services.map((service) => {
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <div 
                      key={service.id} 
                      onClick={() => toggleService(service.id)}
                      className="flex flex-col items-center cursor-pointer group"
                    >
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-green-500 text-white shadow-lg scale-105' : 'bg-gray-50 dark:bg-slate-950 text-orange-400 group-hover:bg-green-50 group-hover:scale-105 border border-gray-100 dark:border-slate-800/50'}`}>
                        <service.icon size={isSelected ? 32 : 28} strokeWidth={1.5} />
                      </div>
                      <span className={`mt-3 text-xs sm:text-sm font-medium text-center ${isSelected ? 'text-orange-600 font-bold' : 'text-gray-500 dark:text-slate-500'}`}>
                        {service.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 w-full mb-12"></div>

            {/* Step 2: Form Fields (Inspired by Image 2) */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Your Information</h2>
              
              <form className="space-y-8">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input type="text" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 dark:bg-slate-950/50 focus:bg-white dark:bg-slate-900 text-gray-800" placeholder="Full name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Phone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input type="tel" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 dark:bg-slate-950/50 focus:bg-white dark:bg-slate-900 text-gray-800" placeholder="Phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input type="email" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 dark:bg-slate-950/50 focus:bg-white dark:bg-slate-900 text-gray-800" placeholder="Email address" />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Company Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={18} className="text-gray-400" />
                      </div>
                      <input type="text" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 dark:bg-slate-950/50 focus:bg-white dark:bg-slate-900 text-gray-800" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-2">Estimated Volume (Monthly)</label>
                    <div className="flex gap-2">
                      <input type="text" className="w-1/3 px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 dark:bg-slate-950/50 focus:bg-white dark:bg-slate-900 text-gray-800 text-center" placeholder="Qty" />
                      <select className="w-2/3 px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 dark:bg-slate-950/50 focus:bg-white dark:bg-slate-900 text-gray-800">
                        <option value="kg">Kilograms (KG)</option>
                        <option value="mt">Metric Tons (MT)</option>
                        <option value="units">Individual Units</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Row 3 - Custom Radio Buttons like "Gender / Tobacco Use" */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100 dark:border-slate-800/50">
                  <div className="col-span-2 flex flex-wrap gap-8">
                    {/* Frequency */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-4">Pickup Frequency</label>
                      <div className="flex items-center gap-6">
                        <label className="flex flex-col items-center cursor-pointer group">
                          <input type="radio" name="frequency" className="peer sr-only" defaultChecked />
                          <div className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-slate-800 peer-checked:border-orange-500 peer-checked:bg-green-50 flex items-center justify-center text-gray-400 peer-checked:text-orange-500 transition-all">
                            <span className="w-6 h-6 rounded-full peer-checked:bg-green-500"></span>
                          </div>
                          <span className="mt-2 text-sm font-bold text-gray-700 dark:text-slate-300">One-time</span>
                        </label>
                        <label className="flex flex-col items-center cursor-pointer group">
                          <input type="radio" name="frequency" className="peer sr-only" />
                          <div className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-slate-800 peer-checked:border-orange-500 peer-checked:bg-green-50 flex items-center justify-center text-gray-400 peer-checked:text-orange-500 transition-all">
                             <span className="w-6 h-6 rounded-full peer-checked:bg-green-500"></span>
                          </div>
                          <span className="mt-2 text-sm font-bold text-gray-400">Regular</span>
                        </label>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex-grow">
                      <label className="block text-sm font-bold text-gray-700 dark:text-slate-300 mb-4">Location</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-gray-50 dark:bg-slate-950/50 focus:bg-white dark:bg-slate-900 text-gray-800">
                        <option>Select Region...</option>
                        <option>Delhi NCR</option>
                        <option>Uttar Pradesh</option>
                        <option>Haryana</option>
                        <option>Other (Pan India)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button Area */}
                  <div className="flex flex-col justify-end items-end h-full">
                    <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5">
                      Display Quotes
                    </button>
                    <p className="text-xs text-gray-400 font-medium mt-3 w-full text-center">
                      100% Privacy Guaranteed
                    </p>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      
        {/* Strategic Locations Section */}
        <div className="w-full max-w-5xl mx-auto mt-16 pt-12 border-t border-gray-200 dark:border-slate-800/60 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Strategic Locations</h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Strategically positioned to manage high-volume enterprise logistics. Our dual-facility infrastructure combines massive processing capacity with unparalleled operational efficiency, ensuring rapid, secure, and fully compliant material recovery for our partners across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mathura Facility */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border-b-4 border-green-500 flex flex-col h-full">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">Mathura Facility</h3>
                <p className="text-green-400 font-bold text-sm tracking-wider uppercase mb-4">PLANT 1</p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Khasra No.193/1, 199/1 and 199/2, Noorpur Bangar Bajna,<br/>
                  Tehsil Maant, Mathura, Uttar Pradesh, 281201
                </p>
              </div>
              <div className="h-48 w-full bg-gray-200 dark:bg-slate-800 relative">
                                <iframe 
                  src="https://maps.google.com/maps?q=Bajna,Mathura,Uttar%20Pradesh&t=k&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  className="absolute inset-0 opacity-90 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>
            </div>

            {/* Greater Noida Facility */}
            <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border-b-4 border-green-500 flex flex-col h-full">
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">Greater Noida Facility</h3>
                <p className="text-green-400 font-bold text-sm tracking-wider uppercase mb-4">PLANT 2 & REGISTERED OFFICE</p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  B-036, 1 EXTENTION, KASNA ECOTECH,<br/>
                  Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201308
                </p>
              </div>
              <div className="h-48 w-full bg-gray-200 dark:bg-slate-800 relative">
                                <iframe 
                  src="https://maps.google.com/maps?q=Kasna%20Ecotech,Greater%20Noida&t=k&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  className="absolute inset-0 opacity-90 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}