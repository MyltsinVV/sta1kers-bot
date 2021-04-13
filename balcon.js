const openBrowser = require('./openBrowser');
const login = require('./login');
const farm = require('./farm');

(async () => {
    const page = await openBrowser();

    await login(page, 'balcon', '12345');
    await farm(page);
})();
