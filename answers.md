1. Challenge 1:

- Answer: B
- Explanation: variable 'foo' is declared in global scope, and since its a 'let' variable then it can be updated. the function is invoked before the console.log, thus 'foo' should both be xyz

2. Challenge 2:

- Answer: A
- Explanation: Like in the previous challenge, 'a' is declared in the global scope, then updated within the function. console logs should both result in '10'

3. Challenge 3:

- Answer: C
- Explanation: Due to hoisting, function sayHi is brought up once declared in the code, and can be invoked even before the line of declaration

4. Challenge 4:

- Answer: C
- Explanation: Objects are non-primitive data types, they are passed by memory reference. variable b is not holding a new instance of the object stored in a, but its own reference. That results in the value inside a {num:42} to change to 90 once b.num = 90; was inputted.

5. Bonus - Challenge 5:

- Answer:
- Explanation:
