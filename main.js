
const q = (s)=> document.querySelector(s);
const qa = (s)=> document.querySelectorAll(s);
const id = (id)=> document.getElementById(id);
const className = (cls)=> document.getElementsByClassName(cls);
const searchBtn = document.querySelector('.bi-search')
const searchLine = document.querySelector('.line')
const searchInput = document.querySelector('.search-input')

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

//search icon animation
searchBtn.addEventListener('click', function(){
    searchLine.classList.toggle('hidden')
    searchInput.classList.toggle('hidden')
    searchBtn.style.animation = 'search-scale 2s forwards ease'
})
