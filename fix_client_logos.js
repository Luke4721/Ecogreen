const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const clientLogosStr = `const clientLogos = [
    { name: 'Samsung', url: 'https://cdn.simpleicons.org/samsung/black' },
    { name: 'Oppo', url: 'https://cdn.simpleicons.org/oppo/black' },
    { name: 'Panasonic', url: 'https://cdn.simpleicons.org/panasonic/black' },
    { name: 'LG', url: 'https://cdn.simpleicons.org/lg/black' },
    { name: 'HCL', url: 'https://cdn.simpleicons.org/hcl/black' },
    { name: 'ITC Limited', url: '/client-logos/itc_limited.svg' },
    { name: 'Wipro', url: 'https://cdn.simpleicons.org/wipro/black' },
    { name: 'Mercedes-Benz', url: '/client-logos/mercedes_benz.svg' },
    { name: 'Paytm', url: 'https://cdn.simpleicons.org/paytm/black' },
    { name: 'Dell', url: 'https://cdn.simpleicons.org/dell/black' },
  ];`;

code = code.replace(/const clientLogos = \[[\s\S]*?\];/, clientLogosStr);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed client logos in page.tsx');
