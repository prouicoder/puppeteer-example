const puppeteer = require('puppeteer');



(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250 // slow down by 250ms
    })
    const page = await browser.newPage()

    await page.goto('https://www.zomato.com/register');
    await page.waitForSelector('.signin-link', 100);
    await page.click('.signin-link');
    await page.click('#signup-email');
    await page.focus('#sd-fullname');
    await page.keyboard.type('Karthick');
    await page.focus('#sd-email');
    await page.keyboard.type('Karthick.hock@gmail.com');
    await page.click('#sd-newsletter');
    await page.click('#sd-submit');
    await page.screenshot({ path: 'zomatto-signup.png' })
    await browser.close()
})()