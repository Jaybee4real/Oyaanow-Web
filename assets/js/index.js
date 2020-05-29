
//////////////////////////////Intersection Observer////////////////
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

//////////////////////////////////////////Picture Sider/////////////////

var images = ["./assets/img/Hiace.jpg", "./assets/img/bus_side.jpg"];
$(function () {
    var i = 0;
    $(".header-image").attr("src","./assets/img/Hiace.jpg");
    setInterval(function () {
        i++
        if (i == images.length) {
            i = 0;
        }

        $(".header-image").delay().fadeOut()
        $(".header-image").fadeIn()
        window.setTimeout(()=> {
            $(".header-image").attr("src",this.images[i]);
        }, 500)



        document.querySelector(".logo-animated").classList.toggle("theme-color")
    }, 10000);
});






////////////////////////////////Testimonies Slider//////////////////////////

var testimonies = [`
yarz, yarz eh.. ze oyeenow aph is a bery good aph, i personally have used the service, it is bery reliable, and the option to cancel trips is vorking perfectly`,

    `
 yes o, my people..one love, my name is 2face a.k.a idibia and im chilling with jaybee from oyaanow, oyaanow is the big deal, u guys should download the app now..peace out.
 `,

    `its tiwa saaavaaavage ..yeah, okay people its your girl tiwa savage and im telling you to get the oyaanow app..i promis you the app is very fast and reliable, you guys should try it out , thank you`
];
var testimonialsImages = ["Buhari.jpg", "2face.jpg", "Tiwa_savage.jpg"];
var testimonialsTitles = ["Mohammadu Buhari,President Of The Federal Republic of Nigeria",
    "2face Idibia, Successful Musician",
    "Tiwa Savage, Succesful Musician"
]




$(function () {
    var j = 0;

    setInterval(()=>{
        j++;
        if (j == 3) j = 0
    }, 6900)
    var slideTimer = setInterval(changeSlider, 7000); 

    $(".testimonial-text").text(`${testimonies[0]}`);
    $(".testimonials-image").css("background-image", "url(./assets/img/" + "Buhari.jpg" + ")");
    $(".testimonial-title").text(`${testimonialsTitles[0]}`);
    $(".test-left").click(function () {
        --j % testimonies.length
        if (j < 0) {
            j = 2
        }

        if (j == testimonies.length) {
            j = 0
        }
        changeSlider();
        console.log(j)
    })

    $(".test-right").click(function () {
        ++j % testimonies.length
        if (j == 0) {
            j = 2
        }
        if (j == testimonies.length) {
            j = 0
        } 
        console.log(j)
        changeSlider()


    })


    function changeSlider() {
        if (j < 0) {
            j = 2
        }

        if (j > testimonies.length) {
            j = 0
        }

        $(".testimonials-text, .testimonials-title,.testimonials-image").animate({ opacity: 0 })
        setTimeout(function () {
            $(".testimonials-text, .testimonials-title,.testimonials-image").animate({ opacity: 1 })
        }, 700)

        setTimeout(function () {
            $(".testimonials-image").css("background-image", "url(./assets/img/" + testimonialsImages[j] + ")");
            $(".testimonials-title").text(testimonialsTitles[j]);
            $(".testimonials-text").text(testimonies[j]);

        }, 700)
    }
});


////////////////////////////////////////Date Picker//////////////////////
$( function() {
    $( "#datepicker, #datepicker2").datepicker();
  } );

  $( function() {
    $( "#timepicker, #timepicker2").timepicker();
  } );

  


/////////////////////////////////////////Picture Loader///////////////////
window.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(function clear() {
        document.querySelector(".loader-2").classList.add("loaded")
    }, 6100
    )
})


