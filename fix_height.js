const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');
code = code.replace(/height: \\\`\\\\\$\\{h\\}%\\\`/g, 'height: `${h}%`');
fs.writeFileSync('app/page.tsx', code);
