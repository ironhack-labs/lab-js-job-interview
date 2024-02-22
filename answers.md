1. Challenge 1:
  - Answer: b
  - Explanation: because we are calling the function that's giving a new value to foo before console.log it.


2. Challenge 2:
  - Answer: c
  - Explanation: because a is the parameter of our function and we're calling it first so 10, then we
  console.log the variable who's still 1.


3. Challenge 3:
  - Answer: c
  - Explanation: because of hoisting, as the function is written, JS is still able to read it then the result can be passed when calling the function.


4. Challenge 4:
  - Answer: a
  - Explanation: because const can't be reassigned. (ok after seeing the correct answer I guess that, as we're targeting the object value of a, it's ok)


5. Bonus - Challenge 5:
  - Answer: b
  - Explanation: because the first console.log is calling the object, the second console.log is calling the function who first sets the object's age to 10.
