1. Challenge 1:

- Answer: d
- Explanation: foo = 'abc' --> variable declared inside global scope are available inside function that are inside of this global scope ==> foo = 'xyz' + console log that return xyz when the function bar is called ---> because changed that occurend inside the function impact where the variable has been stored inside global scope --> console log (foo) give back the last state of foo that have been saved that is 'xyz'.

2. Challenge 2:

- Answer: c
- Explanation: can be tricky because the name of the parameter is the same as the name of the argument that has been pasted but when something is pasted as an argument, it is the value that is pasted, not the position where it is stored, and the change of the value of an argument that happen inside a function is not available outisde the scope of this function. its like saying : let parameter = argument
  and then parameter = 10
  that means that argument is still equal to 1.

3. Challenge 3:

- Answer: c (apprently)
- Explanation: I didn't know that but i believe it's because they are in the same scope (global) but I wouldn't code something when that type of things can happen, for clarity.

4. Challenge 4:

- Answer: c
- Explanation: as we've seen in class, an object like an array reference to a play of storage so if you modify a copy you modify the value inside the same storage that both is taking the information from

5. Bonus - Challenge 5:

- Answer:
- Explanation:
