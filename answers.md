1. Challenge 1:

- Answer: xyz and xyz
- Explanation: in the bar function foo becomes global scope, resulting with both console.logs printing xyz

2. Challenge 2:

- Answer: 10 and 1
- Explanation: example(a) prints 10 due to a being reassigned locally, second console log prints global a

3. Challenge 3:

- Answer: "Hi there"
- Explanation: hoising of function declaration

4. Challenge 4:

- Answer: {num: 90}
- Explanation: b=a didnt copy the object but it's reference, then chaged the propery of the original reference, a.num is now 90.

5. Bonus - Challenge 5:

- Answer: { name: "Bob", age: 1 } and { name: "Ada", age: 20 }
- Explanation: in first console log, function globally redefined age to 10 of the original reference but name is untouched, in console log 2 the function created a new object and assigned it to rabbit 2
