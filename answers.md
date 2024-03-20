1. Challenge 1:
  - Answer: "xyz"
            "xyz"
  - Explanation: The reason is we have a let foo variable outside of the function, and in the function foo is without let const,
  so it becomes global, and since we have a foo variable outside of the function then the value changes for it.


2. Challenge 2:
  - Answer: 10 then 1
  - Explanation: The reason is this time we have an argument, and we are passing the parameter as well, so in this case
  for that function code of block a is created then we are assigning a new value, so the console.log should show the new value
  once we are out of the codeblock the reference will be gone. so we are back to one with the  let a = 1; value so the last console.log will show that


3. Challenge 3:
  - Answer: "Say Hi"
  - Explanation:
  Js isn't build like C, so you don't have to care about the function is declared before calling it.


4. Challenge 4:
  - Answer: 90
  - Explanation:
  The reason is object array isn't primative types, they playaround with references. So since we directly assign the a to b,
  then b and a is referencing the same place in the memory, if we make a change on b then since a is also referencing the same place,
  basically a is changing as well.


5. Bonus - Challenge 5:
  - Answer:{ name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation:
  The reason is like challange 4, since we sent rabbit1 to the function obj.age will change the value so now the object is name bob then age 10
  then we are assigning a new object to obj variable, which changes the references. then we are returning that which is currently name aga then age 20
  after all this rabbit2 is obj latest version
  so if we print those we would get { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
