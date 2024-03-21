1. Challenge 1:
  - Answer: b
  - Explanation:  foo is global variable and i have access to it inside the function and it will be changed in bar function and with a new value in console.log at the end it will be new value ("xyz") printed.


2. Challenge 2:
  - Answer: c
  - Explanation: a is a global variable and with shadowing is the parameter of function. Inside function it will be changed and will be printed  10. outside the fuction in console.log a still refers to the global variable a, which remains unchanged and will be prinred 1.


3. Challenge 3:
  - Answer: b
  - Explanation: the code doesn't invoke the sayHi().


4. Challenge 4:
  - Answer: c
  - Explanation: b is not a new object. it is a refrence to a. both a and b refrence to the same object.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: 
  obj.age = 10; => it would be change the property age of rabit1
  obj = { name: "Ada", age: 20 }; => it would be create a new local object and by return would be assign to rebit 2.
  so the output should be :
  
   { name: "Bob", age: 10 } 
    
  { name: "Ada", age: 20 }


