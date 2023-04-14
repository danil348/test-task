/*
	добавляет шапке сайта технический класс _scroll, когда
	страница прокручена и убирает этот класс, когда страница 
	полностью прокручена вверх
	для работы с этим скриптом необходимо:
		1) подключить этот файл
		2) вызвать функцию в script.js
*/

function _header_scroll() {
	const header = document.querySelector('header')

	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			header.classList.remove('_scroll')
		} else {
			header.classList.add('_scroll')
		}
	}
	const headerObs = new IntersectionObserver(callback)
	headerObs.observe(header)
}
