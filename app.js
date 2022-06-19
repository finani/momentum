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

const h3s = document.querySelector(".hello h3");
console.log(h3s);

const h3sAll = document.querySelectorAll(".hello h3");
console.log(h3sAll);
