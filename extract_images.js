const fs = require('fs');
const html = fs.readFileSync('website_raw.html', 'utf-8');
const images = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
console.log(Array.from(new Set(images)).join('\n'));
