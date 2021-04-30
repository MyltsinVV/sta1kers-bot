const {getPage, mainUrl} = require('./constants');
const {walk, walkNeighborhood} = require('./walk');

/**
 * Найти хабар на локации
 */
async function searchSwag() {
	const page = getPage();

	const content = await page.content();
	const index = content.indexOf('var cells = "');
	if (index > 0) {
		await page.goto(`https://sta1kers.ru/zona.php?hb_pass=${ content.slice(index + 13, index + 18) }`);
	}
}

/**
 * Поиск хабара на Затоне
 */
async function searchSwagBackwater() {
	// Первая полоса
	await walk(1);
	await walk(4);
	await walk(4);
	await searchSwag();
	await walk(8);
	await walk(8);
	await searchSwag();
	await walk(8);
	await walk(8);
	// Вторая полоса
	await walk(5);
	await searchSwag();
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	// Третья полоса
	await walk(5);
	await searchSwag();
	await walk(8);
	await walk(8);
	await searchSwag();
	// Четвёртая полоса
	await walk(5);
	await searchSwag();
	await walk(8);
	// Пятая полоса
	await walk(5);
	await searchSwag();
	await walk(8);
	await searchSwag();
	// Возвращаемся домой
	await walk(4);
	await walk(4);
	await walk(1);
	await walk(1);
	await walk(1);
}

/**
 * Поиск хабара на Юпитере
 */
async function searchSwagJupiter() {
	// Первая полоса
	await walk(4);
	await searchSwag();
	await walk(8);
	await searchSwag();
	await walk(8);
	await searchSwag();
	await walk(8);
	await searchSwag();
	// Вторая полоса
	await walk(5);
	await searchSwag();
	await walk(1);
	await searchSwag();
	await walk(1);
	await walk(1);
	await walk(1);
	await searchSwag();
	// Третья полоса
	await walk(5);
	await searchSwag();
	await walk(8);
	await searchSwag();
	await walk(8);
	await searchSwag();
	await walk(8);
	await searchSwag();
	await walk(8);
	await searchSwag();
	// Четвёртая и пятая полоса
	await walk(5);
	await walk(5);
	await searchSwag();
	await walk(4);
	await walk(1);
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	await walk(1);
	await walk(5);
	await searchSwag();
	// Возвращение на базу
	await walk(4);
	await walk(4);
	await walk(4);
	await walk(8);
}

/**
 * Поиск хабара в Припяти
 */
async function searchSwagPripyat() {
	// Пятая полоса
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	// Четвёртая полоса
	await walk(4);
	await walk(8);
	await walk(8);
	await searchSwag();
	await walk(8);
	await searchSwag();
	// Треться полоса
	await walk(4);
	await searchSwag();
	await walk(1);
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	// Вторая полоса
	await walk(4);
	await walk(8);
	await searchSwag();
	await walk(8);
	await searchSwag();
	await walk(8);
	await searchSwag();
	// Первая полоса
	await walk(4);
	await searchSwag();
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	await walk(1);
	await searchSwag();
	// Возваращение на базу
	await walk(5);
	await walk(5);
	await walk(5);
	await walk(5);
	await walk(8);
	await walk(8);
	await walk(8);
}

/**
 * Сдача хабара Вобле
 */
async function searchSwagDone() {
	const page = getPage();
	await walkNeighborhood('e');
	await page.goto('https://sta1kers.ru/npc/vobla.php?mod=map&zona=1&prize=take');
	await page.goto('https://sta1kers.ru/npc/vobla.php?mod=map&zona=2&prize=take');
	await page.goto('https://sta1kers.ru/npc/vobla.php?mod=map&zona=3&prize=take');
	await page.goto(mainUrl);
	await walkNeighborhood('c');
}

module.exports = {
	searchSwagJupiter,
	searchSwagPripyat,
	searchSwagBackwater,

	searchSwagDone
};
