1. Challenge 1:
  - Answer: "xyz" and "xyz"
  - Explanation: 
  Initially, the variable foo is assigned the value "abc".
When the bar function is called, it reassigns the value of foo to "xyz".
Inside the bar function, console.log(foo) prints the current value of foo, which is "xyz".
After calling the bar function, outside of the function, console.log(foo) again prints the value of foo, which remains "xyz" because the change made by the bar function affects the global scope.


2. Challenge 2:
  - Answer: 1 and 10.
  - Explanation: 
  After calling the example function, outside of the function, console.log(a) prints the value of the global variable a, which remains 1 because the change made inside the function does not affect the global scope.


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation: 
  Even though the function sayHi() is invoked before its declaration in the code, JavaScript allows the usage of function declarations before they are actually declared.
When sayHi() is called, it prints "Hi there!" to the console because the function declaration is hoisted to the top of the scope.
Therefore, there won't be any errors, and the output will be "Hi there!".


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: 
  Initially, a is an object with the property num set to 42.
Then, b is assigned to the same object that a is referencing. Therefore, both a and b reference the same object in memory.
When b.num is set to 90, it modifies the object that a is also referencing.
Therefore, when console.log(a) is called, it prints the modified object, which has { num: 90 }.


5. Bonus - Challenge 5:

  - Answer: 
rabbit1: { name: "Bob", age: 10 }
rabbit2: { name: "Ada", age: 20 }

  - Explanation:
  Initially, rabbit1 is an object with the properties name: "Bob" and age: 30.
When magicHat(rabbit1) is called, it first modifies the age property of rabbit1 to 10.
Then, it reassigns obj to a new object with the properties name: "Ada" and age: 20, but this change does not affect rabbit1 because obj is a local variable within the magicHat function.
So, rabbit1 remains unchanged with { name: "Bob", age: 10 }.
rabbit2, on the other hand, is assigned the returned value of magicHat(rabbit1), which is the new object { name: "Ada", age: 20 }.
