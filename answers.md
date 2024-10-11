1. Challenge 1:
  - Answer: b
  - Explanation: When the function is called, the variable foo is updated and then printed in the console. Since it was not re-declared inside the function (shadowing), the variable is a reference to the one declared outside the function, not a new one with block scope, so it's the outer one that gets updated. Then, in the global scope, after de function call the console.log prints the updated variable again.


2. Challenge 2:
  - Answer: c
  - Explanation: since the argument passed to the function is a variable that contains a primitive data type (number), the variable is passed by value, not by refference, so the original variable is not mutated. "a" inside the function is a new variable that represents the function parameter, so it could be any name, it just happens to have the same name as the outer variable (shadowing). When the value of "a" is passed to the function as an argument in the function call, the inner variable "a" gets initialised with this value and then updated to value 10, but the outer variable stays the same. Then the function prints the value of the inner variable "a" (10) and afterwards the console.log after the function call prints the value of the outer variable "a" (1).


3. Challenge 3:
  - Answer: c
  - Explanation: Due to hoisting, the function can be executed by a function call even before its declaration, because all variables and function declarations are moved to the top of their scope before executing the code.


4. Challenge 4:
  - Answer:
  - Explanation:


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
