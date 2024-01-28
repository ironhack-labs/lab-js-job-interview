1. Challenge 1:
  - Answer: b
  let foo = "abc";

function bar() {
  foo = "xyz";
  console.log(foo);
}

bar();


console.log(foo);
  - Explanation: It is "b" because on the function bar, we change the variable from "abc" to "xyz", and then a console.log is made there, and in the end as well


2. Challenge 2:
  - Answer: c
  - Explanation: It is "c" because on the function, a is assigned the value 10, and console.log(a) prints 10. After the function call, there is a second console.log(a) in the global scope, which is 1. Thus, the last console.log is 1.


3. Challenge 3:
  - Answer:c
  - Explanation: Because the console.log in the function says "Hi there!" and it is called postly



4. Challenge 4:
  - Answer: c
  - Explanation: Firstly, because it is inside an object and secondly, when the num property is modified through b with b.num = 90, what we are doing is modifying the same object that a is referencing. As a result, when we console.log(a);, we see the modified value of 90


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: The modifications made to the rabbit1 object inside the function remain outside the function, as objects are passed by reference in JavaScript. However, the reassignment does not affect the original rabbit1 or rabbit2 outside the function. rabbit2 has the object { name: "Ada", age: 20 }, but rabbit1 still reflects the changes made to age.






