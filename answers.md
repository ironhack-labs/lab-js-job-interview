1. Challenge 1:
  - Answer: b
  - Explanation: The variable foo is created with the value abc, but it's reassigned inside the function as 'xyz'. When we are calling the bar() function it's printed with the reassigned value and the next console log will print the value 'xyz' already reassigned.


2. Challenge 2:
  - Answer: c
  - Explanation: Same as above for the function call. Then the console log will not consider the result of the function because we are reassigning the variable inside the scope of the function.


3. Challenge 3:
  - Answer: c
  - Explanation: Functions declaration are executed before code execution, so we can call them befoe it's creation in javascript.


4. Challenge 4:
  - Answer: c
  - Explanation: As we assigned the value of b to a directly, it's pointing to the same object. So if we modify the value for b, a will be changed as well.


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: rabbit 1 is just getting the value assigned to it, But the rabbit 2 it's returning the result of the function that is receiving rabbit 1 as an argument. Inside the scope of the function the value will be reassigned, at first for the age of 10 and then the whole object is changed.
