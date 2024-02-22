1. Challenge 1:
   // Challenge 1
   let foo = "abc";

function bar() {
foo = "xyz";
console.log(foo);
}

bar();

console.log(foo);

- Answer:
  The output will be xyz and xyz

- Explanation:
  foo's intial value is set to "abc".
  The function changes the value of foo to "xyz".

<!--  -->

2. Challenge 2:
   let a = 1;

function example(a) {
a = 10;
console.log(a); // Console log 1
}

example(a);

console.log(a); // Console log 2

- Answer:
  "10" & "1"

- Explanation:
  clg 1 is inside the function that gives a the value of 10. The function uses shadowing however, therefore:
  clg 2 is scoped differently. Though both variables are named a, the one inside the funtion and the one outside are not the same.

<!--  -->

3. Challenge 3:

// Challenge 3

sayHi();

function sayHi() {

}

- Answer:
  b) undefined

- Explanation:
  Our function doesn't return anything, therefore the output is undefined
  (While researching about this answer I came upon hoisting. To be candid, I did not think about that before answering with b.
  Nevertheless and furtunately, it is still b)

<!--  -->

4. Challenge 4:

const a = { num: 42 };
const b = a;

b.num = 90;

- Answer:
  c) { num: 90 }
- Explanation:
  Though I initially thought it would be an error, I quickly realized that we are talking about objects.
  a and b refer to the address of the same object and not its content.

<!--  -->

5. Bonus - Challenge 5:

   function magicHat(obj) {
   obj.age = 10;
   obj = { name: "Ada", age: 20 };
   return obj;
   }

const rabbit1 = { name: "Bob", age: 30 };

const rabbit2 = magicHat(rabbit1);

console.log("rabbit1: ", rabbit1);
console.log("rabbit2: ", rabbit2);

- Answer:
  a) { name: "Bob", age: 30 } and { name: "Ada", age: 20 }
- Explanation:
  First clg just logs the object
  Second clg puts the rabbit through the hat, gives its age the value of 10, then changes its name to Ada and age to 20, then returns.

  Okay I stand corrected. It is actually c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 } you sneaky bastards!
  I would not have been able to get this one right. Thanks for the lesson <3
