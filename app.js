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
