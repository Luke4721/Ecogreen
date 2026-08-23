const fs = require('fs');

const logos = [
    { name: 'Samsung', file: 'samsung.svg' },
    { name: 'Oppo', file: 'oppo.svg' },
    { name: 'Vivo', file: 'vivo.svg' },
    { name: 'Whirlpool', file: 'whirlpool.svg' },
    { name: 'HCL', file: 'hcl.svg' },
    { name: 'ITC Limited', file: 'itc.svg' },
    { name: 'Haier', file: 'haier.svg' },
    { name: 'Wipro', file: 'wipro.svg' },
    { name: 'Mercedes-Benz', file: 'mercedes.svg' },
    { name: 'Paytm', file: 'paytm.svg' },
];

if (!fs.existsSync('public/client-logos')) {
    fs.mkdirSync('public/client-logos', { recursive: true });
}

logos.forEach(logo => {
    // Generate a sleek typography-based SVG logo
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" width="400" height="150">
    <rect width="400" height="150" fill="transparent"/>
    <text x="200" y="85" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="900" fill="#0f172a" text-anchor="middle" letter-spacing="-1">${logo.name}</text>
</svg>`;
    fs.writeFileSync('public/client-logos/' + logo.file, svg);
});

console.log("Generated local SVGs!");
