import React from 'react';
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
}