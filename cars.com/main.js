var dropdownContent = document.getElementById("dropdowncontent");
var down = document.getElementById("down");

function dropFunction() {
    down.classList.toggle("bx-chevron-up-circle");
    dropdownContent.classList.toggle("drop");
}

window.onclick = () => {
    dropdownContent.classList.toggle("dropdowncontent");
}


//preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
});


//navbar

let icon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

function dropeFunction() {
    icon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    icon.classList.remove("bx-x");
    navbar.classList.remove("active");
}
const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.order-form form', { delay: 800, origin: 'left' });

sr.reveal('.heading', { delay: 200, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 400, origin: 'left' });
sr.reveal('.section-img', { delay: 100, origin: 'left' });
sr.reveal('.services-container .box', { delay: 200, origin: 'top' });
sr.reveal('.about-container', { delay: 200, origin: 'left' });
sr.reveal('.reviews-container .box', { delay: 200, origin: 'top' });
sr.reveal('.news-letter .box', { delay: 200, origin: 'bottom' });