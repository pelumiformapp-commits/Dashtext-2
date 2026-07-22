
// ===============================
// DashText v2 Chat
// Developed by Engr. Pelumi
// ===============================

const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

const username = localStorage.getItem("username") || "Guest";
const room = localStorage.getItem("room") || "Global Room";

const roomName = document.getElementById("roomName");
if (roomName) {
    roomName.textContent = room;
}

// Send message
function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") return;

    const div = document.createElement("div");
    div.className = "message sent";

    const now = new Date();

    const time =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0");

    div.innerHTML = `
        <div>${text}</div>
        <div class="time">${time}</div>
    `;

    messages.appendChild(div);

    messageInput.value = "";

    messages.scrollTop = messages.scrollHeight;
}

// Send button
sendBtn.addEventListener("click", sendMessage);

// Enter key
messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Back button
document.getElementById("backBtn").addEventListener("click", function () {
    window.location.href = "dashboard.html";
});

// Placeholder buttons
document.getElementById("emojiBtn").onclick = () => alert("Emoji picker coming soon 😊");
document.getElementById("imageBtn").onclick = () => alert("Image sharing coming soon 🖼️");
document.getElementById("fileBtn").onclick = () => alert("File sharing coming soon 📎");
document.getElementById("voiceBtn").onclick = () => alert("Voice messages coming soon 🎤");
document.getElementById("onlineBtn").onclick = () => alert("Online users coming soon 👥");
document.getElementById("callBtn").onclick
