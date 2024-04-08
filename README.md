1. Challenge 1:
- Answer: b
- Explanation: we're first calling the function ```bar()```, which assigns ```"xyz"``` to ```foo```, then console.logging ```foo```, which has been reassigned when we called the function.

---

2. Challenge 2:
- Answer: c
- Explanation: we're first calling the function ```example()```, to which we pass the value assigned to ```a```. Inside the function, we reassign ```a``` to 10, and console.log it after it has been reassigned, so its value is 10. Then we console.log ```a``` outside of the function, so its value is 1, as it was only reassigned within the function.

---

3. Challenge 3:
- Answer: c
- Explanation: we can call the function before declaring it, because of hoisting.

---

4. Challenge 4:
- Answer: c
- Explanation: it doesn't throw an error because we're only changing a value of the object, not reassigning the ```const```. ```b``` is not a copy of the array, it's a reference to the same address in the memory (or something like that), so it DOES change the original array.

---

5. Challenge 5:
- Answer: c
- Explanation: ```rabbit1``` is just what is assigned in the const ```rabbit1```, but we change its ```age``` value when we later call ```magicHat()``` (as we haven't made a copy of it, each change to it changes the original object). ```rabbit2``` is a calling function that returns the result of ```magicHat()``` to which we pass ```rabbit1``` as an argument. We change its ```name``` to 'Ada' and ```age``` to 20.