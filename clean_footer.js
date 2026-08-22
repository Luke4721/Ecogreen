const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(
  /<div className="flex items-center gap-2 mb-8 bg-white\/5 inline-block p-4 rounded-xl">/,
  '<div className="flex items-center gap-2 mb-8">'
);

fs.writeFileSync('app/page.tsx', code);
