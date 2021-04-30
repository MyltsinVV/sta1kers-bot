const {searchSwagPripyat, searchSwagJupiter, searchSwagBackwater, searchSwagDone} = require('./searchSwag');
const {transitionFromJupiterToBackwater, transitionFromPripyatToJupiter} = require('./walk');
const {takeTaskForStrelok} = require('./questions');

async function dailyPass() {
	await searchSwagPripyat(); // Поиск хабара в Припяти
	await transitionFromPripyatToJupiter(); // Переход на Юпитер
	await searchSwagJupiter(); // Поиск хабара на Юпитере
	await transitionFromJupiterToBackwater(); // Переход на Затон
	await searchSwagBackwater(); // Поиск хабара на Затоне
	await searchSwagDone(); // Сдача хабара Вобле
}

module.exports = {
	dailyPass
};
