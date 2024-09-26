// Challenge 1
let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();


console.log(foo);


// Challenge 2
let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);


console.log(a);  // Console log 2


// Challenge 3

sayHi();

function sayHi() {
  console.log("Hi there!");
}

// Challenge 4

const aa = { num: 42 };
const bb = aa; 

bb.num = 90;

console.log(aa);

//Challenge 5 (bonus)

function magicHat(obj) {
    obj.age = 10;
    obj = { name: "Ada", age: 20 };
    return obj;
  }
    
  const rabbit1 = { name: "Bob", age: 30 };
    
  const rabbit2 = magicHat(rabbit1);
    
  console.log("rabbit1: ", rabbit1);
  console.log("rabbit2: ", rabbit2);