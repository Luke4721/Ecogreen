const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Update footer background
  if (code.includes('bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden')) {
    code = code.replace(
      'bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden',
      'bg-green-950 text-white pt-24 pb-12 relative overflow-hidden'
    );
    changed = true;
  }
  
  // 2. Update footer logo to use logo_white_text.png
  // The footer logo might look like this:
  // <img src="/logo_transparent.png" alt="Eco Green" className="h-16 md:h-20 w-auto object-contain drop-shadow-lg" />
  // Or it might be inside <footer ...>
  
  const footerIdx = code.indexOf('<footer');
  if (footerIdx !== -1) {
    const endFooterIdx = code.indexOf('</footer>', footerIdx);
    if (endFooterIdx !== -1) {
      const footerCode = code.substring(footerIdx, endFooterIdx);
      const newFooterCode = footerCode.replace(/src="\/logo_transparent\.png"/g, 'src="/logo_white_text.png"').replace(/src="\/logo\.png"/g, 'src="/logo_white_text.png"');
      code = code.substring(0, footerIdx) + newFooterCode + code.substring(endFooterIdx);
      changed = true;
    }
  }

  // 3. Make sure the header logo is logo_transparent.png
  const headerIdx = code.indexOf('<header');
  if (headerIdx !== -1) {
    const endHeaderIdx = code.indexOf('</header>', headerIdx);
    if (endHeaderIdx !== -1) {
      const headerCode = code.substring(headerIdx, endHeaderIdx);
      const newHeaderCode = headerCode.replace(/src="\/logo\.png"/g, 'src="/logo_transparent.png"');
      code = code.substring(0, headerIdx) + newHeaderCode + code.substring(endHeaderIdx);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, code);
    console.log('Updated', filePath);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git') && !file.includes('.next')) {
      walk(file);
    } else if (stat && stat.isFile() && file.endsWith('.tsx')) {
      processFile(file);
    }
  });
}

walk('app');
