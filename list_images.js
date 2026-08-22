const fs = require('fs');
const code = fs.readFileSync('app/page.tsx', 'utf8');
const matches = [...code.matchAll(/https:\/\/images\.unsplash\.com\/[^"']+/g)];
matches.forEach(m => console.log(m[0]));
