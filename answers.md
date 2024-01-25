1. Challenge 1:
  - Answer: B
  - Explanation: First of all, using "let" to declare the variable allows it to be modified. After that, the bar function changes reassigns the value of "foo" variable thanks to the hoisting principle of JavaScript; because there is no new declaration inside the function. The function is execute, printing its new value, and then there is a second console.log that prints the new value again.


2. Challenge 2:
  - Answer: C
  - Explanation: A new variable is being declared inside the function, shadowing the variable with the same name in the outer context. The principle of shadowing allows variables with different values but same name to be possible. The console.log inside the function gets executed first.


3. Challenge 3:
  - Answer: C
  - Explanation: Because of the hoisting principle of JavaScript, functions can be executed even if they are declared further down in the code. That is the case we observe here.


4. Challenge 4:
  - Answer: C
  - Explanation: Const variables can´t be modified. But that is actually not what is happening. We are changing the object's property. The console.log prints the value of "a". Since "a" and "b" reference the same object, this change will be reflected in both objects.


5. Bonus - Challenge 5:
  - Answer: D
  - Explanation: I don´t fully understand the logic of this code. So, I´m assuming there is an error. But I can´t point the mistake out.
