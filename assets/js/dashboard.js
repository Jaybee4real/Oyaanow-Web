/////////////////Check Width Function/////////////

function checkWidth() {
  if ($(window).width() < 560) {
    $(".dashboard-page").addClass("mobile");
    console.log("small");
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

//////////////////////Open Mobile Menu Function///////////////

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
  let historyTab = document.querySelector(".history-tab");
  let settingsTab = document.querySelector(".settings-tab");

  dashboardTab.addEventListener("click", () => {
    document.querySelector(".dashboard").classList.remove("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".history").classList.add("hide");
    dashboardTab.classList.add("active");
    historyTab.classList.remove("active");
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
    document.querySelector(".dashboard").classList.add("hide");
    document.querySelector(".history").classList.add("hide");
    settingsTab.classList.add("active");
    dashboardTab.classList.remove("active");
    historyTab.classList.remove("active");
    document.querySelector(".left-sidebar").classList.toggle("active");
    document.querySelector(".dash-fa").classList.toggle("fa-align-left");
    document.querySelector(".dash-fa").classList.toggle("fa-times");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".email").classList.add("hide");
    document.querySelector(".refer").classList.add("hide");
  });

  historyTab.addEventListener("click", () => {
    document.querySelector(".history").classList.remove("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".dashboard").classList.add("hide");
    historyTab.classList.add("active");
    dashboardTab.classList.remove("active");
    settingsTab.classList.remove("active");
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
      document.querySelector(".history").classList.add("hide");
      document.querySelector(".refer").classList.add("hide");
    });

  document.querySelector(".change-email-tab").addEventListener("click", () => {
    document.querySelector(".email").classList.remove("hide");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".dashboard").classList.add("hide");
    document.querySelector(".history").classList.add("hide");
    document.querySelector(".refer").classList.add("hide");
  });

  document.querySelector(".refer-friend-tab").addEventListener("click", () => {
    document.querySelector(".refer").classList.remove("hide");
    document.querySelector(".email").classList.add("hide");
    document.querySelector(".password").classList.add("hide");
    document.querySelector(".settings").classList.add("hide");
    document.querySelector(".dashboard").classList.add("hide");
    document.querySelector(".history").classList.add("hide");
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
      document.querySelector(".history").classList.add("hide");
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
        window.location.href = "/"
      }, 1490);
    });
};

///////////////RemoveLoader Function////////////////

const removeLoader = () => {
  window.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function clear() {
      document.querySelector(".loader").classList.add("loaded");
    }, 1000);
  });
};

////////////////////Redirect Page FUnction///////////?//////
handleDelete();
changeSettingsScreen();
openMobileMenu();
removeLoader();
selectSideBarItem();
openSidebar();
