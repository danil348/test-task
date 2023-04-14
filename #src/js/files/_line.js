/*
	анимирует горизонтальную линию скролла
	для работы с этим скриптом необходимо:
		1) подключить фал _line.scss
		2) вызвать функцию в script.js
		3) скопировать тег из _line.scss в html
*/

function _line() {
	setTimeout(() => {
		let line = document.querySelector('.line')
		let windowHeight = parseInt(window.innerHeight) //высота окна браузера
		let Height = parseInt(document.documentElement.scrollHeight) - windowHeight //высота всей страницы
		setInterval(() => {
			let HeightTop = parseInt(document.documentElement.scrollTop) //высота, на которую проскролили

			let widthLine = (HeightTop / Height) * 100 //ширина полосы прокрутки

			line.style.cssText = `
				Width:${widthLine}%;
			`
		}, 1)
	}, 1.5)
}
