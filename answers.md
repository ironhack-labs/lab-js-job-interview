1. Challenge 1:

let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();

console.log(foo);

  - Answer: b
  - Explanation: The output of the code will be "xyz" and "xyz" because the console.log method under the bar function will search whether there is foo variable in the function scope. No. Then it will search in the parent scope. When it finds the foo variable in the global scope, it will store the data "xyz" there. In other words, it reassigns the variable.  Then, writes down "xyz".
  After that, when the second console.log method checks the foo variable in the global scope, again it will write the "xyz" one more time.
  
  


2. Challenge 2:

let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);


console.log(a);  // Console log 2


  - Answer:c
  - Explanation:The output of the code will be 10 and 1 because console log 1 writes down the value of "a" in the function scope. Console log 2 writes down  the value of "a" in the global scope.


3. Challenge 3:

sayHi();

function sayHi() {
  console.log("Hi there!");
}  


  - Answer:c
  - Explanation: The output of the code will be "Hi there!" because " sayHi(); " invokes the sayHi() function and the console.log writes down "Hi there!".


4. Challenge 4:

const a = { num: 42 };
const b = a; 

b.num = 90;

console.log(a); 


  - Answer:c
  - Explanation:The output of the code will be { num: 90 } because when we say "const b = a; " then b coppies the reference of the object a . Not the exact value inside of the object. Because we can reach the objects via reference not via the real value.  So, when we change the property of b, actually we change the property of object a too. Because they both have the same reference in the  memory.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
