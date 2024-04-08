1. Challenge 1:

- Answer: b
- Explanation: because it first declared as a global scope but inside the function again without declaration the variable, so it automaticly implements the "var" and overwrite the declaration above and becomes global scope

2. Challenge 2:

- Answer: c
- Explanation: because "a" will reassigned inside the function, but just for the example(a), how takes a copy of "let a=1". so just the copy of "a" becomes 10

3. Challenge 3:

- Answer: c
- Explanation: because of hoising. that just works with ES5 syntax

4. Challenge 4:

- Answer: c
- Explanation: "b" dont copy "a" it takes access to the value of "a" and both can make changes that effect the other variable

5. Bonus - Challenge 5:

- Answer: a
- Explanation: rabbit 2 get the last reassigned obj as return and because of block scope it doesnt effect the rabbit1 value
