const {getGoKey, getPage, mainUrl} = require('./constants');

/**
 * Переход на новую локу
 * Возможные route:
 * 1 - вверх
 * 4 - влево
 * 5 - вправо
 * 8 - вниз
 */
async function walk(route) {
	const page = getPage();

	const nameNewLoc = await page.evaluate(function(route, getGoKey) {
		return document.querySelector(`a[href="?go=${ route }&go_key=${ getGoKey }"]`).innerText;
	}, route, getGoKey());

	await page.click(`a[href="?go=${ route }&go_key=${ getGoKey() }"]`);
	const nameCurrentLoc = await page.evaluate(function() {
		return document.querySelector('div.name').innerText;
	});

	if (nameNewLoc.trim() !== nameCurrentLoc.trim()) {
		await walk(route);
	}
}

/**
 * Переход в окрестности
 * Возможные route:
 * n - Север
 * e - Восток
 * s - Юг
 * w - Восток
 * c - Центр
 */
async function walkNeighborhood(route) {
	const page = getPage();

	try {
		await page.click(`a[href="javascript:show_hide('location')"]`);
	} catch (e) {}
	await page.click(`a[href="?dgo=${ route }&go_key=${ getGoKey() }"]`);
}

/**
 * Переход из Припяти на Юпитер
 */
async function transitionFromPripyatToJupiter() {

}

/**
 * Переход из Юпитера на Затон
 */
async function transitionFromJupiterToBackwater() {
	const page = getPage();
	await page.goto(`https://sta1kers.ru/npc/locman.php?quest=10`);
	await page.goto(`https://sta1kers.ru/npc/locman.php?quest=11`);
	await page.goto(mainUrl);
}

module.exports = {
	walk,
	walkNeighborhood,
	transitionFromPripyatToJupiter,
	transitionFromJupiterToBackwater,
};
