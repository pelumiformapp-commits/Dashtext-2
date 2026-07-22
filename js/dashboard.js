
// DashText v2 Dashboard

const username = localStorage.getItem("username") || "Guest";

const userElement = document.getElementById("username");

if (userElement) {
    userElement.textContent = username;
}

function openPage(page) {
    window.location.href = page;
}

// Buttons
document.getElementById("chatCard")?.addEventListener("click", () => {
    openPage("chat.html");
});

document.getElementById("classroomCard")?.addEventListener("click", () => {
    openPage("classroom.html");
});

document.getElementById("teacherCard")?.addEventListener("click", () => {
    openPage("teacher.html");
});

document.getElementById("studentCard")?.addEventListener("click", () => {
    openPage("student.html");
});

document.getElementById("gamesCard")?.addEventListener("click", () => {
    openPage("games.html");
});

document.getElementById("cbtCard")?.addEventListener("click", () => {
    openPage("cbt.html");
});

document.getElementById("aiCard")?.addEventListener("click", () => {
    openPage("ai.html");
});

document.getElementById("profileCard")?.addEventListener("click", () => {
    openPage("profile.html");
});

document.getElementById("settingsCard")?.addEventListener("click", () => {
    openPage("settings.html");
});
