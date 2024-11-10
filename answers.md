1. Challenge 1:
  - Answer: b
  - Explanation: Since foo was declared in the outer scope (not inside any function), it is available and modifiable inside the bar() function. When foo is modified within bar(), it permanently changes in the outer scope because let allows reassignment of foo within the same scope.


2. Challenge 2:
  - Answer: c
  - Explanation: 10 is printed inside the function because a is set to 10 locally within example(). 1 is printed outside the function because the outer variable a remains unchanged.


3. Challenge 3:
  - Answer: c
  - Explanation: JavaScript hoists function declarations to the top of the scope, so sayHi() is available to be called even before it appears in the code. When sayHi() is called, JavaScript can find and execute the function, so console.log("Hi there!"); inside sayHi() is executed. Therefore, "Hi there!" is printed to the console.


4. Challenge 4:
  - Answer: c
  - Explanation: The variable a is declared as a const and assigned an object { num: 42 }. The variable b is the assigned the value of a. Since a is an object, assigning it to b doesn't create a copy of the object. Instead, b holds a reference to the same object that a refers to. Both a and b point to the same object in memory. When b.num is set to 90 this modifies the num property of the object that both a and b reference. Now, the object looks like { num: 90 }, and since a and b refer to the same object, this change affects both. Finally, console.log(a); shows the updated object, relfecting the change made through b.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: rabbit1 is modified only on its age property, making it { name: "Bob", age: 10 }. rabbit2 is a completely new object { name: "Ada", age: 20 }, created by reassigning obj inside magicHat() and returned.
