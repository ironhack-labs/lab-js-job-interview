1. Challenge 1:
  - Answer: b
  - Explanation: foo is reassigned to "xyz" inside bar(), affecting the global scope, so both logs output "xyz".


2. Challenge 2:
  - Answer: c
  - Explanation: The function modifies the local a to 10, but the global a remains 1.


3. Challenge 3:
  - Answer: c
  - Explanation: Function hoisting allows sayHi() to be called before its declaration, logging "Hi there!".


4. Challenge 4:
  - Answer: c
  - Explanation: b references the same object as a, so modifying b.num changes a as well.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: rabbit1 is modified to { name: "Bob", age: 10 }, while rabbit2 gets the new object { name: "Ada", age: 20 }.
