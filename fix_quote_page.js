const fs = require('fs');
let code = fs.readFileSync('app/request-quote/page.tsx', 'utf8');
code = code.replace('import Link from "next/link";\n', '');
fs.writeFileSync('app/request-quote/page.tsx', code);
