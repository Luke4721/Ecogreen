const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');

// Strip out any existing marquee css
css = css.replace(/@keyframes marquee[\s\S]*?\.animate-marquee2[\s\S]*?\}/, '');
css = css.replace(/@keyframes marquee[\s\S]*?\.animate-marquee[\s\S]*?\}/, '');

const newMarquee = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 25s linear infinite;
}
`;

css += newMarquee;
fs.writeFileSync('app/globals.css', css);
console.log('Cleaned and added marquee CSS');
