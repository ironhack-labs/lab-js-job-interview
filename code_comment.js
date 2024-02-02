// //================  separator ================//
// // Challenge 1
// // here we declare a variable "foo"
// let foo = "abc";

// // create a function "bar" and reassing the value of "foo"  to "xyz"
// function bar() {
//   foo = "xyz";
//   console.log(foo);
// }

// // we call the function with the "foo" variable
// bar();

// // we console log the  new foo variable
// console.log(foo);

//================  separator ================//

// // Challenge 2
// let a = 1;

// function example(a) {
//   a = 10;
//   console.log(a); // Console log 1
// }

// we call the function 1st and it returns the value inside de scope
//example(a);

// we do console log after the function calling and print out the value  in the second line of the code
// console.log(a);  // Console log 2

//================  separator ================//

// Challenge 3

// we call the function, and because the  code ends right after the function, the print  out is the function itself
// sayHi();

// // here we define the function
// function sayHi() {
//   console.log("Hi there!");
// }

//================  separator ================//
// Challenge 4
// here we  declare a const, therefore we can't reassign a new value to it
// const a = { num: 42 };
// const b = a;

// // it will return an error ( "a" is a const  )
// b.num = 90;

// console.log(a);

//================  separator ================//
// Challenge 5
//here  we create a new function
// function magicHat(obj) {
//     obj.age = 10;
//     obj = { name: "Ada", age: 20 };
//     return obj;
//   }

//   // here we created a new object rabbit1
//   const rabbit1 = { name: "Bob", age: 30 };

//   // we  passed the object to the function
//   const rabbit2 = magicHat(rabbit1);

//   // the function with the original object
//   console.log("rabbit1: ", rabbit1);

//   // the function with the new  passed object
//   console.log("rabbit2: ", rabbit2);
