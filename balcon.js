const {startGame} = require('./startGame');
const { farm } = require('./farm');

(async() => {
	await startGame('balcon', '12345');

	await farm();
})();
