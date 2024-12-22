/*Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
Imprima la cadena en la consola del navegador usando console.log()
Imprima la longitud de la cadena en la consola del navegador usando console.log()
Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
Verifique si la cadena contiene una palabra Script usando el método includes()
Divide la cadena en un array usando el método split()
Divida la cadena 30 días de JavaScript en el espacio usando el método split()
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
Usa el método match() para encontrar todos los a en 30 días de JavaScript
Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
Use el método repeat() para imprimir 30 días de JavaScript 2 veces*/

let desafio = "30 dias de JavaScript";

console.log(desafio) // 30 dias de JavaScript

console.log(desafio.length) // 21

console.log(desafio.toUpperCase()) // 30 DIAS DE JAVASCRIPT

console.log(desafio.toLowerCase()) // 30 dias de javascript

console.log(desafio.substr(3)) // dias de JavaScript

console.log(desafio.substr(0,3)) // 30

console.log(desafio.includes("Script")) // true

console.log(desafio.split()) // ["30 dias de JavaScript"]

console.log(desafio.split(" ")) // ["30", "dias", "de", "JavaScript"]

let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(empresas.split(", ")) // ["Facebook", "Google", "Microsoft", ...]

console.log(desafio.replace("JavaScript","Python"))

console.log(desafio.charAt(15)) // S

console.log(desafio.charCodeAt("J")); // 51

console.log(desafio.indexOf("a")) // 5

console.log(desafio.lastIndexOf("a")) // 14

let frase = 'No puedes terminar una oración con porque porque porque es una conjunción'

console.log(frase.indexOf("porque")) // 35

console.log(frase.lastOIndexOf("porque")) // 49

console.log(frase.search("porque")); // 35

console.log(desafio.trim()); // 30 Días de JavaScript

console.log(desafio.startsWith("30")) // true

console.log(desafio.endsWith("JavaScript")) //true

console.log(desafio.match("a")) // ['a', index: 5, input: '30 dias de JavaScript', groups: undefined]

let dias = "30 dias de"
let js = "JavaScript"

console.log(dias.concat(" ", js)) // 30 dias de JavaScript

console.log(desafio.repeat(2)) // 30 dias de JavaScript30 dias de JavaScript