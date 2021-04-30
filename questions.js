const {mainUrl, getPage} = require('./constants');

/**
 * Взять задание у Стрелка
 */
async function takeTaskForStrelok() {
	const page = getPage();
	page.goto('https://sta1kers.ru/npc/a_npc.php?mod=daily');
	page.goto(mainUrl);
}

/**
 * Выполнить задание Стрелка
 */
async function completeTaskForStrelok() {
	const page = getPage();
}

// Ежедневное задание Лесника
// await page.goto('https://sta1kers.ru/npc/lesnik.php?mod=daily');
// await page.goto('https://sta1kers.ru/npc/lesnik.php?quest=841');
// TODO: Сделать убийство 5-ти зомби
// await page.goto(`${mainUrl}?wd_pass=100&wd_key=LRLRLRLRLR`);
// await page.goto('https://sta1kers.ru/npc/lesnik.php?quest=848');

module.exports = {
	takeTaskForStrelok,

}
