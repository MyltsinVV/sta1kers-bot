(function(){
	const urlZona = 'https://sta1kers.ru/zona.php';

	let hT;

	setTimeout(bot, 100);

	function bot() {
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
				<center><input type=\'button\' id=\'run\' value=\'Старт\'></center>
				<center><input type=\'button\' id=\'stop\' value=\'Остановить\' style=\'display: none\'></center>
			</div>
		`);

		jQuery('#run').click(function() {
			jQuery(this).hide();
			jQuery('#stop').show();
			interval();
			return false;
		});
		jQuery('#stop').click(function() {
			clearInterval(hT);
			jQuery(this).hide();
			jQuery('#run').show();
			return false;
		});
	}

	function interval() {
		run();
		hT = setInterval(function() {
			run();
		}, 3000);
	}

	function getFrame() {
		return document.querySelector('iframe');
	}

	function run() {
		const frame = getFrame();
		frame.addEventListener('load', murderMutants);
		frame.setAttribute('src', urlZona);
	}

	function murderMutants() {
		const doc = this.contentDocument;
		const hp = doc.querySelector('img[src="../img/ico/life.png"]').parentNode.innerText;

		if (hp.trim() === '0') {
			const apte4ka = doc.querySelector('small.stalker_link > img[src="../img/ico/apte4ka.png"]')?.parentNode?.innerText;
			if (!apte4ka) {
				goto(`${ urlZona }?&apt=use`);
			}
		} else {
			const mutants = doc.querySelectorAll('#mutants img[title="Пистолет"]');
			if (mutants.length > 0) {
				goto(urlZona + mutants[0].parentNode.getAttribute('href'));
			}
		}

		this.removeEventListener('load', murderMutants);
	}

	function goto(url) {
		getFrame().setAttribute('src', url);
	}
})()
