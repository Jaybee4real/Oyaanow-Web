


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
		document.querySelector(".logo").classList.toggle("theme-color")
	}, 5000);
});


window.addEventListener('DOMContentLoaded', () => {
	window.setTimeout(function clear() {
		document.querySelector(".loader").classList.add("loaded")
	}, 2000
	)

})


let navButton = document.querySelector(".hamburger")
navButton.addEventListener("click", () => {
	document.querySelector(".mobile-menu").classList.toggle("open");
	navButton.classList.toggle("fa-bars")
	navButton.classList.toggle("fa-times")
})

const slideUp = document.querySelector(".slide-up")

let options = {
	rootMargin: '700px',
	threshold: 1.0
}

let observer = new IntersectionObserver((entries) => {
	console.log(entries)
}, options);


observer.observe(slideUp)


// let navbarObserver = new IntersectionObserver ()
let scroll = window.pageYOffset;

document.addEventListener("scroll", function (e) {
	let navbar = document.getElementById("navbar")
	var offset = window.pageYOffset;
	scroll = offset;
	if (scroll > 1) {
		navbar.classList.add("scroll")

	}
	else {
		navbar.classList.remove("scroll")
	}
})



//////////////////////////////Intersection Observer////////////////
