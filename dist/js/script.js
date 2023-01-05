// Hamburger
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function(e) {
    if(e.target != burger && e.target != nav) {
        burger.classList.remove('hamburger-active');
        nav.classList.add('hidden'); 
    }
});

// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');

    const fixedNav = header.offsetTop;

    const toTop = document.getElementById('toTop');

    if (window.pageYOffset > fixedNav) {
        header.classList.toggle('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('add');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
    }
};

// Dark Mode Toggle
const tdark = document.querySelector('#darkToggle')
const html = document.querySelector('html')

tdark.addEventListener('click', function () {
    if (tdark.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }
    else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    tdark.checked = true;
} else {
    tdark.checked = false;
}
 