1. Challenge 1:
  - Answer: 
  b) "xyz" and "xyz"
  - Explanation: 
  After the function bar has been called and completed its execution, the last line of the code logs the value of foo to the console. Since foo was modified to "xyz" within bar and because foo is a global variable (accessible and modifiable from anywhere in the code), its value remains "xyz". Therefore, the second output will also be "xyz"


2. Challenge 2:
  - Answer:
  c) 10 and 1
  - Explanation:
  When example(a) is called, the function's local a is set to 10, and then 10 is printed inside the function (Console log 1). However, this change does not affect the global variable a, which remains 1. So, when console.log(a); is executed outside the function (Console log 2), it prints the global a value, which is 1.


3. Challenge 3:
  - Answer:
   "Hi there!"
  - Explanation:
   When sayHi() is called before the function declaration in the code, JavaScript already knows about the sayHi function because of hoisting. Therefore, the function call sayHi() successfully executes and logs "Hi there!" to the console.


4. Challenge 4:
  - Answer:
  c) { num: 90 }
  - Explanation:
   When b is assigned the same object as a, any modifications made through b are also reflected in a, since both a and b refer to the same object in memory.


5. Bonus - Challenge 5:
  - Answer:
  c)
  rabbit1: { name: "Bob", age: 10 }
  rabbit2: { name: "Ada", age: 20 }
  - Explanation:
  The function magicHat changes the age property of the object passed to it (affecting rabbit1), but then reassigns obj to a new object, which does not affect the original object referenced by rabbit1. The new object is returned and assigned to rabbit2.
