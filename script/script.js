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
				frameborder=\'0\' 
				src=\'${l}\' 
				style=\'z-index: 100; position: fixed; top: 26px; height: calc(100% - 26px); width: 100%; left: 0;\'
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
					<input type=\'button\' id=\'run\' value=\'Старт\'>
					<input type=\'button\' id=\'stop\' value=\'Остановить\' style=\'display: none\'>
				</label>
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

	async function series() {
		const doc = getFrame().contentDocument;
		const hp = doc.querySelector('img[src="../img/ico/life.png"]').parentNode.innerText;

		if (hp.trim() === '0') {
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

	async function murderMutants(dungeon) {
		return new Promise(async function(resolve) {
			await goto(dungeon ? urlDungeon : urlZona);
			const doc = getFrame().contentDocument;
			const mutants = doc.querySelectorAll('#mutants img[title="Пистолет"]');
			if (mutants.length > 0) {
				await goto((dungeon ? urlDungeon : urlZona) + mutants[mutants.length - 1].parentNode.getAttribute('href'));
			}
			resolve(true);
		})
	}

	function goto(url) {
		return new Promise(resolve => {
			function a() {
				getFrame().removeEventListener('load', a);
				resolve(true);
			}
			getFrame().addEventListener('load', a);

			getFrame().setAttribute('src', url);
		})
	}

	async function walk(route) {
		await goto(`${ urlZona }?${typeof route === 'number' ? '' : 'd'}go=${ route }&go_key=${ goKey }`);
	}

	async function awaitSec(sec) {
		return new Promise(resolve => {
			setTimeout(function() {
				resolve(true);
			}, sec * 1000)
		})
	}

	async function snorkLair() {
		return new Promise(async (resolve) => {
			await walk('s');
			await goto(urlZona + '?mod=create_party');
			await goto(urlZona + '?mod=start_dungeon');
			await goto(urlDungeon + '?next=true');
			await murderMutants(true);
			await awaitSec(2);
			await murderMutants(true);
			await goto(urlDungeon + '?next=true');
			await goto(urlDungeon + '?go=1');
			await murderMutantsDung();
			await goto(urlDungeon + '?go=4');
			await goto(urlDungeon + '?go=3');
			await murderMutantsDung();
			getFrame().contentDocument.querySelector('#party .input[type="text"]').value = 'афк';
			getFrame().contentDocument.querySelector('#party .input[type="submit"]').click();
			await awaitSec(1);
			resolve(true);
		})
	}

	async function murderMutantsDung() {
		await murderMutants(true);
		await awaitSec(2);
		await murderMutants(true);
		await awaitSec(2);
		await murderMutants(true);
		await awaitSec(2);
		await murderMutants(true);
		await awaitSec(2);
		await murderMutants(true);
	}
})()
