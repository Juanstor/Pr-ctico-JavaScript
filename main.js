// CONST
// Desktop Menu CONST
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Mobile Desktop - Burguer menu CONST
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

// Cart Menu CONST
const cartMenuIcon = document.querySelector('.navbar-shopping-card')
const cartAside2 = document.querySelector('.cartAside')

// Main container or CardsContainers CONST
const cardsContainer = document.querySelector('.cards-container');

// Main detail CONST
const mainDetail = document.querySelector('.main-detail');
const closeButtom = document.querySelector('.close-buttom')


// FUNCTIONS
// → Desktop Email Menu FUNCTIONS
menuEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    cartAside2.classList.add('inactive');
    mainDetail.classList.add('inactive');
}

// → Mobile Burger Menu FUNCTIONS
burgerMenu.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    cartAside2.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mainDetail.classList.add('inactive');
}

// → Cart Menu FUNCTIONS
cartMenuIcon.addEventListener('click', toggleCartAside)
function toggleCartAside() {
    cartAside2.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mainDetail.classList.add('inactive');
}

// → Main detail FUNCTIONS
function openMainDetail () {
    mainDetail.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    cartAside2.classList.add('inactive');
}
closeButtom.addEventListener('click', closingMainDetail)
function closingMainDetail() {
    mainDetail.classList.add('inactive')
}



// Creating automatic products for product cards - good practice for use of Backend APIrest
// →array
const productList = [];
productList.push({
    name: 'Nintendo',
    price: 370,
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt="product-img'
})
productList.push({
    name: 'Piano Yamaha C7 Concert',
    price: 20000,
    image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt="product-img'
})
productList.push({
    name: 'Canon EOS Kit M50 Camera',
    price: 760,
    image: 'https://images.pexels.com/photos/15111004/pexels-photo-15111004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt="product-img'
})
productList.push({
    name: 'Akai MPK mini MK3',
    price: 125,
    image: 'https://images.pexels.com/photos/6328789/pexels-photo-6328789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt="product-img'
})
productList.push({
    name: 'white coach',
    price: 384.50,
    image: 'https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt="product-img'
})
productList.push({
    name: 'Ibanez Grx40 - Electric guitar',
    price: 220,
    image: 'https://images.pexels.com/photos/13316804/pexels-photo-13316804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 alt="product-img'
})

// →Deploy HTML Main content
function renderProducts(arr) {
    for (product of arr) {
        // <div class="product-card">
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // <img src="https://images.pexels.com/photos/blablabla"></img>
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openMainDetail);
    
        // <div class="product-info">
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        // <div>
        const productInfoDiv = document.createElement('div');
    
        // <p>$120,00</p>
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        // <p>Nintendo</p>
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        
        // <figure>
        const productInfoFigure = document.createElement('figure');
        
        // <img src="./icons/bt_add_to_cart.svg">
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        
        // now, we need to put every element in his father element
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);