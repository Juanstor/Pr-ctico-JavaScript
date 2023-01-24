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



// En esta parte hay que darle click a un menu y que los otros se cierren para uqe no se superpongan, hay otra solucion que es simplemente agregar el inactive cada vez que se le da clic sin necesidad de saber con if si esta abierto o cerrado los otros menus. 

cartMenuIcon.addEventListener('click', toggleCartAside)
function toggleCartAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}

