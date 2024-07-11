1. Challenge 1:
  - Answer: b
  - Explanation: The "let" variable is being shadowed by the reasigned value for "foo".


2. Challenge 2:
  - Answer: c
  - Explanation: example(a) is calling the function. Since the parameter is "a" the value that the function will reference is 1, and inside the function it will be reasigned to 10 and output 10, while the variable outside the scope remains unchanged.


3. Challenge 3:
  - Answer: c
  - Explanation: Despite having a call before declaring a function, it will still output without error thanks to hoisting. Which means that javascript will read the whole file and move declarations to the top before running the code.


4. Challenge 4:
  - Answer: a
  - Explanation: A const variable cannot be modified.


5. Bonus - Challenge 5:
  - Answer: 
  - Explanation: 
