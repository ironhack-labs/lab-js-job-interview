1. Challenge 1:

- Answer: b) "xyz" and "xyz"
- Explanation: foo is being updated inside the bar function so that foo = "xyz", so if console.log(foo) happens after the function, it returns "xyz".

2. Challenge 2:

- Answer: c) 10 and 1
- Explanation: in the function a is a paremeter, so when the function is called up and a is plugged in as an argument, that means that in that case it would return 10 if console.log(a). This is because parameters are local to the function they are a part of. They do not impact the variable a that is not a part of the function even if it is later plugged in as an argument.

3. Challenge 3:

- Answer: c) "Hi there!"
- Explanation: Functions can be invoked before they are declared if they are made using the function declaration method. These functions are hoisted to the top of their scopes, which is why they can successfully be invoked ven before declaration in the code.

4. Challenge 4:

- Answer: c) { num: 90 }
- Explanation: Because a is an object, when b is made to be a "copy" of a, it also refers to the exact same reference in the memory of the computer. Because both a and b refer to the same reference in the memory, any change to b also results in a change to a. Therefore if the value of num in b is changed to 90, it is also being changed to 90 in a.

5. Bonus - Challenge 5:

- Answer:
- Explanation:
