1. Challenge 1:
  - Answer: b
  - Explanation:  
  After calling bar(), console.log(foo) outside the function, which remains "xyz" because the change made inside the bar() function affects the global scope.


2. Challenge 2:
  - Answer: c
  - Explanation:
  Inside the example() function, the value of the parameter 'a' is changed to 10.
  



3. Challenge 3:
  - Answer: c
  - Explanation: because the sayHi() is called, it logs "Hi there!" to the console.



4. Challenge 4:
  - Answer: c
  - Explanation: when console.log(a) is executed, it logs the object { num: 90 }, which reflects the changes made through b


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: rabbit1 still refers to the modified object { name: "Bob", age: 10 }, and rabbit2 refers to the object { name: "Ada", age: 20 } returned from the function.
