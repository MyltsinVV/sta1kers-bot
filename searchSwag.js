const {getPage} = require('./constants');
const walk = require('./walk');

async function searchSwag() {
    const page = getPage();

    const content = await page.content();
    const index = content.indexOf('var cells = "');
    if (index > 0) {
        await page.goto(`https://sta1kers.ru/zona.php?hb_pass=${content.slice(index + 13, index + 18)}`);
    }
}

/**
 * Поиск хабара на Юпитере
 */
async function searchSwagJupiter() {
    // Перавая полоса
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

module.exports = {
    searchSwagJupiter,
    searchSwagPripyat
};
