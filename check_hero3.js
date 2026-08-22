const fs = require('fs');
const code = fs.readFileSync('app/page.tsx', 'utf8');
const idx = code.indexOf('<section className="relative h-[600px]');
console.log(code.substring(idx, idx+800));
