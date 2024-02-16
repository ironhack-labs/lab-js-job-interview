1. Challenge 1:
  - Answer: b
  - Explanation: foo is initialized with let as "abc" and exists in the global scope. function bar() re-initializes foo to "xyz" and then prints it in the console when called. Then it's printed again as "xyz" outside the function scope. Since it was re-initialized it keeps the same value. This is posible because of the behavior of let and the fact that it exists in the global scope.


2. Challenge 2:
  - Answer: c
  - Explanation: The console.log inside the function prints 10 because it's parameter "a" is set to ten which is a number, and numbers being primitive type it creates a new copy of the "a" variable that exists in the global scope when set as a parameter. The console.log in the global scope prints 1 because it has it's own reference in memory and looses it's "association" with the "a" parameter which has it's own reference in memory when it was passed as a argument to the example function. 


3. Challenge 3:
  - Answer: c
  - Explanation: When we use a function declaration it is hoisted to the top when code execution starts; this allows for functions to be called before they are declared in the code. If we use a function expression or arrow function and call that function before it's declared it will not print and throw a reference error since it will not be hoisted to the top whe code execution begins. 

4. Challenge 4:
  - Answer: c
  - Explanation: Objects are reference types, this means that even if we declare and initialize another varibale with the same value as the previous varibale holding a reference type (in this case an object) and add a property to it, the original varible holding the object will reflect the changes done to it's copy. All in all, if you declare another variable and assign it the value of the first variable that holds an object, both variables will point to the same object in memory.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: Changes to an object's properties through a function parameter reflect on the original object due to the reference nature of objects in JavaScript. However, reassigning the function parameter to a new object creates a separate instance, leaving the original object unaffected by further modifications within the function. This behavior explains why modifications to obj inside the function affect rabbit1 initially but do not impact it after obj is reassigned to a new object, which is then returned and assigned to rabbit2."