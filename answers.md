1. Challenge 1:
  - Answer: b
  - Explanation: function bar() will be executed first, which changes the 
  variable foo and then console logs "xyz". Then, the outer console log will 
  execute and also print "xyz".


2. Challenge 2:
  - Answer: c
  - Explanation: the function executes first, changes a and logs "10", however,
  this change remains within the function block. A way to change the variable 
  "a" outside would be for the function to return "a" and, outside, add an 
  instruction like: a = example(a). Since the change remains within the 
  example() block, the outer console log prints "1".


3. Challenge 3:
  - Answer: c
  - Explanation: Hoisting allows the function to be executed without errors 
  even before its declaration.


4. Challenge 4:
  - Answer: c
  - Explanation: Assigning an object into a new variable will only create an 
  assignment by reference. Therefore, changing one (b) will also change the other (a).


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: magicHat changes the object argument by value (age) and then 
  by reference (assigning a whole object), but since these changes remain 
  within the function scope, they don't change rabbit1. The final obj is 
  returned to rabbit2 and therefore rabbit1 = { name: "Bob", age: 30 } and 
  rabbit2 = { name: "Ada", age: 20 }.

  CORRECTION: despite the function block, the value assignment does change 
  rabbit1, and then the reference assignment changes obj altogether which is 
  then assigned to rabbit2, resulting in:
  rabbit1 = { name: "Bob", age: 10 } and rabbit2 = { name: "Ada", age: 20 }
  Correct answer c.