// ===============================
// DashText v2 Dashboard
// Developed by Engr. Pelumi
// ===============================

// Load saved user information
const username = localStorage.getItem("username") || "Guest";
const room = localStorage.getItem("room") || "Global Room";

// Display username
const usernameElement = document.getElementById("username");
if (usernameElement) {
    usernameElement.textContent = username;
}

// Display room name (if an element exists)
const roomElement = document.getElementById("roomName");
if (roomElement) {
    roomElement.textContent = room;
}

// Greeting based on time
const greetingElement = document.getElementById("greeting");

if (greetingElement) {
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingElement.textContent = "Good Morning";
    } else if (hour < 18) {
        greetingElement.textContent = "Good Afternoon";
    } else {
        greetingElement.textContent = "Good Evening";
    }
}

// Logout button
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {

        if (confirm("Logout from DashText?")) {

            localStorage.removeItem("username");
            localStorage.removeItem("room");

            window.location.href = "index.html";
        }

    });
}

// Welcome message
console.log("Welcome to DashText v2");
console.log("User:", username);
console.log("Room:", room);

// Future features
// Notifications
// Online Users
// Firebase Sync
// Voice Calls
// Video Calls
// Classroom
// Games
// AI Tutor
