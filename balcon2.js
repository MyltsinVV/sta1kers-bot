const startGame = require('./startGame');
const { searchSwagJupiter } = require('./searchSwag');

const {mainUrl, getPage} = require('./constants');

(async () => {
    await startGame('balcon2', '20021998');

    const page = getPage();

    // Ежедневное задание Лесника
    // await page.goto('https://sta1kers.ru/npc/lesnik.php?mod=daily');
    // await page.goto('https://sta1kers.ru/npc/lesnik.php?quest=841');
    // TODO: Сделать убийство 5-ти зомби
    // await page.goto(`${mainUrl}?wd_pass=100&wd_key=LRLRLRLRLR`);
    // await page.goto('https://sta1kers.ru/npc/lesnik.php?quest=848');
})();
