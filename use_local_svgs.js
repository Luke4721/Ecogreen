const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

const clientLogosRegex = /const clientLogos = \[[\s\S]*?\];/;
const newClientLogos = `const clientLogos = [
    { name: 'Samsung', url: '/client-logos/samsung.svg' },
    { name: 'Oppo', url: '/client-logos/oppo.svg' },
    { name: 'Vivo', url: '/client-logos/vivo.svg' },
    { name: 'Whirlpool', url: '/client-logos/whirlpool.svg' },
    { name: 'HCL', url: '/client-logos/hcl.svg' },
    { name: 'ITC Limited', url: '/client-logos/itc.svg' },
    { name: 'Haier', url: '/client-logos/haier.svg' },
    { name: 'Wipro', url: '/client-logos/wipro.svg' },
    { name: 'Mercedes-Benz', url: '/client-logos/mercedes.svg' },
    { name: 'Paytm', url: '/client-logos/paytm.svg' },
  ];`;

if (code.match(clientLogosRegex)) {
    code = code.replace(clientLogosRegex, newClientLogos);
    fs.writeFileSync('app/page.tsx', code);
    console.log("Replaced logo URLs to use local SVGs!");
} else {
    console.log("Could not find clientLogos array!");
}
