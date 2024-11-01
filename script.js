// Sample cart array for storing selected products
const cart = [];

function addToCart(productName, price) {
  // Add product to the cart array
  cart.push({ productName, price });
  updateCart();
}

function updateCart() {
  // Display cart items
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = cart.map(item => `<li>${item.productName} - ₹${item.price}</li>`).join('');
}

// Redirect to WhatsApp with a prefilled message for product inquiries
function redirectToWhatsApp(productName, price) {
    const message = `Hello, I'm interested in buying ${productName} priced at ₹${price}. Could you provide more details?`;
    const url = `https://wa.link/niqcxy?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Add event listeners to product buttons to add to cart and redirect to WhatsApp
document.querySelectorAll(".product-card button").forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = button.parentNode;
    const productName = product.querySelector("h4").innerText;
    const price = parseInt(product.querySelector("p").innerText.replace('Price: ₹', ''));
    addToCart(productName, price);
    redirectToWhatsApp(productName, price);  // Redirects to WhatsApp after adding to cart
  });
});
