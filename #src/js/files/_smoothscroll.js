/*
	делает скролл на сайте плавным
	для работы с этим скриптом необходимо:
		1) подключить скрипт, который находится ниже в js.html
			<script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js" integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=" crossorigin="anonymous"></script>
		2) подключить файл с этим скриптом
		3) вызвать функцию в script.js
*/
function _smoothscroll() {
	SmoothScroll({
		// Время скролла 400 = 0.4 секунды
		animationTime : 800,
		// Размер шага в пикселях
		stepSize : 75,
		
		// Дополнительные настройки:
		
		// Ускорение
		accelerationDelta : 30,
		// Максимальное ускорение
		accelerationMax : 2,
		
		// Поддержка клавиатуры
		keyboardSupport : true,
		// Шаг скролла стрелками на клавиатуре в пикселях
		arrowScroll : 50,
		
		// Pulse (less tweakable)
		// ratio of "tail" to "acceleration"
		pulseAlgorithm : true,
		pulseScale : 4,
		pulseNormalize : 1,
		
		// Поддержка тачпада
		touchpadSupport : true,
		})
}