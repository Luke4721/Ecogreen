const fs = require('fs');
let code = fs.readFileSync('app/request-quote/page.tsx', 'utf8');

// Fix the "use client" error
code = code.replace('import Link from "next/link";\n"use client";', '"use client";\nimport Link from "next/link";');

// Let's just find the first `<div className="min-h-screen` and add the back button inside it
const match = code.match(/<div className="min-h-screen[^>]*>/);
if (match) {
  const replacement = match[0] + `
      <Link href="/" className="absolute top-8 left-8 text-green-700 hover:text-green-900 font-bold flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all z-50">
        ← Back to Home
      </Link>`;
  code = code.replace(match[0], replacement);
}

// Change the X button at the top right to act as a back button too
code = code.replace(/<button([^>]*)>[\s]*<X size=\{24\} \/>[\s]*<\/button>/g, '<Link href="/" $1><X size={24} /></Link>');

// Let's also ensure the orange colors are gone
code = code.replace(/bg-[#ff5e14]/g, 'bg-green-600');
code = code.replace(/hover:bg-[#e04a08]/g, 'hover:bg-green-700');
code = code.replace(/border-[#ff5e14]/g, 'border-green-600');
code = code.replace(/text-[#ff5e14]/g, 'text-green-600');
code = code.replace(/bg-orange-50/g, 'bg-green-50');

fs.writeFileSync('app/request-quote/page.tsx', code);
console.log('Fixed request quote');
