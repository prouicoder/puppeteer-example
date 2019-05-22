const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.cognizant.com', { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'cognizant.pdf', format: 'A4' });

    await browser.close();
})();