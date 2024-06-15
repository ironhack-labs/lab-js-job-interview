/* Variable scope, hoisting, copy by reference and copy by value */

// Check 01
let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();

console.log(foo);

// Check 02 
/* Primitive data types such as num, string, boolean, undefined, etc. in JS are immutable i.e. they can’t be modified
   Copying of a primitive variable gives a new copy and doesnt alter original value 
   Don’t get confused here because values are immutable but variables are mutable which means you can reassign them 
   
   Example 01:
    let city = 'miami';
    console.log(city); // <== miami

    // we CAN re-assign our variable to another value
    city = 'berlin';
    console.log(city); // <== berlin

    // but still CAN NOT change the value "berlin"
    city[0] = 'B';
    console.log(city); // <== berlin

    Example 02:
    const message = "Don't be sad, be happy!";
    console.log(message.slice(0, 3)); // <== Don
    console.log(message); // <== Don't be sad, be happy!

*/
let a = 1;

function example(a) { // 'a' is simply a placeholder, you can name it as 'b' as well
  a = 10;
  console.log(a); // Console log 1
}

example(a); // passing copy of 'a' which has value of 1


console.log(a);  // passing original variable 'a'

// Check 03: Function hoisting

sayHi();
//myFunction();

function sayHi() {
  console.log("Hi there!");
}

const myFunction = function () {
  console.log("Hi there!");
}  // OR usinf arrow notation: const myFunction = () => {}


// Task 4: 
const c = { num: 42 };
const b = c; 

b.num = 90;

console.log(c);


// Check 05 passing by reference and objects are mutable
function magicHat(obj) {
    obj.age = 10;
    obj = { name: "Ada", age: 20 };
    return obj;
  }
    
  const rabbit1 = { name: "Bob", age: 30 };
    
  const rabbit2 = magicHat(rabbit1);
    
  console.log("rabbit1: ", rabbit1);
  console.log("rabbit2: ", rabbit2);
