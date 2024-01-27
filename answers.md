1. Challenge 1:
  - Answer:  b
  - Explanation:  By calling the function first we change the value of foo to the string inside the function. Doing the console log after the function being called will return the same string


2. Challenge 2:
  - Answer: c
  - Explanation: In this case as "a" is given as an argument the first console log will be 10, as it's the value given to the argument inside the function. the second console log will return the value of the variable let a initially declared as 1.


3. Challenge 3:
  - Answer: c
  - Explanation:  In JavaScript functions are moved to the top of scope, so even if the function is called before it is written JS will be able to execute it.


4. Challenge 4:
  - Answer: c
  - Explanation: As we declare that a and b are the same object, changing the value of 'num' on b also changes the value on a.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: By calling the function on const rabbit 2 it changes the value of the objects age to 10, so the first console log will return the name Bob but with age 10. For rabbit 2 as the obj is valued with an object after the obj.name is defined it will return the value of the object declared inside the function
