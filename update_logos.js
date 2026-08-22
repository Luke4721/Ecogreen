const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Update header logo
code = code.replace(/src="\/logo\.png"/g, 'src="/logo_transparent.png"');
code = code.replace(/className=\{\`h-10 w-auto object-contain transition-all duration-300 \$\{currentTheme === 'dark' \? 'brightness-125' : ''\}\`\}/g, 'className="h-12 md:h-14 w-auto object-contain transition-all duration-300 drop-shadow-md"');

// Update footer logo
code = code.replace(/className="h-10 w-auto object-contain brightness-125"/g, 'className="h-16 md:h-20 w-auto object-contain drop-shadow-lg"');

// Update client logos
const clientLogosStr = `const clientLogos = [
    { name: 'Samsung', url: '/client-logos/samsung.svg' },
    { name: 'Oppo', url: '/client-logos/oppo.svg' },
    { name: 'Vivo', url: '/client-logos/vivo.png' },
    { name: 'Whirlpool', url: '/client-logos/whirlpool.svg' },
    { name: 'HCL', url: '/client-logos/hcl.svg' },
    { name: 'ITC Limited', url: '/client-logos/itc_limited.svg' },
    { name: 'Haier', url: '/client-logos/haier.svg' },
    { name: 'Wipro', url: '/client-logos/wipro.svg' },
    { name: 'Mercedes-Benz', url: '/client-logos/mercedes_benz.svg' },
    { name: 'Paytm', url: '/client-logos/paytm.svg' },
  ];`;

code = code.replace(/const clientLogos = \[[\s\S]*?\];/, clientLogosStr);

// Make client logos big and completely original colors (no grayscale)
code = code.replace(
  /className="max-h-12 max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"/g,
  'className="max-h-16 md:max-h-20 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"'
);

// We should also reduce the height of the white box if we made the logo bigger? No, 128px (h-32) is perfect.
// Just remove the bg-white and border if they look too boxy? 
// No, the user liked the cards in Garbox replica. But let's make sure the background is clean.

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed logos in page.tsx');
