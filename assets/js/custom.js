


////////////////////////Home Page Slider Function///////////////////////////

var images = ["Hiace.jpg", "bus_side.jpg"];
$(function () {
	var i = 0;
	$(".header").css("background-image", "url(./assets/img/" + "Hiace.jpg" + ")");

	setInterval(function () {
		i++;
		if (i == images.length) {
			i = 0;
		}
		$(".header").css("background-image", "url(./assets/img/" + images[i] + ")");
		document.querySelector(".logo-animated").classList.toggle("theme-color")
	}, 5000);
});


/////////////////////////Preloader Function//////////////////////////////////

window.addEventListener('DOMContentLoaded', () => {
	window.setTimeout(function clear() {
		document.querySelector(".loader").classList.add("loaded")
	}, 3000
	)
})


window.addEventListener('DOMContentLoaded', () => {
	window.setTimeout(function clear() {
		document.querySelector(".loader-2").classList.add("loaded")
	}, 6100
	)
})



////////////////////Mobile Menu Function/////////////////////////////////

let navButton = document.querySelector(".hamburger")
navButton.addEventListener("click", () => {
	document.querySelector(".mobile-menu").classList.toggle("open");
	navButton.classList.toggle("fa-bars")
	navButton.classList.toggle("fa-times")
})


////////////////////////////Register/Login Switcher Function////////////////////////////////
var loginButton = document.querySelector(".login-tab")
var registerButton = document.querySelector(".register-tab")
var loginPointer = document.querySelector(".login-pointer")
var registerPointer = document.querySelector(".register-pointer")
var registerPanel = document.querySelector(".register-panel")
var loginPanel = document.querySelector(".login-panel")

loginButton.addEventListener("click", () => {
	loginButton.classList.add("active");
	registerButton.classList.remove("active");
	registerPanel.classList.add("hide");
	loginPanel.classList.remove("hide")
})



registerButton.addEventListener("click", () => {
	registerButton.classList.add("active");
	loginButton.classList.remove("active");
	loginPanel.classList.add("hide");
	registerPanel.classList.remove("hide")
})

loginPointer.addEventListener("click", () => {
	registerButton.classList.add("active");
	loginButton.classList.remove("active");
	loginPanel.classList.add("hide");
	registerPanel.classList.remove("hide")
})

registerPointer.addEventListener("click", () => {
	loginButton.classList.add("active");
	registerButton.classList.remove("active");
	registerPanel.classList.add("hide");
	loginPanel.classList.remove("hide")
})



