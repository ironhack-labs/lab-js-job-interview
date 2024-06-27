1. Challenge 1:

- Answer: b
- Explanation: foo begins as 'abc', then it's value is changed to 'xyz' inside the bar function's scope. When the bar function is called, it's value also changes in the global scope. Then, when the value of foo is printed to the console, 'xyz' is printed

2. Challenge 2:

- Answer: c
- Explanation: a begins as 1 in the global scope. a is also the name of the example function parameter, and it's value is assigned to 10 in the example function. This shouldn't change the value of a in the global scope, but will return 10 when a is passed as a function argument.

3. Challenge 3:

- Answer: a
- Explanation: sayHi is being called before it is declared (checked the answers - oops!)

4. Challenge 4:

- Answer: c
- Explanation: The object is a reference, and when you shallow copy it and change the value of a key in the cloned object, the original will also mutate.

5. Bonus - Challenge 5:

- Answer: d
- Explanation: You cannot mutate an object (oops)
