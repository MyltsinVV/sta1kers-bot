const {mainUrl, getPage} = require('./constants');
const {searchSwagPripyat, searchSwagJupiter} = require('./searchSwag');

async function dailyPass() {
	// Поиск хабара в Припяти
	// await searchSwagPripyat();

	// Взять задание у Стрелка

	// Переход на Юпитер

	// Поиск хабара на Юпитере
	await searchSwagJupiter();

	// Выполнение Квеста от Стрелка

	// Переход на Затон


	// Поиск хабара на Затоне

	// Сдача хабара Вобле

	// Переход на Юпитер

	// Переход в Припиять

	// Сдача квеста Стрелку

}

module.exports = {
	dailyPass
};
