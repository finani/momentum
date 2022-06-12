console.log("Hello World");

const a = 5;
const b = 2;
let myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nicolas";

console.log("your new name is " + myName);

const flag = true;
console.log(flag);

const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek1 =
  mon + " " + tue + " " + wed + " " + thu + " " + fri + " " + sat;
console.log(daysOfWeek1);

const daysOfWeek2 = [mon, tue, wed, thu, fri, sat];
console.log(daysOfWeek2);

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
console.log(nonsense);

const daysOfWeek3 = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek3);

// Get Item from Array
console.log(daysOfWeek3[4]);

// Add one more day to the array
daysOfWeek3.push("sun");
console.log(daysOfWeek3);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy);
console.log(toBuy[999]);

const playerName = "nico";
const playerPoints = 1212;
const playerHandsome = true;
const playerFat = "little bit";

// player[0] == name
// player[1] == points
// player[2] == handsome
// player[3] == fat
const playerArray = ["nico", 1212, true, "little bit"];

const player = {
  name: "nico",
  points: 1212,
  handsome: true,
  fat: "little bit",
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + " nice to meet you!");
  }
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.handsome = false;
console.log(player);

// player = false; // error
player.points = player.points + 15;
player.lastName = "potato";
console.log(player);

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
// console.log(firstNumber); // error

plus();
plus(8, 60);

function divide(a, b) {
  console.log(a / b);
}

divide(98, 20);

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
