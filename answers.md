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
  - Answer: c
  - Explanation: Since variable "a" contains a non-primitive data type (object), it is assigned to variable "b" by reference, not by value. This means that "b" and "a" point to the same object that occupies it's own space in memory. Thus, modifying the property "num" in either variable will make the object mutate and that will be reflected in both variables. 


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: When rabbit1 is passed as an argument to the magicHat function, since it contains a non-primitive data type (object) it is passed by reference, which means that the variable created by the parameter "obj" will get the object reference and point to the same object in memory as rabbit1. Then, when the property .age of this object is modified through the obj variable, the object mutates and this is reflected in rabbit1 as well (since it still points to that same object). Then, since contrary to rabbit1, obj is not a const variable, it can be reassigned a new value, and this is what happens when it is assigned a new object. This does not modify the object of rabbit1 because it represents a new object with a new refference in memory, so here the only thing that happens is that now obj points to the new object instead of pointing to the rabbit1 object (it gets a new refference). Finally, the function returns the new object inside the variable obj, which is assigned to rabbit2, and then the two objects get printed in the console (rabbit1 with the age property modified; and rabbit 2 with the new object).
