1. Challenge 1:
  - Answer: b
  - Explanation: The bar function is not initializing a new variable foo it is changing the original foo value from "abc" to "xyz. There the result of the bar() function is "xyz" as well as console.log(foo) after the function was run. 


2. Challenge 2:
  - Answer: c
  - Explanation: The example function passes "a" as an argument. As "a" within example() is set to "a" example(a) returns 10. However, outside the function and, therefore, outside the scope "a" is still equal to 1. 


3. Challenge 3:
  - Answer: c
  - Explanation: Due to hoisting the function can still run.


4. Challenge 4:
  - Answer: c
  - Explanation: b = a sests the references points for both a and b to be the same. Therefore, if b or a is updated the other variable with also reflect the changes.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: obj.age can be reset to 10, but as soon as the entire obj is reset to { name: "Ada", age: 20 } the reference is broken.
