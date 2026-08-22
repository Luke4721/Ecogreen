const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

const newMarqueeCode = `const clientLogos = [
    { name: 'Samsung', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Oppo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/OPPO_Logo.svg' },
    { name: 'Vivo', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vivo_mobile_logo.png' },
    { name: 'Whirlpool', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Whirlpool_Corporation_Logo.svg' },
    { name: 'HCL', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg' },
    { name: 'ITC Limited', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg' },
    { name: 'Haier', url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Haier_logo.svg' },
    { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Mercedes-Benz', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
    { name: 'Paytm', url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg' },
  ];`;

code = code.replace(/const clientLogos = \[[^]+?\];/, newMarqueeCode);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed URLs');
