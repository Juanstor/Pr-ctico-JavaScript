// Desktop Menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Mobile Desktop - Burguer menu
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

// Cart Menu
const cartMenuIcon = document.querySelector('.navbar-shopping-card')
const cartAside2 = document.querySelector('.cartAside')



// functions (same order)
menuEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}


burgerMenu.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu() {

    const isCartAsideClosed = cartAside2.classList.contains('inactive');
    if (!isCartAsideClosed) {
        cartAside2.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}


cartMenuIcon.addEventListener('click', toggleCartAside)
function toggleCartAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    cartAside2.classList.toggle('inactive')
}

const productList = [];