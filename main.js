// Menu desktop

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
    console.log('Clickeaste en la burger')
    mobileMenu.classList.toggle('inactive')
}