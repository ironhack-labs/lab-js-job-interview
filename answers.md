1. Challenge 1:

- Answer: xyz, xyz
- Explanation: inside the function we reassign the value of the variable foo, and we run the function before logging the variable foo.

2. Challenge 2:

- Answer: c
- Explanation: the first console log is for the 'a' that is inside the function. the 2nd console log is calling the variable 'a' not the function. Shadowing, same name different varialbes.

3. Challenge 3:

- Answer: c
- Explanation: Hoisting happpens in javascript, where it moves the code to the top when reading it , making the function being declared only after its bean read.

4. Challenge 4:

- Answer: c
- Explanation: we made a copy of A in B, changing b we also change the object in a

5. Bonus - Challenge 5:

- Answer: super confusing
- Explanation: thought rabbit 1 wouldnt change since we say it is const rabbit1 = { name: "Bob", age: 30 }; therefore the console log should be that .
  rabbit 2 makes sence since we put it trough the function turning it into obj = { name: "Ada", age: 20 };
