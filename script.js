var sendBtn = document.querySelector(".send-btn");
var chatSpace = document.querySelector(".chat-space");
var recText = document.querySelector(".recepient-text");
var sendText = document.querySelector(".sender-text")

sendBtn.addEventListener("click", () => { 
    var textt = document.querySelector("textarea");
    var getval = textt.value;
    var newText = document.createElement('section');

    // Create a new Date object with the current date and time
    var currentTime = new Date();

    // Get the current time components
    var hours = currentTime.getHours(); // Hours (0-23)
    var minutes = currentTime.getMinutes(); // Minutes (0-59)
    var seconds = currentTime.getSeconds(); // Seconds (0-59)

    // Determine whether it's AM or PM
    var amOrPm = hours >= 12 ? "PM" : "AM";


    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hours is 0, set it to 12

    // To display the current time in a custom format (e.g., "hh:mm:ss AM/PM")
    var formattedTime = `${hours}:${minutes} ${amOrPm}`;


    newText.className = "sender";
    newText.innerHTML = (`<figure class="image-frame"><img src="suit-man.png" class="sender-img" alt=""></figure> <p class="sender-text">${getval}</p> <time>${formattedTime}</time>`);
    chatSpace.appendChild(newText);
    textt.value = "";

    chatSpace.scrollTop = chatSpace.scrollHeight;
});








