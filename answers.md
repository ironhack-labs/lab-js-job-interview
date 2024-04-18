1. Challenge 1:
  - Answer: b
  - Explanation: the answer is xyz xyz because the foo variable was declared and initialized with "let" outside of the function. It was then reassigned inside of the function bar(). Since it is a primitive data type values were changed and not references, meaning that foo now has a value of xyz even outside of the function as seen in the console log.


2. Challenge 2:
  - Answer: C
  - Explanation: Let "a" and "a" within example() are different variables. Inside example() it is referencing the parameter "a" vs the global variable let "a", therefore let a's value never changes.


3. Challenge 3:
  - Answer: C
  - Explanation: Hoisting


4. Challenge 4:
  - Answer: C
  - Explanation: Non-primitive data types are relative references and generate a shallow copy. Reassignment adjusts the value of the upstream element.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
