// Initialize an array to simulate adding products to the cart
const cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

function updateCart() {
  console.log("Cart updated:", cart);
}

// Chatbot handling function
function handleChat(event) {
  if (event.key === "Enter") {
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value.trim().toLowerCase();
    chatInput.value = "";  // Clear the input field
    displayMessage("User", message);

    // Chatbot response logic
    if (message === "hi") {
      displayMessage("Anil Coir Works", "Welcome to Anil Coir Works! You can contact us at anilcoirworks1973@gmail.com.");
    } else {
      displayMessage("Anil Coir Works", "I'm here to assist you! Type 'hi' to get started.");
    }
  }
}

function displayMessage(sender, message) {
  const chatMessages = document.getElementById("chat-messages");
  const newMessage = document.createElement("div");
  newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatMessages.appendChild(newMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight;  // Auto-scroll to the latest message
}
