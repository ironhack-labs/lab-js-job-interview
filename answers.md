1. Challenge 1:
  - Answer: xyz and xyz
  - Explanation: The initial value of foo is being overwritten within the function. Since let is not static unlike const, it is possible to overwrite it.


2. Challenge 2:
  - Answer: 10 and 1 
  - Explanation: Inside the example function, the parameter a shadows the outer variable a, but the reassignment only affects the local parameter a. The outer variable a remains unchanged, so the final console.log(a) outside the function logs the original value, which is 1.


3. Challenge 3:
  - Answer: Hi there
  - Explanation: Though Javascript is a synchronised language, functions are a expection and can be called before declared. 


4. Challenge 4:
  - Answer: num: 90
  - Explanation: b is using a as reference so both are treated as being the very same. When there is an adjustment to b, it changes the root (a) alongside of it.


5. Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: The magic hat function is altering rabbit1's age from 30 to 10 and creates a new object which is being return as rabbit2 and has the object properties declared in the function.
