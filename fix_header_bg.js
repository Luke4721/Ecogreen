const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Find the header tag
const match = code.match(/<header className=\{\`fixed w-full top-0 z-50 transition-all duration-500[^>]+>/);

if (match) {
  const newHeader = `<header className={\`fixed w-full top-0 z-50 transition-all duration-500 \${scrolled ? 'py-4 shadow-xl bg-white/80 dark:bg-black/40 backdrop-blur-xl border-b border-slate-200 dark:border-white/10' : 'py-6 bg-transparent border-transparent'}\`}>`;
  code = code.replace(match[0], newHeader);
  fs.writeFileSync('app/page.tsx', code);
  console.log('Fixed header class');
} else {
  console.log('Header not found');
}
