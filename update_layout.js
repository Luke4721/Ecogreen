const fs = require('fs');
let code = fs.readFileSync('app/layout.tsx', 'utf8');

code = code.replace(
  'import "./globals.css";',
  'import "./globals.css";\nimport { ThemeProvider } from "../components/ThemeProvider";'
);

code = code.replace(
  '<body className="min-h-full flex flex-col">{children}</body>',
  `<body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>`
);

fs.writeFileSync('app/layout.tsx', code);
console.log('layout.tsx updated');
