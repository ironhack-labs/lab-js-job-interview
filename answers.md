1. Challenge 1:

- Answer: B
- Explanation: The variable foo is declared with an initial value of "abc". When the function bar() is called, it reassigns foo to "xyz", affecting the original value. The first console.log(foo) inside the function prints "xyz", and after the function call, the global foo still holds "xyz", so the second console.log(foo) also prints "xyz".

2. Challenge 2:

- Answer: C
- Explanation: When the function example(a) is called, it creates a local copy of the parameter a. Inside the function, a is reassigned to 10, but this change only affects the local variable within the function. Therefore, the first console.log(a) inside the function prints 10, but the second console.log(a) outside the function prints 1, which is the original value that remains unchanged.

3. Challenge 3:

- Answer: C
- Explanation: There will be a console.log output because a function can be called at any time in the code, even before declaration due to hoisting.

4. Challenge 4:

- Answer: C
- Explanation:
  When the variable "a" holds a non-primitive data type like an object, it is assigned to variable "b" by reference, not by copying its value. This means that both "a" and "b" refer to the exact same object in memory. So, if we change a property like "num" in either "a" or "b", we're modifying the same object, and the change will show up in both variables because they both point to that same object.

5. Bonus - Challenge 5:

- Answer: C
- Explanation: When we call magicHat(rabbit1), the rabbit1 object is passed to the function as obj, so at first they both point to the same object. When we set obj.age = 10, this also changes rabbit1.age to 10, since they are the same object. Then, when we do obj = { name: "Ada", age: 20 }, obj now points to a new object, but rabbit1 still points to the original object, which is now { name: "Bob", age: 10 }. In the end, rabbit2 is given the new object { name: "Ada", age: 20 }, while rabbit1 is left as { name: "Bob", age: 10 }.
