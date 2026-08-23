const fs = require('fs');
const cheerio = require('cheerio');
const contentRef = fs.readFileSync('C:/Users/Windows/.gemini/antigravity/brain/44e68c50-160d-45d5-b517-03d260744ea6/.system_generated/steps/1256/content.md', 'utf8');
const htmlRef = contentRef.split('---')[1];
const $ = cheerio.load(htmlRef);

$('img[src*="image13.webp"]').each((i, el) => {
   const section = $(el).closest('.elementor-element');
   const p = section.parent().parent().parent().parent().parent().parent().html();
   console.log(p ? p.substring(0, 1500) : 'no html');
});
