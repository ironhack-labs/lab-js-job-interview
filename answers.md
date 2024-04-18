1. Challenge 1:
  - Answer: b
  - Explanation: La variable let foo est dans le scope global donc la fonction bar() peut y accéder. Cette fonction met à jour la variable foo (car elle a le même nom) et change donc la valeur. 


2. Challenge 2:
  - Answer: c
  - Explanation: La variable let a = 1 est dans le scope global. La fonction exemple(a) console.log dans son scope local sa propre valeur a = 10. Donc example(a) est 10 et console.log(a) est 1


3. Challenge 3:
  - Answer: c
  - Explanation: La réponse est "Hi there", car la fonction peut-être invoquée avant la déclaration (ce qui permet de réutiliser nos fonctions comme on veut dans notre code)


4. Challenge 4:
  - Answer: c
  - Explanation: La réponse est { num: 90 } car l'objet b (au départ) est égal à l'objet a. Ils ont la même référence.
  Si on change la valeur d'une propriété de b, ça changera automatiquement a car c'est le même objet. Ce n'est pas une copie.

5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
