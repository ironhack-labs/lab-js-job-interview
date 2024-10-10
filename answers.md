1. Challenge 1:
  - Answer: b
  - Explanation: The console log would show "xyz" and "xyz". The first thing it would print is bar(), which assigns to the variable foo = "xyz" and then prints it in the console. Then we call the variable foo after assigning "xyz" in the function, so it prints "xyz" again.


2. Challenge 2:
  - Answer: c
  - Explanation: The function example get as an argument a variable with the value 1. Inside the function, we assign 10 to that argument, so we print that value in the console. This assignment is made to the variable used as the argument, but not to the original variable, so the second console log prints the original value, which is 1


3. Challenge 3:
  - Answer: c
  - Explanation: Due to hoisting, JavaScript already "knows" that the function exists, which is why it can be invoked before declaring it, and it still works


4. Challenge 4:
  - Answer: b
  - Explanation: In JavaScript, a const variable cannot be modified; however, if what is declared in the variable is an object or an array, we can modify the content of that object or array.


5. Bonus - Challenge 5:
  - Answer: c 
  - Explanation: I've checked this with a code editor, my first answer was a.
  Honestly, I don't know how to  explain it very well. On one hand, magicHat modifies the age of the referenced object, in this case, rabbit1, but it doesn't modify the rest of its content. The second console log does modify the entire object by passing it directly to the function. But i'm not entirely sure why.