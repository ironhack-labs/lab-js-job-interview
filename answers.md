1. Challenge 1:
  - Answer: b
  - Explanation: The variable 'foo' is initialised with a value of 'abc', however in the function bar(), it is reassigned a value of 'xyz'. As 'let' is not used within the function, the variable is reassigned in the global scope. As the final console.log() comes after bar() is called, it will use the new value of 'xyz'.


2. Challenge 2:
  - Answer: b
  - Explanation: The a in example(a) defines the parameter in the function.


3. Challenge 3:
  - Answer: c
  - Explanation: As function declarations are hoisted, sayHi() can be called before the function is declared.


4. Challenge 4:
  - Answer: c
  - Explanation: Variable B is a shallow copy.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: rabbit1 object was defined as const, meaning the entire object can not be defined again, but the value assigned to the 'age' key can be reassigned.
