1. Challenge 1:
  - Answer: b
  - Explanation: The output of the code will be "xyz" and "xyz" because after storing the value "abc" on a variable, a function was declared to update the value to "xyz" and printed, and then was called. This change will be visible outside the function when printed too. 


2. Challenge 2:
  - Answer: c
  - Explanation: Because the function changes the argument's value, it does not change the parameter's original value (1) stored in the initial variable, and changes to arguments are not visible outside the function.


3. Challenge 3:
  - Answer: c
  - Explanation: It is possible to call the function before the remaining code for the function declaration with the property hoisting, which gives the ability for the function to be invoked at the top of the code before it is declared, printing the value.


4. Challenge 4:
  - Answer: c
  - Explanation: There’s an object assigned to two constant variables, so if the value of the key object is changed, it changes on the two variables.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: The function returns a new object with the name “Ada” and age 20, that is stored on the “rabbit2” constant variable. The variable “rabbit1” stores another object with the name Bob and age 10, that was changed in the obj.age inside the function, and both will be printed in the two console logs.
