const {getGoKey, getPage} = require('./constants');

/*
    Возможные route
    1 - вверх
    4 - влево
    5 - вправо
    8 - вниз
*/
async function walk(route) {
    await getPage().click(`a[href="?go=${route}&go_key=${getGoKey()}"]`);
}

module.exports = walk;
