1. Challenge 1:
  - Answer: b
  - Explanation: the same variable 'foo' is reassigned inside the function, the first log happens inside the function, the second happens after. Because the variable is first declared outside the function, the same one can be accessed inside the function


2. Challenge 2:
  - Answer: c
  - Explanation: a is initialized as 1 globally, a is then passed as an argument to the function and inside the function assigned the value 10, this is logged first. Then the value for variable 'a' outside the function is logged. First the function argument's value is logged, then the value for the variable outside the function is logged.


3. Challenge 3:
  - Answer: c
  - Explanation: a function can be defined anywhere in the file as long as it is defined. Then the function is called and the string is logged


4. Challenge 4:
  - Answer: c 
  - Explanation: a and b both point to the same object


5. Bonus - Challenge 5:
  - Answer: c 
  - Explanation: the first object is passed through the function, where its age property is set to 10, then the 'obj' parameter is assigned a seperate object. The rabbit1 points to the object declared outside the function. rabbit2 points to the (seperate) object returned by the function
