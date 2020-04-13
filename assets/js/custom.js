


var images = ["Hiace.jpg", "bus_side.jpg"];
$(function () {
	var i = 0;
	$(".header").css("background-image", "url(./assets/img/"+ "Hiace.jpg"+ ")");

	setInterval(function () {
		i++;
		if (i == images.length) {
			i = 0;
		}
		$(".header").css("background-image", "url(./assets/img/" + images[i] + ")");
		document.querySelector(".logo-animated").classList.toggle("theme-color")
	}, 5000);
});


window.addEventListener('DOMContentLoaded', () => {
	window.setTimeout(function clear() {
		document.querySelector(".loader").classList.add("loaded")
	}, 3000
	)
})


let navButton = document.querySelector(".hamburger")
navButton.addEventListener("click", () => {
	document.querySelector(".mobile-menu").classList.toggle("open");
	navButton.classList.toggle("fa-bars")
	navButton.classList.toggle("fa-times")
})

//////////////////////////////Intersection Observer////////////////
