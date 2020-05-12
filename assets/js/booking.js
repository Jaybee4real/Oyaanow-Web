
//////////////////////////////Intersection ////////////////
let scroll = window.pageYOffset;

document.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  var offset = window.pageYOffset;
  scroll = offset;
  if (scroll > 1) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

////////////////////////////////////////// /////////////////

var images = ["Hiace.jpg", "bus_side.jpg"];
$(function () {
  var i = 0;
  $(".header").css(
    "background-image",
    "url(./assets/img/" + "Hiace.jpg" + ")"
  );
  setInterval(function () {
    i++;
    if (i == images.length) {
      i = 0;
    }

    $(".header").css(
      "background-image",
      "url(./assets/img/" + images[i] + ")"
    );

    document.querySelector(".logo-animated")
      .classList.toggle("theme-color");
  }, 6000);
});

window.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(function clear() {
    document.querySelector(".loader-2").classList.add("loaded")
  }, 6100
  )
})


//////////////////////////////////Date Picker///////////////////////
$( function() {
    $( "#datepicker").datepicker();
  } );

  $( function() {
    $( "#timepicker").timepicker();
  } );