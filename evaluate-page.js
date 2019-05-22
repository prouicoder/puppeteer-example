const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://store.mi.com/in/buy/product/mi-band-3');
    const price = await page.$eval('#J_showPrice', span => span.textContent);
    console.log(price);
    await browser.close();
})();
