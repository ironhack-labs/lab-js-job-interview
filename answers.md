1. Challenge 1:

- Answer: b
- Explanation: when calling the function bar (), "xyz" will be printed (inner scope). the console.log(foo) outside the function will also print "xyz" because the value got reassigned.

2. Challenge 2:

- Answer: c
- Explanation: we pass an argument (a) in the function. The a inside the function shadows the global a.
Inside the function a get reassigned to 10, but that will only affect the local a.

3. Challenge 3:

- Answer: c
- Explanation: due to "hoisting" , the js engine will move the actual declaration of the function to the top of the scope

4. Challenge 4:

- Answer: c
- Explanation: const b = a; they both point to the same object reference

5. Bonus - Challenge 5:

- Answer:
- Explanation:
