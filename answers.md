1. Challenge 1:
  - Answer: b => "xyz" and "xyz"
  - Explanation: Shadowing


2. Challenge 2:
  - Answer: c => 10 and 1
  - Explanation: because a is passed as argument to function example(a)


3. Challenge 3:
  - Answer: c => "Hi there!"
  - Explanation: Hoisting


4. Challenge 4:
  - Answer: c=> { num: 90 }
  - Explanation: Non-primitives - passed (copied) by reference


5. Bonus - Challenge 5:
  - Answer: c => { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: the argument in magicHat(obj) is a reference address to obj , and obj.age (here  itis rabbit1) can be changed but obj in the 
  second line is reassigned to a new object and it is localy
