1. Challenge 1:

- Answer: b
- Explanation: Because the function changes the value of the variable, therefore, once the function is called, the variable foo changes value globally.

2. Challenge 2:

- Answer: d
- Explanation: Because, in this case, "a" is a parameter of the function, which means that the "a" assigned inside the function it's only going to change inside the function, and not mess with the global variable "a", that's why it remains unchanged when consoled logged outside of the function.

3. Challenge 3:

- Answer: c
- Explanation: Even though the function is defined after the function is called, there's something called "function hoisting", which means that the functions are "grouped" at the top and read first, so that when it's called, it doesnt necessarily needs to be defined before its called.

4. Challenge 4:

- Answer: c
- Explanation: Because both "a" and "b" are refering to the same object, so when "b" changes the value of the object, it changes it to "a" as well, the same would apply if "a" changed the value of the object.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: The function, when its called with "rabbit1" as a parameter changes the "rabbit1" age and also creates a whole new object apart from rabbit1, that is assigned as "rabbit2" when the function is called for "rabbit1".
