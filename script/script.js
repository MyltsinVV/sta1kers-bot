(function(){
	const urlZona = 'https://sta1kers.ru/zona.php';
	const urlDungeon = 'https://sta1kers.ru/dungeon/';

	let farmArr;

	let test;
	let test2;

	let start;

	let goKey;

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
				src='${l}' 
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
					Мобы + арена
					<input type='button' id='run' value='Старт'>
					<input type='button' id='stop' value='Остановить' style='display: none'>
				</label>
				<span style="margin-left: 10px"></span>
				<input type='button' id='daily' value='Daily'>
				<span style="margin-left: 10px"></span>
				<input type='button' id='artifact' value='Search artifact'>
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

		await goto(urlZona);
		goKey = getFrame().contentDocument
			.querySelector('#location .linkw > a.linkw')?.getAttribute('href')
			.split('&')[1].split('=')[1];
	}

	function getFrame() {
		return document.querySelector('iframe');
	}

	async function go() {
		farmArr = [
			'arena',
			'farm'
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
		})
	}

	function goto(url, isAwaitSec = true) {
		return new Promise(resolve => {
			async function a() {
				getFrame().removeEventListener('load', a);
                isAwaitSec && await awaitSec(0.5);
				resolve(true);
			}
			getFrame().addEventListener('load', a);

			getFrame().setAttribute('src', url);
		})
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
		await transitionFromPripyatToJupiter(); // Переход на Юпитер
		await searchSwagJupiter(); // Поиск хабара на Юпитере
		await transitionFromJupiterToBackwater(); // Переход на Затон
		await searchSwagBackwater(); // Поиск хабара на Затоне
		await searchSwagDone(); // Сдача хабара Вобле
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

	function currentNameLoc() {
	    return getFrame().contentDocument.querySelector('#main .name').innerHTML;
    }

	async function walk(route) {
		const hp = getHp();
		if (hp === '0') {
			await goto(`${ urlZona }?&apt=use`);
			await awaitSec(2);
			await walk(route);
		} else {
            const currentName = currentNameLoc();
			await goto(`${ urlZona }?${typeof route === 'number' ? '' : 'd'}go=${ route }&go_key=${ goKey }`);
            if (currentName === currentNameLoc()) {
                await awaitSec(2);
                await walk(route);
            }
		}
	}

	async function awaitSec(sec) {
		return new Promise(resolve => {
			setTimeout(function() {
				resolve(true);
			}, sec * 1000)
		})
	}

	async function searchArtifact(start, newSearch) {
		if (start) {
			await goto(`${ urlZona }?mod=start_search`);
			await awaitSec(30);
			await goto(urlZona);
		}
		if (newSearch) {
			await goto(`${ urlZona }?mod=new_search`);
			await awaitSec(30);
			await goto(urlZona);
		}

		let doc = getFrame().contentDocument;
		const artifactInfo = doc.querySelector('#artefacts .q2.lal i').innerHTML;
		const distanceText = 'Расстояние: ';
		const distanceIndex = artifactInfo.indexOf(distanceText);
		const distance = Number(artifactInfo.slice(distanceIndex + distanceText.length, distanceIndex + distanceText.length + 2).trim());

		if (distance === 0) return;

		await goto(urlZona);
		doc = getFrame().contentDocument;

		const hpPercent = Number(doc.querySelectorAll('#top .rblock.blue.esmall')[1]
			.querySelector('td:last-child .value-block.lh1').textContent.slice(0, -1));
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

		console.log('hpPercent: ', hpPercent);
		console.log('Расстояние: ', distance);
		console.log('Болты: ', countBolt);
		console.log('Макс. заряд: ', countMaxCharge);
		console.log('Индекатор: ', indicator);

		if (countBolt >= distance) {
			console.log('countBolt >= distance');
			await goto(`${ urlZona }?mod=bolt_search`);
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
			return;
		}

		if (indicator === 'red' && countBolt > 0) {
			console.log('indicator === \'red\' && countBolt > 0');
			await goto(`${ urlZona }?mod=bolt_search`);
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
			return;
		}

		if (indicator === 'yellow' && hpPercent > 72) {
			console.log('indicator === \'yellow\' && hpPercent > 72');
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
			return;
		}

		if (indicator === 'yellow' && countMaxCharge <= 8 && countBolt > 0) {
			console.log('indicator === \'yellow\' && countMaxCharge <= 8 && countBolt > 0');
			await goto(`${ urlZona }?mod=bolt_search`);
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
		}

		if (indicator === 'green' && hpPercent > 24) {
			console.log('indicator === \'green\' && hpPercent > 24');
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
			return;
		}

		if (hpPercent > countMaxCharge * 12) {
			console.log('hpPercent > countMaxCharge * 12');
			await goto(`${ urlZona }?mod=step_search`);
			await searchArtifact();
		} else {
			if (indicator === 'red' && countMaxCharge === 9) {
				console.log('indicator === \'red\' && countMaxCharge === 9');
				await searchArtifact(false, true);
				return;
			}
			console.log('apt=use');
			await goto(`${ urlZona }?&apt=use`);
			await awaitSec(2);
			await searchArtifact();
		}
	}

	async function searchCache(start) {
		if (start) {
			await goto(`${ urlZona }?mod=start_search`);
			await awaitSec(30);
			await goto(urlZona);
		}

		const doc = getFrame().contentDocument;
		if (doc.querySelector('img[title="1-й тип"]')) {
			await searchCache1({})
		} else if (doc.querySelector('img[title="2-й тип"]')) {
			console.log(2);
		} else if (doc.querySelector('img[title="3-й тип"]')) {
			console.log(3);
		}
	}

	async function searchCache1({ correctAnswer = [], depth = 1 }) {
		if (depth === 6) return;

		if (correctAnswer[depth - 1]) {
			if (correctAnswer[depth - 1] === 'r') {
				await goto(`${ urlZona }?mo	d=right_search`);
			} else {
				await goto(`${ urlZona }?mod=left_search`);
			}
			depth++;
			await searchCache1({ correctAnswer, depth });
		} else {
			await goto(`${ urlZona }?mod=left_search`);
			const doc = getFrame().contentDocument;
			const error = doc.querySelector('.r6.stalker_link.error')?.innerText;
			if (error) {
				correctAnswer.push('r');
				await searchCache1({ correctAnswer });
			} else {
				correctAnswer.push('l');
				depth++;
				await searchCache1({ correctAnswer, depth });
			}
		}
	}
})()
