1. Challenge 1:

- Answer: b
- Explanation: The output of the code will be "xyz" and then "xyz" because the function bar() reassigns a new value to foo and it prints it to the console. The console.log() outside the function also prints "xyz" because foo has been reassigned to another value by invoking the function.

2. Challenge 2:

- Answer: c
- Explanation: The first output will be 10 because the function takes the parameter "a" and changes it but "a" in this case is a variable specific to the function's scope. In fact the second output will be 1 because the function's changes don't affect the global variable "a".

3. Challenge 3:

- Answer: c
- Explanation: The output will be "Hi there!" because a function can be invoked before declaration.

4. Challenge 4:

- Answer: c
- Explanation: The output will be {num:90} because "b" and "a" are two references of the same object, so any changes made to one of them will affect the other.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: The output will be "rabbit1: { name: "Bob", age: 10 }" and "rabbit2: { name: "Ada", age: 20 }" because the function takes rabbit1 as a parameter obj which now rederences the same object and updates the property age. With the line "obj = { name: "Ada", age: 20 };" the function assigns a new object to obj but at this point rabbit1 will remain unchanged. rabbit2 is set to the new object returned from the function.
