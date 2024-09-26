1. Challenge 1:
  - Answer: b: xyz and xyz
  - Explanation: because foo was declared outside the function but then reassigned in the function. It was console logged twice so is returned twice.


2. Challenge 2:
  - Answer: C: 10 and 1
  - Explanation:because a was passed as an argument into the function example and converted within the function. But if it is logged without calling the function then it is still 1.


3. Challenge 3:
  - Answer: C: Hi there!
  - Explanation: Because the function does not require a parameter, so you don't need to pass it an argument for it to run.


4. Challenge 4:
  - Answer: b: num: 90
  - Explanation: b is referencing a so it is actually a.num=90 which is a normal way to update a value in an object. Since b is pointing to the same "address" as a then this works


5. Bonus - Challenge 5:
  - Answer: C Bob age 10 and Ada age 30
  - Explanation: When the variable for rabbit 2 is decalred and rabbit 1 is used as an argument by the function, then rabbit1.age is updated. The original is mutated and so this is what is returned when we console log rabbit1. The second part of the function returns a "new object" which is ada age 20
