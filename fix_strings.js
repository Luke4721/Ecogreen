const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix string templates
code = code.replace(/\\\$/g, '$');
code = code.replace(/\\`/g, '`');

fs.writeFileSync('app/page.tsx', code);
