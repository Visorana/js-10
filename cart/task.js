let quantityButtons = document.querySelectorAll('.product__quantity-control');
let addToCartButtons = document.querySelectorAll('.product__add');
let cartProducts = document.querySelector('.cart__products');

quantityButtons.forEach.call(quantityButtons, (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button.classList.contains('product__quantity-control_inc')) updateQuantity(button, 1);
        if (button.classList.contains('product__quantity-control_dec')) updateQuantity(button, -1);
    })
})

addToCartButtons.forEach.call(addToCartButtons, (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        product = button.closest('.product')
        quantity = button.previousElementSibling.children.item(1).textContent
        addToCart(product, quantity);
    })
})

function updateQuantity(button, num) {
    let quantityButton
    if (num === 1) quantityButton = button.previousElementSibling;
    if (num === -1) quantityButton = button.nextElementSibling;
    quantity = Number(quantityButton.textContent) + num;
    if (quantity < 1) return
    quantityButton.textContent = quantity;
}

function addToCart(product, quantity) {
    cartProduct = cartProducts.querySelector(`[data-id="${product.dataset.id}"]`)
    if (cartProduct) {
        productCount = cartProduct.querySelector('.cart__product-count');
        productCount.textContent = Number(productCount.textContent) + Number(quantity);
        return
    }
    
    let div = document.createElement('div');
    let img = document.createElement('img');
    let count = document.createElement('div');

    div.classList = 'cart__product';
    div.dataset.id = product.dataset.id;
    img.classList = 'cart__product-image';
    img.setAttribute('src', product.children.item(1).src);
    count.classList.add('cart__product-count');
    count.textContent = quantity;

    cartProducts.insertAdjacentElement('afterBegin', div);
    div.insertAdjacentElement('afterBegin', count);
    div.insertAdjacentElement('afterBegin', img);
}