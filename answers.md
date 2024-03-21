1. Challenge 1:
  - Answer: b
  - Explanation: The output of the code will be "xyz" and "xyz" because it calls the function and print the function condition.


2. Challenge 2:
  - Answer: c
  - Explanation:The output of the code will be "10 and 1" because example() function is defined with a parameter a.Inside the example() function, there's a local variable a, which shadows the global variable a.The value of the local variable a is then set to 10. console.log(a); inside the example() function logs the value of the local variable a, which is 10. After the function call example(a);, the global variable a remains unchanged and still holds the value 1. console.log(a); outside the function logs the value of the global variable a, which is 1.


3. Challenge 3:
  - Answer: c
  - Explanation: The output of the code will be "Hi there!" because sayHi() is invoked before its declaration, it still works because the function declaration is hoisted to the top, making it accessible from any point within its containing scope.


4. Challenge 4:
  - Answer: c
  - Explanation: Modifing the property num of object b to 90 (b.num = 90;), it also modifying the same property in object a, because both a and b point to the same object. 


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: The rabbit1 is an object with properties { name: "Bob", age: 30 }. The
magicHat() function is called with rabbit1 as an argument. Inside magicHat(), obj initially refers to the same object as rabbit1. obj.age = 10; modifies the age property of the object that obj and rabbit1 refer to. So, rabbit1 now has { name: "Bob", age: 10 }.
