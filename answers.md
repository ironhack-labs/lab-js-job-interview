1. Challenge 1:

- Answer: b) - "xyz" and "xyz"
- Explanation: The bar function changes the value of foo to "xyz" before logging it. Then, when foo is logged outside the function, it retains the changed value "xyz" because the change made by bar affects the global scope.

2. Challenge 2:

- Answer: c) - 10 and 1
- Explanation: Inside the example function, the parameter a shadows the global variable a, so when a is logged within the function, it logs the value of the parameter (which is 10). Outside the function, a retains its original value (1) because the variable scope inside the function doesn't affect the global scope.

3. Challenge 3:

- Answer: c) - "Hi there!"
- Explanation: The function sayHi is hoisted to the top of the file, so it is available to be called before it is declared.

4. Challenge 4:

- Answer: b) - { num: 90 }
- Explanation: The variable a stores a reference to an object. When we assign the value of a to b, we are copying the reference to the object. Therefore, a and b are pointing to the same object. When we change the value of the property num of the object, we are changing the value of the property num of the object that both a and b are pointing to.

5. Bonus - Challenge 5:

- Answer: c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
- Explanation: Inside the magicHat function, the property age of the obj is changed to 10, which affects the rabbit1 object because both reference the same object. However, when obj is reassigned to a new object { name: "Ada", age: 20 }, it doesn't affect rabbit1 because obj is a new reference to a new object. Therefore, rabbit1 retains its original state, while rabbit2 holds the modified object returned by the magicHat function.
