// Menu
const menu = document.querySelector('.menu');
const btnHamburger = document.querySelector('.hamburger');
const btnMenuClose = document.querySelector('#btnMenuClose');

// Cart
const cart = document.querySelector('.cart');
const btnCart = document.querySelector('.btnCart');
const productInShoppingCart = document.querySelector('.products-in-cart');
const cartCount = document.querySelector('.cart-count');

// Counter
const btnPlus = document.querySelector('#btnPlus');
const btnMinus = document.querySelector('#btnMinus');
const productCounter = document.querySelector('.counter');
let productCounterValue = 1;

// Gallery
const gallery = document.querySelectorAll('.pic');
const heroImg = document.querySelector('.product-hero');

// Add to Cart
const btnAddToCard = document.querySelector('.btn');

// Product info
let productsInCart = 0;
let price = 250.0;
let discount = 0.5;


// --- MENU ---
btnHamburger.addEventListener('click', function() {
  menu.classList.remove('hidden');
});

btnMenuClose.addEventListener('click', function() {
  menu.classList.add('hidden');
});


// --- CART ---
btnCart.addEventListener('click', function() {
  cart.classList.toggle('hidden');
});


// --- COUNTER ---
btnPlus.addEventListener('click', function() {
  productCounterValue++;
  productCounter.textContent = productCounterValue;
});

btnMinus.addEventListener('click', function() {
  if (productCounterValue > 1) {
    productCounterValue--;
    productCounter.textContent = productCounterValue;
  }
});


// --- GALLERY ---
gallery.forEach(function(img) {
  img.addEventListener('click', function(event) {
    gallery.forEach(function(img) {
      img.classList.remove('active');
    });
    event.target.parentElement.classList.add('active');

    heroImg.src = event.target.src.replace('-thumbnail', '');
  });
});


// --- ADD TO CART ---
btnAddToCard.addEventListener('click', function() {
  productsInCart += productCounterValue;

  productInShoppingCart.innerHTML = `
    <div class="item">
      <img class="product-img" src="./images/image-product-1-thumbnail.jpg" alt="product 1 thumb">
      <div class="details">
        <div class="product-name">Autumn Limited Edition...</div>
        <div class="price-group">
          <div class="price">$${(price * discount).toFixed(2)}</div> x
          <div class="count">${productsInCart}</div>
          <div class="total-amount">$${(price * discount * productsInCart).toFixed(2)}</div>
        </div>
      </div>
    </div>
  `;

  cartCount.textContent = productsInCart;
  cartCount.classList.remove('hidden');
});