1. Challenge 1:
Which of the following will be the output of the above code? Why?
 - Answer: b
 - Explanation: Because we reassigned the variable, using a mechanism in JS called "shadowing". The "foo" within the function updates to the new value which is "xyz"


2. Challenge 2:
  - Answer: c
  - Explanation: Because of how JavaScripts global and function scope works. The first "let a = 1" is part of a global scope which is why when we console.log it's value outside of the function we get the value of 1. While if we console.log within the function we get the value of 10 because we reassigned its value to 10.


3. Challenge 3:
  - Answer: c
  - Explanation: The reason is hoisting. In JavaScript this mechanism allows some variables and ES5 functions declarations to be called before the function is written 


4. Challenge 4:
  - Answer: c
  - Explanation: We reassigned the key num and added a different value so when we call "a" the value will not be the previous value but the updated one which is 90.


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: The key point here is that modifying the properties of the object passed to a function affects the original object, but reassigning the parameter within the function does not affect the original reference outside the function.
