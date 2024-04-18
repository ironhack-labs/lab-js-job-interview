1. Challenge 1:
  - Answer: b)
  - Explanation: foo is a let variable, it can change. The function which changes the foo is first called. it changes the value to xyz. Then you console log the variable again, which had the value changed by the function.


2. Challenge 2:
  - Answer: a)
  - Explanation: The same is happening here as before. the let is declared in the global scope. the function changes the value and consolelogs the new value. the last console.log also shos the 10 because the let fuction was changed inside the global scope.


3. Challenge 3:
  - Answer: c)
  - Explanation: javaScript has something called hoisting. this allows us to call the function anywhere, even before when the function is declared.


4. Challenge 4:
  - Answer: c)
  - Explanation: because b is poiting to the same object reference as a, if the value is changed using b, it will also be changes in a, because they are both poiting to the same reference.


5. Bonus - Challenge 5:
  - Answer: a)
  - Explanation: rabbit1 is not changed so the object will be the same. but rabbit2 changes completly. The function is assigning a ne object to the object that is given as argument. this would give the result in a)
