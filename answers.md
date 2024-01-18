1. Challenge 1:

- Answer: a
- Explanation: bar() runs the code in the function scope, the last line refers back to the global scope in the first line

///WRONG/// should be xyz and xyz
because the function reassigns foo in the global scope

2. Challenge 2:

- Answer: a
- Explanation: similar logic to question 1(but corrected)

//WRONG// should be 10 and 1 but whyyyy?????? because of SHADOWING, two differens a's?

3. Challenge 3:

- Answer: c
- Explanation: old functionality, hoisting

4. Challenge 4:

- Answer: a
- Explanation: cannot reassign const variable value, console.log(a) will return [object]

//WRONG// should be num90 aaa ok so const b is a different variable altogether that references to const a, but it looks like it copies and object and i thought that was not possible

5. Bonus - Challenge 5:

- Answer:a
- Explanation:
//wrong// why did rabbit 1 change?????