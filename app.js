const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
  console.log(event);
});

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.dir(event);
});
