var sendBtn = document.querySelector(".send-btn");
var chatSpace = document.querySelector(".chat-space");
var textt = document.querySelector("textarea");

// Load chat history from localStorage when the page loads
var chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

// Function to append a new message to the chatSpace
function appendMessage(message) {
    var newText = document.createElement('section');
    newText.className = "sender";

    // Create a new Date object with the current date and time
    var currentTime = new Date();

    // Get the current time components
    var hours = currentTime.getHours(); // Hours (0-23)
    var minutes = currentTime.getMinutes(); // Minutes (0-59)
    var seconds = currentTime.getSeconds(); // Seconds (0-59)

    // To display the current time in a custom format (e.g., "HH:MM:SS")
    var formattedTime = `${hours}:${minutes}:${seconds}`;

    // console.log("Current Time:", formattedTime);

    newText.innerHTML = `<figure class="image-frame"><img src="womann.png" class="sender-img" alt=""></figure> <p class="sender-text">${message}</p> <time>${formattedTime}</time>`;
    chatSpace.appendChild(newText);
    chatSpace.scrollTop = chatSpace.scrollHeight;
}

// Add event listener to send button
sendBtn.addEventListener("click", () => {
    var getval = textt.value;
    if (getval) {
        appendMessage(getval);

        // Save the message to chat history in localStorage
        chatHistory.push(getval);
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));

        // Clear the textarea's value
        textt.value = "";
    }
});

// Load chat history when the page loads
chatHistory.forEach(function (message) {
    appendMessage(message);
});