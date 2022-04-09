// Hamburger
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');

burger.addEventListener('click', function() {
    burger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');


})

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');

    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.toggle('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}