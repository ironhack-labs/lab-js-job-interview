1. Challenge 1:

- Answer: b) "xyz" and ""xyz"
- Explanation: because foo is reassigned to "xyz" within the function and the second "xyz" because the reassignment in the function bar affected the global foo variable.

// Challenge 1
let foo = "abc";

function bar() {
foo = "xyz";
console.log(foo);
}

bar();

console.log(foo);

2. Challenge 2:

- Answer: c) 10 and 1
- Explanation: because a is reassigned to 10 within the function's local scope and the second because the global variable a remains unchanged by the function call.
  let a = 1;

function example(a) {
a = 10;
console.log(a); // Console log 1
}

example(a);

console.log(a); // Console log 2

3. Challenge 3:

- Answer: c) "Hi there!"
- Explanation: Due to function hoisting in JavaScript, the function sayHi is available to be called even before its declaration

4. Challenge 4:

- Answer: c) { num: 90 }
- Explanation: When b is assigned the value of a, both variables point to the same object in memory.

5. Bonus - Challenge 5:

- Answer: c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
- Explanation: The magicHat function first modifies the age property of the original object passed in (rabbit1). Then it assigns a new object to obj and returns this new object. As a result, rabbit1 is updated to { name: "Bob", age: 10 }, and rabbit2 is { name: "Ada", age: 20 }.
