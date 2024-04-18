1. Challenge 1:

- Answer: b
- Explanation: first we called the function , and reassign the varaible foo , which is can be accessable from the child scope and then we print the result on the console which is xyz , and then we print the value once again after the reassign process , which is once again xyz

2. Challenge 2:

- Answer: c
- Explanation: we called the example function which recive an argument , which is a ( a = 1) , copied by it's value.. , the function reassign the value to 10 and print the result , then we print the value of a which is 10

3. Challenge 3:

- Answer: c
- Explanation: because in js , there is a process called hoisting which is moving all the function decleration , and only decleration not expression to the top of the code and execute them first , and then continoue execute the rest of the code .

4. Challenge 4:

- Answer: c
- Explanation: because both b and a right now reffrencing the same object in memory , when we reassign a to b we copy the reffrence or the address that point to that object from a to b , which mean the same object , now that object is accessabile from both a and b .

5. Bonus - Challenge 5:

- Answer: c
- Explanation: first we assign an object using the object literal syntax to a varaible called rabbit1 , (with 2 properties name Bob and age 30) , then we assign a function which is recive an object as arguments , in our case the same object (rabbit1) and modifiy the age property , and as we already know objects coppied by thier refrences , so a copy from the address ponting to the object will passed . so the age property of the rabbit1 will get change to 10 . moving forward the function reassign that object to point to a new object with 2 property's name Alda and the age 20 and return it and assign it to rabbit2 . so right now we have in Memory 2 objects rabbit1 which is point to the modidied obj (age to 10)
  and rabbit2 which is point to the new created obj .
