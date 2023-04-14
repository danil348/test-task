/*
для работы с card3d необходимо:
	1) создать структуру 

	<div class="card blastoise">
		<span class="card__inner"> <!-- front of the card -->
			<div class="card__content">
			</div>
		<span class="card__glare"></span> <!-- to store the glare effect -->
	</div>

	2) вызвать функцию в script.js
	3) цвет бластоида настраивается на 39 строчке
*/

function _card3d(params) {
	let calculateAngle = function(e, item, parent) {
		let dropShadowColor = `rgba(0, 0, 0, 0.3)`
		if(parent.getAttribute('data-filter-color') !== null) {
				dropShadowColor = parent.getAttribute('data-filter-color');
		}

		parent.classList.add('animated');
		// Get the x position of the users mouse, relative to the button itself
		let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
		// Get the y position relative to the button
		let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

		// Calculate half the width and height
		let halfWidth  = item.getBoundingClientRect().width / 2;
		let halfHeight = item.getBoundingClientRect().height / 2;

		// Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
		// Changing these numbers will change the depth of the effect.
		let calcAngleX = (x - halfWidth) / 6;
		let calcAngleY = (y - halfHeight) / 14;
	
		let gX = (1 - (x / (halfWidth * 2))) * 100;
		let gY = (1 - (y / (halfHeight * 2))) * 100;
	
		item.querySelector('.card__glare').style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgba(199, 198, 243, 0.9), transparent)`;
		// And set its container's perspective.
		parent.style.perspective = `${halfWidth * 6}px`
		item.style.perspective = `${halfWidth * 6}px`

		// Set the items transform CSS property
		item.style.transform = `rotateY(${calcAngleX/(halfWidth / 90)}deg) rotateX(${-calcAngleY/1}deg) scale(1.0)`;

		// Reapply this to the shadow, with different dividers
		let calcShadowX = (x - halfWidth) / 3;
		let calcShadowY = (y - halfHeight) / 6;
		
		// Add a filter shadow - this is more performant to animate than a regular box shadow.
		item.style.filter = `drop-shadow(${-calcShadowX/(halfWidth / 90)}px ${-calcShadowY/1}px 15px ${dropShadowColor})`;
	}	

	document.querySelectorAll('.card').forEach(function(item) {
			if(item.querySelector('.flip') !== null) {
				item.querySelector('.flip').addEventListener('click', function() {
					item.classList.add('flipped');
				});
			}
			if(item.querySelector('.unflip') !== null) {
				item.querySelector('.unflip').addEventListener('click', function() {
					item.classList.remove('flipped');
				});
			}
			item.addEventListener('mouseenter', function(e) {
					calculateAngle(e, this.querySelector('.card__inner'), this);
			});

			item.addEventListener('mousemove', function(e) {
					calculateAngle(e, this.querySelector('.card__inner'), this);
			});

			item.addEventListener('mouseleave', function(e) {
					let dropShadowColor = `rgba(0, 0, 0, 0.3)`
					if(item.getAttribute('data-filter-color') !== null) {
							dropShadowColor = item.getAttribute('data-filter-color')
					}
					item.classList.remove('animated');
					item.querySelector('.card__inner').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
					item.querySelector('.card__inner').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
			});
	})
}