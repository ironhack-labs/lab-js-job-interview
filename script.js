/* Challenge 1
a) "abc" and "xyz"
b) "xyz" and "xyz"
c) undefined and "xyz"
d) ReferenceError: foo is not defined */

/* let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();

console.log(foo); */

/* Challange 2
a) 10 and 10
b) 1 and 10
c) 10 and 1
d) ReferenceError: a is not defined */
/* let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);

console.log(a); // Console log 2 */

/* Challange 3
a) ReferenceError: sayHi is not defined
b) undefined
c) "Hi there!"
d) TypeError: sayHi is not a function */
/* sayHi();

function sayHi() {
  console.log("Hi there!");
}*/

/* Challange 4
a) TypeError: Assignment to constant variable.
b) { num: 42 }
c) { num: 90 }
d) ReferenceError: a is not defined */
const a = { num: 42 };
/* const b = a;

b.num = 90;

console.log(a); */

/* Challange 5
a) { name: "Bob", age: 30 } and { name: "Ada", age: 20 }
b) { name: "Bob", age: 30 } and { name: "Bob", age: 10 }
c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
d) ReferenceError: obj is not defined */
function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}

const rabbit1 = { name: "Bob", age: 30 };

const rabbit2 = magicHat(rabbit1);

console.log("rabbit1: ", rabbit1);
console.log("rabbit2: ", rabbit2);
