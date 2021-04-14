const startGame = require('./startGame');
const { searchSwagJupiter } = require('./searchSwag');

(async () => {
    await startGame('balcon2', '20021998');
    await searchSwagJupiter();
})();
