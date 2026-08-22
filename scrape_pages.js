const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = [
    { name: 'business-solutions', url: 'https://goecogreen.in/services-and-business-solution/' },
    { name: 'about-us', url: 'https://goecogreen.in/about-us/' },
    { name: 'sustainability', url: 'https://goecogreen.in/environment-sustainability/' },
    { name: 'careers', url: 'https://goecogreen.in/careers/' },
    { name: 'request-quote', url: 'https://goecogreen.in/contact-us/' }
];

(async () => {
    try {
        const browser = await puppeteer.launch();
        const results = {};

        for (const item of urls) {
            console.log(`Scraping ${item.url}...`);
            const page = await browser.newPage();
            try {
                await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
                const text = await page.evaluate(() => {
                    // Try to get main content if possible, otherwise body
                    const main = document.querySelector('main') || document.body;
                    return main.innerText;
                });
                results[item.name] = text;
            } catch (err) {
                console.log(`Failed to scrape ${item.url}: ${err.message}`);
                results[item.name] = "Failed to load content";
            }
            await page.close();
        }

        fs.writeFileSync('pages_scraped.json', JSON.stringify(results, null, 2));
        console.log('Successfully scraped all pages.');
        await browser.close();
    } catch (e) {
        console.error('Error fetching website data:', e);
        process.exit(1);
    }
})();
