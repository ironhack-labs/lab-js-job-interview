1. Challenge 1:
  - Answer: b
  - Explanation: because "foo" was assigned "abc", but then the function "bar" assigned it "xyz" and called the console.log. Outside of the function scope, the function was called, updating the "foo" variable to "xyz", and again the console.log would show the new value.


2. Challenge 2:
  - Answer:c
  - Explanation: The value of the first "a" is "1", and then there is a function that passes as an argument "a" again. However, it's an argument, not the variable, so when assgning the value ten to the argument "a", it doesn't affect the value of the variable "a". 


3. Challenge 3:
  - Answer:c
  - Explanation: the function is hoisted


4. Challenge 4:
  - Answer:c
  - Explanation: Copying objects/array like the exemple and then changing their values mutates the original object/array


5. Bonus - Challenge 5:
  - Answer:c
  - Explanation: magic hat changes the property age of rabbit1 to 10, and returns the obj, that gets assigned to the variable rabbit2 