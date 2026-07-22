
const loginBtn=document.getElementById("loginBtn");

loginBtn.onclick=()=>{

const username=document.getElementById("username").value.trim();

const room=document.getElementById("room").value.trim();

const password=document.getElementById("password").value.trim();

if(username===""){

alert("Enter your name");

return;

}

if(password===""){

alert("Enter password");

return;

}

localStorage.setItem("username",username);

localStorage.setItem("room",room||"Global");

window.location.href="dashboard.html";

};
