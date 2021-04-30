setInterval(function() {
	console.log(123);
	document.querySelector('a[href="?ib=994&mod=w"]').click();
	document.querySelector('a[href="?ib=994&mod=p"]').click();
	document.querySelector('a[href="zona.php"]').click();
}, 5000);

(function(){
	var hT;
	var hB;
	var hU;
	var w;
	var _period;
	var _hold;
	var _jqObj;
	var _selector;
	var _l = window.document.location.toString().replace(/#.*$/, '');
	var _fields = {length:0};
	var _found;
	var _clicked = false;
	if(1 || typeof(jQuery) === "undefined"){
		var script = document.createElement("script");
		script.src = "//bot11x11.ru/!/jquery.js";
		script.onload = preBot;
		if(document.getElementsByTagName("head")[0]){
			document.getElementsByTagName("head")[0].appendChild(script);
		}else{
			document.getElementsByTagName("html")[0].appendChild(script);
		}
	}else{
		preBot();
	}
	function preBot(){
		jQuery("body").html("<center>Инициализация...</center>");
		setTimeout(ui, 100);
	}
	function ui(){
		if(!jQuery.fn.sortable){
			var script = document.createElement("script");
			script.src = "//bot11x11.ru/!/jquery-ui.js";
			script.onload = bot;
			if(document.getElementsByTagName("head")[0]){
				document.getElementsByTagName("head")[0].appendChild(script);
			}else{
				document.getElementsByTagName("html")[0].appendChild(script);
			}
		}else{
			bot();
		}
	}
	function showSave(){
		if(jQuery("ul li").length){
			jQuery("#help").hide();
		}else{
			jQuery("#help").show();
		}
		if(jQuery("#save").find("input[name=data]").val() == jQuery("body>div").html()){
			jQuery("#save").hide();
		}else{
			jQuery("#save").show();
		}
	}
	function period(){
		_period = parseFloat(jQuery("#period").val());
		if(!(_period > 0)){
			_period = 1;
		}
		jQuery("#period").attr("value", _period);
	}
	function hold(){
		_hold = parseFloat(jQuery("#hold").val());
		if(!(_hold >= 0)){
			_hold = 0;
		}
		jQuery("#hold").attr("value", _hold);
	}
	function bot(){

		jQuery.extend(jQuery.expr[":"], {
			"starts-with": function(elem, i, data, set){
				var text = jQuery.trim(jQuery(elem).text()), term = data[3];
				return text.indexOf(term) === 0;
			},
			"ends-with": function(elem, i, data, set){
				var text = jQuery.trim(jQuery(elem).text()), term = data[3];
				return text.lastIndexOf(term) === text.length - term.length;
			},
			"matches": function(elem, i, data, set){
				var text = jQuery.trim(jQuery(elem).text()), term = data[3];
				var regex = new RegExp(term, 'i');
				return regex.test(text);
			}
		});
		jQuery("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes");
		jQuery("input[type=checkbox]").css("display", "inline-block");
		if(window.opener){
			jQuery("body").html("<span></span><div><style>input[type=\"checkbox\"]{display: inline-block !important;}; a *{position: static !important;}</style>  <center><label><input type='checkbox' name='learn' checked='checked'>обучение</label></center>  <center><input type='button' id='run' value='Старт'></center>  <center><input type='button' id='stop' value='Остановить' style='display: none'></center>  <center>Кликать каждые <input type='input' id='period' value='5' size='2'> секунд</center>  <center>Бездействовать <input type='input' id='hold' value='60' size='2'> секунд</center>  <center id=help style='display: block; background-color: red;'>Начните играть в режиме обучения,<br>бот запомнит ваши действия</center>  <ul id=checked></ul><ul id=unchecked></ul>  <center><a href='#delete-unchecked' style='display: none;'>Удалить все неотмеченные</a></center></div><form method=\"post\" action=\"//bot11x11.ru/!/save.php\" target=\"_blank\" id=\"save\" style=\"display: none; margin: 10px 0;\"> <input type=\"hidden\" name=\"id\" value=\"d5da2c0b8063b4a78afe8a08ea097491\"> <input type=\"hidden\" name=\"page\" value=\"\"> <input type=\"hidden\" name=\"data\" value=\"\"> <center><input type=\"submit\" value=\"Сохранить\"></center> </form> <div style=\"margin:10px 0;\"><label><input type=checkbox id=page > хранить данные только для страницы <span></span></label></div>");
		}else{
			jQuery("body").css("max-width", "50vw");
			jQuery("body").css("margin-left", "50%");
			jQuery("body").css("min-width", "50vw");
			var l = document.location.toString();
			l = l.replace(/#.*$/, '');
			jQuery("body").html("<iframe id='bd5da2c0b8063b4a78afe8a08ea097491' frameborder='0' src='" + l + "' style='z-index: 100; position: fixed; left: 0; top: 0; height: 100vh; width: 50vw'></iframe><span></span><div><style>input[type=\"checkbox\"]{display: inline-block !important;}; a *{position: static !important;}</style>  <center><label><input type='checkbox' name='learn' checked='checked'>обучение</label></center>  <center><input type='button' id='run' value='Старт'></center>  <center><input type='button' id='stop' value='Остановить' style='display: none'></center>  <center>Кликать каждые <input type='input' id='period' value='5' size='2'> секунд</center>  <center>Бездействовать <input type='input' id='hold' value='60' size='2'> секунд</center>  <center id=help style='display: block; background-color: red;'>Начните играть в режиме обучения,<br>бот запомнит ваши действия</center>  <ul id=checked></ul><ul id=unchecked></ul>  <center><a href='#delete-unchecked' style='display: none;'>Удалить все неотмеченные</a></center></div><form method=\"post\" action=\"//bot11x11.ru/!/save.php\" target=\"_blank\" id=\"save\" style=\"display: none; margin: 10px 0;\"> <input type=\"hidden\" name=\"id\" value=\"d5da2c0b8063b4a78afe8a08ea097491\"> <input type=\"hidden\" name=\"page\" value=\"\"> <input type=\"hidden\" name=\"data\" value=\"\"> <center><input type=\"submit\" value=\"Сохранить\"></center> </form> <div style=\"margin:10px 0;\"><label><input type=checkbox id=page > хранить данные только для страницы <span></span></label></div>");
		}

		jQuery("#page").parent().find("span").text(document.location.pathname.replace(/^(\/.*?\/).*$/, '$1'));
		jQuery("#page").click(function(){
			jQuery.getJSON("//bot11x11.ru/!/page.php?callback=?", {page:jQuery(this).prop("checked")});
		});
		jQuery("input[name=learn]").change(function(){
			if(jQuery(this).prop("checked")){
				jQuery(this).attr("checked", "checked");
			}else{
				jQuery(this).removeAttr("checked");
			}
			showSave();
			setTimeout(get, 100);
		});
		jQuery("#run").click(function(){
			_fields = {length:0};
			jQuery(this).hide();
			jQuery("#stop").show();
			run();
			showSave();
			return false;
		});
		jQuery("#stop").click(function(){
			store({stop:true});
			clearTimeout(hT);
			jQuery(this).hide();
			jQuery("#run").show();
			showSave();
			return false;
		});
		period();
		jQuery("#period").change(function(){
			period();
			showSave();
		});
		hold();
		jQuery("#hold").change(function(){
			hold();
			showSave();
		});
		if(jQuery.fn.sortable){
			jQuery("ul").sortable({
				update: function(){
					var count = 1000;
					jQuery("ul li").each(function(){
						jQuery(this).attr("count", count);
						count += 1000;
					});
					showSave();
				}
			});
		}
		jQuery("ul#checked li input").each(function(){
			jQuery(this).prop("checked", "checked");
		});
		jQuery("ul#unchecked li input").each(function(){
			jQuery(this).prop("checked", "");
		});
		jQuery("#save").submit(function(){
			jQuery("body li").removeAttr("style");
			jQuery(this).find("input[name=data]").val(jQuery("body>div").html());
			jQuery(this).find("input[name=id]").val("d5da2c0b8063b4a78afe8a08ea097491");
			if(jQuery("#page").prop("checked")){
				jQuery(this).find("input[name=page]").val(jQuery("#page").parent().find("span").text());
			}else{
				jQuery(this).find("input[name=page]").val("");
			}
			showSave();
		});
		jQuery("#save").find("input[name=data]").val(jQuery("body>div").html());
		jQuery("a[href='#delete-unchecked']").click(function(){
			if(confirm("Удалить все неотмеченные?")){
				jQuery("ul li input:not(:checked)").closest("li").remove();
				showDeleteUnchecked();
				showSave();
			}
			return false;
		});
		get();
		w = window.opener||document.getElementById('bd5da2c0b8063b4a78afe8a08ea097491').contentWindow;
		jQuery("body", w.document).bind("DOMNodeInserted DOMNodeRemoved", function(){
			get();
		});
		if(jQuery("#stop").is(":visible")){
			setTimeout(function(){
				run();
			}, 500);
		}
		jQuery("ul li").addClass("hook");
		onReady();
		/*GOOGLE*/
	}
	function addSelector(obj){
		var _tagName = jQuery(obj).parent()[0].tagName;
		var _id = jQuery(obj).parent().attr("id");
		var _className = jQuery(obj).parent().attr("class");
		var _action = jQuery(obj).parent().attr("action");
		var tagName = jQuery(obj)[0].tagName;
		var id = jQuery(obj).attr("id");
		var className = jQuery(obj).attr("class");
		var name = jQuery(obj).attr("name");
		var href = jQuery(obj).attr("href");
		var type = jQuery(obj).attr("type");
		var text = jQuery(obj).text().trim();
		var html;
		if(jQuery(obj)[0].tagName.toLowerCase() == "img"){
			html = jQuery(obj)[0].outerHTML;
		}else if(jQuery(obj).text()){
			html = jQuery(obj).text();
		}else if(jQuery(obj).val()){
			html = jQuery(obj).val();
		}else{
			html = jQuery(obj).first().html();
		}
		if(id){
			if(/^[a-z]+$/i.test(id)){
				id = "#" + id;
			}else{
				id = "";
			}
		}else{
			id = "";
		}
		if(className){
			var arr = className.split(" ");
			className = "";
			for(var i = 0; i < arr.length; i++){
				if(arr[i] !== "d5da2c0b8063b4a78afe8a08ea097491" && arr[i] !== "bc7e4749b368b9beab178fd1e4" && /^[a-z]+$/i.test(arr[i])){
					className += "." + arr[i];
				}
			}
		}else{
			className = "";
		}
		if(name){
			name = '[name="' + name + '"]';
		}else{
			name = "";
		}
		if(type){
			type = '[type="' + type + '"]';
		}else{
			type = "";
		}
		if(text != ""){
			text = text.replace(/^(.{5}[^0-9]*).*$/, "$1").trim();
			text = ':contains("' + text + '")';
		}else{
			text = ':visible';
		}
		if(href){
			href = href.trim();
			href = href.replace(/^[./]+/, "");
			href = href.replace(/^.*?([a-z]*).*$/i, "$1");
			if(href){
				href = '[href*="' + href + '"]';
			}else{
				href = "";
			}
		}else{
			href = "";
		}
		if(_action){
			_action = _action.trim();
			_action = _action.replace(/^[./]+/, "");
			_action = _action.replace(/^.*?([a-z]*).*$/i, "$1");
			if(_action){
				_action = '[action*="' + _action + '"]';
			}else{
				_action = "";
			}
		}else{
			_action = "";
		}
		if(_id){
			if(/^[a-z]+$/i.test(_id)){
				_id = "#" + _id;
			}else{
				_id = "";
			}
		}else{
			_id = "";
		}
		if(_className){
			var arr = _className.split(" ");
			_className = "";
			for(var i = 0; i < arr.length; i++){
				if(arr[i] !== "d5da2c0b8063b4a78afe8a08ea097491" && arr[i] !== "bc7e4749b368b9beab178fd1e4" && /^[a-z]+$/i.test(arr[i])){
					_className += "." + arr[i];
				}
			}
		}else{
			_className = "";
		}
		var selector = _tagName + _id + _className + _action + " > " + tagName + id + className + type + name + href + text;
		html = html.replace(/<\/?a[^>]*>/gi, '').trim();
		html = html.replace(/\s*d5da2c0b8063b4a78afe8a08ea097491/gi, '').trim();
		html = html.replace(/class=["']["']/gi, '').trim();
		if(html == ""){
			html = selector;
		}
		jQuery("ul#unchecked").prepend(
			"<li class='hook' count='1'>" +
			"<span style='white-space: nowrap'>" +
			"<input type='checkbox'> " +
			"<a class='selector' style='padding: 5px; position: relative; max-height: 50px; overflow: hidden; display: inline-block; white-space: nowrap; text-overflow: ellipsis;' href='#'>" + html + "</a> " +
			"</span>" +
			"<span class='tools' style='display: none'>" +
			"<a class='click' title='Клик' href='#'><img src='//bot11x11.ru/!/img/click.png'></a> " +
			"<a class='audio' title='Звуковой сигнал' href='#'><img src='//bot11x11.ru/!/img/audio.png'></a> " +
			"<a class='pause' title='Пауза' href='#'><img src='//bot11x11.ru/!/img/pause.png'></a> " +
			"<a class='stop' title='Остановить' href='#'><img src='//bot11x11.ru/!/img/stop.png'></a> " +
			"<a class='js' title='Скрипт' href='#'><img src='//bot11x11.ru/!/img/script.png'></a> " +
			"<!--<a class='store' title='Экспортировать' href='#'><img src='//bot11x11.ru/!/img/store.png'></a>--> " +
			"<a class='delete' title='Удалить селектор' href='#'><img src='//bot11x11.ru/!/img/delete.png'></a> " +
			"</span>" +
			"</li>");
		jQuery("ul#unchecked li.hook a.selector:first").attr("title", selector);
		return selector;
	}
	function onReady(){
		clearInterval(hU);
		var c = 0;
		hU = setInterval(function(){
			if(c >= _period || w.document.readyState == "complete"){
				clearInterval(hU);
				hook();
				get();
				jQuery("body", w.document).bind("DOMNodeInserted DOMNodeRemoved", function(){
					get();
				});
			}
			c++;
		}, 500);
	}
	function get(){
		try{
			var l = document.location.toString();
			var nl = l.replace(/(\/\/[^\/]+\/).*$/, '$1');
			if(nl != l){
				console.log(nl);
				console.log(l);
				window.history.replaceState("", "", nl);
			}
		}catch(e){
		}
		if(!jQuery("input[name=learn]").prop("checked")){
			return;
		}
		sort();
		showDeleteUnchecked();
		jQuery(w).bind("onbeforeunload unload", function(){
			onReady();
		});
	}
	function hook(){
		jQuery("ul li.hook a.selector").click(function(){
			jQuery(this).next("span.tools").hide();
			var s = prompt("Селектор", jQuery(this).attr("title"));
			jQuery(jQuery(this).attr("title").split("::", 2)[0], w.document).css("border", "0");
			if(s == null){
				return false;
			}
			if(s == jQuery(this).attr("title")){
				return false;
			}
			if(s == ""){
				jQuery(this).closest("li").trigger("mouseout");
				jQuery(this).closest("li").remove();
				showSave();
				return false;
			}
			var jqobj = jQuery(s.split("::", 2)[0], w.document);
			if(jqobj.length){
				var h;
				if(jqobj[0].tagName.toLowerCase() == "img"){
					h = jqobj[0].outerHTML;
				}else if(jqobj.val()){
					h = jqobj.val();
				}else{
					h = jqobj.first().html();
				}
				h = h.replace(/<\/?a[^>]*>/gi, '').trim();
				if(h == ""){
					jQuery(this).text(s);
				}else{
					jQuery(this).html(h);
				}
				jQuery(this).attr("title", s);
				showSave();
			}else{
				alert("Селектор не найден");
			}
			return false;
		});
		jQuery("ul li.hook a.click").click(function(){
			jQuery(this).closest("span.tools").hide();
			if(!confirm("Кликать при обнаружении элемента?")){
				return false;
			}
			var selector = jQuery(this).closest("li").find("a.selector").attr("title").split("::", 2)[0];
			jQuery(selector, w.document).css("border", "0");
			jQuery(this).closest("li").find("a.selector").attr("title", selector);
			showSave();
			return false;
		});
		jQuery("ul li.hook a.audio").click(function(){
			jQuery(this).closest("span.tools").hide();
			var arr = jQuery(this).closest("li").find("a.selector").attr("title").split("::", 2);
			var selector = arr[0];
			var url = arr[1];
			var regexp = /audio\(['"](.*)['"]\)/g;
			var result = regexp.exec(url);
			if(result == null){
				url = "";
			}else{
				url = result[1];
			}
			url = prompt("Ссылка на звуковой файл (оставьте пустым для стандартного сигнала)", url);
			jQuery(selector, w.document).css("border", "0");
			if(url == null){
				return false;
			}
			jQuery(this).closest("li").find("a.selector").attr("title", selector + '::' + 'audio("' + url + '")');
			showSave();
			return false;
		});
		jQuery("ul li.hook a.pause").click(function(){
			jQuery(this).closest("span.tools").hide();
			var arr = jQuery(this).closest("li").find("a.selector").attr("title").split("::", 2);
			var selector = arr[0];
			var wait = arr[1];
			var regexp = /pause\(['"](.*)['"]\)/g;
			var result = regexp.exec(wait);
			if(result == null){
				wait = 60;
			}else{
				wait = result[1];
			}
			wait = prompt("Ждать секунд", wait);
			wait = parseInt(wait);
			if(!(wait >= 0)){
				wait = 60;
			}
			jQuery(selector, w.document).css("border", "0");
			if(wait == null){
				return false;
			}
			jQuery(this).closest("li").find("a.selector").attr("title", selector + '::' + 'pause(' + wait + ')');
			showSave();
			return false;
		});
		jQuery("ul li.hook a.stop").click(function(){
			jQuery(this).closest("span.tools").hide();
			if(!confirm("Остановить бота при обнаружении элемента?")){
				return false;
			}
			var selector = jQuery(this).closest("li").find("a.selector").attr("title").split("::", 2)[0];
			jQuery(selector, w.document).css("border", "0");
			jQuery(this).closest("li").find("a.selector").attr("title", selector + '::stop()');
			showSave();
			return false;
		});
		jQuery("ul li.hook a.js").click(function(){
			jQuery(this).closest("span.tools").hide();
			var arr = jQuery(this).closest("li").find("a.selector").attr("title").split("::", 2);
			var selector = arr[0];
			var url = arr[1];
			var regexp = /js\(['"](.*)['"]\)/g;
			var result = regexp.exec(url);
			if(result == null){
				url = "";
			}else{
				url = result[1];
			}
			url = prompt("Ссылка на скрипт", url.replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
			jQuery(selector, w.document).css("border", "0");
			if(url == null){
				return false;
			}
			jQuery(this).closest("li").find("a.selector").attr("title", selector + '::' + 'js("' + url.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '")');
			showSave();
			return false;
		});
		jQuery("ul li.hook a.store").click(function(){
			jQuery(this).closest("span.tools").hide();
			var arr = jQuery(this).closest("li").find("a.selector").attr("title").split("::", 2);
			var selector = arr[0];
			var name = arr[1];
			var regexp = /store\(['"](.*)['"]\)/g;
			var result = regexp.exec(name);
			if(result == null){
				name = "";
			}else{
				name = result[1];
			}
			name = prompt("Название колонки (оставьте пустым, если не требуется)", name);
			jQuery(selector, w.document).css("border", "0");
			if(name == null){
				return false;
			}
			jQuery(this).closest("li").find("a.selector").attr("title", selector + '::' + 'store("' + name + '")');
			showSave();
			return false;
		});
		jQuery("ul li.hook a.delete").click(function(){
			if(!confirm("Удалить селектор?")){
				return false;
			}
			jQuery(this).closest("li").trigger("mouseout");
			jQuery(this).closest("li").remove();
			showDeleteUnchecked();
			showSave();
			return false;
		});
		jQuery("ul li.hook").hover(function(){
			jQuery(this).find("span.tools").show();
			jQuery(jQuery(this).find("a.selector").attr("title").split("::", 2)[0], w.document).css("border", "solid 3px red");
		}, function(){
			jQuery(this).find("span.tools").hide();
			jQuery(jQuery(this).find("a.selector").attr("title").split("::", 2)[0], w.document).css("border", "0");
		});
		jQuery("ul li.hook").find("input").change(function(){
			jQuery(this).closest("li").trigger("mouseout");
			showDeleteUnchecked();
			sort();
			showSave();
		});
		jQuery("ul li.hook").removeClass("hook");
		jQuery("body :not(.d5da2c0b8063b4a78afe8a08ea097491)", w.document).click(function(){
			if(_clicked){
				return;
			}
			if(jQuery(this).parents("a[href],button").length){
				return;
			}
			_clicked = true;
			setTimeout(function(){
				_clicked = false;
			}, 500);
			if(!jQuery("input[name=learn]").prop("checked")){
				return;
			}
			var jqobj = jQuery(this);
			var jqselector = false;
			jQuery("ul li a.selector").each(function(){
				var s = jQuery(this).attr("title").split("::", 2)[0];
				if(jqobj.is(s)){
					jqselector = jQuery(this).closest("li").find("input").first();
				}
			});
			if(jqselector && jqselector.prop("checked")){
				return;
			}
			if(!jqselector){
				jqselector = jQuery("ul li a[title='" + addSelector(this) + "']").closest("li").find("input").first();
				hook();
				sort();
				showDeleteUnchecked();
				showSave();
			}
			jqselector.trigger("click");
			if(jQuery("#stop").is(":visible")){
				clearTimeout(hT);
				run();
			}
		});
		jQuery("body :not(.d5da2c0b8063b4a78afe8a08ea097491)", w.document).addClass("d5da2c0b8063b4a78afe8a08ea097491");
	}
	function sort(){
		jQuery("ul#checked").append(jQuery("ul#unchecked li input:checked").closest("li"));
		jQuery("ul#unchecked").prepend(jQuery("ul#checked li input:not(:checked)").closest("li"));
		var moved;
		do{
			moved = 0;
			jQuery("ul li").each(function(){
				if(!jQuery(this).next("li").length){
					return;
				}
				if(jQuery(this).find("input").prop("checked") < jQuery(this).next("li").find("input").prop("checked")){
					jQuery(this).before(jQuery(this).next("li"));
					moved = 1;
					return;
				}
				if(jQuery(this).find("input").prop("checked") == jQuery(this).next("li").find("input").prop("checked")
					&& parseInt(jQuery(this).attr("count")) > parseInt(jQuery(this).next("li").attr("count"))){
					jQuery(this).before(jQuery(this).next("li"));
					moved = 1;
					return;
				}
			});
		}while(moved);
	}
	function showDeleteUnchecked(){
		if(jQuery("ul li input:not(:checked)").length){
			jQuery("a[href='#delete-unchecked']").show();
		}else{
			jQuery("a[href='#delete-unchecked']").hide();
		}
	}
	function audio(attr){
		jQuery("audio").remove();
		if(!attr){
			attr = {};
		}else if(!(attr instanceof Object)){
			attr = {src:attr};
		}
		attr.autoplay = 1;
		if(!attr.src){
			attr.src = '//bot11x11.ru/!/audio.wav';
		}
		jQuery("<audio>").appendTo("body").attr(attr);
	}
	function stop(){
		_found = true;
		jQuery("#stop").trigger("click");
	}
	function pause(wait){
		_found = true;
		clearTimeout(hT);
		hT = setTimeout(function(){
			clearTimeout(hT);
			hT = setTimeout(function(){
				run();
			}, 1000 * _period * (Math.random() + 1));
			w.document.location = _l;
		}, 1000 * wait * (Math.random() + 1));
	}
	function js(url){
		_found = eval(url.replace("\\", "\\\\").replace("\n", "\\n").replace("\r", "\\r"));
		/*	jQuery.getScript(url);*/
	}
	function download(){
		jQuery("body>span").html(
			"<a href='//bot11x11.ru/!/csv/d5da2c0b8063b4a78afe8a08ea097491.csv' style='position: absolute; top: 0; right: 50px'>Скачать</a>" +
			"<a href='#' title='Удалить файл данных' style='position: absolute; top: 0; right: 25px'><img src='//bot11x11.ru/!/img/delete.png'></a>");
		jQuery("body>span>a[href='#']").click(function(){
			if(!confirm("Удалить файл данных?")){
				return false;
			}
			jQuery.post("//bot11x11.ru/!/store.js?id=d5da2c0b8063b4a78afe8a08ea097491", {delete:1}, function(data){
				if(data == "deleted"){
					jQuery("body>span").html("");
				}
			});
			return false;
		});
	}
	function store(params){
		var field = {};
		if(!params){
			params = {};
		}else if(!(params instanceof Object)){
			params = {name:params};
		}
		if(!params.name){
			params.name = "column_" + _fields.length + 1;
		}
		if(params.name == "length"){
			params.name == "length_";
		}
		if(_fields[params.name] != null || params.stop){
			if(!_fields.length){
				return;
			}
			var url = "//bot11x11.ru/!/store.js?id=d5da2c0b8063b4a78afe8a08ea097491";
			if(params.delimiter){
				url += "&delimiter=" + params.delimiter;
			}
			if(params.enclosure){
				url += "&enclosure=" + params.enclosure;
			}
			if(params.escape_char){
				url += "&escape_char=" + params.escape_char;
			}
			jQuery.post(url, _fields, function(data){
				if(data == 'OK'){
					download();
				}
			});
			_fields = {length:0};
			if(params.stop){
				return;
			}
		}
		if(!params.attr){
			params.attr = "text";
		}
		var s;
		if(params.attr == "text"){
			s = _jqObj.text();
		}else if(params.attr == "html"){
			s = _jqObj.html();
		}else if(params.attr == "val"){
			s = _jqObj.val();
		}else{
			s = _jqObj.attr(params.attr);
		}
		_jqObj.addClass("bc7e4749b368b9beab178fd1e4");
		_fields[params.name] = s;
		_fields.length++;
	}
	function run(){
		clearTimeout(hT);
		hT = setTimeout(function(){
			run();
		}, 1000 * _period * (Math.random() + 1));
		_found = false;
		jQuery("ul li input:checked").each(function(){
			if(_found){
				return;
			}
			var arr = jQuery(this).closest("li").find("a.selector").attr("title").split("::", 2);
			_selector = arr[0];
			var action = arr[1];
			if(jQuery(_selector, w.document).not(".bc7e4749b368b9beab178fd1e4").length){
				var obj = this;
				var jqObj = jQuery(_selector, w.document).not(".bc7e4749b368b9beab178fd1e4").first();
				_jqObj = jqObj;
				jQuery(this).closest("li").css("border", "solid 3px red");
				_jqObj.css("border", "solid 3px red");
				setTimeout(function(){
					jQuery(obj).closest("li").removeAttr("style");
					jqObj.removeAttr("style");
				}, 1000);
				if(action){
					eval(action);
				}else{
					_found = true;
					if(_jqObj.attr("onclick") === undefined || _jqObj.attr("onclick") === null){
						if(_jqObj.attr("href") !== undefined && _jqObj.attr("href") !== null){
							if(/^javascript:|^https*:|^\//.test(_jqObj.attr("href"))){
								w.document.location = _jqObj.attr("href");
							}else if(/^\?/.test(_jqObj.attr("href"))){
								w.document.location =
									w.document.location.pathname +
									_jqObj.attr("href");
							}else{
								w.document.location =
									w.document.location.pathname.replace(/[^\/]*$/, '') +
									_jqObj.attr("href");
							}
						}else{
							_jqObj.click();
						}
					}else{
						_jqObj.click();
					}
				}
			}
		});
		if(_found){
			return;
		}
		clearTimeout(hT);
		if(_hold <= 0){
			jQuery("#stop").trigger("click");
			return;
		}
		hT = setTimeout(function(){
			clearTimeout(hT);
			hT = setTimeout(function(){
				run();
			}, 1000 * _period * (Math.random() + 1));
			w.document.location = _l;
		}, 1000 * _hold * (Math.random() + 1));
	}
})();
