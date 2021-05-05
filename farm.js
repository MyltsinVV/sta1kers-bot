const {mainUrl, getPage} = require('./constants');
const arena = require('./arena');

async function murderMutants() {
	const page = getPage();
	await page.goto(mainUrl);

	// const mutants = [121, 122, 123, 124];
	// const mutants = [1073, 1074, 1075, 1076];
	const mutants = [4, 5, 6, 7];

	for (const mutant of mutants) {
		try {
			await page.click(`a[href="?ib=${ mutant }&mod=p"]`);
		} catch (e) {}
	}
}

const arr = [
	'arena',
	'farm',
];

async function farm() {
	await series();
}

async function series() {
	const page = getPage();
	const hp = await page.evaluate(() => document.querySelector('img[src="../img/ico/life.png"]').parentNode.innerText);

	if (hp.trim() === '0') {
		const apte4ka = await page.evaluate(() =>
				document.querySelector('small.stalker_link > img[src="../img/ico/apte4ka.png"]')?.parentNode?.innerText,
		);
		if (!apte4ka) {
			await page.goto(`${ mainUrl }?&apt=use`);
		}
	} else {
		const item = arr.shift();
		if (item === 'arena') {
			const time = await arena(page);
			setTimeout(() => {
				arr.unshift('arena');
			}, time * 1000);
		} else if (item === 'farm') {
			await murderMutants();
			arr.push('farm');
		}
	}

	setTimeout(async() => {
		await series();
	}, 2000);
}

module.exports = {
	farm,
};
