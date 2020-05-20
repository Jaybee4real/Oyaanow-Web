


////////////////////////Page Redirect Function///////////////////////////
document.querySelectorAll("#to-search").forEach(element => {
	element.addEventListener("click", () => {
		window.location.href= "results.html"
	})
})

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



/////////////////////////////////////////////

/////////////////////////////////////////////////////


let options = {
	rootMargin : "200px"
}

let slideUpElements = document.querySelectorAll(".slide-up")
let slideRightElements = document.querySelectorAll(".slide-right")
let slideLeftElements = document.querySelectorAll(".slide-left")
let slideDownElements = document.querySelectorAll(".slide-down")
let appearing = document.querySelectorAll(".appear")

let slideUp = new IntersectionObserver((entries) => {

	entries.forEach(entry => {
		if (entry.intersectionRatio > 0){
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
			entry.target.classList.add("sliding-down")
		}

		else{
			entry.target.classList.remove("sliding-down")
		}
	})
}, options)



let appear = new IntersectionObserver((entries) => {

	entries.forEach(entry => {
		if (entry.intersectionRatio > 0){
			entry.target.classList.add("appearing")
		}

		else{
			entry.target.classList.remove("appearing")
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

appearing.forEach(element => {
	appear.observe(element)
})


//////////////////////////Booking Switcher///////////////////////////////

document.querySelector(".one-way-tab").addEventListener("click",() => {
	document.querySelector(".one-way-tab").classList.add("active")
	document.querySelector(".round-trip-tab").classList.remove("active")
	document.querySelector(".one-way").classList.add("active")
	document.querySelector(".round-trip").classList.remove("active")
  })

  document.querySelector(".round-trip-tab").addEventListener("click",() => {
	document.querySelector(".one-way-tab").classList.remove("active")
	document.querySelector(".round-trip-tab").classList.add("active")
	document.querySelector(".one-way").classList.remove("active")
	document.querySelector(".round-trip").classList.add("active")

  })