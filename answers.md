1. Challenge 1:
  - Answer: b) "xyz" "xyz"
  - Explanation: Because we already have declared  the foo variable in the global scope, now inside the function we have reinitialized it to 'xyz' and after it we console.log xyz which outputs xyz.


2. Challenge 2:
  - Answer:c) 10 and 1
  - Explanation:The reason behind this is that in this example we already pass the a  as a parameter in the function, but firstly we console.log the 10 because that is what is inside the function and then when we call the function and we pass the a as an argument which will take the value that was defined already in the global scope


3. Challenge 3:
  - Answer: c) Hi there!
  - Explanation:It will output Hi there because here it is what happens, the javascript sees the sayHi() which is firstly  invoked and due to hoisting immediately goes to the line where this function is declared and runs it.


4. Challenge 4:
  - Answer:{num:90}
  - Explanation:Here an object a is created which has a property num  and the num has 90 value assigned to it, then b variable is created where the a object is assigned to, a and b are the same now since they are pointing at the same object in memory, therefore when we output a we see the value 90.


5. Bonus - Challenge 5:
  - Answer: 
  
  - Explanation: rabbit1:{"name:"Bob", age:10} - 10 because it takes the changes inside the function
  
rabbit2:{name:"Ada",age:20} - - because the new object created inside the function is returned and assigned to rabbit2,