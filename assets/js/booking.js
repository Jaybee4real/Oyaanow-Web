//////////////////////////////Intersection ////////////////
const NavbarScrollingFunction = () => {
  let scroll = window.pageYOffset;

document.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  let bookingComntainer = document.getElementById("booking-container");
  var offset = window.pageYOffset;
  scroll = offset;
  if (scroll > 1) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }

});

}
//////////////////////////////////Wallpaper Loader Function//////// /////////////////
const loader2function = () => {
  window.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function clear() {
      document.querySelector(".loader-2").classList.add("loaded");
    }, 1000);
  });
}
  

//////////////////////////////////Date Picker///////////////////////
$(function () {
  $("#datepicker, #datepicker2").datepicker();
});

$(function () {
  $("#timepicker, #timepicker2").timepicker();
});

////////////////?Function Calls////////////////
NavbarScrollingFunction()
loader2function()