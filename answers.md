1. Challenge 1:

- Answer: b
- Explanation: foo here is initialized by the "abc" value. The bar function creates a local variable with a new value of "xyz" and its independent of global foo. When console.log(foo) is executed it prints "xyz" because refers to the local variable Outside the function, the global foo remains same. The second console.log(foo) prints the original value "abc".

2. Challenge 2:

- Answer: c
- Explanation: Like there are two boxes lets say green and red. green is global and holds the number 1. Red box is function and holds its own value. Function changes its value which is red box but not the green one. When we print outside the function it shows the global value.

3. Challenge 3:

- Answer: c
- Explanation: Javascript functions are playing their part in scenarios. So, even if you call a function before they appear in the code, they're prepared to execute.

4. Challenge 4:

- Answer: c
- Explanation: Seems like there is a box with two labels on it. Changing what's inside the box through one label affects what you see through the other. They both point to the same content. 

5. Bonus - Challenge 5:

- Answer: c
- Explanation:
