const {startGame} = require('./startGame');
const {dailyPass} = require('./dailyPass');

(async() => {
	await startGame('balcon2', '20021998');

	await dailyPass();
})();
