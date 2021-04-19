const {getGoKey, getPage} = require('./constants');

/*
    Возможные route
    1 - вверх
    4 - влево
    5 - вправо
    8 - вниз
*/
async function walk(route) {
    const page = getPage();
    const nameNewLoc = await page.evaluate(function(route, getGoKey) {
        return document.querySelector(`a[href="?go=${route}&go_key=${getGoKey}"]`).innerText
    }, route, getGoKey());

    await page.click(`a[href="?go=${route}&go_key=${getGoKey()}"]`);
    const nameCurrentLoc = await page.evaluate(function() {
        return document.querySelector('div.name').innerText
    });

    if (nameNewLoc.trim() !== nameCurrentLoc.trim()) {
        await walk(route);
    }
}

module.exports = walk;
