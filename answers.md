1. Challenge 1:

- Answer: b
- Explanation: Since the code is executed from top to bottom, the function that changes the global variable will be executed first and then output it. Then we will output the already changed variable again

2. Challenge 2:

- Answer: c
- Explanation: the value passed to the function is changed inside the function, which does not affect the global variable

3. Challenge 3:

- Answer: c
- Explanation: functions declared with the keyword, not as variables "const fun = function(){}" or "const fun = () => {}" can be called in any part of the code.

4. Challenge 4:

- Answer: c
- Explanation: when initializing a variable when using complex data types, such as arrays, functions and objects, it is copied not by value, but by reference, which means that we make a reference to memory rather than copying the data stored in this memory.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: when executing the function, we change the property of the incoming object, and since the object is a complex data type, we change its private property (since the argument was essentially a reference to data in memory). But since the passed "reference" is a constant, we cannot reinitialize it, so these changes will not affect the original data, but will affect the data returned by the function
