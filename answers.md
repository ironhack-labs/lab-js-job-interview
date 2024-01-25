1. Challenge 1:
  - Answer: b
  - Explanation: 
    1) foo is defined with a value of "abc" 
    2) function bar is getting invoced and overwrites foo with "xyz", then logs this value
    3) the outside log is also returning the newly assigned value


2. Challenge 2:
  - Answer: b
  - Explanation: here we deal with a shadowing of the variable a - example(a) takes the global value of a, in this case 1 and passes it to the function to print out a. Tha should return a. 
  The shadow variable a inside function example gets an overwrite of 10 and will get logged outside of it with 10


3. Challenge 3:
  - Answer: c
  - Explanation:  it will call the function even if it wasn't defined yet


4. Challenge 4:
  - Answer: c
  - Explanation: as const b is only a reference to the object in const a it will return all changes done to b as well


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: first log is just the rabbit1 object without changes
    sec. log will overwrite the complete object that gets passed into the function by a new array. 
  
    ok, that was wrong but I see what happend as with declaration of const rabbit2 the function gets called and changes only one value and that only for rabbit1