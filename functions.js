//Function Declaration
function greet(name) {
  return "Hello " + name;
}
console.log(greet("pranav"));
//Function Expression
const gret = function (name) {
  return "Hello " + name;
};
console.log(gret("pranav"));
//Arrow Function
const great = (name) => {
  return "Hello " + name;
};
console.log(great("pranav"));
//Anonymous Function
setTimeout(function () {
  console.log("pranav");
}, 1000);
//IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Runs immediately");
})();
//Callback Function
function process(callback) {
  callback();
}
process(() => {
  console.log("Callback executed");
});
//Recursive Function
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
//Higher Order Function
function calculate(a, b, operation) {
  return operation(a, b);
}
console.log(calculate(5, 3, (x, y) => x + y));
//Generator Function
function* numbers() {
  yield 1;
  yield 2;
}
const gen = numbers();
console.log(gen.next());
//Async Function
async function fetchData() {
  return "Data Loaded";
}

fetchData().then(console.log);
//Constructor Function
function Person(name) {
  this.name = name;
}
const user = new Person("Pranav");
console.log(user.name);
// 12. Method (Function inside Object)
const use = {
  name: "Pranav",
  greet() {
    console.log("Hello");
  }
};
use.greet();
//array functions
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.map(x => x * 2));
console.log(arr.filter(x => x > 1));
console.log(arr.reduce((a, b) => a + b));

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c = [3, 45, 5, 23, 88, 56, 87, 90, 35, 30,98]


console.log(b.filter(x => x % 2 == 0));
console.log(c.filter(x => x % 5 == 0));
let sums = b
.filter(x=>x%2===0)
.reduce((a,b)=>a+b);
console.log(sums);
let max=c.filter(x => x % 5 == 0).reduce((a,b)=>a>b?a:b);
console.log(max);