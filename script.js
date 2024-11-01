// script.js
function redirectToWhatsApp(productName, price) {
    const message = `Hello, I'm interested in buying ${productName} priced at ₹${price}. Could you provide more details?`;
    const url = `https://wa.link/niqcxy?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
