1. Challenge 1:
  - Answer: "xyz" & "xyz"
  - Explanation:In this code, we first declare a variable foo and assign it the value "abc". Then, we define a function called bar, which reassigns the value of foo to "xyz" and logs this new value to the console. When we invoke the bar function, it reassigns the existing foo variable to the new value "xyz". Subsequently, the final console.log statement also shows the value "xyz", as the function call updated the value of foo.


2. Challenge 2:
  - Answer: 10 & 1
  - Explanation: In this scenario, the variable a is being passed into the example function as a parameter with a value of 1. Inside the function, the parameter a is reassigned to 10, and this new value is logged to the console, resulting in the output of 10 within the function. However, outside of the function, the original variable a maintains its initial value of 1, which is confirmed by the subsequent console log.


3. Challenge 3:
  - Answer: "Hi there"
  - Explanation: since we are dealing with function declaration it's scope available through entire document and that's why we can call this function above it's declaration 


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: here we are simply referencing to the same object memory variable and when we are changing the second object it automatically changed in first 


5. Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: here we have a function which copying the original object and store new values in second one instead of changing it 
