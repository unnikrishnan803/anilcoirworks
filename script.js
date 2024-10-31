// script.js
function redirectToWhatsApp(productName, price) {
    const message = `Hello, I'm interested in buying ${productName} priced at ₹${price}. Could you provide more details?`;
    const phoneNumber = '916235279256';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  