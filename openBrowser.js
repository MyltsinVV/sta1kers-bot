const puppeteer = require('puppeteer');

async function openBrowser() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 30,
        args: ['--window-size=900,1000']
    });
    const page = (await browser.pages())[0];
    await page.goto('https://sta1kers.ru/login.php');
    await page.setViewport({width: 800, height: 900});
    return page;
}

module.exports = openBrowser;
