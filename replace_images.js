const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

// About Us Image
code = code.replace(
  /<div className="aspect-square rounded-2xl overflow-hidden bg-gray-200">\s*<div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"><\/div>\s*<\/div>/,
  '<div className="aspect-square rounded-2xl overflow-hidden bg-gray-200"><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="Eco Green Facility" className="w-full h-full object-cover" /></div>'
);

// FAQ Image
code = code.replace(
  /<div className="aspect-\[4\/5\] rounded-2xl overflow-hidden bg-gray-200">\s*<div className="w-full h-full bg-gradient-to-tr from-green-800 to-green-600 opacity-80 mix-blend-multiply"><\/div>\s*<\/div>/,
  '<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200"><img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80" alt="Recycling Process" className="w-full h-full object-cover" /></div>'
);

// Testimonial Avatar
code = code.replace(
  /<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">\s*<div className="w-full h-full bg-gray-300"><\/div>\s*<\/div>/,
  '<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="EcoGreen Leadership" className="w-full h-full object-cover" /></div>'
);

// Testimonial Background Image
code = code.replace(
  /<div className="h-full w-full bg-green-800"><\/div>/,
  '<div className="h-full w-full bg-green-800 relative"><img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80" alt="Sustainability" className="w-full h-full object-cover opacity-50 mix-blend-overlay" /></div>'
);

// Client Logos
code = code.replace(
  /\{\['Samsung', 'Oppo', 'Vivo', 'Whirlpool', 'HCL', 'ITC Limited', 'Haier', 'Wipro', 'Mercedes-Benz', 'Paytm'\].slice\(0, 6\).map\(\(client, idx\) => \(\s*<span key=\{idx\} className="text-xl font-bold uppercase tracking-wider text-gray-400">\{client\}<\/span>\s*\)\)\}/,
  `{[
                { name: 'Samsung', domain: 'samsung.com' },
                { name: 'Oppo', domain: 'oppo.com' },
                { name: 'Vivo', domain: 'vivo.com' },
                { name: 'Whirlpool', domain: 'whirlpool.com' },
                { name: 'HCL', domain: 'hcltech.com' },
                { name: 'ITC', domain: 'itcportal.com' },
              ].map((client, idx) => (
                <div key={idx} className="flex items-center justify-center h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                  <img src={\`https://logo.clearbit.com/\${client.domain}\`} alt={client.name} className="h-8 md:h-10 w-auto object-contain" />
                </div>
              ))}`
);

fs.writeFileSync('app/page.tsx', code);
console.log('Images replaced.');
