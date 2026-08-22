const fs = require('fs');
let code = fs.readFileSync('app/request-quote/page.tsx', 'utf8');

// Quick fixes for dark mode support on quote page
code = code.replace(/bg-gray-50/g, 'bg-gray-50 dark:bg-slate-950');
code = code.replace(/bg-white/g, 'bg-white dark:bg-slate-900');
code = code.replace(/text-gray-900/g, 'text-gray-900 dark:text-white');
code = code.replace(/text-gray-700/g, 'text-gray-700 dark:text-slate-300');
code = code.replace(/text-gray-600/g, 'text-gray-600 dark:text-slate-400');
code = code.replace(/text-gray-500/g, 'text-gray-500 dark:text-slate-500');
code = code.replace(/border-gray-200/g, 'border-gray-200 dark:border-slate-800');
code = code.replace(/border-gray-100/g, 'border-gray-100 dark:border-slate-800/50');
code = code.replace(/bg-gray-200/g, 'bg-gray-200 dark:bg-slate-800');

fs.writeFileSync('app/request-quote/page.tsx', code);
console.log('Quote page dark mode classes added');
