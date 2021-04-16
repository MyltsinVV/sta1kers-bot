const startGame = require('./startGame');
const farm = require('./farm');
const { searchSwagPripyat } = require('./searchSwag');

(async () => {
    await startGame('balcon', '12345');

    await searchSwagPripyat();
    // await farm();
})();
