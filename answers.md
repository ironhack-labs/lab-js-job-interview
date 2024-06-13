1. Challenge 1:

- Answer: b
- Explanation: first line defines mutable variable to "abc". bar function changes it to xyz. then bar function is called. and it prints xyz from inside. then fooo is console logged again, with changed value, being xyz.

2. Challenge 2:

- Answer: c
- Explanation: here, the a in the ufnction is a new variable, that's why it might look like it will change the value of a, but it won't. it will jjust log the a from inside the function first, and the second logs the global scope a.

3. Challenge 3:

- Answer: c
- Explanation:function declarations are hoisted to global scope, that's why the function can be called before it was defined.

4. Challenge 4:

- Answer: c
- Explanation: because a = an object, even a being a const, the value of the property valeus in objects are always flexible and re-assignable

5. Bonus - Challenge 5:

- Answer: c
- Explanation: this was a hard one. when rabbit 1 is passed as argument for magicHat, it changes bobs age. but still returns ada. so rabbit 2 continues being ada in its original form, whilst rabbit 1 is bob with the changed age.
