const sliderSection = document.querySelector(".slider-section");
const slides = document.querySelectorAll(".slider");
const dots = document.querySelectorAll(".dot span");

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
const searchIcon = id("searchIcon");
const searchPlay = id("searchPlay");
const searchMsg = className("search-msg")[0];
const inputSearch = id("searchInput");
const searchResult = id("searchResult");

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
    inputSearch.valu
  });
}

//open and close search page
if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    searchPage.classList.add("show-search");
  });
}
if (searchPage) {
  searchPage.addEventListener("click", (e) => {
    if (e.target === searchPage) {
      searchPage.classList.remove("show-search");
    }
  });
}

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

//Show notification
// const notification = document.querySelector('')
// const notifyPage = document.querySelector('.notification-container')
// notification.addEventListener('click', function(){
//   notifyPage.classList.add('show-notify')
// })
