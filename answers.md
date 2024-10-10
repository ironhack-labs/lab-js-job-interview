1. Challenge 1:

- Answer: b
- Explanation: inside the function foo is converted to xyz(xyz overwrites abc), that's why in both console.logs it is xyz

2. Challenge 2:

- Answer: a
- Explanation: inside the function a is converted to 10(10 overwrites 1), that's why in both console.logs it is 10

3. Challenge 3:

- Answer: c
- Explanation: it is possible to call a function before it is established => hoisting

4. Challenge 4:

- Answer: c
- Explanation: when modifying b, we are also modifying the original value because it is an object which means that it is stored as a reference, not as a value

5. Bonus - Challenge 5:

- Answer: c
- Explanation: the function overwrites the initial content of the object because it is stored as a reference and not a value, therefore value is overwriten
