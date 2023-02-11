const form = document.querySelector("form");
const conversation = document.querySelector("#conversation");
const userInput = document.querySelector("#user-input");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const userMessage = document.createElement("p");
  userMessage.classList.add("user-message");
  userMessage.textContent = userInput.value;
  conversation.appendChild(userMessage);

  if (userInput.value.includes("hello")) {
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = "Hello there! How can I help you today?";
    conversation.appendChild(botMessage);
  } else if (userInput.value.includes("how are you")) {
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = "I'm doing great, thank you for asking! How about you?";
    conversation.appendChild(botMessage);
  } else if (userInput.value.includes("what is your name")) {
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = "I'm a chatbot, so I don't have a name. You can call me whatever you like!";
    conversation.appendChild(botMessage);
  } else if (userInput.value.includes("what is the time")) {
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = new Date().toLocaleTimeString();
    conversation.appendChild(botMessage);
  } else if (userInput.value.includes("what is the date")) {
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = new Date().toLocaleDateString();
    conversation.appendChild(botMessage);
  } else {
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = "UWU, i cant undestand what you are saying daddy (●'◡'●)";
    conversation.appendChild(botMessage);
  }

  userInput.value = "";
  conversation.scrollTop = conversation.scrollHeight;
});
