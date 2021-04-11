const openBrowser = require('./openBrowser');
const login = require('./login');
const arena = require('./arena');
const farm = require('./farm');

(async () => {
    const page = await openBrowser();

    await login(page, 'balcon2', '20021998');
    // await arena(page);
    await farm(page);
})();
