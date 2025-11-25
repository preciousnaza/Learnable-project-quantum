const q = (s) => document.querySelector(s);
const qa = (s) => document.querySelectorAll(s);
const id = (id) => document.getElementById(id);
const className = (cls) => document.getElementsByClassName(cls);

const searchBtn = document.querySelector(".ti-search");
const searchLine = document.querySelector(".line");
const searchInput = document.querySelector(".search-input");
const navLinks = document.querySelectorAll(".nav-link");

// FOR THE ENGAGING MOVES IN THE UI
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
pswdSignIn.addEventListener("click", showPassword);
pswdSignUp.addEventListener("click", showPassword);

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

//search icon animation
if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    searchLine.classList.toggle("hidden");
    searchInput.classList.toggle("hidden");
    searchBtn.style.animation = "search-scale 2s forwards ease";
  });
}

//NAVBAR LINK
navLinks.forEach((navLink) => {
  if (navLink.href === window.location.href) {
    navLink.classList.add("active");
  }
});
