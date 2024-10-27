1. Challenge 1:
  - Answer: "xyz" y "xyz"
  - Explanation: Dentro de la función, a se vuelve local y se reasigna a 10. Al salir de la función, el a global sigue siendo 1, por eso vemos 10 y luego 1 en la consola.


2. Challenge 2:
  - Answer: 10 y 1
  - Explanation: La variable foo es global y se inicializa con "abc". Cuando se llama a bar(), foo se reasigna a "xyz" dentro de la función. Esta reasignación afecta a la variable global. Por eso, tanto dentro de la función como en la segunda console.log, el valor de foo es "xyz".


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation: Las funciones declaradas con function se elevan (hoisting), lo que permite llamarlas antes de su declaración en el código. Al ejecutar sayHi(), la función ya está disponible en memoria, por lo que imprime "Hi there!" sin errores.


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: a está declarado como const, esto solo evita que a se reasigne a otro objeto, pero no impide que se modifiquen sus propiedades internas. Al asignar b = a, b y a apuntan al mismo objeto en memoria. Por eso, al cambiar b.num a 90, a.num también refleja este cambio, y console.log(a) imprime { num: 90 }.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
