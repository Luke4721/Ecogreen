const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');
code = code.replace('style={{ height: `\\${h}%` }}', 'style={{ height: `${h}%` }}');
code = code.replace('style={{ height: \\`\\${h}%\\` }}', 'style={{ height: `${h}%` }}');
fs.writeFileSync('app/page.tsx', code);
