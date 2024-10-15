1. Challenge 1:
  - Answer: B
  - Explanation: The function bar has no parameter (and no argument when called), so when the variable foo is inizialized, it is looked for outside the function and its value is updated (global scope). So both the first console.log and the second one return "xyz".


2. Challenge 2:
  - Answer: C 
  - Explanation: The function is a parameter "a", which is a random name for whatever value: it means it can be assigned a value that is completely different from the one of the "a" outside. It is like we declared again a new variable called "a" inside the function, with local scope. The first console.log will return 10, once outside the function, the other parameter "a" will still be 1, so the console.log will return 1.


3. Challenge 3:
  - Answer: C
  - Explanation: The function is called before being declared. We can declare a function but run it only whenever we want it. As long as the function is declared, we can run it. JS will read the entire code and already knows that the function we calls is declared later. The console.log returns "Hi there!".


4. Challenge 4:
  - Answer: A
  - Explanation: By b=a, we are not copying the object, but assigning by reference (updating it), which is not possible, as "a" is const.


5. Bonus - Challenge 5:
  - Answer: A
  - Explanation: We have a const object (rabbit1, whose name is Bob and age 30). We then assign it to the function magicHat, who takes an argument obj. Inside the function we are basically saying let obj = rabbit1 (local scope).The returned rabbit1 inside the function would be Ada and 20. But magicHat(rabbit1) is never called, so the first console.log is Bob 30. The second one would be the result of the function, as magicHat(rabbit1) is assigned to rabbit2. 

  The answer is wrong. I think I have understood what happened. When magicHat(rabbit1) is assigned to rabbit2 we are like updating 2 objects with the same reference, at least on a first level. So all primitive data is changed also on rabbit1 side, while the second assignement (obj = {name...} is not applied to rabbit1.). I just don't understand the chronological line of it. I thought that const rabbit2 = magicHat(rabbit1); would run first magicHat(rabbit1) (whose result is { name: "Ada", age: 20 }).