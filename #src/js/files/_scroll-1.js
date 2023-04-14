/*
	добавляет кастомный скролл. 
	для работы с скриптом необходимо:
		1) подключить файл со скриптом
		2) подключить файл _scroll-1.scss
		3) скопировать html теги из файла _scroll-1.scss в html файл
		4) вызвать функцию в script.js
*/

function _scroll_1() {
	let progressbar = document.querySelector('.progressbar');
	let height = document.body.scrollHeight - window.innerHeight;

	window.onscroll = function() {
		let progressheight = (window.pageYOffset / height) * 100;
		progressbar.style.height = progressheight + "%";
	}
}