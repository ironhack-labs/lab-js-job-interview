1. Challenge 1:
  - Answer: B
  - Explanation: The output of the code will be the string "xyz" twice, since the variable was updated inside the fucntion bar() with no paramenters. This means that when calling up the function and printing the variable, it will print the same result -> "xyz" x2.


2. Challenge 2:
  - Answer: C
  - Explanation: The output of the code will be 10 and 1, because the function example(a), takes on a parameter -> 'a' but while it as the same name as the variable above it, they are independent from each other and dont have the same value. The variable one is global and the function one is local to the function itself. so it will print 10 and then 1 because we're calling the function first and then printing the variable.


3. Challenge 3:
  - Answer: C
  - Explanation: The output of the code will be "Hi there!". This is only possible because of hoisting, making the function available to be called before declaring it. Basicaly hoisting moves the fucntion calling to the top of the function declaration, but in the scope of the entire code it still prints the expected output. If it was a variable it would print "undefined".


4. Challenge 4:
  - Answer: C
  - Explanation: The output of the code will be the { num: 90 }, because the value of the object inside the variable 'a' is updated from {num: 42} to {num: 90}, since we are creating a new variable 'b' and assigning the same reference as 'a'. We then update the 'num' inside 'b' to {num: 90}, after that since 'a' and 'b' refer to the same object, the output wil now be updated from 42 to 90.


5. Bonus - Challenge 5:
  - Answer: C
  - Explanation: the output of the code will be {name: "Bob", age: 10} and {name: "Ada", age: 20} because rabbit1 and rabbit2 are separate objects. rabbit1 as been modified by the magicHat function -> obj.age = 10; while rabbit2 is a new object created inside the function.