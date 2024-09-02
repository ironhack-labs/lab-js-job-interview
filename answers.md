1. Challenge 1:
  - Answer: b
  - Explanation: 
  the initialization of the bar() function assigns a new value to the variable foo (declared outside the current code block), and then prints by console that new value.

  The console.log executed after the function initialization refers to the same variable, with the same value.


2. Challenge 2: 
  - Answer:c
  - Explanation: the assignment of the value 10 to the variable a, will only affect the execution block of the function, once it is finished and the second console.log is executed, the value of a is the one assigned previously in the global scope, being 1.


3. Challenge 3:
  - Answer: c
  - Explanation: a function declaration is raised in the block context where it was defined, by using the reserved word function, it can be initialized before being declared.
in this case the console.log executes “Hi there!”


4. Challenge 4:
  - Answer: c
  - Explanation:a constant variable a is declared, which is equal to an object with property num with value 42, then another constant variable b is declared equal to: a.

both constants point to the same reference in memory, when the num property of b is changed, the value 90 is also printed by console, because that value has been modified in memory by reference.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
