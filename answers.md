1. Challenge 1:
  - Answer: b
  - Explanation: The answer will be xyz and xyz because we can change the value of global scope variable so, global variable "foo" changed inside the "bar()" function.


2. Challenge 2:
  - Answer: c
  - Explanation: The answer will be "10" and "1" because we log the value inside the function first but we don't modify global scope variable, which is declared as "let a = 1".


3. Challenge 3:
  - Answer: c
  - Explanation: The answer is "Hi there!" because functions can be called before their declarations.


4. Challenge 4:
  - Answer: c
  - Explanation: The answer is "{ num: 90}" because variable "b" assigned the same object reference as variable "a" and now "a" and "b" both refer same object in the memory. 


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: Because when "rabbit2" is assigned the returned value from the magicHat function, it receives a reference to the object modified inside the function. This means that both "rabbit1" and "rabbit2" reference the same object in memory. For this reason, the age of "rabbit1" is modified to "10" due to the changes made inside the "magicHat" function by "obj.age = 10;"
