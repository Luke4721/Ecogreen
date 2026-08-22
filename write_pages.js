const fs = require('fs');

const businessSolutions = `import React from 'react';
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
          <Link href="/request-quote" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium transition-colors">
            Get a Quote
          </Link>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Our Services</span>
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
}`;

const aboutUs = `import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Target, Globe2, Cpu } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm h-20 flex items-center">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-900 font-medium">
            <ArrowLeft className="mr-2" size={20} /> Back to Home
          </Link>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Engineering a Zero Waste Future</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Eco Green is an industrial-scale materials recovery pioneer. We transform corporate liability into high-value environmental assets.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-16 shadow-lg border border-gray-100 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-orange-500" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Company Overview & Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are more than a recycling facility. We are your strategic partner in sustainability. By deploying advanced sorting infrastructure and precision recovery technologies, we future-proof enterprise supply chains, ensure absolute regulatory compliance, and lead the transition to a global circular economy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is a zero-waste future driven by continuous innovation, where end-of-life technology fuels the next generation of manufacturing rather than filling landfills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-900 text-white rounded-2xl p-10">
              <Globe2 className="text-green-400 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Global Compliance</h3>
              <p className="text-green-100 leading-relaxed">
                We strictly adhere to international environmental laws, ISO standards, and data security mandates to ensure that your discarded assets are processed with 100% legal compliance and transparency.
              </p>
            </div>
            <div className="bg-orange-500 text-white rounded-2xl p-10">
              <Cpu className="text-orange-200 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Advanced Infrastructure</h3>
              <p className="text-orange-50 leading-relaxed">
                Our state-of-the-art facilities utilize proprietary hydrometallurgical processes and precision machinery to extract maximum value from e-waste, preventing toxic runoff and atmospheric emissions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}`;

const sustainability = `import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Leaf, Recycle, Wind } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm h-20 flex items-center">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-900 font-medium">
            <ArrowLeft className="mr-2" size={20} /> Back to Home
          </Link>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">THE SUSTAINABILITY MANIFESTO</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">The Green Standard: Directing the Future of Circular Economies</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-12 text-center text-gray-600">
              True environmental sustainability cannot coexist with low-grade material downcycling. We are rewriting global reprocessing principles through deep elemental recovery, setting the benchmarks for completely emission-optimized extraction pipelines.
            </p>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Our Core Structural Frameworks</h2>
              <p className="mb-8">
                We guide global brands away from fragmented linear models toward resilient circularity by adhering to three uncompromising operational pillars:
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Recycle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Elemental Recovery</h3>
                    <p className="text-gray-600">We do not just shred materials; we extract the base elemental building blocks—such as Lithium, Cobalt, Copper, and Iron—allowing them to be directly reinserted into the global manufacturing supply chain without degradation.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Wind size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Emission-Optimized Pipelines</h3>
                    <p className="text-gray-600">Traditional smelting is highly polluting. Our proprietary extraction facilities operate on closed-loop systems that neutralize atmospheric off-gassing and treat 100% of discharged water, achieving a net-zero impact local ecosystem.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Auditable Carbon Offsetting</h3>
                    <p className="text-gray-600">We provide our enterprise partners with precise, auditable dashboards verifying exactly how many metric tons of CO2e were saved by routing their retired assets through Eco Green rather than landfills.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}`;

const careers = `import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase, ChevronRight } from 'lucide-react';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm h-20 flex items-center">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-900 font-medium">
            <ArrowLeft className="mr-2" size={20} /> Back to Home
          </Link>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">JOIN THE CIRCULAR REVOLUTION</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Build a Career with Purpose.<br/>Engineer the Future.</h1>
            <p className="text-xl text-gray-600">
              Work at the Forefront of Sustainability.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 mb-12 text-center">
            <Briefcase className="mx-auto text-green-600 mb-6" size={48} />
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
              We are a team of environmental scientists, engineers, and logistical experts working to eliminate industrial waste. At Eco Green, you aren't just taking a job—you are joining a mission to solve one of the planet's most critical industrial challenges. We operate at the intersection of advanced technology and ecology.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pitch Your Profile</h3>
              <p className="text-gray-600 mb-6">
                Don't see an open role that fits your exact skills? We are always looking for exceptional talent in metallurgy, compliance, and supply chain logistics. 
              </p>
              <a href="mailto:careers@ecogreenrecyclingpvtltd.com" className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Email Your Resume <ChevronRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}`;

fs.writeFileSync('app/business-solutions/page.tsx', businessSolutions);
fs.writeFileSync('app/about-us/page.tsx', aboutUs);
fs.writeFileSync('app/sustainability/page.tsx', sustainability);
fs.writeFileSync('app/careers/page.tsx', careers);

console.log("Pages written successfully.");
