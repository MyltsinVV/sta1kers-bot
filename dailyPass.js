const {searchSwagPripyat, searchSwagJupiter, searchSwagBackwater, searchSwagDone} = require('./searchSwag');
const {transitionFromJupiterToBackwater, transitionFromPripyatToJupiter} = require('./walk');
const {takeTaskForStrelok} = require('./questions');

async function dailyPass() {
	await searchSwagPripyat(); // Поиск хабара в Припяти (Готово)
	await transitionFromPripyatToJupiter(); // Переход на Юпитер (Готово)
	await searchSwagJupiter(); // Поиск хабара на Юпитере (Готово)
	await transitionFromJupiterToBackwater(); // Переход на Затон (Готово)
	await searchSwagBackwater(); // Поиск хабара на Затоне (Готово)
	await searchSwagDone(); // Сдача хабара Вобле (Готово)
}

module.exports = {
	dailyPass
};
