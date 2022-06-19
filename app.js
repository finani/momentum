const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerHTML = "Hello " + username;
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  console.log(username);
});

link.addEventListener("click", (event) => {
  event.preventDefault();
});
