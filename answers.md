1. Challenge 1:
  - Answer: xyz xyz

  - Explanation:

Initially, the variable foo is declared and assigned the value "abc".
The function bar() is invoked, which changes the value of foo to "xyz".
Inside the function bar(), it logs the value of foo, which is now "xyz".
After the function call, outside the function, console.log(foo) is called, which also logs "xyz" because the function bar() changed the value of foo globally.

2. Challenge 2:
  - Answer: 10 1
  - Explanation:

Initially, the variable a is declared and assigned the value 1.
The function example() is invoked with the argument a, which shadows the global variable a.
Inside the function example(), the parameter a is assigned the value 10.
It logs the value of a inside the function, which is 10.
After the function call, outside the function, console.log(a) is called, which logs the value of the global variable a, which remains 1.

3. Challenge 3:
  - Answer: Hi There
  - Explanation:

The function sayHi() is declared using function declaration syntax. In JavaScript, function declarations are hoisted, which means they are moved to the top of their containing scope during the compilation phase.
The function sayHi() is invoked before its declaration. However, due to hoisting, the function declaration is moved to the top of the code, making it accessible from any point within its containing scope.
When sayHi() is called, it logs "Hi there!".


4. Challenge 4:
  - Answer: 90
  - Explanation:
  
A constant variable a is declared and initialized with an object { num: 42 }.
Another variable b is assigned the reference to the same object that a is referencing. So, b points to the same memory location as a.
When b.num is updated to 90, it changes the value of num property within the object that both a and b are referencing.
Therefore, when console.log(a) is executed, it logs the modified object, which has { num: 90 }.

5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
