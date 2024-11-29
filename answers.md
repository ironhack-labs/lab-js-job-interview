1. Challenge 1:
  - Answer: b
  - Explanation: foo is in global scope and updated to xyz first inside the function call bar.


2. Challenge 2:
  - Answer: c
  - Explanation: the function parameter a is different than the  global variable a


3. Challenge 3:
  - Answer: c
  - Explanation: the function is called before defined, but since functions are fully hoisted, name and body, it is ok


4. Challenge 4:
  - Answer: c
  - Explanation: objects are passed by reference, so b is pointing to the same memory location as a


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: rabbit1 is the argument passed and modified the age inside the function to 10. The rabbit2 is the returned value from the function which is the new value set to the obj
