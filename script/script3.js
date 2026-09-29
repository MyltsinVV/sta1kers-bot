(function() {
	const domen = 'https://sta1kers.ru/'
	const urlZona = 'https://sta1kers.ru/zona.php';

	let farmArr;

	let test;
	let test2;

	let start;

	let goKey;

	const locationsPripyat = [
		{
			name: 'Колесо обозрения',
			path: [1, 4, 4, 4],
		},
		{
			name: 'Старый КБО',
			path: [1, 4, 4],
		},
		{
			name: 'Кинотеатр «Прометей»',
			path: [1, 4],
		},
		{
			name: '«Лоза»',
			path: [1],
		},
		{
			name: 'Речной порт',
			path: [1, 2],
		},
		{
			name: 'Стадион «Авангард»',
			path: [4, 4, 4],
		},
		{
			name: 'Гостиница «Полесье»',
			path: [4, 4],
		},
		{
			name: 'КБО «Юбилейный»',
			path: [4],
		},
		{
			name: 'Школа',
			path: [],
		},
		{
			name: 'Госпиталь',
			path: [2],
		},
		{
			name: 'ДК «Энергетик»',
			path: [3, 4, 4, 4],
		},
		{
			name: 'Подземная автостоянка',
			path: [3, 4, 4],
		},
		{
			name: '«Вулкан»',
			path: [3, 4],
		},
		{
			name: 'Детский сад',
			path: [3],
		},
		{
			name: 'Магазин «Берёзка»',
			path: [3, 2],
		},
		{
			name: 'Гастроном',
			path: [3, 3, 4, 4, 4],
		},
		{
			name: 'Магазин «Книги»',
			path: [3, 3, 4, 4],
		},
		{
			name: 'Универмаг',
			path: [3, 3, 4],
		},
		{
			name: 'Общежитие',
			path: [3, 3],
		},
	];

	const zatonArtifacts = [
		{
			name: 'СгоревшийХуторСевер',
			pathTo: [1, 4, 'n'],
			pathBack: ['c', 2, 3],
			isArtifact: true
		},
		{
			name: 'СгоревшийХуторЗапад',
			pathTo: [1, 4, 'w'],
			pathBack: ['c', 2, 3],
			isArtifact: true
		},
		{
			name: 'СгоревшийХуторЮг',
			pathTo: [1, 4, 's'],
			pathBack: ['c', 2, 3],
			isArtifact: true
		},
		{
			name: 'Котёл',
			pathTo: [1, 2],
			pathBack: [4, 3],
			isArtifact: true
		},
		{
			name: 'КотёлСевер',
			pathTo: [1, 2, 'n'],
			pathBack: ['c', 4, 3],
			isArtifact: true
		},
		{
			name: 'КотёлЗапад',
			pathTo: [1, 2, 'w'],
			pathBack: ['c', 4, 3],
			isArtifact: true
		},
		{
			name: 'Топь',
			pathTo: [4, 4],
			pathBack: [2, 2],
			isArtifact: true
		},
		{
			name: 'ТопьСевер',
			pathTo: [4, 4, 'n'],
			pathBack: ['c', 2, 2],
			isArtifact: true
		},
		{
			name: 'ТопьЗапад',
			pathTo: [4, 4, 'w'],
			pathBack: ['c', 2, 2],
			isArtifact: true
		},
		{
			name: 'ТопьЮг',
			pathTo: [4, 4, 's'],
			pathBack: ['c', 2, 2],
			isArtifact: true
		},
		{
			name: 'ЗемснарядСевер',
			pathTo: [2, 'n'],
			pathBack: ['c', 4],
			isArtifact: true
		},
		{
			name: 'ЗемснарядВосток',
			pathTo: [2, 'e'],
			pathBack: ['c', 4],
			isArtifact: true
		},
		{
			name: 'ЗемснарядЮг',
			pathTo: [2, 's'],
			pathBack: ['c', 4],
			isArtifact: true
		},
		{
			name: 'Соснодуб',
			pathTo: [4, 4, 3, 3],
			pathBack: [1, 1, 2, 2],
			isArtifact: true
		},
		{
			name: 'СоснодубСевер',
			pathTo: [4, 4, 3, 3, 'n'],
			pathBack: ['c', 1, 1, 2, 2],
			isArtifact: true
		},
		{
			name: 'СоснодубСевер',
			pathTo: [4, 4, 3, 3, 'w'],
			pathBack: ['c', 1, 1, 2, 2],
			isArtifact: true
		},
		{
			name: 'Коготь',
			pathTo: [3, 3],
			pathBack: [2, 2],
			isArtifact: true
		},
		{
			name: 'КоготьСевер',
			pathTo: [3, 3, 'n'],
			pathBack: ['c', 2, 2],
			isArtifact: true
		},
		{
			name: 'КоготьЗапад',
			pathTo: [3, 3, 'w'],
			pathBack: ['c', 2, 2],
			isArtifact: true
		},
		{
			name: 'КоготьВосток',
			pathTo: [3, 3, 'e'],
			pathBack: ['c', 2, 2],
			isArtifact: true
		},
	];

	const swampArtifacts = [
		{
			name: '«Листодув» Север',
			pathTo: [1, 'n'],
			pathBack: ['c', 3],
			pathNext: ['e'],
			isArtifact: true,
		},
		{
			name: '«Листодув» Восток',
			pathTo: [1, 'e'],
			pathBack: ['c', 3],
			pathNext: ['s'],
			isArtifact: true,
		},
		{
			name: '«Листодув» Юг',
			pathTo: [1, 's'],
			pathBack: ['c', 3],
			pathNext: ['w'],
			isArtifact: true,
		},
		{
			name: '«Листодув» Запад',
			pathTo: [1, 'w'],
			pathBack: ['c', 3],
			pathNext: ['c', 1, 1, 'n'],
			isArtifact: true,
		},
		{
			name: '«Водоворот» Север',
			pathTo: [1, 1, 1, 'n'],
			pathBack: ['c', 3, 3, 3],
			pathNext: ['e'],
			isArtifact: true,
		},
		{
			name: '«Водоворот» Восток',
			pathTo: [1, 1, 1, 'e'],
			pathBack: ['c', 3, 3, 3],
			pathNext: ['s'],
			isArtifact: true,
		},
		{
			name: '«Водоворот» Юг',
			pathTo: [1, 1, 1, 's'],
			pathBack: ['c', 3, 3, 3],
			pathNext: ['w'],
			isArtifact: true,
		},
		{
			name: '«Водоворот» Запад',
			pathTo: [1, 1, 1, 'w'],
			pathBack: ['c', 3, 3, 3],
			pathNext: ['c', 2, 2, 'n'],
			isArtifact: true,
		},
		{
			name: '«Трясина» Север',
			pathTo: [1, 1, 1, 2, 2,'n'],
			pathBack: ['c', 4, 4, 3, 3, 3],
			pathNext: ['e'],
			isArtifact: true,
		},
		{
			name: '«Трясина» Восток',
			pathTo: [1, 1, 1, 2, 2,'e'],
			pathBack: ['c', 4, 4, 3, 3, 3],
			pathNext: ['s'],
			isArtifact: true,
		},
		{
			name: '«Трясина» Юг',
			pathTo: [1, 1, 1, 2, 2,'s'],
			pathBack: ['c', 4, 4, 3, 3, 3],
			pathNext: ['w'],
			isArtifact: true,
		},
		{
			name: '«Трясина» Запад',
			pathTo: [1, 1, 1, 2, 2,'w'],
			pathBack: ['c', 4, 4, 3, 3, 3],
			pathNext: ['c', 2, 2, 'n'],
			isArtifact: true,
		},
		{
			name: '«Плиты» Север',
			pathTo: [1, 1, 1, 2, 2, 2, 2,'n'],
			pathBack: ['c', 4, 4, 4, 4, 3, 3, 3],
			pathNext: ['e'],
			isArtifact: true,
		},
		{
			name: '«Плиты» Восток',
			pathTo: [1, 1, 1, 2, 2, 2, 2, 'e'],
			pathBack: ['c', 4, 4, 4, 4, 3, 3, 3],
			pathNext: ['s'],
			isArtifact: true,
		},
		{
			name: '«Плиты» Юг',
			pathTo: [1, 1, 1, 2, 2, 2, 2, 's'],
			pathBack: ['c', 4, 4, 4, 4, 3, 3, 3],
			pathNext: ['w'],
			isArtifact: true,
		},
		{
			name: '«Плиты» Запад',
			pathTo: [1, 1, 1, 2, 2, 2, 2, 'w'],
			pathBack: ['c', 4, 4, 4, 4, 3, 3, 3],
			pathNext: ['c', 4, 4, 3, 3, 'n'],
			isArtifact: true,
		},
		{
			name: 'Тлеющий хутор Север',
			pathTo: [1, 2, 2, 'n'],
			pathBack: ['c', 4, 4, 3],
			pathNext: ['e'],
			isArtifact: true,
		},
		{
			name: 'Тлеющий хутор Восток',
			pathTo: [1, 2, 2, 'e'],
			pathBack: ['c', 4, 4, 3],
			pathNext: ['s'],
			isArtifact: true,
		},
		{
			name: 'Тлеющий хутор Юг',
			pathTo: [1, 2, 2, 's'],
			pathBack: ['c', 4, 4, 3],
			pathNext: ['w'],
			isArtifact: true,
		},
		{
			name: 'Тлеющий хутор Запад',
			pathTo: [1, 2, 2, 'w'],
			pathBack: ['c', 4, 4, 3],
			isArtifact: true,
		},
	];

	setTimeout(bot, 100);

	async function bot() {
		jQuery.extend(jQuery.expr[':'], {
			'starts-with': function(elem, i, data) {
				var text = jQuery.trim(jQuery(elem).text()), term = data[3];
				return text.indexOf(term) === 0;
			},
			'ends-with': function(elem, i, data) {
				var text = jQuery.trim(jQuery(elem).text()), term = data[3];
				return text.lastIndexOf(term) === text.length - term.length;
			},
			'matches': function(elem, i, data) {
				var text = jQuery.trim(jQuery(elem).text()), term = data[3];
				var regex = new RegExp(term, 'i');
				return regex.test(text);
			},
		});
		jQuery('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes');
		jQuery('input[type=checkbox]').css('display', 'inline-block');

		let l = document.location.toString();
		l = l.replace(/#.*$/, '');
		jQuery('body').html(`
			<iframe
				id="testbot"
				src='${ l }' 
				style='z-index: 100; position: fixed; top: 52px; height: calc(100% - 52px); width: 100%; left: 0; border: unset;'
			>
			</iframe>
			<span></span>	
			<div>
				<style>
					input[type="checkbox"]{
						display: inline-block !important;
					};
					a *{
						position: static !important;
					}
				</style>
				<label for="run">
						М+А
						<input type='button' id='run' value='Старт'>
						<input type='button' id='stop' value='Стоп' style='display: none'>
				</label>
				<input style="margin-left: 5px" type='button' id='daily' value='Daily'>
				<input style="margin-left: 5px" type='button' id='artifact' value='One artifact'>
				<input style="margin-left: 5px" type='button' id='artifactInfinity' value='Infinity artifacts'>
				<span id="timer">9 сек</span>
				<input style="margin-left: 5px" type='button' id='raid' value='Рейд'>
				<input style="margin-left: 5px" type='button' id='chase' value='Погоня'>
			</div>
			<div id="info" style="height: 26px; line-height: 26px; padding: 0 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"></div>
		`);

		jQuery('#run').click(function() {
			jQuery(this).hide();
			jQuery('#stop').show();
			start = true;
			go();
			return false;
		});
		jQuery('#stop').click(function() {
			start = false;
			clearTimeout(test);
			clearTimeout(test2);
			jQuery(this).hide();
			jQuery('#run').show();
			return false;
		});

		document.querySelector('#daily').addEventListener('click', async function() {
			await daily();
		});
		document.querySelector('#artifact').addEventListener('click', async function() {
			await startOneSearchArtifact();
		});
		document.querySelector('#artifactInfinity').addEventListener('click', async function() {
			await infinityArtifact();
		});
		document.querySelector('#raid').addEventListener('click', async function() {
			await raid();
		});
		document.querySelector('#chase').addEventListener('click', async function() {
			// Повторное нажатие во время езды — остановка после текущего хода
			if (chaseRunning) {
				chaseStopRequested = true;
				this.value = 'Останавливаю…';
				return;
			}
			this.value = 'Стоп погоня';
			try {
				await chase();
			} catch (e) {
				chaseInfo(`Погоня: ошибка — ${ e.message }`);
				console.error(e);
			} finally {
				this.value = 'Погоня';
			}
		});

		await goto(urlZona);
		goKey = getFrame().contentDocument.querySelector('#location .linkw > a.linkw')?.getAttribute('href').split('&')[1].split('=')[1];
	}

	function getFrame() {
		return document.querySelector('iframe');
	}

	async function go() {
		farmArr = [
			'arena',
			'farm',
		];
		await series();
	}

	function getHp() {
		const doc = getFrame().contentDocument;
		return doc.querySelector('#top table.stalker_link.stalker_text td:first-child center:first-child').innerText.trim();
	}

	async function series() {
		const hp = getHp();

		if (hp === '0') {
			await goto(`${ urlZona }?&apt=use`);
		} else {
			const item = farmArr.shift();
			if (item === 'arena') {
				const error = await arena();
				if (start) {
					clearTimeout(test2);
					test2 = setTimeout(() => {
						farmArr.unshift('arena');
					}, 1000 * error);
				}
			} else if (item === 'farm') {
				await murderMutants();
				farmArr.push('farm');
			}
		}

		if (start) {
			clearTimeout(test);
			test = setTimeout(async function() {
				await series();
			}, 2000);
		}
	}

	function arena() {
		return new Promise(async function(resolve) {
			await goto('https://sta1kers.ru/arena1.php?tip=1');

			const queryParams = getFrame().contentWindow.location.href.split('?')[1].split('&');
			let errorCode = '0';
			let error = 0;
			for (let queryParam of queryParams) {
				const [a, b] = queryParam.split('=');
				if (a === 'time') {
					error = b;
				}
				if (a === 'err') {
					errorCode = b;
				}
			}
			if (errorCode === '1') {
				resolve(0);
			} else if (errorCode === '4') {
				resolve(error);
			} else if (errorCode === '5') {
				resolve(0);
			} else {
				const attack = getFrame().contentDocument.querySelector('table>tbody>tr>td>div>a.simple-but.border.gray.mb1');
				await goto('https://sta1kers.ru/' + attack.getAttribute('href'));
				resolve(0);
			}
		});
	}

	async function murderMutants() {
		return new Promise(async function(resolve) {
			await goto(urlZona);
			let doc = getFrame().contentDocument;
			// Нож
			const mutantsKnife = doc.querySelectorAll('#mutants img[title="Нож"]');
			if (mutantsKnife.length > 0) {
				await goto(urlZona + mutantsKnife[mutantsKnife.length - 1].parentNode.getAttribute('href'), false);
				doc = getFrame().contentDocument;
			}
			// Пистолет
			const mutants = doc.querySelectorAll('#mutants img[title="Пистолет"]');
			if (mutants.length > 0) {
				await goto(urlZona + mutants[mutants.length - 1].parentNode.getAttribute('href'), false);
			}
			resolve(true);
		});
	}

	async function murderMutantsCount(count) {
		return new Promise(async function(resolve) {
			const hp = getHp();

			if (hp === '0') {
				await goto(`${ urlZona }?&apt=use`);
			}

			await goto(urlZona);
			let doc = getFrame().contentDocument;
			// Нож
			const mutantsKnife = doc.querySelectorAll('#mutants img[title="Нож"]');
			if (mutantsKnife.length > 0) {
				await goto(urlZona + mutantsKnife[mutantsKnife.length - 1].parentNode.getAttribute('href'), false);
				doc = getFrame().contentDocument;
				if (doc.querySelector('.r4 center.gold')) {
					count--;
				}
			}

			// Пистолет
			const mutants = doc.querySelectorAll('#mutants img[title="Пистолет"]');
			if (mutants.length > 0) {
				await goto(urlZona + mutants[mutants.length - 1].parentNode.getAttribute('href'), false);
				doc = getFrame().contentDocument;
				if (doc.querySelector('.r4 center.gold')) {
					count--;
				}
			}

			if (count > 0) {
				await awaitSec(2);
				await murderMutantsCount(count);
			}
			resolve(true);
		});
	}

	function goto(url, isAwaitSec = true, isStronglav) {
		return new Promise(async(resolve) => {
			async function a() {
				getFrame().removeEventListener('load', a);
				isAwaitSec && await awaitSec(0.5);
				resolve(true);
			}

			if (!isStronglav && getFrame().contentDocument.querySelector('img[alt="Стронглав"]')) {
				const locName = getCurrentNameLoc();
				// Выход из логова на школу
				await goto(urlZona, true, true);
				await walk(1);
				// Идём на место откуда утащил нас стронглав
				const path = locationsPripyat.filter(item => item.name === locName)[0].path;
				for (const pathElement of path) {
					await walk(pathElement);
				}
			}

			getFrame().addEventListener('load', a);

			getFrame().setAttribute('src', url);
		});
	}

	async function searchSwag() {
		const content = getFrame().contentDocument.querySelector('#main .stats script')?.innerHTML;
		const index = content?.indexOf('var cells = "');
		if (index > 0) {
			await goto(`${ urlZona }?hb_pass=${ content.slice(index + 13, index + 18) }`);
		}
	}

	async function daily() {
		await searchSwagPripyat(); // Поиск хабара в Припяти
		await questZulus(); // Квест Зулуса
		await questStrelokStart();// Взять квест Стрелка
		await transitionFromPripyatToJupiter(); // Переход на Юпитер
		// await questKostopravStart()
		await searchSwagJupiter(); // Поиск хабара на Юпитере
		await questSokolov(); // Квест Соколова
		await questStrelokProgress(); // Выполнить квест Стрелка
		await transitionFromJupiterToBackwater(); // Переход на Затон
		await searchSwagBackwater(); // Поиск хабара на Затоне
		await searchSwagDone(); // Сдача хабара Вобле
		await questLisnik(); // Квест Лесника
	}

	async function transitionFromPripyatToJupiter() {
		await goto(`https://sta1kers.ru/npc/garik.php?quest=94`);
		await goto(`https://sta1kers.ru/npc/garik.php?quest=95`);
		await goto(urlZona);
	}

	async function transitionFromJupiterToBackwater() {
		await goto(`https://sta1kers.ru/npc/locman.php?quest=10`);
		await goto(`https://sta1kers.ru/npc/locman.php?quest=11`);
		await goto(urlZona);
	}

	async function transitionFromBackwaterToPripyat() {
		await goto(`https://sta1kers.ru/npc/locman.php`);
		await goto(`https://sta1kers.ru/npc/locman.php?quest=348`);
		await goto(`https://sta1kers.ru/npc/locman.php?quest=349`);
		await goto(urlZona);
	}

	async function searchSwagDone() {
		await walk('e');
		await goto('https://sta1kers.ru/npc/vobla.php?mod=map&zona=1&prize=take');
		await goto('https://sta1kers.ru/npc/vobla.php?mod=map&zona=2&prize=take');
		await goto('https://sta1kers.ru/npc/vobla.php?mod=map&zona=3&prize=take');
		await goto(urlZona);
		await walk('c');
	}

	async function searchSwagPripyat() {
		// Пятая полоса
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		// Четвёртая полоса
		await walk(4);
		await walk(3);
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		// Треться полоса
		await walk(4);
		await searchSwag();
		await walk(1);
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		// Вторая полоса
		await walk(4);
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		// Первая полоса
		await walk(4);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		// Возваращение на базу
		await walk(2);
		await walk(2);
		await walk(2);
		await walk(2);
		await walk(3);
		await walk(3);
		await walk(3);
	}

	async function searchSwagJupiter() {
		// Первая полоса
		await walk(4);
		await searchSwag();
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		// Вторая полоса
		await walk(2);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await walk(1);
		await walk(1);
		await searchSwag();
		// Третья полоса
		await walk(2);
		await searchSwag();
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		// Пятая полоса
		await walk(2);
		await walk(2);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		// Четвёртая полоса
		await walk(4);
		await walk(3);
		await searchSwag();
		await walk(3);
		await searchSwag();
		// Возвращение на базу
		await walk(4);
		await walk(4);
		await walk(1);
	}

	async function searchSwagBackwater() {
		// Первая полоса
		await walk(1);
		await walk(4);
		await walk(4);
		await searchSwag();
		await walk(3);
		await walk(3);
		await searchSwag();
		await walk(3);
		await walk(3);
		// Вторая полоса
		await walk(2);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		// Третья полоса
		await walk(2);
		await searchSwag();
		await walk(3);
		await walk(3);
		await searchSwag();
		// Четвёртая полоса
		await walk(2);
		await searchSwag();
		await walk(3);
		await walk(3);
		// Пятая полоса
		await walk(2);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		// Возвращаемся домой
		await walk(4);
		await walk(4);
		await walk(3);
	}

	async function questZulus() {
		await walk(1);
		await walk(1);
		await walk(4);
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=94');
		await goto('https://sta1kers.ru/npc/a_npc.php?mod=daily');
		await murderMutantsCount(5);
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=94');
		await goto('https://sta1kers.ru/npc/a_npc.php?quest=709');
		await walk('c');
		await walk(2);
		await walk(3);
		await walk(3);
		await goto('https://sta1kers.ru/npc/rogovec.php?quest=710');
		await walk(1);
		await walk(1);
		await progressClick();
		await murderMutantsCount(5);
		await walk(3);
		await walk(3);
		await goto('https://sta1kers.ru/npc/rogovec.php?quest=721');
		await walk(1);
		await walk(1);
		await progressClick();
		await walk(3);
		await walk(3);
		await goto('https://sta1kers.ru/npc/rogovec.php?quest=727');
		await walk('s');
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=82');
		await goto('https://sta1kers.ru/npc/a_npc.php?quest=728');
		await walk('c');
		await walk(1);
		await walk(1);
		await walk(4);
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=94');
		await goto('https://sta1kers.ru/npc/a_npc.php?quest=729');
		await walk('c');
		await walk(2);
		await walk(3);
		await walk(3);
	}

	async function questSokolov() {
		await walk(3);
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=50');
		await goto('https://sta1kers.ru/npc/a_npc.php?mod=daily');
		await walk(4);
		await murderMutantsCount(5);
		await walk(2);
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=50');
		await goto('https://sta1kers.ru/npc/a_npc.php?quest=614');
		await walk(1);
	}

	async function questLisnik() {
		await walk(1);
		await walk(4);
		await walk(4);
		await goto('https://sta1kers.ru/npc/lesnik.php');
		await goto('https://sta1kers.ru/npc/lesnik.php?mod=daily');
		await goto('https://sta1kers.ru/npc/lesnik.php?quest=841');
		await murderMutantsCount(5);
		await goto('https://sta1kers.ru/zona.php?wd_pass=100&wd_key=RLRLRLRLRL');
		await goto('https://sta1kers.ru/npc/lesnik.php');
		await goto('https://sta1kers.ru/npc/lesnik.php?quest=848');
		await walk(2);
		await walk(2);
		await walk(3);
	}

	async function questStrelokStart() {
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=88');
		await goto('https://sta1kers.ru/npc/a_npc.php?mod=daily');
	}

	async function questStrelokProgress() {
		await walk(4);
		await walk(3);
		await walk(3);
		await walk(3);
		await progressClick(false);
		await walk(1);
		await walk(1);
		await walk(1);
		await walk(1);
		await walk(2);
		await walk(2);
		await progressClick(false);
		await walk(3);
		await walk(3);
		await walk(3);
		await walk(2);
		await progressClick(false);
		await walk(1);
		await walk(1);
		await walk(4);
		await walk(4);
	}

	async function questKostopravStart() {
		await walk('n')
		await goto(domen + 'npc/kostoprav.php');
	}

	async function questStrelokCompleted() {
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=88');
		await goto('https://sta1kers.ru/npc/a_npc.php?quest=607');
	}

	async function progressClick(isAwaitSec = true) {
		const link = getFrame().contentDocument.querySelector('img[src="../img/ico/link.png"]');
		if (link) {
			await goto(urlZona + link.parentNode.getAttribute('href'));
			isAwaitSec && await awaitSec(5);
			await progressClick();
		}
	}

	function getCurrentNameLoc() {
		return getFrame().contentDocument.querySelector('#main .name').innerText;
	}

	async function walk(route) {
		const hp = getHp();
		if (hp === '0') {
			await goto(`${ urlZona }?&apt=use`);
			await awaitSec(2);
			await walk(route);
		} else {
			const currentName = getCurrentNameLoc();
			await goto(`${ urlZona }?${ typeof route === 'number' ? '' : 'd' }go=${ route }&go_key=${ goKey }`);
			if (currentName === getCurrentNameLoc()) {
				await awaitSec(2);
				await walk(route);
			}
		}
	}

	async function awaitSec(sec) {
		return new Promise(resolve => {
			setTimeout(function() {
				resolve(true);
			}, sec * 1000);
		});
	}

	async function startOneSearchArtifact() {
		if (getHp() === '0') {
			await goto(`${ urlZona }?&apt=use`)
			await awaitSec(2)
			return startOneSearchArtifact()
		}

		await goto(urlZona)

		const medved = getFrame().contentDocument.querySelector('img[src="../new_zona/img/medved.png"]')
		if (medved) {
			await goto(`${ urlZona }?mod=start_search`)
			await awaitSec(2)
			return startOneSearchArtifact()
		}

		const timer = getFrame().contentDocument.querySelector('img[src="../img/ico/time.png"]')
		if (timer) {
			await awaitSec(2)
			return startOneSearchArtifact()
		}

		await finishOneSearchArtifact()
	}

	async function finishOneSearchArtifact() {
		if (getHp() === '0') {
			await goto(`${ urlZona }?&apt=use`);
			await awaitSec(2);
			await startOneSearchArtifact();
			return;
		}

		const content = getFrame().contentDocument.querySelector('#artefacts script')?.innerHTML;
		const index = content?.indexOf('var danger = "');
		if (index > 0) {
			await searchArtifactForSwamp();
		} else {
			await searchArtifact();
		}
	}

	// ================= Аномалия (детектор) =================
	// Каждый ход: по углу артефакта выбираем направление(я); если в секторе направления
	// на кольце 2 есть не синяя аномалия — сначала болт в эту сторону, потом шаг.
	// Болтов нет, а проход занят — перезапуск аномалии (newSearch).
	// Наступили на артефакт — игра забирает его сама; возвращаемся на локацию (urlZona),
	// чтобы infinityArtifact увидел новый поиск / таймер и пошёл дальше.

	const ANO_MIN_HP = 40;       // стоп, если после удара % у артефакта (#your_hp) ≤ этого
	const ANO_MAX_STEPS = 40;    // защита от хождения кругами
	const ANO_TIMEOUT = 8;       // сек ожидания перерисовки после действия
	const ANO_DIR_ANGLE = { left: 0, top: 90, right: 180 };
	const ANO_SECTOR = {
		left: (i) => i <= 3,            // 0°..33.75°
		top: (i) => i >= 6 && i <= 10,  // 67.5°..112.5°
		right: (i) => i >= 13,          // 146.25°..180°
	};

	function anoInfo(text) {
		document.querySelector('#info').innerHTML = text;
		console.log('[ano]', text);
	}

	function anoParse(doc) {
		const num = (s, re) => { const m = re.exec(s || ''); return m ? parseFloat(m[1]) : null; };
		const anomalies = [];
		let artefact = null;
		const imgs = doc?.querySelectorAll('img[src*="/detectors/anomaly_icon"], img[src*="/detectors/detector_artefact"]') ?? [];
		for (const img of imgs) {
			const angle = num(img.parentElement.getAttribute('style'), /rotate\(([-\d.]+)deg\)/);
			const pad = num(img.getAttribute('style'), /padding-left:\s*([-\d.]+)%/);
			if (angle == null || pad == null) continue;
			const cell = { i: Math.round(angle / 11.25), r: Math.round((50 - pad) / 6.25) };
			const src = img.getAttribute('src');
			if (src.includes('detector_artefact')) artefact = cell;
			else anomalies.push({ ...cell, blue: src.includes('anomaly_icon_blue') });
		}
		if (!artefact && !anomalies.length) return null;
		const hp = doc.querySelector('#your_hp');
		const bolts = [...doc.querySelectorAll('small.dan')].find((e) => /шт/.test(e.textContent));
		return {
			artefact, anomalies,
			hp: hp ? parseFloat(hp.textContent) : null,
			bolts: bolts ? parseInt(bolts.textContent.replace(/\D/g, ''), 10) : 0,
			sig: JSON.stringify([artefact, anomalies, bolts?.textContent]),
		};
	}

	function anoWantedDirs(art) {
		const a = art.i * 11.25;
		const dirs = [];
		if (a < 78.75) dirs.push('left');
		if (a > 22.5 && a < 157.5) dirs.push('top');
		if (a > 101.25) dirs.push('right');
		return dirs.sort((x, y) => Math.abs(a - ANO_DIR_ANGLE[x]) - Math.abs(a - ANO_DIR_ANGLE[y]));
	}

	function anoPlan(f) {
		const dirs = anoWantedDirs(f.artefact);
		const blocked = (d) => f.anomalies.some((a) => !a.blue && a.r === 2 && ANO_SECTOR[d](a.i));
		const free = dirs.find((d) => !blocked(d));
		if (free) return { bolt: false, dir: free };
		if (f.bolts > 0) return { bolt: true, dir: dirs[0] };
		return null;
	}

	// перехват ответа сервера во фрейме (урон / выброс)
	function anoHookAjax() {
		const win = getFrame().contentWindow;
		const $f = win.jQuery;
		if (!$f || $f.ajax.__anoHooked) return;
		const orig = $f.ajax;
		$f.ajax = function(opts) {
			if (opts && typeof opts.url === 'string' && opts.url.includes('artefacts_engine.php')) {
				const ok = opts.success;
				opts.success = function(data, ...rest) {
					win.__anoLast = data;
					return ok && ok.call(this, data, ...rest);
				};
			}
			return orig.apply(this, arguments);
		};
		$f.ajax.__anoHooked = true;
	}

	// клик по кнопке во фрейме и ожидание нового кадра; возвращает { dmg, left } (left — ушли со страницы аномалии)
	async function anoAct(mod) {
		const doc = getFrame().contentDocument;
		const btn = doc.querySelector(`a[href="?mod=${ mod }"]`);
		if (!btn) throw new Error('нет кнопки ' + mod);
		anoHookAjax();
		const win = getFrame().contentWindow;
		win.__anoLast = null;
		const prev = anoParse(doc)?.sig;
		btn.click();

		const deadline = Date.now() + ANO_TIMEOUT * 1000;
		let resp = null;
		while (Date.now() < deadline) {
			await awaitSec(0.2);
			if (getFrame().contentDocument !== doc) return { dmg: 0, left: true }; // редирект (выброс/смерть)
			resp = resp || win.__anoLast;
			if (!resp) continue;
			const info = Number(resp.important_info) || 0;
			if (info === 999) throw new Error('сервер: что-то пошло не по плану (999)');
			if (info > 999) { await awaitSec(2); return { dmg: info, left: true }; }
			if (info > 0) await awaitSec(1.6); // при уроне страница перерисовывается через 1.5 с
			const curDoc = getFrame().contentDocument;
			if (/Вы нашли артефакт/.test(curDoc.body?.textContent || '')) return { dmg: info, left: false };
			const cur = anoParse(curDoc);
			if (cur && cur.sig !== prev) { await awaitSec(0.3); return { dmg: info, left: false }; }
		}
		throw new Error('кадр не перерисовался после ' + mod);
	}

	async function searchArtifact(newSearch) {
		if (getHp() === '0') {
			await goto(`${ urlZona }?&apt=use`);
			await awaitSec(2);
			await startOneSearchArtifact();
			return;
		}
		if (newSearch) { // перезапуск аномалии
			if (getCurrentNameLoc().includes('Север')) {
				await walk('c');
				await walk('n');
			} else if (getCurrentNameLoc().includes('Запад')) {
				await walk('c');
				await walk('w');
			} else if (getCurrentNameLoc().includes('Юг')) {
				await walk('c');
				await walk('s');
			} else if (getCurrentNameLoc().includes('Восток')) {
				await walk('c');
				await walk('e');
			} else {
				await walk('n');
				await walk('c');
			}
			await startOneSearchArtifact();
			return;
		}

		const found = () => /Вы нашли артефакт/.test(getFrame().contentDocument?.body?.textContent || '');
		const finish = async () => {
			const name = (/Вы нашли артефакт\s*([^!\n]*)/.exec(getFrame().contentDocument.body.textContent) || [])[1] || '';
			anoInfo(`Аномалия: артефакт найден ${ name.trim() }`);
			await goto(urlZona); // обратно на точку: infinityArtifact дальше сам решит — новый поиск или следующая точка
		};

		for (let n = 0; n < ANO_MAX_STEPS; n++) {
			if (found()) return finish();
			const f = anoParse(getFrame().contentDocument);
			if (!f) return anoInfo('Аномалия: детектор не найден');
			if (!f.artefact) return anoInfo('Аномалия: артефакт не виден');

			const p = anoPlan(f);
			if (!p) {
				anoInfo('Аномалия: проход занят, болтов нет — перезапуск');
				await searchArtifact(true);
				return;
			}

			anoInfo(`Аномалия: ход ${ n + 1 }: ${ p.bolt ? 'болт + ' : '' }${ p.dir } (арт ${ f.artefact.i * 11.25 }° r${ f.artefact.r }, болтов ${ f.bolts })`);

			if (p.bolt) {
				const b = await anoAct('bolt_' + p.dir);
				if (b.left) return anoInfo('Аномалия: ушли со страницы после болта');
				await awaitSec(0.7 + Math.random() * 0.6);
			}

			const s = await anoAct('step_' + p.dir);
			if (found()) return finish();
			if (s.left) {
				anoInfo(`Аномалия: страница сменилась после шага${ s.dmg ? ` (код ${ s.dmg })` : '' }`);
				return;
			}
			if (s.dmg > 0) {
				const hp = anoParse(getFrame().contentDocument)?.hp;
				console.warn(`[ano] урон ${ s.dmg }% на ходу ${ p.bolt ? 'bolt+' : '' }${ p.dir }, осталось ${ hp }%`);
				if (hp != null && hp <= ANO_MIN_HP) return anoInfo(`Аномалия: урон ${ s.dmg }%, осталось ${ hp }% — стоп`);
			}
			await awaitSec(0.7 + Math.random() * 0.6);
		}
		anoInfo(`Аномалия: не дошёл за ${ ANO_MAX_STEPS } ходов — перезапуск`);
		await searchArtifact(true);
	}

	async function infinityArtifact() {
		const artifacts = getCurrentNameLoc() === 'База «Чистого неба»' ? swampArtifacts : zatonArtifacts
		let artifact = artifacts.find((item) => item.isArtifact)
		if (!artifact) {
			document.querySelector('#info').innerHTML = 'Нету артов'
			return
		}

		for (const route of artifact.pathTo) {
			await walk(route)
		}

		const loop = async () => {
			const start = getFrame().contentDocument.querySelector('a[href="?mod=start_search"]')
			if (start) {
				artifact.isStart = true
				await startOneSearchArtifact()
			} else {
				artifact.isArtifact = false
				artifact = await nextArtifact(artifact, artifacts)
				if (!artifact) {
					document.querySelector('#info').innerHTML = 'Нету артов'
					return
				}
			}

			// Ожидание после поиска
			if (artifact.isStart) await awaitSec(10)
			await loop()
		}

		await loop()
	}

	async function nextArtifact(artifact, artifacts) {
		if (!artifact.pathNext) return artifact

		for (const route of artifact.pathNext) {
			await walk(route)
		}

		return artifacts.find((item) => item.isArtifact)
	}

	function renderTimer(timer) {
		document.querySelector('#timer').innerHTML = String(Math.floor(timer / 60)).padStart(2, '0') + ':' + String(timer % 60).padStart(2, '0');
	}

	async function searchArtifactForSwamp() {
		const content = getFrame().contentDocument.querySelector('#artefacts script')?.innerHTML;
		const index = content?.indexOf('var danger = "');
		if (index > 0) {
			await goto(`${ urlZona }?step=${ content.slice(index + 14, index + 19).indexOf('0') }`);
			await searchArtifactForSwamp();
		}
	}

	async function raid() {
		await goto(urlZona + '?mod=create_party');
		await goto(domen + 'raid_start.php');

		const startRaid = getFrame().contentDocument.querySelector('img[src="../raids/img/raids_start_button.jpg"]')
		startRaid?.click();
		await awaitSec(2);

		await raidGame()
	}

	async function raidGame() {
		const endScreen = getFrame().contentDocument.querySelector('#endScreen')
		if (endScreen.style.opacity !== '0') {
			const nextBtn = getFrame().contentDocument.querySelector('#nextFieldBtn')
			nextBtn.click();
			await awaitSec(2);

			const startRaid = getFrame().contentDocument.querySelector('img[src="../raids/img/raids_start_button.jpg"]')
			startRaid.click();
			await awaitSec(2);
		}

		const mutants = getFrame().contentDocument.querySelectorAll('.raid_mutants_wrap img.burer_breath');
		let count = 0;

		for (let mutant of mutants) {
			if (mutant.style.visibility) count++
			mutant.click();
		}

		if (mutants.length === count) {
			const moveBtn = getFrame().contentDocument.querySelector('#moveBtn');
			moveBtn.click();
		}

		await awaitSec(11);
		await raidGame()
	}

	// ================= Погоня =================
	// Открыть погоню во фрейме и нажать «Погоня»: бот считает маршрут с максимумом
	// бонусов (при равенстве — минимум ходов) и сам жмёт стрелки.

	const CHASE_SIZE = 10;
	const CHASE_POLL_SEC = 0.5;     // интервал проверки, появились ли новые кнопки
	const CHASE_MOVE_TIMEOUT = 15;  // сколько секунд ждать отрисовки хода

	const CHASE_RULES = [ // первое совпадение определяет тип клетки
		{ type: 'car', re: /^uaz_/ },
		{ type: 'finish', re: /^maze_finish/ },
		{ type: 'bonus', re: /^cell_bonus/ },
		{ type: 'radiation', re: /^cell_rad/ },
	];
	const CHASE_FLOOR = /dirt/;
	const CHASE_DIRS = ['up', 'down', 'left', 'right'];
	const CHASE_DELTA = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
	const CHASE_OPP = { up: 'down', down: 'up', left: 'right', right: 'left' };
	const CHASE_WALL = { top_wall: 'up', bottom_wall: 'down', left_wall: 'left', right_wall: 'right' };
	const CHASE_BUTTON = { up: 'top_arrow', down: 'bottom_arrow', left: 'left_arrow', right: 'right_arrow' };
	const CHASE_ARROW = { up: '↑', down: '↓', left: '←', right: '→' };

	let chaseRunning = false;
	let chaseStopRequested = false;

	function chaseInfo(text) {
		document.querySelector('#info').innerHTML = text;
		console.log(text);
	}

	function chaseDoc() {
		return getFrame().contentDocument;
	}

	function chaseImages(node) {
		const fileName = (url) => url.split('/').pop().split('?')[0];
		const out = [];
		for (const el of node.querySelectorAll('*')) {
			const src = el.tagName === 'IMG' && el.getAttribute('src');
			if (src) out.push(fileName(src));
			for (const m of (el.getAttribute('style') || '').matchAll(/url\(\s*["']?([^"')]+)/g)) out.push(fileName(m[1]));
		}
		return out.filter((f) => !CHASE_FLOOR.test(f));
	}

	// Поле из документа фрейма; null — если на странице нет поля погони
	function chaseParse(doc) {
		const nodes = [...(doc?.querySelectorAll('#content center #map_cell') ?? [])];
		if (nodes.length !== CHASE_SIZE * CHASE_SIZE) return null;

		const grid = Array.from({ length: CHASE_SIZE }, (_, r) =>
			Array.from({ length: CHASE_SIZE }, (_, c) => ({
				r, c, type: 'empty',
				walls: { up: r === 0, down: r === CHASE_SIZE - 1, left: c === 0, right: c === CHASE_SIZE - 1 },
			})),
		);

		nodes.forEach((node, i) => {
			const cell = grid[Math.floor(i / CHASE_SIZE)][i % CHASE_SIZE];
			for (const el of node.querySelectorAll('[id$="_wall"]')) {
				const dir = CHASE_WALL[el.id];
				if (!dir) continue;
				cell.walls[dir] = true;
				const [dr, dc] = CHASE_DELTA[dir];
				const nb = grid[cell.r + dr]?.[cell.c + dc];
				if (nb) nb.walls[CHASE_OPP[dir]] = true;
			}
			const files = chaseImages(node);
			const rule = CHASE_RULES.find((rl) => files.some((f) => rl.re.test(f)));
			if (rule) cell.type = rule.type;
		});

		const flat = grid.flat();
		const car = flat.find((c) => c.type === 'car');
		return {
			grid,
			carPos: car ? car.r * CHASE_SIZE + car.c : -1,
			finishes: flat.filter((c) => c.type === 'finish'),
			bonuses: flat.filter((c) => c.type === 'bonus'),
			key: flat.map((c) => CHASE_DIRS.map((d) => +c.walls[d]).join('')).join(''), // отпечаток стен
		};
	}

	// BFS по (позиция, маска бонусов). Возвращает лучший маршрут или null.
	function chaseSolve(field) {
		const { grid, carPos, finishes, bonuses } = field;
		const SIZE = CHASE_SIZE, CELLS = SIZE * SIZE;
		const bit = new Map(bonuses.map((c, i) => [c.r * SIZE + c.c, i]));
		const B = bonuses.length, MASKS = 1 << B, FULL = MASKS - 1;

		const isFinish = new Uint8Array(CELLS);
		for (const f of finishes) isFinish[f.r * SIZE + f.c] = 1;

		// Скольжение до упора, бонусы собираются по пути
		const slide = (pos, dir) => {
			let r = Math.floor(pos / SIZE), c = pos % SIZE, gained = 0, moved = false;
			const [dr, dc] = CHASE_DELTA[dir];
			while (!grid[r][c].walls[dir]) {
				r += dr; c += dc; moved = true;
				const b = bit.get(r * SIZE + c);
				if (b !== undefined) gained |= 1 << b;
			}
			return moved ? { pos: r * SIZE + c, gained } : null;
		};
		const moves = Array.from({ length: CELLS }, (_, pos) => CHASE_DIRS.map((d) => slide(pos, d)));

		const N = CELLS * MASKS;
		const dist = new Int32Array(N).fill(-1);
		const parent = new Int32Array(N).fill(-1);
		const via = new Int8Array(N).fill(-1);
		const startState = carPos * MASKS;
		dist[startState] = 0;
		const queue = [startState];
		const best = new Array(B + 1).fill(-1);
		const popcount = (x) => { let n = 0; while (x) { x &= x - 1; n++; } return n; };

		for (let head = 0; head < queue.length; head++) {
			const s = queue[head];
			const pos = Math.floor(s / MASKS), mask = s % MASKS;
			if (isFinish[pos] && s !== startState) { // остановка на финише завершает уровень
				const k = popcount(mask);
				if (best[k] === -1) best[k] = s;
				if (mask === FULL) break;
				continue;
			}
			for (let d = 0; d < 4; d++) {
				const m = moves[pos][d];
				if (!m) continue;
				const ns = m.pos * MASKS + (mask | m.gained);
				if (dist[ns] !== -1) continue;
				dist[ns] = dist[s] + 1; parent[ns] = s; via[ns] = d;
				queue.push(ns);
			}
		}

		for (let k = B; k >= 0; k--) {
			const s = best[k];
			if (s === -1) continue;
			const dirs = [], stops = [];
			for (let cur = s; cur !== startState; cur = parent[cur]) {
				dirs.push(CHASE_DIRS[via[cur]]);
				stops.push(Math.floor(cur / MASKS));
			}
			return { bonuses: k, total: B, dirs: dirs.reverse(), stops: stops.reverse() };
		}
		return null;
	}

	// Ждём отрисовки хода: старая кнопка пропала (или фрейм перезагрузился) и появились новые
	async function chaseWaitForMove(oldDoc, oldButton) {
		const deadline = Date.now() + CHASE_MOVE_TIMEOUT * 1000;
		while (Date.now() < deadline) {
			await awaitSec(CHASE_POLL_SEC);
			const doc = chaseDoc();
			const gone = doc !== oldDoc || !oldButton.isConnected;
			const fresh = CHASE_DIRS.some((d) => {
				const b = doc?.querySelector('.' + CHASE_BUTTON[d]);
				return b && b !== oldButton;
			});
			if (gone && fresh) return true;
		}
		return false;
	}

	async function chase() {
		chaseRunning = true;
		chaseStopRequested = false;
		try {
			const field = chaseParse(chaseDoc());
			if (!field) return chaseInfo('Погоня: поле не найдено — открой погоню во фрейме');
			if (field.carPos === -1) return chaseInfo('Погоня: машина не найдена');
			if (!field.finishes.length) return chaseInfo('Погоня: финиш не найден');

			const plan = chaseSolve(field);
			if (!plan) return chaseInfo('Погоня: финиш недостижим');

			const fmt = (p) => `(${ Math.floor(p / CHASE_SIZE) + 1 }, ${ (p % CHASE_SIZE) + 1 })`;
			const arrows = plan.dirs.map((d) => CHASE_ARROW[d]).join(' ');
			console.log(`Погоня: бонусы ${ plan.bonuses }/${ plan.total }, ходов ${ plan.dirs.length }: ${ arrows }`);

			for (let i = 0; i < plan.dirs.length; i++) {
				if (chaseStopRequested) return chaseInfo(`Погоня: остановлено перед ходом ${ i + 1 }/${ plan.dirs.length }`);

				const dir = plan.dirs[i];
				const doc = chaseDoc();
				const btn = doc.querySelector('.' + CHASE_BUTTON[dir]);
				if (!btn) return chaseInfo(`Погоня: нет кнопки .${ CHASE_BUTTON[dir] } на ходу ${ i + 1 } — остановился`);

				btn.click();
				chaseInfo(`Погоня: ${ i + 1 }/${ plan.dirs.length } ${ CHASE_ARROW[dir] } (бонусы ${ plan.bonuses }/${ plan.total })`);

				if (i === plan.dirs.length - 1) break; // последний ход заканчивает уровень

				if (!(await chaseWaitForMove(doc, btn))) {
					return chaseInfo(`Погоня: ход ${ i + 1 } не отрисовался за ${ CHASE_MOVE_TIMEOUT } с — остановился`);
				}
				const now = chaseParse(chaseDoc());
				if (!now || now.key !== field.key) return chaseInfo(`Погоня: после хода ${ i + 1 } уровень перерисовался — остановился`);
				if (now.carPos !== plan.stops[i]) {
					return chaseInfo(`Погоня: после хода ${ i + 1 } машина в ${ fmt(now.carPos) }, ожидалась ${ fmt(plan.stops[i]) } — остановился`);
				}
			}
			chaseInfo(`Погоня: уровень пройден, бонусы ${ plan.bonuses }/${ plan.total }`);
		} finally {
			chaseRunning = false;
		}
	}
})();