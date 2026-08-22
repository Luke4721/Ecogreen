const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Fix the top nav bar back to Glass
// It is currently: bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800
code = code.replace(
  /bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800/g,
  'bg-white/80 dark:bg-black/20 backdrop-blur-xl border-b border-white/20 dark:border-white/10'
);

// 2. Add the SVG filter to the layout or just inside the header
const svgFilter = `
          {/* SVG Filter to perfectly remove white background from the JPG logo */}
          <svg width="0" height="0" className="absolute">
            <filter id="remove-white">
              <feColorMatrix type="matrix" values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                -1 -1 -1 0 2.9
              " />
            </filter>
          </svg>
`;

code = code.replace(
  /<header className=\{`fixed w-full top-0 z-50 transition-all duration-500 \$\{scrolled \? 'py-4 shadow-xl' : 'py-6'\} bg-white\/80 dark:bg-black\/20 backdrop-blur-xl border-b border-white\/20 dark:border-white\/10`\}>/,
  `<header className={\`fixed w-full top-0 z-50 transition-all duration-500 \${scrolled ? 'py-4 shadow-xl' : 'py-6'} bg-white/80 dark:bg-black/20 backdrop-blur-xl border-b border-white/20 dark:border-white/10\`}>` + svgFilter
);

// 3. Update the logo img tag to use the filter instead of mix-blend modes
code = code.replace(
  /<img[\s\S]*?src=\{ECO_GREEN_LOGO\}[\s\S]*?className=\{`h-10 w-auto object-contain transition-all duration-300 \$\{currentTheme === 'dark' \? 'invert hue-rotate-180 brightness-150 mix-blend-screen' : 'mix-blend-multiply'\}`\}[\s\S]*?\/>/,
  `<img 
              src={ECO_GREEN_LOGO} 
              alt="Eco Green" 
              className={\`h-10 w-auto object-contain transition-all duration-300 \${currentTheme === 'dark' ? 'brightness-200' : ''}\`}
              style={{ filter: 'url(#remove-white)' }}
            />`
);

// 4. Update ClientsMarquee component to use high-res logos
const newClients = `const clientLogos = [
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
  ));`;

code = code.replace(/const clientLogos = \[[\s\S]*?\}\)\);/m, newClients);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed glass nav, SVG logo filter, and high-res client logos');
