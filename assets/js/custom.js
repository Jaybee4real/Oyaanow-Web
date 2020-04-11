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


