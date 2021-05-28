(function() {
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
			path: [1, 5],
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
			path: [5],
		},
		{
			name: 'ДК «Энергетик»',
			path: [8, 4, 4, 4],
		},
		{
			name: 'Подземная автостоянка',
			path: [8, 4, 4],
		},
		{
			name: '«Вулкан»',
			path: [8, 4],
		},
		{
			name: 'Детский сад',
			path: [8],
		},
		{
			name: 'Магазин «Берёзка»',
			path: [8, 5],
		},
		{
			name: 'Гастроном',
			path: [8, 8, 4, 4, 4],
		},
		{
			name: 'Магазин «Книги»',
			path: [8, 8, 4, 4],
		},
		{
			name: 'Универмаг',
			path: [8, 8, 4],
		},
		{
			name: 'Общежитие',
			path: [8, 8],
		},
	];

	const zatonArtifacts = [
		{
			name: 'СгоревшийХуторСевер',
			pathTo: [1, 4, 'n'],
			pathBack: ['c', 5, 8],
			isArtifact: true
		},
		{
			name: 'СгоревшийХуторЗапад',
			pathTo: [1, 4, 'w'],
			pathBack: ['c', 5, 8],
			isArtifact: true
		},
		{
			name: 'СгоревшийХуторЮг',
			pathTo: [1, 4, 's'],
			pathBack: ['c', 5, 8],
			isArtifact: true
		},
		{
			name: 'Котёл',
			pathTo: [1, 5],
			pathBack: [4, 8],
			isArtifact: true
		},
		{
			name: 'КотёлСевер',
			pathTo: [1, 5, 'n'],
			pathBack: ['c', 4, 8],
			isArtifact: true
		},
		{
			name: 'КотёлЗапад',
			pathTo: [1, 5, 'w'],
			pathBack: ['c', 4, 8],
			isArtifact: true
		},
		{
			name: 'Топь',
			pathTo: [4, 4],
			pathBack: [5, 5],
			isArtifact: true
		},
		{
			name: 'ТопьСевер',
			pathTo: [4, 4, 'n'],
			pathBack: ['c', 5, 5],
			isArtifact: true
		},
		{
			name: 'ТопьЗапад',
			pathTo: [4, 4, 'w'],
			pathBack: ['c', 5, 5],
			isArtifact: true
		},
		{
			name: 'ТопьЮг',
			pathTo: [4, 4, 's'],
			pathBack: ['c', 5, 5],
			isArtifact: true
		},
		{
			name: 'ЗемснарядСевер',
			pathTo: [5, 'n'],
			pathBack: ['c', 4],
			isArtifact: true
		},
		{
			name: 'ЗемснарядВосток',
			pathTo: [5, 'e'],
			pathBack: ['c', 4],
			isArtifact: true
		},
		{
			name: 'ЗемснарядЮг',
			pathTo: [5, 's'],
			pathBack: ['c', 4],
			isArtifact: true
		},
		{
			name: 'Соснодуб',
			pathTo: [4, 4, 8, 8],
			pathBack: [1, 1, 5, 5],
			isArtifact: true
		},
		{
			name: 'СоснодубСевер',
			pathTo: [4, 4, 8, 8, 'n'],
			pathBack: ['c', 1, 1, 5, 5],
			isArtifact: true
		},
		{
			name: 'СоснодубСевер',
			pathTo: [4, 4, 8, 8, 'w'],
			pathBack: ['c', 1, 1, 5, 5],
			isArtifact: true
		},
		{
			name: 'Коготь',
			pathTo: [8, 8],
			pathBack: [5, 5],
			isArtifact: true
		},
		{
			name: 'КоготьСевер',
			pathTo: [8, 8, 'n'],
			pathBack: ['c', 5, 5],
			isArtifact: true
		},
		{
			name: 'КоготьЗапад',
			pathTo: [8, 8, 'w'],
			pathBack: ['c', 5, 5],
			isArtifact: true
		},
		{
			name: 'КоготьВосток',
			pathTo: [8, 8, 'e'],
			pathBack: ['c', 5, 5],
			isArtifact: true
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
				style='z-index: 100; position: fixed; top: 26px; height: calc(100% - 26px); width: 100%; left: 0; border: unset;'
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
				<span style="margin-left: 5px"></span>
				<input type='button' id='daily' value='Daily'>
				<span style="margin-left: 5px"></span>
				<input type='button' id='defence' value='База'>
				<span style="margin-left: 5px"></span>
				<input type='button' id='artifact' value='One artifact'>
				<span style="margin-left: 5px"></span>
				<input type='button' id='artifactInfinity' value='Infinity artifacts'>
				<span id="timer">15:00</span>
			</div>
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
			await searchArtifact(true);
		});
		document.querySelector('#artifactInfinity').addEventListener('click', async function() {
			await infinityArtifact();
		});
		document.querySelector('#defence').addEventListener('click', async function() {
			await goto('https://sta1kers.ru/bitva.php?mod=strike');
			setInterval(async () => {
				await goto('https://sta1kers.ru/bitva.php?mod=strike');
			}, 10 * 1000)
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
		return doc.querySelector('#top table.stalker_link.stalker_text td:first-child').innerText.trim();
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
		await searchSwagJupiter(); // Поиск хабара на Юпитере
		await questSokolov(); // Квест Соколова
		await questStrelokProgress(); // Выполнить квест Стрелка
		await transitionFromJupiterToBackwater(); // Переход на Затон
		await searchSwagBackwater(); // Поиск хабара на Затоне
		await searchSwagDone(); // Сдача хабара Вобле
		await questLisnik(); // Квест Лесника
		await transitionFromBackwaterToPripyat(); // Переход в Припять
		await questStrelokCompleted(); // Сдать квест Стрелка
		await goto(urlZona);
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
		await walk(8);
		await walk(8);
		await searchSwag();
		await walk(8);
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
		await walk(8);
		await searchSwag();
		await walk(8);
		await searchSwag();
		await walk(8);
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
		await walk(5);
		await walk(5);
		await walk(5);
		await walk(5);
		await walk(8);
		await walk(8);
		await walk(8);
	}

	async function searchSwagJupiter() {
		// Первая полоса
		await walk(4);
		await searchSwag();
		await walk(8);
		await searchSwag();
		await walk(8);
		await searchSwag();
		await walk(8);
		await searchSwag();
		// Вторая полоса
		await walk(5);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await walk(1);
		await walk(1);
		await searchSwag();
		// Третья полоса
		await walk(5);
		await searchSwag();
		await walk(8);
		await searchSwag();
		await walk(8);
		await searchSwag();
		await walk(8);
		await searchSwag();
		await walk(8);
		await searchSwag();
		// Четвёртая и пятая полоса
		await walk(5);
		await walk(5);
		await searchSwag();
		await walk(4);
		await walk(1);
		await walk(1);
		await searchSwag();
		await walk(1);
		await searchSwag();
		await walk(1);
		await walk(5);
		await searchSwag();
		// Возвращение на базу
		await walk(4);
		await walk(4);
		await walk(4);
		await walk(8);
	}

	async function searchSwagBackwater() {
		// Первая полоса
		await walk(1);
		await walk(4);
		await walk(4);
		await searchSwag();
		await walk(8);
		await walk(8);
		await searchSwag();
		await walk(8);
		await walk(8);
		// Вторая полоса
		await walk(5);
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
		await walk(5);
		await searchSwag();
		await walk(8);
		await walk(8);
		await searchSwag();
		// Четвёртая полоса
		await walk(5);
		await searchSwag();
		await walk(8);
		// Пятая полоса
		await walk(5);
		await searchSwag();
		await walk(8);
		await searchSwag();
		// Возвращаемся домой
		await walk(4);
		await walk(4);
		await walk(1);
		await walk(1);
		await walk(1);
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
		await walk(5);
		await walk(8);
		await walk(8);
		await goto('https://sta1kers.ru/npc/rogovec.php?quest=710');
		await walk(1);
		await walk(1);
		await progressClick();
		await murderMutantsCount(5);
		await walk(8);
		await walk(8);
		await goto('https://sta1kers.ru/npc/rogovec.php?quest=721');
		await walk(1);
		await walk(1);
		await progressClick();
		await walk(8);
		await walk(8);
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
		await walk(5);
		await walk(8);
		await walk(8);
	}

	async function questSokolov() {
		await walk(8);
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=50');
		await goto('https://sta1kers.ru/npc/a_npc.php?mod=daily');
		await walk(4);
		await murderMutantsCount(5);
		await walk(5);
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
		await walk(5);
		await walk(5);
		await walk(8);
	}

	async function questStrelokStart() {
		await goto('https://sta1kers.ru/npc/a_npc.php?npc_id=88');
		await goto('https://sta1kers.ru/npc/a_npc.php?mod=daily');
	}

	async function questStrelokProgress() {
		await walk(4);
		await walk(8);
		await walk(8);
		await walk(8);
		await progressClick(false);
		await walk(1);
		await walk(1);
		await walk(1);
		await walk(1);
		await walk(5);
		await walk(5);
		await progressClick(false);
		await walk(8);
		await walk(8);
		await walk(8);
		await walk(5);
		await progressClick(false);
		await walk(1);
		await walk(1);
		await walk(4);
		await walk(4);
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

	async function searchArtifact(start, newSearch) {
		if (getHp() === '0') {
			await goto(`${ urlZona }?&apt=use`);
			await awaitSec(2);
			await searchArtifact(true);
			return;
		}
		if (start) {
			await goto(`${ urlZona }?mod=start_search`);
			await awaitSec(30);
			await goto(urlZona);
		}
		if (newSearch) {
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
			await searchArtifact(true);
			return;
		}

		let doc = getFrame().contentDocument;
		const artifactInfo = doc.querySelector('#artefacts .q2.lal i')?.innerHTML;
		if (!artifactInfo) return;

		const distanceText = 'Расстояние: ';
		const distanceIndex = artifactInfo.indexOf(distanceText);
		const distance = Number(artifactInfo.slice(distanceIndex + distanceText.length, distanceIndex + distanceText.length + 2).trim());

		if (distance === 0) return;

		await goto(urlZona);
		doc = getFrame().contentDocument;

		const hpPercent = Number(doc.querySelectorAll('#top .rblock.blue.esmall')[1].querySelector('td:last-child .value-block.lh1').textContent.slice(0, -1));
		const boltText = 'Болты: ';
		const boltIndex = artifactInfo.indexOf(boltText);
		const countBolt = Number(artifactInfo.slice(boltIndex + boltText.length, boltIndex + boltText.length + 1));
		const maxChargeText = 'Макс. заряд: ';
		const maxChargeIndex = artifactInfo.indexOf(maxChargeText);
		const countMaxCharge = Number(artifactInfo.slice(maxChargeIndex + maxChargeText.length, maxChargeIndex + maxChargeText.length + 1));
		let indicator;
		if (artifactInfo.indexOf('green') > 0) {
			indicator = 'green';
		} else if (artifactInfo.indexOf('yellow') > 0) {
			indicator = 'yellow';
		} else if (artifactInfo.indexOf('red') > 0) {
			indicator = 'red';
		}

		if (countBolt >= distance) {
			await goto(`${ urlZona }?mod=bolt_search`);
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
			return;
		}

		if (indicator === 'red' && countBolt > 0) {
			await goto(`${ urlZona }?mod=bolt_search`);
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
			return;
		}

		if (indicator === 'yellow' && hpPercent > 72) {
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
			return;
		}

		if (indicator === 'yellow' && countMaxCharge <= 8 && countBolt > 0) {
			await goto(`${ urlZona }?mod=bolt_search`);
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
		}

		if (indicator === 'green' && hpPercent > 24) {
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
			return;
		}

		if (hpPercent > countMaxCharge * 12) {
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
		} else {
			if (indicator === 'red' && countMaxCharge === 9) {
				await searchArtifact(false, true);
				return;
			}
			await goto(`${ urlZona }?&apt=use`);
			await awaitSec(2);
			await searchArtifact();
		}
	}

	async function infinityArtifact() {
		const artifact = zatonArtifacts.filter((item) => item.isArtifact)[0];
		if (!artifact) return;

		for (const route of artifact.pathTo) {
			await walk(route);
		}

		const start = getFrame().contentDocument.querySelector('a[href="?mod=start_search"]');
		if (start) {
			await searchArtifact(true);
		} else {
			artifact.isArtifact = false;
		}

		for (const route of artifact.pathBack) {
			await walk(route);
		}

		if (start) {
			let timer = 15 * 60;

			let timerInterval = setInterval(() => {
				timer--;
				renderTimer(timer);
				if (timer === 0) {
					clearInterval(timerInterval);
				}
			}, 1000);

			setTimeout(async function () {
				await infinityArtifact();
			}, 15 * 60 * 1000);
		} else {
			await infinityArtifact();
		}
	}

	function renderTimer(timer) {
		document.querySelector('#timer').innerHTML = String(Math.floor(timer / 60)).padStart(2, '0') + ':' + String(timer % 60).padStart(2, '0');
	}
})();
