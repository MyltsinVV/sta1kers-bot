const {mainUrl, getPage} = require('./constants');
const {searchSwagPripyat, searchSwagJupiter, searchSwagBackwater, searchSwagDone} = require('./searchSwag');
const {transitionFromJupiterToBackwater} = require('./walk');

async function dailyPass() {
	// Поиск хабара в Припяти (Готово)
	// await searchSwagPripyat();

	// Взять задание у Стрелка

	// Переход на Юпитер

	// Поиск хабара на Юпитере (Готово)
	// await searchSwagJupiter();

	// Выполнение Квеста от Стрелка

	// Переход на Затон (Готово)
	// await transitionFromJupiterToBackwater();

	// Поиск хабара на Затоне
	await searchSwagBackwater();

	// Сдача хабара Вобле (Готово)
	// await searchSwagDone();

	// Переход в Припиять

	// Сдача квеста Стрелку
}

module.exports = {
	dailyPass
};
