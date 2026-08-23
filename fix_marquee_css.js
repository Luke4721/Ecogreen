const fs = require('fs');

let css = fs.readFileSync('app/globals.css', 'utf8');

const newMarquee = `@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
}`;

css = css.replace(/@keyframes marquee[\s\S]*?\}\s*\.animate-marquee[\s\S]*?\}\s*\.animate-marquee2[\s\S]*?\}/, newMarquee);

fs.writeFileSync('app/globals.css', css);
console.log('Fixed marquee css');
