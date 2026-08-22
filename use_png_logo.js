const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Remove SVG filter
code = code.replace(/\{\/\* SVG Filter to perfectly remove white background from the JPG logo \*\/\}.+?<\/svg>/s, '');

// 2. Change image src to local PNG and remove the style/mix-blend filters
code = code.replace(/<img[\s\S]*?src=\{ECO_GREEN_LOGO\}[\s\S]*?className=\{`h-10 w-auto object-contain transition-all duration-300 \$\{currentTheme === 'dark' \? 'brightness-200' : ''\}`\}[\s\S]*?style=\{\{ filter: 'url\(#remove-white\)' \}\}[\s\S]*?\/>/, 
  `<img 
              src="/logo.png" 
              alt="Eco Green" 
              className={\`h-10 w-auto object-contain transition-all duration-300 \${currentTheme === 'dark' ? 'brightness-0 invert' : ''}\`}
            />`);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed page.tsx to use real PNG logo');
