const {startGame} = require('./startGame');
const {farm} = require('./farm');
const {dailyPass} = require('./dailyPass');

(async() => {
	await startGame('balcon', '12345');

	await farm();
	// await dailyPass();
})();
