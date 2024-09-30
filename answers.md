1. Challenge 1:
  - Answer: b

  - Explanation: Inside the bar function, the global variable foo is reassigned to "xyz".
The first console.log(foo) inside bar() prints "xyz" because foo has been updated.
After the function call, the global variable foo still holds the value "xyz", so the second console.log(foo) also prints "xyz".


2. Challenge 2:

  - Answer:c

  - Explanation:The example function takes a parameter a and reassigns it to 10. This change only affects the local a inside the function.
The first console.log(a) inside the function prints 10.
However, the global a remains unchanged, so the second console.log(a) prints the global value, which is still 1.


3. Challenge 3:
  - Answer: c

  - Explanation:In JavaScript, function declarations are "hoisted" to the top of their scope, meaning the function sayHi is available even before it is defined in the code.
Thus, the function call sayHi() works and prints "Hi there!".


4. Challenge 4:
  - Answer:c

  - Explanation:Both a and b refer to the same object in memory. When you modify b.num, you're also modifying the object that a references.
Therefore, when console.log(a) is executed, it shows { num: 90 }, since the object was updated.


5. Bonus - Challenge 5:
  - Answer: c

  - Explanation:When rabbit1 is passed to the magicHat function, its age is updated to 10.
However, the line obj = { name: "Ada", age: 20 }; creates a new object, which does not affect the original rabbit1.
Therefore, rabbit1 remains { name: "Bob", age: 10 }, and rabbit2 is assigned the new object { name: "Ada", age: 20 }.
