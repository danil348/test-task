function popup() {
	let popup = document.querySelector(".popup")
	let closeButton = document.querySelector(".popup__close")
	let shadow = document.querySelector(".popup__shadow")

	shadow.addEventListener("click", () => {
		popup.classList.remove("show")
	});

	closeButton.addEventListener("click", () => {
		popup.classList.remove("show")
	});

	document.querySelectorAll(".popup-link").forEach((link) => {
		link.addEventListener("click", () => {
			popup.classList.add("show")
		});
	})
}