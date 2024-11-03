let cart = [];

function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  alert(`${name} added to cart.`);
  displayCartItems();
}

function toggleCart() {
  const cartSection = document.getElementById('cart');
  const deliverySection = document.getElementById('delivery');
  cartSection.classList.toggle('hidden');
  deliverySection.classList.add('hidden');
}

function displayCartItems() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = ''; // Clear previous items
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItemsList.appendChild(li);
  });
}

function toggleDelivery() {
  const cartSection = document.getElementById('cart');
  const deliverySection = document.getElementById('delivery');
  cartSection.classList.add('hidden');
  deliverySection.classList.remove('hidden');
}

document.getElementById('delivery-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const paymentMethod = document.getElementById('payment').value;

  const cartSummary = cart.map(item => `${item.name} - ₹${item.price}`).join(', ');
  const message = `Order Details:\nName: ${name}\nAddress: ${address}\nPin Code: ${pincode}\nPayment Method: ${paymentMethod}\nCart: ${cartSummary}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.link/0imfam?text=${encodedMessage}`;

  window.open(whatsappLink, '_blank'); // Open WhatsApp in a new tab
  cart = []; // Reset the cart
  displayCartItems(); // Update cart display
});
