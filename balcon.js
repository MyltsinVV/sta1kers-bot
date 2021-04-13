const openBrowser = require('./openBrowser');
const login = require('./login');

const farm = require('./farm');
const cache = require('./cache');
const searchSwag = require('./searchSwag');

(async () => {
    const page = await openBrowser();
    await login(page, 'balcon', '12345');

    await farm(page);
    // await cache(page);
    // await searchSwag(page);
})();
