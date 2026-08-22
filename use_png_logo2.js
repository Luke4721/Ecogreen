const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// The original block looks something like:
/*
          <Link href="/" className="flex items-center">
            {/* mix-blend-multiply on white background flawlessly removes white from JPG, leaving only green. In dark mode, we invert and screen * /}
            <img 
              src={ECO_GREEN_LOGO} 
              alt="Eco Green" 
              className={\`h-10 w-auto object-contain transition-all duration-300 \${currentTheme === 'dark' ? 'brightness-200' : ''}\`}
              style={{ filter: 'url(#remove-white)' }}
            />
          </Link>
*/

// Replace it with clean PNG version
const oldRegex = /<Link href="\/" className="flex items-center">[\s\S]*?<\/Link>/;
const newLink = `<Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Eco Green" 
              className={\`h-10 w-auto object-contain transition-all duration-300 \${currentTheme === 'dark' ? 'brightness-125' : ''}\`}
            />
          </Link>`;

code = code.replace(oldRegex, newLink);

// Also completely remove SVG filter
code = code.replace(/\{\/\*\s*SVG Filter[\s\S]*?<\/svg>/, '');

fs.writeFileSync('app/page.tsx', code);
