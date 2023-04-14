/*
	отвечает за добавление технических классов бургер меню 
	и блоку с элементами меню.
	для работы с этим скриптом необходимо:
		1) подключить файл со скриптом
		2) вызвать функцию в script.js
		3) подключить файл __fixed-header.html
*/

function icon_menu() {
	let iconMenu = document.querySelector('.icon-menu')
	let menuBodyArray = document.querySelectorAll('.menu__body ul li')
	if (iconMenu != null) {
		let logo = document.querySelector('.header__logo')
		let menuBody = document.querySelector('.menu__body')
		iconMenu.addEventListener('click', function (e) {
			iconMenu.classList.toggle('_active')
			menuBody.classList.toggle('_active')
		})
		window.addEventListener("scroll", () => {
			iconMenu.classList.remove('_active')
			menuBody.classList.remove('_active')
		})
		menuBodyArray.forEach(element => {
			element.addEventListener('click', function (e) {
				iconMenu.classList.remove('_active')
				menuBody.classList.remove('_active')
			})
		})
		logo.addEventListener('click', function (e) {
			iconMenu.classList.remove('_active')
			menuBody.classList.remove('_active')
		})
	}
}
