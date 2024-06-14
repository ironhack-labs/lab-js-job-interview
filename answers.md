1. Challenge 1:
  - Answer: b
  - Explanation:  The global variable foo is reassigned within the function bar, so both the call inside the function and the call outside the function output the new value "xyz".

2. Challenge 2:
  - Answer: c
  - Explanation: Explanation: The function example receives the global variable a as an argument, but it only modifies the local copy of a within its scope. The global variable a remains unchanged and retains its initial value "1".


3. Challenge 3:
  - Answer: c
  - Explanation:  in JavaScript, function declarations are hoisted to the top of their scope, making the function sayHi available even before its declaration line. Therefore, the function call sayHi() successfully prints "Hi there!"


4. Challenge 4:
  - Answer: c
  - Explanation:  Both a and b reference the same object. When the property num is changed through b, it also affects the object referenced by a. Thus, logging a will show the modified object.


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: The magicHat function modifies the age property of the object referenced by rabbit1 but then reassigns obj to a new object. Therefore, rabbit1's age becomes 10, and rabbit2 is the new object, name: "Ada", age: 20 
