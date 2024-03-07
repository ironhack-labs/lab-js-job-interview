1. Challenge 1:

- Answer: b
- Explanation: The function bar() gets executed which will console.log xyz one time. The next console log will display foo a second time which has been attributed "hyz" as a value within the function.

2. Challenge 2:

- Answer: c
- Explanation: The first console log displays 10 as the function example(a) is called. the second console log displays the initial value of 1 which hasn't been changed on the global scope as the example function was declared with a as argument and only modifies it within the function itself.

3. Challenge 3:

- Answer: c
- Explanation: even though the function is called before it's defined it is still functional and will display Hi there!. The function declaration was hoisted which allows us to call it before it's been declared

4. Challenge 4:

- Answer: c
- Explanation: the properties of an object are always modifyiable and because a and b point to the same reference both instances of the object are modified when b is reassigned a new num value.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: because the function only modifies the obj passed as an argument within it, we get two different objects as a result at the end.
