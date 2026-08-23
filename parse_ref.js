const fs = require('fs');
const cheerio = require('cheerio');
const contentRef = fs.readFileSync('C:/Users/Windows/.gemini/antigravity/brain/44e68c50-160d-45d5-b517-03d260744ea6/.system_generated/steps/1256/content.md', 'utf8');
const htmlRef = contentRef.split('---')[1];
const $ = cheerio.load(htmlRef);
let c = 0;
$('.elementor-element').each((i, el) => {
  if ($(el).data('element_type') === 'section' || $(el).hasClass('e-con') || $(el).hasClass('elementor-section')) {
     const text = $(el).text().replace(/\s+/g, ' ').trim().substring(0, 150);
     if (text.length > 20 && $(el).parent().hasClass('elementor')) {
         console.log('Section ' + (c++) + ':', text);
     }
  }
});
