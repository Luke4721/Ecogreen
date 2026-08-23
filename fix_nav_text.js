const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

const targetNav = '<nav className="hidden lg:flex items-center gap-10 font-bold text-[15px] uppercase tracking-wider text-slate-800 dark:text-slate-200">';
const replaceNav = '<nav className={`hidden lg:flex items-center gap-10 font-bold text-[15px] uppercase tracking-wider ${scrolled ? "text-slate-800 dark:text-slate-200" : "text-white"}`}>';

if (code.includes(targetNav)) {
    code = code.replace(targetNav, replaceNav);
    fs.writeFileSync('app/page.tsx', code);
    console.log('Nav fixed successfully!');
} else {
    console.log('Nav target not found!');
}
