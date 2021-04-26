const {mainUrl, getPage} = require('./constants');

/**
 * Прачечная -[121, 122, 123, 124]
 * «Лоза» (Запад) - [131, 132, 133, 134]
 * Гастроном (Юг) - [129, 130, 993, 994]
 */
async function farm(mutants) {
	const page = getPage();
	await page.goto(mainUrl);

	if (!mutants) {
		mutants = [121, 122, 123, 124];
	}

	for (const mutant of mutants) {
		try {
			await page.click(`a[href="?ib=${ mutant }&mod=k"]`);
		} catch (e) {}
		try {
			await page.click(`a[href="?ib=${ mutant }&mod=w"]`);
		} catch (e) {}
		try {
			await page.click(`a[href="?ib=${ mutant }&mod=p"]`);
		} catch (e) {}
	}
}

module.exports = farm;
