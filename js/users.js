// ===============================
// DashText v2 Online Users
// Developed by Engr. Pelumi
// ===============================

const onlineUsers = [];

function addUser(name) {

    if (!onlineUsers.includes(name)) {

        onlineUsers.push(name);

    }

    renderUsers();

}

function removeUser(name) {

    const index = onlineUsers.indexOf(name);

    if (index > -1) {

        onlineUsers.splice(index,1);

    }

    renderUsers();

}

function renderUsers() {

    const list = document.getElementById("onlineUsers");

    if (!list) return;

    list.innerHTML="";

    onlineUsers.forEach(user=>{

        const div=document.createElement("div");

        div.className="online-user";

        div.innerHTML="🟢 "+user;

        list.appendChild(div);

    });

}

// Demo
addUser(localStorage.getItem("username") || "Guest");
