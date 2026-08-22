const fs = require('fs');

let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Fix the footer logo
// Remove the white pill div and add invert mix-blend-screen to the img
code = code.replace(
  /<div className="bg-white px-3 py-1\.5 rounded flex items-center justify-center"><img src="http:\/\/goecogreen\.in\/wp-content\/uploads\/2024\/10\/cropped-go_eco_green_logo-1-e1730535315217-1024x232\.jpg" alt="Eco Green" className="h-8 w-auto object-contain" \/><\/div>/g,
  '<img src="http://goecogreen.in/wp-content/uploads/2024/10/cropped-go_eco_green_logo-1-e1730535315217-1024x232.jpg" alt="Eco Green" className="h-10 w-auto object-contain invert mix-blend-screen opacity-90" />'
);

// 2. Fix the client logos (use google favicons instead of clearbit)
code = code.replace(
  /https:\/\/logo\.clearbit\.com\/\$\{client\.domain\}/g,
  'https://www.google.com/s2/favicons?domain=${client.domain}&sz=128'
);

// Also remove the fallback onError that uses ui-avatars, as google favicons are reliable
code = code.replace(
  /onError=\{\(e\) => \{.*?\}\}/g,
  ''
);

fs.writeFileSync('app/page.tsx', code);
console.log('Fixed footer logo and client favicons');
