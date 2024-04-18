1. Challenge 1:
  - Answer: b
  - Explanation: the first call of function  is console logging
  foo, that is saved on a var variable, so has a global scope. As already there is a variable named foo on the global scope, it updates the value from "abc" to "xyz". 
  The first called is the function "foo" and than the global "foo",
  so xyz and xyz. 



2. Challenge 2:
  - Answer: a
  - Explanation: The same logic as the explanation of number 1.


3. Challenge 3:
  - Answer: c
  - Explanation: due to hoisting, the functions are pulled to the top of the file, so u can call it before declaring it.


4. Challenge 4:
  - Answer: c
  - Explanation: when creating a new const b , the code is pointing to the same reference of the object create in a. After that b.num 
  just updates the value of num. 


5. Bonus - Challenge 5:
  - Answer: c 
  - Explanation: when rabbit1 its called into the finction magicHat, 
  the value of age is pudated to 10. 
