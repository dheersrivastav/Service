function updateFooterCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.count, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

    if (cartCount > 0) {
        document.getElementById('footer-cart-count').innerText = cartCount;
        document.getElementById('footer-cart-price').innerText = totalPrice.toFixed(2);
        document.querySelector('.footer').style.display = 'flex';
    } else {
        document.querySelector('.footer').style.display = 'none';
    }
}

document.getElementById('view-cart').addEventListener('click', () => {
    window.location.href = 'addToCart.html';
});

document.addEventListener('DOMContentLoaded', updateFooterCart);

// Listen for custom event to update footer when the cart changes
document.addEventListener('cartUpdated', updateFooterCart);
