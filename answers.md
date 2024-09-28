1. Challenge 1:
  - Answer: xyz xyz 
  - Explanation: 
  let keyword declares foo in a global space. Therefore within the function when the variable is modified it picks up the value declated within the function. 


2. Challenge 2:
  - Answer: 10 and 1
  - Explanation:
Console log 1: Inside the function, the local variable a is modified and printed, so it logs 10.
Console log 2: Outside the function, the global variable a remains unchanged, so it logs 1.

3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation:
Function declarations are hoisted to the top of their scope in JavaScript, allowing you to call the function before it's defined in the code.
The function sayHi logs the message "Hi there!" to the console when it's called.

4. Challenge 4:
  - Answer:{ num: 90 }
  - Explanation:
In JavaScript, when you assign an object (like { num: 42 }) to a variable, the variable holds a reference to that object, not a copy of it.
When you assign b = a, both a and b reference the same object in memory.
Modifying the object through b also affects a because they both point to the same object.


5. Bonus - Challenge 5:
  - Answer:
rabbit1:  { name: "Bob", age: 10 }
rabbit2:  { name: "Ada", age: 20 }
  - Explanation:
  rabbit1's age was modified to 10 in the function, but since a new object was created and assigned to obj, rabbit1's name remained unchanged.
  rabbit2 is a completely new object created inside magicHat, with properties { name: "Ada", age: 20 }.
