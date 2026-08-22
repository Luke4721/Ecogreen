import React from 'react';
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
}