1. Challenge 1:
  - Answer: b
  - Explanation: let is first declared in global scope and then reassigned a value in a function, what also changes its value in global scope.


2. Challenge 2:
  - Answer: c
  - Explanation: when the function is called with a = 1 as an argument it passes the argument to the function in which scope a is than updated to 10. Since the global variable was passed as and argument, its value is still 1 in the global scope. 


3. Challenge 3:
  - Answer: c
  - Explanation: Hosting will move the decleration of a function automatically to the top of the code. Thats why you can call a function even before its declared.


4. Challenge 4:
  - Answer: c
  - Explanation: since b is pointing to the same place in the memory as b so both values change.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: "obj.age = 10" modifies the original object whereas "{ name: "Ada", age: 20 }" creates a new object which is than modified what doesnt affect the original object.