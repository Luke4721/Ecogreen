const fs = require('fs');
let code = fs.readFileSync('app/globals.css', 'utf8');

// Add Tailwind v4 class-based dark mode custom variant
if (!code.includes('@custom-variant dark')) {
  code = code.replace('@import "tailwindcss";', '@import "tailwindcss";\n\n@custom-variant dark (&:is(.dark *));\n');
}
fs.writeFileSync('app/globals.css', code);
console.log('globals.css updated for dark mode class strategy');
