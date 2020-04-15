


////////////////////////Home Page Slider Function///////////////////////////


/////////////////////////Preloader Function//////////////////////////////////

window.addEventListener('DOMContentLoaded', () => {
	window.setTimeout(function clear() {
		document.querySelector(".loader").classList.add("loaded")
	}, 3000
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



























document.querySelectorAll(".panel-2-register-tab").forEach((element) => {
	element.addEventListener("click", () => {
		document.querySelectorAll(".panel-2-register-tab").forEach((element) => {
			element.classList.add("active")
		})
		document.querySelectorAll(".panel-2-login-tab").forEach((element) => {
			element.classList.remove("active");
		})
	})
})


document.querySelectorAll(".panel-2-login-tab").forEach((element) => {
	element.addEventListener("click", () => {
		document.querySelectorAll(".panel-2-login-tab").forEach((element) => {
			element.classList.add("active")
		})
		document.querySelectorAll(".panel-2-register-tab").forEach((element) => {
			element.classList.remove("active");
		})
	})
})
