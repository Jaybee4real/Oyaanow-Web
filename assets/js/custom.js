


////////////////////////Home Page Slider Function///////////////////////////


/////////////////////////Preloader Function//////////////////////////////////

window.addEventListener('DOMContentLoaded', () => {
	window.setTimeout(function clear() {
		document.querySelector(".loader").classList.add("loaded")
	}, 1
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
var loginButton = document.querySelectorAll(".login-tab")
var registerButton = document.querySelectorAll(".register-tab")
// var loginButtonOne = document.querySelectorAll(".panel-2-login-tab-1")
// var loginButtonTwo = document.querySelectorAll(".panel-2-login-tab-2")
// var registerButtonOne = document.querySelectorAll(".panel-2-register-tab-1")
// var registerButtonTwo = document.querySelectorAll(".panel-2-register-tab-2")
var registerPanel = document.querySelector(".register-panel")
var loginPanel = document.querySelector(".login-panel")

loginButton.forEach((element) => {
	element.addEventListener("click", () => {
		element.classList.add("active");
		registerButton.forEach((element) => {
			element.classList.remove("active");
		})
		registerPanel.classList.add("hide");
		loginPanel.classList.remove("hide")
	})
})




registerButton.forEach((element) => {
	element.addEventListener("click", () => {
		element.classList.add("active");
		loginButton.forEach((element) => {
			element.classList.remove("active");
		})
		loginPanel.classList.add("hide");
		registerPanel.classList.remove("hide")
	})
})



