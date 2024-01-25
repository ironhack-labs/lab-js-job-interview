1. Challenge 1:

- Answer: b
- Explanation:
  JS reads from top to bottom. first foo is "abc" goes furher down and sees that there is a function, since the function hasnt been invoked it wont run yet, once is sees bar() it invokes the Func bar() which inside it foo is reinitialized to "xyz" meaning it has a new value, underneath it logs foo inside the function. once the function is finished it continues from bar() and sees console.log(foo) which was reinitialized in the function so it logs it again as "xyz"

2. Challenge 2:

- Answer:c
- Explanation:
  let a = 1 is a global variable, example() takes a param called a which inside it is initialzed to 10, the console.log inside the Func will log the parameter a and the console.log() outside the function will log the global variable a

3. Challenge 3:

- Answer:c
- Explanation:
  function sayHi() gets hoisted

4. Challenge 4:

- Answer:c
- Explanation:
  we are refering to where the object is stored with b=a so changing b will also change a;

5. Bonus - Challenge 5:

- Answer:c
- Explanation:
  obj.age assigns the recieved param.age to 10, then after created a new object which doesnt effect the original object.so rabbit1 is with the modified .age = 10; while rabbit2 is the created obj inside the Func
