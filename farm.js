async function farm(page) {
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

    // const mutants = [4, 5, 6, 7];
    //
    // for (const mutant of mutants) {
    //     try {
    //         await page.click(`a[href="?ib=${mutant}&mod=p"]`);
    //     } catch (e) {}
    //     try {
    //         await page.click(`a[href="?ib=${mutant}&mod=w"]`);
    //     } catch (e) {}
    // }
    //
    // setTimeout(async () => {
    //     await farm(page);
    // }, 1000);
}

module.exports = farm;
