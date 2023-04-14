/*
для работы с counter необходимо:
	1) подключить _scroll_animations.js
	2) добавить тег, который находится ниже
	
	<div class="_counter animation-on-scroll" data-time="5000" data-count="500" data-text="+"></div>
	
	3) вызвать функцию в script.js
	
	data-time отвечает за время анимации
	data-count отвечает за конечное число
	data-text отвечает за текст, который выводится после чисел
*/

function _counter() {
	var counters = document.querySelectorAll("._counter");

	function animate({timing, draw, duration}) {

		let start = performance.now();
	
		requestAnimationFrame(function animate(time) {
			let timeFraction = (time - start) / duration;
			if (timeFraction > 1) timeFraction = 1;
	
			let progress = timing(timeFraction)
	
			draw(progress); 
	
			if (timeFraction < 1) {
				requestAnimationFrame(animate);
			}
	
		});
	}
	function makeEaseOut(timing) {
		return function(timeFraction) {
			return 1 - timing(1 - timeFraction);
		}
	}
	function circ(timeFraction) {
		return 1 - Math.sin(Math.acos(timeFraction));
	}
	let bounceEaseInOut = makeEaseOut(circ);

  var config = {"attributes": true};
	var observer = new MutationObserver(mutationEvent);
	
	function mutationEvent(mutationsList) {
		for(var mutation of mutationsList) if (mutation.type == 'attributes') {
			if(mutation.target.classList.contains('_show') == true && 
				mutation.target.classList.contains('disable') == false){
					mutation.target.classList.add('disable')
					let value = mutation.target.getAttribute("data-count");
					let text = mutation.target.getAttribute("data-text");
					let time = mutation.target.getAttribute("data-time");
					let target = mutation.target
					function anim() {
						animate({
							duration: time,
							timing: bounceEaseInOut,
							draw: function(progress) {
								target.innerHTML = `${Math.floor(progress * value)}${text}`;
							}
						});
					};
					anim()
				}
			}
	};
	
	counters.forEach(element => {
		observer.observe(element, config);
	});
}