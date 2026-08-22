const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(/<img[\s\S]*?src=\{ECO_GREEN_LOGO\}[\s\S]*?className="h-10 w-auto object-contain mix-blend-multiply"[\s\S]*?\/>/, 
  `<img 
                  src="/logo.png" 
                  alt="Eco Green" 
                  className="h-10 w-auto object-contain" 
                />`
);

fs.writeFileSync('app/page.tsx', code);
