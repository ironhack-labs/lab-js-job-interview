1. Challenge 1:
  - Answer: a
  - Explanation: we opperate the bar-function afterword and it took the local function scope foo


2. Challenge 2:
  - Answer:c
  - Explanation:the first calling to the function example-a and and it'll proccess the second calling to console refer to let-a.


3. Challenge 3:
  - Answer:c
  - Explanation: it's calling to the function befor the function itself so js will opperate it.


4. Challenge 4:
  - Answer:c
  - Explanation:the object change the key value, so far its defeinded as a=b with const, so the last defenition would tack place


5. Bonus - Challenge 5:
  - Answer:{ name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: Objects are passed by reference in JavaScript. Changes to properties of the object within the function will affect the original object.
Reassigning the object inside the function (obj = {...}) breaks the reference, and the original object is no longer affected by any subsequent changes.
