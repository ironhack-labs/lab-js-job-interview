1. Challenge 1:
  - Answer: b
  - Explanation: porque la función asigna un nuevo valor a la variable foo. Si dentro de la función se declarase un a nueva variable que también se llamase foo, sería distinto.


2. Challenge 2:
  - Answer: a
  - Explanation: De nuevo, no declara una nueva variable en el interior de la función, lo que hace es recibir el argumento a y asignarle un nuevo valor que es 10. Cambia el valor de la variable original.


3. Challenge 3:
  - Answer: c
  - Explanation: en JS puedes invocar una función antes de declararla o después, por lo que al invocarla devuelve el mensaje "Hi there!"


4. Challenge 4:
  - Answer: c
  - Explanation: la variable b no es una copia del objeto a, es una referencia. All interactuar con b estamos haciendo una modificación sobre el objeto original


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: en el primer consoole log no varían los parámetros de la constante rabbit1, en el segundo sin embargo encontramos rabbit2, que es una constante que contiene la función magicHat con el parámetro rabbit1. Al invocar la función magicHat el parámetro rabbit1 cambia de valor.
