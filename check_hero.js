const fs = require('fs');
const code = fs.readFileSync('app/page.tsx', 'utf8');
const start = code.indexOf('<section className="relative h-[600px]');
const end = code.indexOf('</section>', start);
console.log(code.substring(start, end));
