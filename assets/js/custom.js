


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



/////////////////////////////////////////////////////


let options = {
	rootMargin : "200px"
}

let slideUpElements = document.querySelectorAll(".slide-up")
let slideRightElements = document.querySelectorAll(".slide-right")
let slideLeftElements = document.querySelectorAll(".slide-left")
let slideDownElements = document.querySelectorAll(".slide-down")

let slideUp = new IntersectionObserver((entries) => {

	entries.forEach(entry => {
		if (entry.intersectionRatio > 0){
			console.log("The element is intersecting")
			entry.target.classList.add("sliding-up")
		}

		else{
			entry.target.classList.remove("sliding-up")
		}
	})
}, options)




let slideRight = new IntersectionObserver((entries) => {

	entries.forEach(entry => {
		if (entry.intersectionRatio > 0){
			console.log("The element is intersecting")
			entry.target.classList.add("sliding-right")
		}
		
		else{
			entry.target.classList.remove("sliding-right")
		}
	})
}, options)


let slideLeft = new IntersectionObserver((entries) => {

	entries.forEach(entry => {
		if (entry.intersectionRatio > 0){
			console.log("The element is intersecting")
			entry.target.classList.add("sliding-left")
		}

		else{
			entry.target.classList.remove("sliding-left")
		}
	})
}, options)



let slideDown = new IntersectionObserver((entries) => {

	entries.forEach(entry => {
		if (entry.intersectionRatio > 0){
			console.log("The element is intersecting")
			entry.target.classList.add("sliding-down")
		}

		else{
			entry.target.classList.remove("sliding-down")
		}
	})
}, options)




slideUpElements.forEach(element => {
	slideUp.observe(element)
})

slideRightElements.forEach(element => {
	slideRight.observe(element)
})

slideLeftElements.forEach(element => {
	slideLeft.observe(element)
})

slideDownElements.forEach(element => {
	slideDown.observe(element)
})