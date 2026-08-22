const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// The original header class string
const oldHeaderRegex = /<header className=\{\`fixed w-full top-0 z-50 transition-all duration-500 \\\$\\{scrolled \? 'py-4 shadow-xl' : 'py-6'\\} bg-white\/80 dark:bg-black\/20 backdrop-blur-xl border-b border-white\/20 dark:border-white\/10\`\}>/;

const newHeader = `<header className={\`fixed w-full top-0 z-50 transition-all duration-500 \${scrolled ? 'py-4 shadow-xl bg-white/80 dark:bg-black/40 backdrop-blur-xl border-b border-slate-200 dark:border-white/10' : 'py-6 bg-transparent border-transparent'}\`}>`;

code = code.replace(oldHeaderRegex, newHeader);

// Now update the navigation text colors to be white when NOT scrolled
// <nav className="hidden lg:flex items-center gap-10 font-bold text-[15px] uppercase tracking-wider text-slate-800 dark:text-slate-200">
const oldNavRegex = /<nav className="hidden lg:flex items-center gap-10 font-bold text-\[15px\] uppercase tracking-wider text-slate-800 dark:text-slate-200">/;
const newNav = `<nav className={\`hidden lg:flex items-center gap-10 font-bold text-[15px] uppercase tracking-wider transition-colors duration-500 \${scrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'}\`}>`;

code = code.replace(oldNavRegex, newNav);

// Update theme toggle button to look good on transparent background
// <button onClick={toggleTheme} className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-all transform hover:scale-110 hover:rotate-180 duration-500">
const oldThemeBtnRegex = /<button[\s\S]*?onClick=\{toggleTheme\}[\s\S]*?className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-all transform hover:scale-110 hover:rotate-180 duration-500"[\s\S]*?>/;
const newThemeBtn = `<button 
                onClick={toggleTheme} 
                className={\`p-3 rounded-full transition-all transform hover:scale-110 hover:rotate-180 duration-500 \${scrolled ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-500' : 'bg-white/20 hover:bg-white/40 text-white backdrop-blur-md'}\`}
              >`;

code = code.replace(oldThemeBtnRegex, newThemeBtn);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed transparent navbar');
