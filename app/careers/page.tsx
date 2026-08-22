import React from 'react';
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
}