1. Challenge 1:

- Answer: xyz and xyz
- Explanation: Because the bar function modifies the global variable foo before printing it.

2. Challenge 2:

- Answer: 10 and 1
- Explanation: When the function is called with example(a), it prints the local a, which is 10.
  After the function call, console.log(a); prints the global a, which remains 1.

3. Challenge 3:

- Answer: "Hi there!"
- Explanation: the function delcaration is hoisted, which means it is moved to the top of the scope during the compilation phase. As a result, the function sayHi is available for use before the actual declaration in the code.

4. Challenge 4:

- Answer: { num:90 }
- Explanation: Both a and b reference the same object. Modifying b.num also changes a.num.

5. Bonus - Challenge 5:

- Answer: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
- Explanation: The magicHat function modifies the age property of the input object (rabbit1) and reassigns a new object to a local variable. Changes to object properties persist outside the function, but reassignment of the local variable does not affect the original reference.
