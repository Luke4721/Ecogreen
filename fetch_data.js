const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        await page.goto('http://goecogreen.in/', { waitUntil: 'networkidle2' });
        
        // Wait a bit for JS to render numbers and lazy load images
        await new Promise(r => setTimeout(r, 5000));
        
        // Auto-scroll to load lazy images
        await page.evaluate(async () => {
            await new Promise((resolve) => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });
        
        await new Promise(r => setTimeout(r, 2000));

        const data = await page.evaluate(() => {
            const images = Array.from(document.querySelectorAll('img')).map(img => ({
                src: img.src,
                alt: img.alt
            }));
            const links = Array.from(document.querySelectorAll('a')).map(a => ({
                href: a.href,
                text: a.innerText
            }));
            return { images, links, text: document.body.innerText };
        });

        fs.writeFileSync('website_scraped.json', JSON.stringify(data, null, 2));
        
        console.log('Successfully scraped data.');
        await browser.close();
    } catch (e) {
        console.error('Error fetching website data:', e);
        process.exit(1);
    }
})();
