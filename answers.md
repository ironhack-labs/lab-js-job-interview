1. Challenge 1:
  - Answer: b
  - Explanation: The variable was defined first in the global scope with "let foo". Inside the function the value of "foo" is modified and printed into the console. "e call the method bar() printing "xyz" and then when we console.log(foo) it will print "xyz" because the value of it was modified in the function.


2. Challenge 2:
  - Answer: c
  - Explanation: In here there is a clear example of how the scope is important. We initialize the variable "let a = 1", after that, we declare a function with a parameter(a), and inside the function it gives it the value of a = 10. Then we call the console when the function is called; We call the function and the parameter "a" inside the function is = 10, so it prints 10, but as "let a = 1" is a variable that we don't access and neither modified just printing it.


3. Challenge 3:
  - Answer: c
  - Explanation: It's not a best practice but you can actually call the function before initializing;


4. Challenge 4:
  - Answer: c
  - Explanation: We are initializing let a = {num: 42}; and then we initialize let b = a;, so if you change anything or add form the b variable, you will also change the a variable, so when you access b.num = 90, you change the num property in both objects


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: rabbit1 is called as the object it is, so not much to say in here. for rabbit2 you are creating a function where, any object that you pass as a parameter, will modified first it's age to 10, and after that it will become {name: Ada, age: 20}; So it doesn't matter which name or age has the object passed, it won't be relevant the properties and values of it.
