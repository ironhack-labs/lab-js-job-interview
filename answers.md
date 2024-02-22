1. Challenge 1:

- Answer: b
- Explanation: Reassign the value of foo to "xyz" inside function block so the final value outside would be "xyz" also

2. Challenge 2:

- Answer: c
- Explanation: Function "example" takes a parameter "a" , The parameter "a" is reassigned the value 10 , console.log(a) insode function; // Logs the local variable "a", which is 10
  console.log(a); // Logs the global variable "a" which is still 1

3. Challenge 3:

- Answer: c
- Explanation: because in JS we can call function before we write declaration

4. Challenge 4:

- Answer: c
- Explanation: two objects has same address and value in memory when change one the other changes too

5. Bonus - Challenge 5:

- Answer: c
- Explanation: obj.age is set to 10, modifying the original object (rabbit1)
  obj is reassigned to a new object { name: "Ada", age: 20 }, but this does not affect the original objectoutside the function.
