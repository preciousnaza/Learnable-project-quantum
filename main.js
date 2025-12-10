const sliderSection = document.querySelector(".slider-section");
const slides = document.querySelectorAll(".slider");
const dots = document.querySelectorAll(".dot span");
const userNavSec = document.querySelectorAll(".user");
const nonuserSec = document.querySelectorAll(".non-user");
const navbarSec = document.querySelectorAll(".nav-menu");



let index = 0;
const totalSlides = slides.length;

// Update slide & dot
function showSlide(i) {
  sliderSection.scrollTo({
    left: slides[i].offsetLeft,
    behavior: "smooth",
  });

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

// Auto slide every 3 seconds
function startAutoSlide() {
  setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }, 3000);
}

// Dot click event
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

// Initialize
showSlide(index);
startAutoSlide();

const q = (s) => document.querySelector(s);
const qa = (s) => document.querySelectorAll(s);
const id = (id) => document.getElementById(id);
const className = (cls) => document.getElementsByClassName(cls);

// SHOW SEARCH PAGE
const searchPage = id("searchPage");
const searchIcon = document.querySelectorAll(".searchIcon");
const searchPlay = id("searchPlay");
const searchMsg = className("search-msg")[0];
const inputSearch = id("searchInput");
const searchResult = id("searchResult");
const listPage = id("listPage");
const listPageLarge = id("listPageLarge");
const listBtn = id("listBtn");
const listCloseBtn = id("listCloseBtn");
//search play button
if (searchPlay) {
  searchPlay.addEventListener("click", () => {
    searchMsg.classList.add("search-msgError");
    searchMsg.innerText = "Not Available Yet!";
  });
}

// Search Not Found
if (inputSearch) {
  inputSearch.addEventListener("input", () => {
    const searchValue = inputSearch.value.trim();
    const query = searchValue.toLowerCase();
    if (query.length === 0 || query !== "mickey") {
      searchMsg.innerText = `No results found for "${searchValue}"`;
      searchMsg.classList.add("search-msgError");
      searchResult.innerText = "0 Results";
    } else {
      searchMsg.classList.remove("search-msgError");
      searchResult.innerText = "1 of 1 Result";
    }
  });
}

//open and close search page
if (searchIcon) {
    searchIcon.forEach(function(searchIcon){
   searchIcon.addEventListener("click", () => {
    searchPage.classList.add("show-search");
  });
})
}
if (searchPage) {
  searchPage.addEventListener("click", (e) => {
    if (e.target === searchPage) {
      searchPage.classList.remove("show-search");
    }
  });
}

// FOR THE WATCH LIST PAGE
if (listBtn) {
  listBtn.addEventListener("click", showWatch)}
    function showWatch(e) {
    e.preventDefault();
    listPage.classList.add("show-list");
    listPageLarge.classList.add("show-list");
    searchPage.classList.remove("show-search");
    document.body.classList.add("lock-scroll");
    menuClose.classList.remove("active");
    mainmenu.classList.remove("active");
  };

//search icon animation
const searchBtn = document.querySelector(".ti-search");
const searchLine = document.querySelector(".line");
const searchInput = document.querySelector(".search-input");
if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    searchLine.classList.toggle("hidden");
    searchInput.classList.toggle("hidden");
    searchBtn.style.animation = "search-scale 2s forwards ease";
  });
}

//Menu Section
const menuClose = document.querySelector(".menu-close");
const mainmenu = document.querySelector(".mainmenu");
const hamburger = document.querySelectorAll(".menuIcon");

function closeMenu() {
  mainmenu.classList.remove("active");
  menuClose.classList.remove("active");
  document.body.classList.remove("lock-scroll");
  listPage.classList.remove("show-list");
  listPageLarge.classList.remove("show-list");
}
if (hamburger) {
  hamburger.forEach(function(hamburger){
     hamburger.addEventListener("click", () => {
    menuClose.classList.add("active");
    mainmenu.classList.add("active");
    document.body.classList.add("lock-scroll");
  });
  })
}
if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}
if (listCloseBtn) {
  listCloseBtn.addEventListener("click", closeMenu);
}

// Dropdown toggle for Genre
const menuBody = document.querySelector(".menu-body");
const menuItems = menuBody.querySelectorAll("li");
const genreItem = menuItems[0];
const dropdown = document.querySelector(".menu-dropdown");

if (genreItem) {
  genreItem.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
    genreItem.classList.toggle("active");
  });
}

// Close dropdown when other menu items are clicked
menuItems.forEach((item, index) => {
  if (index !== 0) {
    item.addEventListener("click", () => {
      dropdown.classList.remove("active");
      genreItem.classList.remove("active");
    });
  }
});

// Show notification
const notification = document.querySelector(".notification-btn");
const notifyPage = document.querySelector(".notification-container");

notification.addEventListener("click", function () {
  notifyPage.classList.add("show-notify");
  mainmenu.classList.remove("active");
});

// FOR MOVIDETAILS
const mickey = document.querySelectorAll(".mickey");
const mvDeatil = document.querySelector(".movie-detail");
const main = document.querySelector(".main");
const hdImage = document.querySelector(".hPhd-image");
const footer = document.querySelector(".home-footer");

mickey.forEach(function (mickey) {
  mickey.addEventListener("click", function () {
    mvDeatil.classList.add("active");
    main.style.display = "none";
    hdImage.style.display = "none";
    footer.style.backgroundColor = "#000080";
    footer.style.margin = "0";
    footer.style.paddingBottom = "10px";
  });
});

//movie-detail watchlist
const watchlaterBtn = document.querySelector(".watch-later-btn");
const watchlaterBox = document.querySelector(".add-wachlist");
let synopsis = document.querySelector(".synopsis");
watchlaterBtn.addEventListener("click", function () {
  watchlaterBox.style.display = "block";
  synopsis.style.opacity = "0.5";
});

//FOR FORM
const loginBtn = document.querySelectorAll(".formlog-btn");
const signupBtn = document.querySelectorAll(".formsign-btn");
const loginForm = document.querySelector(".login");
const signForm = document.querySelector(".signup");
let header = document.querySelector("header");
let menu = document.querySelector(".mainmenu");
const userSec = document.querySelector('.user');
const nonUser = document.querySelector('.non-user');
const logSign = document.querySelectorAll('.enter-home');
const logoutBtn = document.getElementById('logoutBtn');

// Handle Login or Signup
logSign.forEach(function(btn){
  btn.addEventListener('click', function(){
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "index.html";
  });
});

// Check login state when page loads
window.addEventListener("load", function(){
  const logged = localStorage.getItem("isLoggedIn");

  if(logged === "true"){
    userSec.style.display = "block";
    nonUser.style.display = "none";
  } else {
    userSec.style.display = "none";
    nonUser.style.display = "block";
  }
});

//logout

if (logoutBtn) {
  logoutBtn.addEventListener('click', function(e){
    e.preventDefault();

    // Remove login state
    localStorage.removeItem("isLoggedIn");

    // Redirect to homepage
    window.location.href = "index.html";
  });
}



loginBtn.forEach(function (loginBtn) {
  loginBtn.addEventListener("click", function () {
    loginForm.classList.add("active");
    signForm.classList.remove('active')
    main.style.display = "none";
    header.style.display = "none";
    menu.style.display = "none";
    footer.style.backgroundColor = '#000033'
    footer.style.margin = '0px'
  });
});

signupBtn.forEach(function (signupBtn) {
  signupBtn.addEventListener("click", function () {
    signForm.classList.add("active");
    loginForm.classList.remove('active')
    main.style.display = "none";
    header.style.display = "none";
    menu.style.display = "none";
      footer.style.margin = '0px'
    footer.style.backgroundColor = '#000033'
  });
});

//FOR VEDIO PLAYER
let vedioPlayers = document.querySelectorAll(".play-vd");
let vedio = document.querySelector(".vedio");
let footerHm = document.querySelector(".home-footer");

vedioPlayers.forEach(function (vedioPlayer) {
  vedioPlayer.addEventListener("click", function () {
    vedio.style.display = "block";
    header.style.display = "none";
    main.style.display = "none";
   footerHm .style.display = "none";


    const btn = document.getElementById("playToggle");
    const icon = document.getElementById("playIcon");

    btn.addEventListener("click", () => {
      if (icon.classList.contains("bi-play-fill")) {
          icon.classList.replace("bi-play-fill", "bi-pause-fill");
      } else {
          icon.classList.replace("bi-pause-fill", "bi-play-fill");
      }
});


      function checkWidth() {

          if (window.innerWidth >= 768) {
              header.style.display = 'block'
              footerHm.style.display = "block";
              hdImage.style.display = "none";
               vedio.style.marginTop = "100px";
          } else {
              footerHm.style.display = "none";
              header.style.display = 'none'
          }
      }

      checkWidth();

      window.addEventListener("resize", checkWidth);

  });
});


//coming soon movies
const comingNotify = document.querySelector('.coming-notify')
const comingMv = document.querySelectorAll('.coming-soon')
comingMv.forEach(function(comingMv){
  comingMv.addEventListener('click',function(){
    comingNotify.classList.add('active')
  })
})