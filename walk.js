// 1 - вверх
// 4 - влево
// 5 - вправо
// 8 - вниз

//

const mainUrl = 'https://sta1kers.ru/zona.php';
let goKey;

async function walk(page) {
    await page.goto(mainUrl);
    goKey = (await page.evaluate(() =>
        document.querySelector('.linkww > a.linkw')?.getAttribute('href')
    )).split('&')[1].split('=')[1];

    await page.click(`a[href="?go=8&go_key=${goKey}"]`);
}

module.exports = walk;
