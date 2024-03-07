1. Challenge 1:

- Answer: a: "abc" and "xyz"
- Explanation: We print the result of the variable foo which is inside the function bar().

2. Challenge 2:

- Answer: c: 10 and 1
- Explanation: We print first the result of the function example() which is 10 because it has a variable a inside. We get 10 because we don't console.log here, we just run the function. Then we print 1 because we just console.log the variable a defined at the beginning.

3. Challenge 3:

- Answer: c: "Hi there!"
- Explanation: Thanks to hoisting, we can call a variable even before it has been declared.

4. Challenge 4:

- Answer: c: { num: 90 }
- Explanation: This is because objects are mutable, so if we assign a new variable to an existing object and we modify this new variable, the original will be mutated.

5. Bonus - Challenge 5:

- Answer: c: { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
- Explanation: Here we first define rabbit1 = { name: "Bob", age: 30 }. Then we create a new variable rabbit2 that will be equal to the function magicHat() with rabbit1 as an argument. So when rabbit1 will go inside the function, it will modify its age to 10. We have then { name: "Bob", age: 10 }. And then it will assign the value to rabbit2 which is inside the function and return it: { name: "Ada", age: 20 }. That's why rabbit 1 has only its age changed and rabbit2 is not equal to the original rabbit1.
