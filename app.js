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
  const currentColor = h3s.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h3s.style.color = newColor;
}
h3s.addEventListener("click", handleH3sClick);

h3s.addEventListener("mouseenter", () => {
  h3s.innerText = "Mouse is here!";
});

h3s.addEventListener("mouseleave", () => {
  h3s.innerText = "Mouse is gone!";
});

window.addEventListener("resize", () => {
  document.body.style.backgroundColor = "tomato";
});

window.addEventListener("copy", () => {
  alert("copier!");
});

window.addEventListener("offline", () => {
  alert("SOS on WIFI");
});
window.addEventListener("online", () => {
  alert("All GOOOD");
});

const h1ss = document.querySelector("h4");

function handleH1ssClick(event) {
  const clickedClass = "clicked";
  if (h1ss.className === clickedClass) {
    h1ss.className = "";
  } else {
    h1ss.className = clickedClass;
  }
}
h1ss.addEventListener("click", handleH1ssClick);
