const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// Fix footer logo
code = code.replace(
  /<img src="http:\/\/goecogreen\.in\/wp-content\/uploads\/2024\/10\/cropped-go_eco_green_logo-1-e1730535315217-1024x232\.jpg" alt="Eco Green" className="h-10 w-auto object-contain brightness-0 invert" \/>/g,
  '<div className="bg-white px-3 py-1.5 rounded flex items-center justify-center"><img src="http://goecogreen.in/wp-content/uploads/2024/10/cropped-go_eco_green_logo-1-e1730535315217-1024x232.jpg" alt="Eco Green" className="h-8 w-auto object-contain" /></div>'
);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed footer logo in page.tsx');
