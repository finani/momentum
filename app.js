document.title = "Hello! From JS!";

// const title = document.getElementById("title");
const title = document.querySelector("#title");
console.log(title);
console.dir(title);

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
const hellos = document.querySelectorAll(".hello");
console.log(hellos);

const h1s = document.getElementsByTagName("h1");
console.log(h1s);

const h3s = document.querySelector("div.hello h3:first-child");
console.log(h3s);

const h3sAll = document.querySelectorAll(".hello h3");
console.log(h3sAll);

h3s.innerHTML = "Hello";
h3s.style.color = "red";

function handleH3sClick(event) {
  console.log("h3s was clicked!");
  h3s.style.color = "blue";

  console.log(event);
  console.log(event.target);
  console.log(event.target.innerText);
}
h3s.addEventListener("click", handleH3sClick);
// h3s.onclick = handleH3sClick;

function handleMouseEnter() {
  h3s.innerText = "Mouse is here!";
  h3s.style.color = "green";
}
h3s.addEventListener("mouseenter", handleMouseEnter);
// h3s.onmouseenter = handleMouseEnter;

function handleMouseLeave() {
  h3s.innerText = "Mouse is gone!";
  h3s.style.color = "red";
}
h3s.addEventListener("mouseleave", handleMouseLeave);
// h3s.onmouseleave = handleMouseLeave;

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
  alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline() {
  alert("SOS on WIFI");
}
window.addEventListener("offline", handleWindowOffline);

function handleWindowOnline() {
  alert("All GOOOD");
}
window.addEventListener("online", handleWindowOnline);
