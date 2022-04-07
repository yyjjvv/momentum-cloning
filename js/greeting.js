const logout = document.querySelector("#logout-form #logout");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//Greeting Message Changes
const date = new Date();
let hours = date.getHours();
let goodSomething;
if (hours >= 6 && hours < 12) {
    goodSomething = "Good morning";
} else if (hours >= 12 && hours < 17) {
    goodSomething = "Good afternoon";
} else if (hours >= 17 && hours < 23) {
    goodSomething = "Good evening";
} else {
    goodSomething = "Good night";
}

//Submit & Store the Username, Bring Greeting Message
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `${goodSomething}, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {// show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { //show the greeting
    paintGreetings(savedUsername);
}

//Logout Btn
logout.addEventListener("click", () => {
    localStorage.clear();
});