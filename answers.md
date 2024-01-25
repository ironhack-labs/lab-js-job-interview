1. Challenge 1:
  - Answer: b) "xyz" and "xyz" 
  - Explanation: foo is declared at the beginning of the code, so its scope is total. In the function, we change the value of foo which is declared at the beginning.


2. Challenge 2:
  - Answer: c) 10 and 1
  - Explanation: Because a is passed as an argument, and once arrived in the function, a is specific to the scope of the function and not to the global scope of the code.


3. Challenge 3:
  - Answer: c) "Hi there!"
  - Explanation: Function are declared before anything.


4. Challenge 4:
  - Answer: c) { num: 90 }
  - Explanation: a is an object, so b=a is a reference copy, not a value copy. So changing b will change a also.


5. Bonus - Challenge 5:
  - Answer: c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: Because obj.age modifies the object which is linked to the rabbit. And after, obj = redeclares a value for obj and therefore deletes the old one
