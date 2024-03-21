1. Challenge 1:
  - Answer: b

  - Explanation: 
  . variable foo has the value "abc"
  . on line 9 the function bar is invoked nad variable foo now has a new value "xyz" since is defined with lef and not const. the it is printed to the log
  . on line 12 the foo is being printed the 2nd time


2. Challenge 2:
  - Answer: c

  - Explanation:
  . here we have an example of shadowing, 
  . the function example is invoked but with the  variable a passed as an argument
  . the function ttakes that argument and stores it in another var a (parameter) and sets the value to 10 and console logs it - 10.
  . the last console log prints the global a - 1


3. Challenge 3:
  - Answer: c

  - Explanation:
  . when the function is invoked is being called, regdless if it was declared before or after being called - hoisting :D (weird word btw)


4. Challenge 4:
  - Answer: c

  - Explanation:
  . the number 90 is assigned to the key num of the const a. since the object is a constant and can't be assigned another object but the elemnts inside the object are mutable.


5. Bonus - Challenge 5:
  - Answer: c

  - Explanation: 

  . simple rabbit1 is defined and the first result is going to be rabbit1 but with the modified age since obj.age changes the initial value, and the first output is going to be { name: "Bob", age: 10 } since can't have the object reassigned, because of const, and the re-assigning of another object actually creates a new REFFERENCE !!! 
  . the second rabbit is going to be { name: "Ada", age: 20 }, the last object assignment since magichat also RETURNS the object and rabbit2 takes that return as the 1st asignement :D


or : The Object Itself: This is the actual data structure in memory that has properties like name and age. When you pass an object into a function in JavaScript, you're passing a reference to it, not a copy. This means changes to its properties inside the function affect the original object.

Reference to the Object: When you pass the object to the function with magicHat(rabbit1), obj inside magicHat becomes another reference to the same object that rabbit1 references. However, when you do obj = { name: "Ada", age: 20 };, you're changing obj to reference a new object. This doesn't change the original object but just moves the internal pointer obj had from the original object to a new one.