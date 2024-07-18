1. Challenge 1:

- Answer: b
- Explanation: the first variable "let foo" is declared and initialized as "abc", after that, on inside of "function bar()" scope the variable "foo" is updated to "xyz" and console prints "foo" as "xyz". For the ending the "function bar()" is invoked and console prints again the last updated value "xyx".

2. Challenge 2:

- Answer: b
- Explanation: the first variable "let a" is declared and initialized as "1" in a global scope, after that, on inside of "function example(a)" scope the a new parameter is made with name "a", "a" is declared and initizalided to "10" and console prints "a" as "10", however the new parameter has the same name of the "let a" in global scope, but only atributes its value inside function scope, so after the function execution the the global scope of "let a" remains the same. For the ending the "function example(a)" is invoked but what console prints is the global scope value "1".

3. Challenge 3:

- Answer: c
- Explanation: hoisting permits call the function before its execution.

4. Challenge 4:

- Answer: c
- Explanation: const a and b make reference to the same object, if const b make changes to the object, since it has the same rerefence of const a, the changes will be executed in both constants.

5. Bonus - Challenge 5:

- Answer:
- Explanation:

```

``
```
