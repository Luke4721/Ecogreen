const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');
const match = code.match(/<div className="flex items-center gap-2 mb-8[^>]+>[\s\S]+?<\/div>/);
if (match) console.log(match[0]);
