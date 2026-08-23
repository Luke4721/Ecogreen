const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

const clientLogosRegex = /const clientLogos = \[[\s\S]*?\];/;
const newClientLogos = `const clientLogos = [
    { name: 'Samsung', url: '/client-logos/samsung.png' },
    { name: 'Oppo', url: '/client-logos/oppo.png' },
    { name: 'Vivo', url: '/client-logos/vivo.png' },
    { name: 'Whirlpool', url: '/client-logos/whirlpool.png' },
    { name: 'HCL', url: '/client-logos/hcl.png' },
    { name: 'ITC Limited', url: '/client-logos/itc.png' },
    { name: 'Haier', url: '/client-logos/haier.png' },
    { name: 'Wipro', url: '/client-logos/wipro.png' },
    { name: 'Mercedes-Benz', url: '/client-logos/mercedes.png' },
    { name: 'Paytm', url: '/client-logos/paytm.png' },
  ];`;

if (code.match(clientLogosRegex)) {
    code = code.replace(clientLogosRegex, newClientLogos);
    fs.writeFileSync('app/page.tsx', code);
    console.log("Replaced logo URLs to use real favicons!");
} else {
    console.log("Could not find clientLogos array!");
}
