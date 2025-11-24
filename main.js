const q = (s) => document.querySelector(s);
const qa = (s) => document.querySelectorAll(s);
const id = (id) => document.getElementById(id);
const className = (cls) => document.getElementsByClassName(cls);

const moveSections = qa(".transform");
const scales = qa(".scale");
const logBtns = qa(".signIn");
const signInForm = id("formSignIn");
const signUpForm = id("formSignUp");
const signUpBtns = qa(".sign-up-btn");

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
  });
});

// FOR THE ENGAGING MOVES IN THE UI
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("control");
    }
  });
});
moveSections.forEach((move) => {
  setTimeout(() => {
    observer.observe(move);
  }, 3000);
});
scales.forEach((move) => {
  setTimeout(() => {
    observer.observe(move);
  }, 5000);
});
