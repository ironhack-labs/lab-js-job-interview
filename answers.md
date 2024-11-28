1. Challenge 1:
  - Answer: b 
  - Explanation: The output of the code will be "xyz" and "xyz" because foo was not declared locally inside bar function, so it modifies the function. After bar() is called, the value of foo remains "xyz", so the second console.log(foo)


2. Challenge 2:
  - Answer: c
  - Explanation: The output of the code will be "10 and 1" because the function exemple(a) introduces a local parameter a, shadowing the global a. A variable shadowing occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope


3. Challenge 3:
  - Answer: c
  - Explanation: The output of the code will be "Hi there" because the call to sayHi(); executes the function, logging "Hi there!" cause she use the function keyword that is hoisted


4. Challenge 4:
  - Answer: c
  - Explanation:The output of the code will be "{ num: 90 }" because  b.num = 90; modifies the shared object, so const a = { num: 42 }; creates a constant object a. The const keyword ensures the reference to the object cannot be changed, but the object's properties can be modified.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: The output of the code will be "{ name: "Bob", age: 10 } and { name: "Ada", age: 20 }" because the magicHat function modifies the age property of the original object. 
