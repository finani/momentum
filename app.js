const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#login-form input');

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
  console.log(event);
});
