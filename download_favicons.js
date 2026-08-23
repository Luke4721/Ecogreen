const fs = require('fs');

const domains = [
    { name: 'Samsung', domain: 'samsung.com', file: 'samsung.png' },
    { name: 'Oppo', domain: 'oppo.com', file: 'oppo.png' },
    { name: 'Vivo', domain: 'vivo.com', file: 'vivo.png' },
    { name: 'Whirlpool', domain: 'whirlpool.com', file: 'whirlpool.png' },
    { name: 'HCL', domain: 'hcltech.com', file: 'hcl.png' },
    { name: 'ITC Limited', domain: 'itcportal.com', file: 'itc.png' },
    { name: 'Haier', domain: 'haier.com', file: 'haier.png' },
    { name: 'Wipro', domain: 'wipro.com', file: 'wipro.png' },
    { name: 'Mercedes-Benz', domain: 'mercedes-benz.com', file: 'mercedes.png' },
    { name: 'Paytm', domain: 'paytm.com', file: 'paytm.png' },
];

async function downloadFavicons() {
    for (const logo of domains) {
        const url = 'https://www.google.com/s2/favicons?domain=' + logo.domain + '&sz=128';
        const res = await fetch(url);
        if (res.ok) {
            const buffer = await res.arrayBuffer();
            fs.writeFileSync('public/client-logos/' + logo.file, Buffer.from(buffer));
            console.log("Downloaded", logo.name);
        } else {
            console.log("Failed", logo.name);
        }
    }
}

downloadFavicons();
