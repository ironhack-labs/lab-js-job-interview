1. Challenge 1:
  - Answer: b
  - Explanation: because foo is reassigned to "xyz" within the function. before it was let foo = "abc" and within the function it is changed to foo = "xyz". Therefore both console.log will give out b


2. Challenge 2:
  - Answer: c
  - Explanation: the first console log can access the change a =10 within the function, which console.log can't do as it can't access a parentscope. Therefore console log 2 will be 1 and console log 1 will be 10.


3. Challenge 3:
  - Answer: c
  - Explanation: This function can be called before it "happens" therefore the output will be "Hi there!"


4. Challenge 4:
  - Answer: c
  - Explanation: because a is an object and modified or copied by reference. And with b.num it is changed also the same porperty as in a. 


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: rabbit1 is {name: "Bob", age; 10}, because within the magicHat function the obj.age =10 will change bob's age from 30 to 10. Rabit2 will be assigned a new object within the MagicHat funtion and therfore will be { name: "Ada", age: 20 }.
