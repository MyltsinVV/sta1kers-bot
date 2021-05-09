const {mainUrl, getPage} = require('./constants');
const arena = require('./arena');

async function murderMutants() {
	const page = getPage();
	await page.goto(mainUrl);

	const mutant = await page.evaluate(() => {
		const mutants = document.querySelectorAll('#mutants img[title="Пистолет"]');
		return mutants[mutants.length - 1]?.parentNode?.getAttribute('href');
	});

	if (mutant) {
		await page.goto(mainUrl + mutant);
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
	const hp = await page.evaluate(() => document.querySelector('#top table.stalker_link.stalker_text td:first-child').innerText);

	if (hp.trim() === '0') {
		await page.goto(`${ mainUrl }?&apt=use`);
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
