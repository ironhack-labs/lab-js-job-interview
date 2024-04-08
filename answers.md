1. Challenge 1:

- Answer: b
- Explanation: The output is "xyz" printed twice because the function bar() changes the value of foo to "xyz", which is then printed both inside and outside the function.

2. Challenge 2:

- Answer: c
- Explanation: The output is "10" printed first and "1" printed second. Inside the function example(), a is set to 10, but it doesn't affect the value of a outside the function, which remains 1.

3. Challenge 3:

- Answer: c
- Explanation: The output is "Hi there!" because function declarations are hoisted to the top of their scope in JavaScript, allowing them to be called before they are declared.

4. Challenge 4:

- Answer: c
- Explanation: The output is { num: 90 } because both a and b refer to the same object. So, modifying b.num also changes a.num, resulting in { num: 90 } when console.log(a) is called.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: The function magicHat() modifies the age property of the passed object to 10. Then, it assigns a new object to obj, but this doesn't affect the original object. Therefore, rabbit1 keeps its modified age property, while rabbit2 gets the new object with { name: "Ada", age: 20 }
