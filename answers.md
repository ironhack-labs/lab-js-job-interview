1. Challenge 1:
  - Answer: b
  - Explanation: execution order: foo declaration, bar invocation, foo change, log, bar return, log


2. Challenge 2:
  - Answer: c
  - Explanation: exec order: a decl, example invocation with a = 1, example scope with new local a, local a change to 10, log local a, example return / discard local a, log global a still 1


3. Challenge 3:
  - Answer: c
  - Explanation: func declaration can be after invocation


4. Challenge 4:
  - Answer: c
  - Explanation: object and array values only save the pointer/location in memory of that container.
  Also, both are passed by reference.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: exec order: decl rabbit1 {bob,30}, magicHat invoced with rabbit 1, magicHat func scope with obj as rabbit, obj age changed to 10 (rabbit1{bob,10}), obj set to new object {ada,20}, obj returned, rabbit2 declared with return value of func magicHat (obj), log rabbit1, log rabbit2
