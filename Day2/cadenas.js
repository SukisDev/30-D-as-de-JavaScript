let espacio = " "; // una cadena de espacio vacío
let primerNombre = "Jean";
let apellido = "Gómez";
let pais = "Panama";
let ciudad = "Santiago";
let lenguaje = "JavaScript";
let trabajo = "Asistente académico";
let cita = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotConBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;
let edad = 20;

//Concatenación de cadenas
let nombreCompleto = primerNombre + espacio + apellido;
let datosPersonaUno = nombreCompleto + ". Tengo " + edad +" años. Vivo en " + pais + " .";

//cadena largas literales, se puede utilizar el caracter (\) al final de cada linea para que interprete que continua la declaración
const parrafo = 
"Hola soy Jean Gómez, estudiante de la Universidad Tecnologica de Panamá\
 Curso la Carrera de Lic. en Desarrollo de Software, actualmente me encuentro en mi cuarto año.\
 Tengo muchos intereses en aprende a programar de forma profesional, estoy aprendiendo distinto\
 lenguajes como Python, JavaScript y PHP. Mi linea favorita de la programación es el Backend pero\
 quiero ser un desarrollador FullStack en toda regla."
console.log(parrafo)

/*
    -\n: nueva linea
    \t: Tabulador, significa 8 espacios
    \\: barra invertida
    \': Una frase (')
    \": comillas dobles (")
*/

console.log(
    "Espero que todos estén disfrutando el desafío de 30 días de JavaScript.¿Y tú?\n"
  ); // salto de línea
  console.log("Días\temasEjercicios");
  console.log("Día 1\t3\t5");
  console.log("Día 2\t3\t5");
  console.log("Día 3\t3\t5");
  console.log("Día 4\t3\t5");
  console.log("Este es un símbolo de barra invertida (\\)"); // Para escribir una barra invertida
  console.log(
    'En todos los lenguajes de programación comienza con "¡Hola, mundo!"'
  );
  console.log(
    "En todos los lenguajes de programación comienza con '¡Hola, mundo!'"
  );
  console.log("El dicho 'Ver para creer' no es correcto en 2022");


//Literales de plantilla. Se utuliza las comillas invertidas para poder concatenar valores en cadenas de texto(``).

let datosPersonaDos = `Soy ${nombreCompleto}. Tengo ${edad} años. Vivo en ${pais}.`;

// También se pueden utlizar para poder agregar expresiones como:
let a = 2;
let b = 3;
console.log(`${a} es mayor que ${b}: ${a < b}`); // 2 es mayor que 3: true

// Métodos de cadena

let js = "JavaScript";
console.log(js.length); // length devuelve la longitud de la cadena

// Obtener los valores de una cadena en base a su indice
let string = "JavaScript";
let primerCaracter = string[0]; // J
let segundoCaracter = string[1]; // a

let ultimoIndice = string.length - 1;
let ultimoCaracter = string[ultimoIndice]; // t

// Método ToUpperCase() y ToLowerCase()

let nombre = "Jean";
console.log(nombre.toUpperCase()); // JEAN
console.log(nombre.toLowerCase()); // jean

// Método substr() para extraer una parte de cadena
// let string = "JavaScript";

console.log(string.substr(0, 4)); // Java
console.log(string.substr(4)); // Script

// Método split() para dividir una cadena en subcadenas
// lo que vaya dentro del () es el separador

let js30 = "30 Days of JavaScript";

console.log(js30.split()); // ["30 Days of JavaScript"]
console.log(js30.split(" ")); // ["30", "Days", "of", "JavaScript"]

// Método trim() para eliminar espacios en blanco al principio y al final de una cadena
let cadena = " JavaScript ";
console.log(cadena.trim()); // "JavaScript"

// Método includes() para verificar si una cadena incluye otra cadena
let frase = "30 Days of JavaScript";
console.log(frase.includes("Days")); // true
console.log(frase.includes("days")); // false
console.log(frase.includes("Script")); // true

// Método replace() para reemplazar una cadena por otra
// replace(viejaCadena, nuevaCadena)

let frases = "30 Days of JavaScript";
console.log(frases.replace("JavaScript", "Python")); // 30 Days of Python

// Método charAt(): Toma el indice y devuelve el valor en ese índice
//charAt(indice)

//let frases = "30 Days of JavaScript";
console.log(frases.charAt(0)); // 3
console.log(frases.charAt(frases.length - 1)); // t

// Método indexOf() para encontrar el indice de un valor en una cadena

//let frases = "30 Days of JavaScript";
console.log(frases.indexOf("D")); // 3
console.log(frases.indexOf("JavaScript")); // 11
console.log(frases.indexOf("Hola")); // -1 (Retorna -1 ya que no econtró ese valor en la cadena)


// Método lastIndexOf() para encontrar el último índice de un valor en una cadena
let str =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(str.lastIndexOf("love")); // 67
console.log(str.lastIndexOf("you")); // 63
console.log(str.indexOf("love")); // 2 (ya que estoy usando la función indexOf() que es lo contrario a lastIndexOf() )

// Método concat() para concatenar dos o más cadenas
let cadenas = "30";
console.log(cadenas.concat(" Days", " of", " JavaScript!")); // 30 Days of JavaScript!


// Método startsWith() para verificar si una cadena comienza con otra cadena

//let str = "I love JavaScript. If you do not love JavaScript what else can you love";

console.log(str.startsWith("I love")); // true
console.log(str.startsWith("love")); // false

// Método endsWith() para verificar si una cadena termina con otra cadena

//let str = "I love JavaScript. If you do not love JavaScript what else can you love";

console.log(str.endsWith("love")); // true
console.log(str.endsWith("javaScript")); // false

// Método search() para buscar un valor en una cadena

//let str = "I love JavaScript. If you do not love javascript what else can you love";

console.log(str.search("love")); // 2
console.log(str.search("javascript")); // 38

// Método match() para obtener parte de una cadena que cumpla con una expresión regular

//let str = "I love JavaScript. If you do not love JavaScript what else can you love";
let patternOne = /love/; // sin ninguna bandera
let patternTwo = /love/gi; // g-significa buscar en todo el texto, i - no distingue entre mayúsculas y minúsculas

console.log(str.match("love")); // ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love", groups: undefined]
console.log(str.match(patternOne)); // ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love", groups: undefined]
console.log(str.match(patternTwo)); // ["love", "love", "love"]

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;

// d con carácter de escape significa que d no es una d normal sino que actúa como un dígito
// + significa uno o más dígitos,
// si hay g después de eso, significa global, busque en todas partes.

console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

// Método repeat() para repetir una cadena

let hola = "hola"
console.log(hola.repeat(2)); // holahola


// Para comprobar los distintos tipo de datos, se utiliza el operador typeof


