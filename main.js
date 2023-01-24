// Desktop Menu

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

// Mobile Desktop

const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

burgerMenu.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}


// Cart Menu

const cartMenuIcon = document.querySelector('.navbar-shopping-card')
const aside = document.querySelector('.product-detail')

cartMenuIcon.addEventListener('click', toggleCartMenu)
function toggleCartMenu() {
    aside.classList.toggle('inactive')
}

