const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({ Referer: 'https://www.smashingmagazine.com/' })
    await page.goto('https://www.smashingmagazine.com/articles/');
    await page.waitForSelector('h1.article--post__title > a');
    const stories = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('h1.article--post__title > a'))
        return links.map(link => link.href).slice(0, 10)
    })
    console.log(stories);
    await browser.close();
})();

