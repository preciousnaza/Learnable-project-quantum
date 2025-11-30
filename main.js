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

// VARIABLES NAMING
const moveSections = qa(".transform");
const scales = qa(".scale");
const logBtns = qa(".signIn");
const signInForm = id("formSignIn");
const signUpForm = id("formSignUp");
const pswdInputSignIn = id("inputPswdSignIn");
const pswdInputSignUp = id("inputPswdSignUp");
const pswdSignIn = id("pswdSignIn");
const pswdSignUp = id("pswdSignUp");
const signUpBtns = qa(".sign-up-btn");

// FOR THE FORM TOGGLE
logBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    signInForm.classList.add("show");
    signUpForm.classList.remove("show");
  });
});

signUpBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    signUpForm.classList.add("show");
    signInForm.classList.remove("show");
    pswdInputSignIn.value = "";
  });
});

// FOR THE PASSWORD VISItiLITY TOGGLE
function showPassword(e) {
  const showPswd = e.target;
  const passwordInput = showPswd.previousElementSibling;

  if (showPswd.classList.contains("ti-eye")) {
    showPswd.classList.remove("ti-eye");
    showPswd.classList.add("ti-eye-off");
    passwordInput.type = "text";
  } else {
    showPswd.classList.remove("ti-eye-off");
    showPswd.classList.add("ti-eye");
    passwordInput.type = "password";
  }
}
if (pswdSignIn) {
  pswdInputSignIn.addEventListener("click", showPassword);
}
if (pswdInputSignUp) {
  pswdSignUp.addEventListener("click", showPassword);
}

// FOR THE ENGAGING MOVES IN THE UI
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("control");
    }
  });
});
moveSections.forEach((move) => {
  observer.observe(move);
});

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

//NAVBAR LINK
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  if (navLink.href === window.location.href) {
    navLink.classList.add("active");
  }
});

//Menu Section
const menuClose = document.querySelector('.menu-close');
const mainmenu = document.querySelector('.mainmenu');
const hamburger = document.getElementById('hamburgerIcon');

hamburger.addEventListener("click", () => {
    menuClose.classList.add("active");
    mainmenu.classList.add("active");
    document.body.classList.add("lock-scroll");
});

menuClose.addEventListener("click", () => {
  mainmenu.classList.remove("active");
  menuClose.classList.remove("active");
  document.body.classList.remove("lock-scroll");
});

// Dropdown toggle for Genre
const menuBody = document.querySelector('.menu-body');
const menuItems = menuBody.querySelectorAll('li');
const genreItem = menuItems[0];
const dropdown = document.querySelector('.menu-dropdown');

genreItem.addEventListener('click', (e) => {
  e.preventDefault();
  dropdown.classList.toggle('active');
  genreItem.classList.toggle('active');
});

// Close dropdown when other menu items are clicked
menuItems.forEach((item, index) => {
  if (index !== 0) {
    item.addEventListener('click', () => {
      dropdown.classList.remove('active');
      genreItem.classList.remove('active');
    });
  }
});
