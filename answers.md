1. Challenge 1:
  - Answer: b
  - Explanation: because bar() function changes foo to "xyz",After calling bar(), foo remains "xyz", so the second console.log(foo) also outputs "xyz"


2. Challenge 2:
  - Answer:c
  - Explanation:Inside the function, a is a local variable, so changing it to 10 does not affect the global a, which remains 1.


3. Challenge 3:
  - Answer:c
  - Explanation: function sayHi() are hoisted to the top of their scope


4. Challenge 4:
  - Answer:c
  - Explanation:a and b reference the same object, changing b.num also changes a.num, resulting in { num: 90 }


5. Bonus - Challenge 5:
  - Answer:c
  - Explanation:rabbit1 is modified when obj.age is updated to 10, but rabbit2 is assigned a new object { name: "Ada", age: 20 } returned by the function.
