1. Challenge 1:
  - Answer: b
  - Explanation: the function bar() is run, changing the value of foo that was defined globally before. therefore both will log "xzy"


2. Challenge 2:
  - Answer: c
  - Explanation: this time the example function is passed a variable as parameter, therefore only the variable in the scope of the function is changed but not the original one


3. Challenge 3:
  - Answer: c
  - Explanation: javascript moves declarations automatically to the top, this way it knows the function before its declaration


4. Challenge 4:
  - Answer: c
  - Explanation: instead of copying the values from a to b, javascript makes a link to the other object as reference


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: calling magicHat() passes a copy of rabbit1 as values to the function and the second call overwrites the first call to obj.age = 10; 
