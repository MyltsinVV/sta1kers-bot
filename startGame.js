const puppeteer = require('puppeteer');
const {mainUrl, setGoKey, setPage, getPage} = require('./constants');

async function startGame(nick, password) {
	// Open Browser
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 30,
		args: ['--window-size=900,1000'],
	});
	setPage((await browser.pages())[0]);
	const page = getPage();
	await page.setViewport({width: 800, height: 900});

	// Login
	await page.goto('https://sta1kers.ru/login.php');
	await page.type('input[name="nick"]', nick);
	await page.type('input[name="pass"]', password);
	await page.click('input[name="log"]');

	// Get goKey
	await page.goto(mainUrl);
	const goKey = (await page.evaluate(() =>
		document.querySelector('#location .linkw > a.linkw')?.getAttribute('href'),
	)).split('&')[1].split('=')[1];
	setGoKey(goKey);
}

module.exports = {
	startGame
};
