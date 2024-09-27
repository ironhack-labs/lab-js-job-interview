1. Challenge 1:
  - Answer: B
  - Explanation: Because when we call bar() function, we are assign it to foo the value xyz and is not abc anymore. for print both values we must log first foo and later call to the function bar()


2. Challenge 2:
  - Answer: C
  - Explanation: This is different for the previous one, because here, we have a as a parameter so it will not change the global a 


3. Challenge 3:
  - Answer: C
  - Explanation: Thanks to scope in js, functions can be called before declare them


4. Challenge 4:
  - Answer: C
  - Explanation: Because mutability. It is better apply changes in a copy in case we want to conserve the original 


5. Bonus - Challenge 5:
  - Answer: A
  - Explanation: First print is just the const declare in line 7. Second print is rabbi2, that is the result for calling to the function magicHat, that returns the obj declared inside the function, the first line assigns a new age value, but this value will be overwrite with the declaration of obj so the input is egal, it will always return obj = { name: "Ada", age: 20 };
