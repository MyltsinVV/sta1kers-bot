const {mainUrl, getPage} = require('./constants');

async function farm(mutants) {
    const page = getPage();
    await page.goto(mainUrl);

    if (!mutants) {
        // Прачечная
        mutants = [121, 122, 123, 124];
        // Гастроном (Юг)
        // const mutants = [129, 130, 993, 994];
    }

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
}

module.exports = farm;
