1. Challenge 1:
  - Answer: b
  - Explanation: When the code executes, the function bar is called, changing the global variable foo from "abc" to "xyz" and logging "xyz". After the function call, the global variable foo retains the value "xyz". Therefore, the console logs "xyz" twice: once from within the function and once after the function call. 


2. Challenge 2:
  - Answer: c
  - Explanation: When the function is called with the global variable a, it logs 10 because the local parameter a is set to 10 within the function. This change does not affect the global variable a. After the function call, the global variable a retains its original value of 1. Therefore, the console output is 10 followed by 1


3. Challenge 3:
  - Answer: c
  - Explanation: Due to function hoisting in JavaScript, the sayHi function is available throughout its scope even before its declaration. When sayHi() is called, it executes successfully and logs "Hi there!" to the console.


4. Challenge 4:
  - Answer: c
  - Explanation: The console will log { num: 90 }. This happens because a and b both reference the same object in memory. When b.num is set to 90, it changes the num property of the object that both a and b refer to. Thus, logging a shows the updated object with num set to 90.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: The magicHat function initially modifies the age property of the obj parameter, which refers to rabbit1, changing it from 30 to 10. Inside magicHat, obj is reassigned to a new object { name: "Ada", age: 20 }, which is diffrent from rabbit1. When magicHat returns, the newly created object { name: "Ada", age: 20 } is assigned to rabbit2. Upon logging, rabbit1 retains its original name of "Bob" but reflects the modified age of 10, while rabbit2 displays the newly constructed object with name: "Ada" and age: 20.






