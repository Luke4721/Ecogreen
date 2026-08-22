import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Factory, Truck, Recycle, Leaf, BarChart3 } from 'lucide-react';

export default function BusinessSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm h-20 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-900 font-medium">
            <ArrowLeft className="mr-2" size={20} /> Back to Home
          </Link>
          <Link href="/request-quote" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors">
            Get a Quote
          </Link>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-green-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">SECURE. CERTIFIED. ENGINEERED for Circular Economy</h1>
            <p className="text-xl text-gray-600">
              We empower global brands to achieve zero-waste goals through state-of-the-art recycling technology and uncompromising data security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: 'E-Waste Management', icon: ShieldCheck, desc: 'End-to-end IT asset disposition featuring certified dismantling and military-grade data destruction to protect your enterprise security and ensure compliance.' },
              { title: 'Lithium Battery Recycling', icon: Factory, desc: 'Specialized processing for EV and electronic batteries, focusing on the high-purity extraction of lithium and cobalt to power tomorrow sustainably.' },
              { title: 'Plastic Waste Recycling', icon: Recycle, desc: 'Advanced sorting and precision pelletizing technology that transforms industrial and commercial plastic waste into high-quality, reusable materials.' },
              { title: 'Paper Recycling', icon: Leaf, desc: 'Maximize environmental impact with closed-loop processing that saves trees, conserves water, and dramatically reduces your corporate carbon footprint.' },
              { title: 'Green Metal Recovery', icon: Truck, desc: 'High-yield extraction of iron, copper, and aluminum from complex industrial waste streams, securing essential raw materials for the circular economy.' },
              { title: 'EPR Consulting', icon: BarChart3, desc: 'Strategic guidance to seamlessly navigate government regulations, manage compliance documentation, and achieve your Extended Producer Responsibility targets.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-green-500 transition-colors">
                <div className="w-14 h-14 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <Link href="/request-quote" className="text-green-600 font-bold hover:text-green-800 inline-flex items-center">
                  Request Service <ArrowLeft className="ml-2 rotate-180" size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-green-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Why Enterprises trust ECO GREEN</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-green-700">
              <div className="px-8">
                <p className="text-5xl font-bold text-orange-400 mb-2">100+</p>
                <h4 className="text-xl font-bold mb-2">Enterprise Partners</h4>
                <p className="text-green-200">Global Brands & Fortune 500 Clients rely on our secure processing.</p>
              </div>
              <div className="px-8 pt-8 md:pt-0">
                <p className="text-5xl font-bold text-orange-400 mb-2">12+</p>
                <h4 className="text-xl font-bold mb-2">Years of Excellence</h4>
                <p className="text-green-200">Pioneers in Urban Mining and Industrial-scale materials recovery.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}