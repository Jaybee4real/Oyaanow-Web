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
}

//////////////////////Open Mobile Menu Function///////////////

const openMobileMenu = () => {
  let navButton = document.querySelector(".hamburger");
  navButton.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.toggle("open");
    navButton.classList.toggle("fa-bars");
    navButton.classList.toggle("fa-times");
  });
}

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
    });
    
}


///////////////RemoveLoader Function////////////////

const removeLoader= () => {
    window.addEventListener("DOMContentLoaded", () => {
        window.setTimeout(function clear() {
            document.querySelector(".loader").classList.add("loaded");
        }, 1000);
    });
}

////////////////////Redirect Page FUnction///////////?//////


removeLoader()    
selectSideBarItem()
openSidebar()