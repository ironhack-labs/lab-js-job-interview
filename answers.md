1. Challenge 1:
  - Answer: xyz, xyz
  - Explanation: When the function ran, it updated the value of foo outside of it too


2. Challenge 2:
  - Answer: 10, 1
  - Explanation: Since 1 was used as an argument, it needs to remain 1 outside of the function


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation: functions are brought to the top of the code, so actually the function is defined before it is called


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: when non primitive data is copied, it copies a reference, therefore whatever happens to the copy happens to the original


5. Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: the first line in the function sets the age of rabit 1, then inside the function it redefines the obj and returns it as rabbit2
