// ===============================
// DashText v2 Rooms
// Developed by Engr. Pelumi
// ===============================

// Current room
let currentRoom = localStorage.getItem("room") || "Global Room";

// Create a room
function createRoom() {

    const room = prompt("Enter a new room name:");

    if (!room) return;

    currentRoom = room.trim();

    localStorage.setItem("room", currentRoom);

    alert("Room created: " + currentRoom);

    location.reload();
}

// Join a room
function joinRoom() {

    const room = prompt("Enter room code:");

    if (!room) return;

    currentRoom = room.trim();

    localStorage.setItem("room", currentRoom);

    alert("Joined room: " + currentRoom);

    location.reload();
}

// Leave room
function leaveRoom() {

    localStorage.setItem("room", "Global Room");

    location.reload();
}
