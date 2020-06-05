///////////////RemoveLoader Function////////////////
const removeLoader = () => {
  window.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function clear() {
      document.querySelector(".loader").classList.add("loaded");
    }, 1000);
  });
};

function checkWidth() {
    if ($(window).width() < 560) {
      $(".dashboard-page").addClass("mobile");
      $("#col-span").attr("colspan", 2)
    } else {
      $(".dashboard-page").removeClass("mobile");
    }
    
  }

  $(window).ready(checkWidth);
  $(window).resize(checkWidth);

  //////////////////////Open Sidebar Function///////////////

const openSidebar = () => {
  document.querySelector(".dashboard-toggle").addEventListener("click", () => {
    document.querySelector(".left-sidebar").classList.toggle("active");
    document.querySelector(".dash-fa").classList.toggle("fa-align-left");
    document.querySelector(".dash-fa").classList.toggle("fa-times");
  });
};

//   //////////////////////Open Mobile Menu Function///////////////

const openMobileMenu = () => {
  let navButton = document.querySelector(".hamburger");
  navButton.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.toggle("open");
    navButton.classList.toggle("fa-bars");
    navButton.classList.toggle("fa-times");
  });
};

//////////////////////Select Sidebar Item Function///////////////

const selectSideBarItem = () => {
  let dashboardTab = document.querySelector(".dashboard-tab");
  let addBussesTab = document.querySelector(".add-busses-tab");
  let settingsTab = document.querySelector(".settings-tab");
  let terminalsTab = document.querySelector(".terminals-tab");

  dashboardTab.addEventListener("click", () => {
    document.querySelector(".dashboard").classList.remove("hide");
    document.querySelector(".add-terminals-screen").classList.add("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".add-busses").classList.add("hide");
    dashboardTab.classList.add("active");
    addBussesTab.classList.remove("active");
    settingsTab.classList.remove("active");
    terminalsTab.classList.remove("active");
    document.querySelector(".left-sidebar").classList.toggle("active");
    document.querySelector(".dash-fa").classList.toggle("fa-align-left");
    document.querySelector(".dash-fa").classList.toggle("fa-times");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".email").classList.add("hide");
    document.querySelector(".refer").classList.add("hide");
  });


  addBussesTab.addEventListener("click", () => {
    document.querySelector(".add-busses").classList.remove("hide");
    document.querySelector(".add-terminals-screen").classList.add("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".dashboard").classList.add("hide");
    addBussesTab.classList.add("active");
    dashboardTab.classList.remove("active");
    settingsTab.classList.remove("active");
    terminalsTab.classList.remove("active");
    document.querySelector(".left-sidebar").classList.toggle("active");
    document.querySelector(".dash-fa").classList.toggle("fa-align-left");
    document.querySelector(".dash-fa").classList.toggle("fa-times");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".email").classList.add("hide");
    document.querySelector(".refer").classList.add("hide");
  });


  terminalsTab.addEventListener("click", () => {
    document.querySelector(".add-terminals-screen").classList.remove("hide");
    document.querySelector(".add-busses").classList.add("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".dashboard").classList.add("hide");
    terminalsTab.classList.add("active");
    addBussesTab.classList.remove("active");
    dashboardTab.classList.remove("active");
    settingsTab.classList.remove("active");
    document.querySelector(".left-sidebar").classList.toggle("active");
    document.querySelector(".dash-fa").classList.toggle("fa-align-left");
    document.querySelector(".dash-fa").classList.toggle("fa-times");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".email").classList.add("hide");
    document.querySelector(".refer").classList.add("hide");
  });


  settingsTab.addEventListener("click", () => {
    document.querySelector(".settings").classList.remove("hide");
    document.querySelector(".add-terminals-screen").classList.add("hide");
    document.querySelector(".add-busses").classList.add("hide");
    document.querySelector(".dashboard").classList.add("hide");
    settingsTab.classList.add("active");
    terminalsTab.classList.remove("active");
    addBussesTab.classList.remove("active");
    dashboardTab.classList.remove("active");
    document.querySelector(".left-sidebar").classList.toggle("active");
    document.querySelector(".dash-fa").classList.toggle("fa-align-left");
    document.querySelector(".dash-fa").classList.toggle("fa-times");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".email").classList.add("hide");
    document.querySelector(".refer").classList.add("hide");
  });

  ////////Little Back Button//////

  document.querySelectorAll(".back-btn").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector(".settings").classList.remove("hide");
      document.querySelector(".password").classList.add("hide");
      document.querySelector(".email").classList.add("hide");
      document.querySelector(".refer").classList.add("hide");
      document.querySelector(".delete-account").classList.add("hide");

    });
  });
};

/////////////////////Settings Screens Functions///////////////
const changeSettingsScreen = () => {
  document
    .querySelector(".change-password-tab")
    .addEventListener("click", () => {
      document.querySelector(".password").classList.remove("hide");
      document.querySelector(".email").classList.add("hide");
      document.querySelector(".settings").classList.add("hide");
      document.querySelector(".dashboard").classList.add("hide");
      document.querySelector(".add-busses").classList.add("hide");
      document.querySelector(".refer").classList.add("hide");
    });

  document.querySelector(".change-email-tab").addEventListener("click", () => {
    document.querySelector(".email").classList.remove("hide");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".dashboard").classList.add("hide");
    document.querySelector(".add-busses").classList.add("hide");
    document.querySelector(".refer").classList.add("hide");
  });

  document.querySelector(".refer-friend-tab").addEventListener("click", () => {
    document.querySelector(".refer").classList.remove("hide");
    document.querySelector(".email").classList.add("hide");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".dashboard").classList.add("hide");
    document.querySelector(".add-busses").classList.add("hide");
  });

  document
    .querySelector(".delete-account-tab")
    .addEventListener("click", () => {
      document.querySelector(".delete-account").classList.remove("hide");
      document.querySelector(".refer").classList.add("hide");
      document.querySelector(".email").classList.add("hide");
      document.querySelector(".password").classList.add("hide");
      document.querySelector(".settings").classList.add("hide");
      document.querySelector(".dashboard").classList.add("hide");
      document.querySelector(".add-busses").classList.add("hide");
    });
};

/////////////////Handle Delete////////////

const handleDelete = () => {
  document
    .querySelector(".delete-account-btn")
    .addEventListener("click", () => {
      document.querySelector("body").style.animation =
        "roll-round-and-fade-out 1.5s ease-in-out";
      setTimeout(function () {
        document.querySelector("body").style.opacity = 0;
        window.location.href = "index.html";
      }, 1490);
    });
};

/////////////////super Admin Dashboard Timepicker Function//////
$(function () {
  $(".departure-date").datepicker();
});

$(function () {
  $(".departure-time").timepicker();
});

///////////////////////Recurring Checkbox Function///////////
const onCheckboxChange = () => {
  document.querySelector(".departure-date").classList.toggle("hide");
};

handleDelete();
changeSettingsScreen();
selectSideBarItem();
openMobileMenu();
openSidebar();
removeLoader();
