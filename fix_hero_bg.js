const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

code = code.replace(
  '<div className="absolute inset-0 z-0">',
  '<div className="absolute inset-0 z-0 bg-slate-900">'
);

code = code.replace(
  '<div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent dark:from-black/40"></div>',
  '<div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>'
);

// Also let's fix the text color in the glass card so if it's light mode it's dark text, and dark mode it's white text?
// Actually, if the background is ALWAYS dark (because of the image + black/40 overlay), the text should ALWAYS be white.
// Let's make sure the text is explicitly white.
// In the hero: text-white is already there.

fs.writeFileSync('app/page.tsx', code);
