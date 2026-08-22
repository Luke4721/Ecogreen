const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Fix the Nav Logo (add mix-blend-multiply for light mode)
code = code.replace(
  /\className=\{`h-8 w-auto object-contain transition-all duration-300 \$\{currentTheme === 'dark' \? 'invert hue-rotate-180 brightness-150 mix-blend-screen opacity-100' : ''\}`\}/,
  `className={\`h-8 w-auto object-contain transition-all duration-300 \${currentTheme === 'dark' ? 'invert hue-rotate-180 brightness-150 mix-blend-screen opacity-100' : 'mix-blend-multiply'}\`}`
);

// 2. Replace the Footer
const oldFooterRegex = /<footer className="bg-slate-900 border-t border-slate-800 text-white py-12">[\s\S]*?<\/footer>/;

const newFooter = `<footer className="bg-green-950 text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src={ECO_GREEN_LOGO} 
                  alt="Eco Green" 
                  className="h-10 w-auto object-contain invert hue-rotate-180 mix-blend-screen opacity-90" 
                />
              </div>
              <p className="text-green-100/70 mb-8 max-w-sm">
                Sustainable Solutions for Circular Economy. Subscribe For Sustainability Insights.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded bg-green-900/50 flex items-center justify-center hover:bg-green-500 transition-colors">f</a>
                <a href="#" className="w-10 h-10 rounded bg-green-900/50 flex items-center justify-center hover:bg-green-500 transition-colors">ig</a>
                <a href="#" className="w-10 h-10 rounded bg-green-900/50 flex items-center justify-center hover:bg-green-500 transition-colors">x</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Solutions</h4>
              <ul className="space-y-4 text-green-100/70">
                <li><Link href="/business-solutions" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> E Waste Management</Link></li>
                <li><Link href="/business-solutions" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> Plastic Waste Recycling</Link></li>
                <li><Link href="/business-solutions" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> Paper Recycling</Link></li>
                <li><Link href="/business-solutions" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> Green Metal Recovery</Link></li>
                <li><Link href="/business-solutions" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> EPR Consulting</Link></li>
                <li><Link href="/business-solutions" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> Lithium Battery Recycling</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Company</h4>
              <ul className="space-y-4 text-green-100/70">
                <li><Link href="/about-us" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> Careers</Link></li>
                <li><Link href="/sustainability" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-green-500">→</span> Environment Sustainability</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-900/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-green-100/50 text-sm">
            <p>© 2026 Eco Green Recycling Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>`;

code = code.replace(oldFooterRegex, newFooter);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed header logo and restored rich footer');
