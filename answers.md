1. Challenge 1:

- Answer: b
- Explanation: when bar is called without argument, it changes the value of the global variable foo to xyz and therefore prints foo with the same value in global and function scope.

2. Challenge 2:

- Answer: c
- Explanation: since we pass a as an argument into the function scope and reassign it's value to 10, invoking the function will console log 10, but won't affect the value of a in the global scope

3. Challenge 3:

- Answer: c
- Explanation: since function declarations are hoisted to the top of their containing scope it will be declared befor it executes any code

4. Challenge 4:

- Answer: c
- Explanation: since variable b is assigned to the same object as a the modifying of b.num also impacts a.num

5. Bonus - Challenge 5:

- Answer: c
- Explanation: rabbit one shows the values of the original object, while rabbit 2 shows the via function the values of the reassigned object to rabbit 1. This does not affect rabbit 1 since object now references a new object.
