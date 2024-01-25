1. Challenge 1:
  - Answer: b
  - Explanation: bar() gets invoked first and updates previous defined variable foo to xyz (as this is a let variable). After that, console.log(foo) prints the updated let variable. 


2. Challenge 2:
  - Answer: c
  - Explanation: As we are in two different scopes - global and within the function. The function is invoked first and displays the local stored value of 10. This value stays within the function and has no effect on the global a. After this, the global a (=1) gets console.logged. 


3. Challenge 3:
  - Answer: c
  - Explanation: The invokation of the function is possible before declaring the function. Function is declared, so no error. 


4. Challenge 4:
  - Answer: c
  - Explanation: With the second line of code, we make a copy of a. As a has a non-primitive datatype (object), modifying b (b.num = 90) also modifies the variable a as we copied the reference, not the value. It is not an Error, as we can modify objects that are const. 


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: First thing that happens, is that magicHat(rabbit1) gets invoked that modifies the object property age of rabbit 1 to 10. This works, because of the reference of a non-primitive datatype. Next, it returns the object with two propertys { name: "Ada", age: 20 } as a reference to const rabbit 2.  
