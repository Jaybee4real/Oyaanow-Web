//////////////////////Opr Mobile Menu Function////////////

const openMobileMenu = () => {
  let navButton = document.querySelector(".hamburger");
  navButton.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.toggle("open");
    navButton.classList.toggle("fa-bars");
    navButton.classList.toggle("fa-times");
  });
};

////////////////////////////////////////////////////////////////// -->

const removeLoader = () => {
  window.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function clear() {
      document.querySelector(".loader").classList.add("loaded");
    }, 1000);
  });
};
///////////////////?Login Tabs Switcher////////////

const loginTabsSwitcher = () => {
  var loginButton = document.querySelectorAll(".login-tab");
  var registerButton = document.querySelectorAll(".register-tab");
  var registerPanel = document.querySelector(".register-panel");
  var loginPanel = document.querySelector(".login-panel");

  loginButton.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.add("active");
      registerButton.forEach((element) => {
        element.classList.remove("active");
      });
      registerPanel.classList.add("hide");
      loginPanel.classList.remove("hide");
    });
  });

  registerButton.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.add("active");
      loginButton.forEach((element) => {
        element.classList.remove("active");
      });
      loginPanel.classList.add("hide");
      registerPanel.classList.remove("hide");
    });
  });
};
/////////////////Smaller Screen Login Switcher////////////

const smallScreenLoginTabsSwitcher = () => {
  var panel2LoginTab1 = document.querySelector(".panel-2-login-tab-1");
  var panel2LoginTab2 = document.querySelector(".panel-2-login-tab-2");
  var panel2RegisterTab1 = document.querySelector(".panel-2-register-tab-1");
  var panel2RegisterTab2 = document.querySelector(".panel-2-register-tab-2");

  panel2LoginTab1.addEventListener("click", () => {
    panel2LoginTab1.classList.add("active");
    panel2LoginTab2.classList.add("active");
    document.querySelector(".register-panel").classList.add("hide");
    document.querySelector(".login-panel").classList.remove("hide");
    panel2RegisterTab1.classList.remove("active");
    panel2RegisterTab2.classList.remove("active");
  });

  panel2LoginTab2.addEventListener("click", () => {
    panel2LoginTab1.classList.add("active");
    panel2LoginTab2.classList.add("active");
    document.querySelector(".register-panel").classList.add("hide");
    document.querySelector(".login-panel").classList.remove("hide");
    panel2RegisterTab1.classList.remove("active");
    panel2RegisterTab2.classList.remove("active");
  });

  panel2RegisterTab2.addEventListener("click", () => {
    panel2RegisterTab1.classList.add("active");
    panel2RegisterTab2.classList.add("active");
    document.querySelector(".login-panel").classList.add("hide");
    document.querySelector(".register-panel").classList.remove("hide");
    panel2LoginTab1.classList.remove("active");
    panel2LoginTab2.classList.remove("active");
  });

  panel2RegisterTab1.addEventListener("click", () => {
    panel2RegisterTab1.classList.add("active");
    panel2RegisterTab2.classList.add("active");
    document.querySelector(".login-panel").classList.add("hide");
    document.querySelector(".register-panel").classList.remove("hide");
    panel2LoginTab1.classList.remove("active");
    panel2LoginTab2.classList.remove("active");
  });

  document.querySelectorAll("#dashboard").forEach((element) => {
    element.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  });
};


/////////////////Redirect a page when the login or register button is clicked////////
const redirectPage = () => {
  document.querySelectorAll("#dashboard").forEach(element => {
      element.addEventListener("click", () => {
          window.location.href = "dashboard.html"
      })
  })
}
  
////////////////////Function Calls/////////////////////////////

redirectPage()
loginTabsSwitcher();
openMobileMenu();
removeLoader();

////////////////Breaks DRY rule, to refractor Later//////////////
