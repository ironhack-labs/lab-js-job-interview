1. Challenge 1:
  - b
  - Explanation: the variable was initialised with let in the outer scope, reassigned in the inner scope and accessed in outer scope. Because it was reassigned, it kept the value of the inner scope.


2. Challenge 2:
  - Answer: c
  - Explanation: variable initalised with let in the outer scope, reassigned in the inner scope and accessed in the outer scope. The parameter and variable having the same name, which can lead to confusion. The variable in the outer scope is accessed and it has the value of the inner scope.


3. Challenge 3:
  - Answer: c
  - Explanation: Functions declared with "function" key word are hoisted that's why we can call it before it is declared


4. Challenge 4:
  - Answer: c
  - Explanation: Object points to the same memory location even if there's a change in the value of the object.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: The object is passed by reference and it gets updated in the function. In the outer scope first we console log the object and then the call the function that modified the object.
