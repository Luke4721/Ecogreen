const fs = require('fs');

// 1. Fix app/page.tsx (Animations, Footer Text, Social Icons)
let pageCode = fs.readFileSync('app/page.tsx', 'utf8');

// A. Animations for cards
pageCode = pageCode.replace(
  /visible: \{ opacity: 1, y: 0, rotateY: 0, transition: \{ type: 'spring' as const, delay: i \* 0\.2, duration: 1\.5 \} \}/g,
  "visible: { opacity: 1, y: 0, rotateY: 0, transition: { type: 'spring' as const, delay: i * 0.1, duration: 0.6 } }"
);

// B. Remove annoying background text in footer
pageCode = pageCode.replace(
  /<div className="absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-\[0\.03\] pointer-events-none">[\s\S]*?<\/div>/,
  ''
);

// C. Import social icons
if (!pageCode.includes('Facebook')) {
  pageCode = pageCode.replace(
    /Factory, MonitorPlay, Droplets\n\} from 'lucide-react';/,
    "Factory, MonitorPlay, Droplets, Facebook, Instagram, Linkedin, Twitter\n} from 'lucide-react';"
  );
}

// D. Replace social letters with icons
const oldSocials = `{\\['f', 'ig', 'in', 'x'\\].map\\(\\(social, i\\) => \\(
                  <a key=\\{i\\} href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:-translate-y-2 transition-all duration-300 uppercase font-bold text-sm">
                    \\{social\\}
                  </a>
                \\)\\)}`;

const newSocials = `{[{ icon: <Facebook size={20} />, link: '#' }, { icon: <Instagram size={20} />, link: '#' }, { icon: <Linkedin size={20} />, link: '#' }, { icon: <Twitter size={20} />, link: '#' }].map((social, i) => (
                  <a key={i} href={social.link} className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:-translate-y-2 transition-all duration-300 text-white">
                    {social.icon}
                  </a>
                ))}`;

pageCode = pageCode.replace(new RegExp(oldSocials), newSocials);

fs.writeFileSync('app/page.tsx', pageCode);

// 2. Fix app/request-quote/page.tsx (Add back button)
let quoteCode = fs.readFileSync('app/request-quote/page.tsx', 'utf8');

// Replace the <button> with an X icon to a <Link href="/"> with an X icon, or add a Back to Home link.
// Let's add a "Back to Home" button at the top left of the screen, outside the white box, or change the X.
// The user uploaded an image of it: media_1787424174700.png.
// There is an X at the top right of the white modal.
if (quoteCode.includes('<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">')) {
  quoteCode = quoteCode.replace(
    /<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">([\s\S]*?)<\/button>/,
    '<Link href="/" className="absolute top-6 right-6 text-slate-400 hover:text-green-600 transition-colors">$1</Link>'
  );
} else {
  // If we can't find it easily, let's just insert a back button at the very top of the page.
  // We'll replace the top container div.
  quoteCode = quoteCode.replace(
    /<div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-6">/,
    `<div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-6 relative">
      <Link href="/" className="absolute top-8 left-8 text-green-700 hover:text-green-900 font-bold flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
        ← Back to Home
      </Link>`
  );
  // And change the Display Quotes button from orange to green just in case
  quoteCode = quoteCode.replace(/bg-orange-500 hover:bg-orange-600/g, 'bg-green-600 hover:bg-green-700');
}
if (!quoteCode.includes('import Link from "next/link";')) {
  quoteCode = 'import Link from "next/link";\n' + quoteCode;
}
fs.writeFileSync('app/request-quote/page.tsx', quoteCode);

// 3. Fix app/business-solutions/page.tsx (Change orange button to green)
let bizCode = fs.readFileSync('app/business-solutions/page.tsx', 'utf8');
bizCode = bizCode.replace(/bg-orange-500 hover:bg-orange-600/g, 'bg-green-600 hover:bg-green-700');
bizCode = bizCode.replace(/text-orange-500/g, 'text-green-600');
bizCode = bizCode.replace(/text-orange-600/g, 'text-green-700');
fs.writeFileSync('app/business-solutions/page.tsx', bizCode);

console.log('All changes applied successfully!');
