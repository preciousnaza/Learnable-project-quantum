import "./style.css";
const q = (s)=> document.querySelector(s);
const qa = (s)=> document.querySelectorAll(s);
const id = (id)=> document.getElementById(id);
const className = (cls)=> document.getElementsByClassName(cls);
// FOR THE ENGAGING MOVES IN THE UI
const moveSections = qa(".transform");
const scales = qa(".scale");
console.log(moveSections);

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
}, 5000);
});
scales.forEach((move) => {
    setTimeout(() => {
    observer.observe(move);
}, 5000);
});
