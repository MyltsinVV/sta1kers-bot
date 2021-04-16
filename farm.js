const arena = require('./arena');
const {getPage} = require('./constants');

let farmCount = 30;

async function farm() {
    const page = getPage();
    await page.goto('https://sta1kers.ru/zona.php');

    const hp = await page.evaluate(() =>
        document.querySelector('img[src="../img/ico/life.png"]').parentNode.innerText
    );
    const apte4ka = await page.evaluate(() =>
        document.querySelector('small.stalker_link > img[src="../img/ico/apte4ka.png"]')?.parentNode?.innerText
    );

    if (hp.trim() === '0') {
        if (apte4ka) {
            setTimeout(async () => {
                await farm(page);
            }, 5000);
            return null;
        }
        await page.goto('https://sta1kers.ru/zona.php?&apt=use');
        await farm(page);

        return null;
    }

    if (farmCount >= 30) {
        await arena(page);
        farmCount = 0;
        await farm(page);
        return;
    }

    // Прачечная
    const mutants = [121, 122, 123, 124];
    // Гастроном (Юг)
    // const mutants = [129, 130, 993, 994];

    for (const mutant of mutants) {
        try {
            await page.click(`a[href="?ib=${mutant}&mod=k"]`);
        } catch (e) {}
        try {
            await page.click(`a[href="?ib=${mutant}&mod=w"]`);
        } catch (e) {}
        try {
            await page.click(`a[href="?ib=${mutant}&mod=p"]`);
        } catch (e) {}
    }

    farmCount++;
    setTimeout(async () => {
        await farm(page);
    }, 1000);
}

module.exports = farm;
