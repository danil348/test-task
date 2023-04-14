/*
	добавляет класс _show всем элементам с техническим классом animation-on-scroll
	добавление класса происходит при попадании элемента в зону видимости
	для работы с этим скриптом необходимо:
		1) подключить этот файл
		2) вызвать функцию в script.js
*/

function _scroll_animations() {
	const observer  = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if(entry.isIntersecting){
				entry.target.classList.add('_show')
			}
		})
	})

	const elements = document.querySelectorAll('.animation-on-scroll')
	elements.forEach((element) => observer.observe(element))
}