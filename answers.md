1. Challenge 1:
  Answer: b) "xyz" and "xyz"
Explanation: The function bar is changing the value of the variable foo to "xyz", and then it logs this updated value. When the second console.log(foo) is called outside the function, it still reflects the updated value of foo.

2. Challenge 2:
  Answer: b) 1 and 10
Explanation: The variable a inside the function example is a local variable and not the same as the global variable a. The function logs the local a, which is 10, but when the global a is logged outside the function, it remains 1.


3. Challenge 3:
  Answer: c) "Hi there!"
Explanation: The function sayHi is hoisted to the top, so it's available before the call. The code will log "Hi there!" when executed.

4. Challenge 4:
  -Answer: c) { num: 90 }
Explanation: a and b both reference the same object. Modifying the object through b also affects a. The output will be { num: 90 }.

5. Bonus - Challenge 5:
  - Answer:
  - Explanation: