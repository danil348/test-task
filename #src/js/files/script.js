window.onload = function () {
	let slidesPerView = 4
	if(window.innerWidth < 768){
		slidesPerView = 2.5
	}else if(window.innerWidth < 1024){
		slidesPerView = 3
	}

	new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: slidesPerView,
		pagination: {
			el: '.swiper-pagination'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	header_scroll()
	scroll_animations()
	icon_menu()
	smoothscroll()
	popup()
}
