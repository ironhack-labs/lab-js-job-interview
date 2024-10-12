1. Challenge 1:
  - Answer: B
  - Explanation: Because we're not redeclaring the variable within the function, but we assign another value to the existing variable. 


2. Challenge 2:
  - Answer: C
  - Explanation: As we're passing a as an argument to the function, I'm guessing that we're essentially passing its value to the function and we're modifying the function parameter and not the actual variable.


3. Challenge 3:
  - Answer: C
  - Explanation: Function declarations are hoisted, so you can call them before they're actually declared in the code.


4. Challenge 4:
  - Answer: C
  - Explanation: a and b share the same reference in memory so they're essentially the same object.


5. Bonus - Challenge 5:
  - Answer: C
  - Explanation: By passing rabbit1 to the function what we pass is the reference in memory where rabbit1 is stored. This is why we get access to what's stored in memory for rabbit1 and can modify that, but we don't get access to the variable rabbit1 to modify its reference and assign it a new object. obj is an address in memory, not the rabbit1 object itself.
