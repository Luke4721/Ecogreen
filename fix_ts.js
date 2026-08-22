const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix framer-motion type issues by casting types as any, or using correct literal types
code = code.replace(/type: 'spring'/g, "type: 'spring' as const");
code = code.replace(/type: 'tween'/g, "type: 'tween' as const");

fs.writeFileSync('app/page.tsx', code);
