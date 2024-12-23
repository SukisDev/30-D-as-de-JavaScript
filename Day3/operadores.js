// Operadores aritmeticos
let num1 = 4;
let num2 = 5;

let sum = num1 + num2
let diff = num1 - num2
let multi = num1 * num2
let div = num1 / num2
let resto = num1 % num2
let pow = num1 ** num2

console.log(sum, diff, multi, div, resto, pow);


//Calculemos el area de un circulo
const pi = 3.14
let radio = 100
let areaDelCirculo = pi * radio ** 2

console.log(area) // 314m

// calculemos el peso de un objet
const gravedad = 9.81;
let masa = 72;
let peso = masa * gravedad;

console.log(peso) // 706

// Operadores de comparación

/* 
 == si los valores son iguales
 === compar si el valor y el tipo de dato son iguales
 != si los valores son diferentes
 > si es mayor qué
 < si es menor qué
 >= si es mayor o igual qué
 <= si es menor o igual qué
*/

console.log(4 == "4") // true
console.log( 4 === '4') // false, son distintos tipos de datos
console.log(4 !== "4") // true, los valores son iguales pero los tipos de datos son distintos
console.log(undefined = null) // true
console.log(undefined === null) // false
console.log(NaN == NaN) // false

console.log("python".length == "javascript".length) // false
console.log("python".length < "javascript".length) // true
console.log("python".length == "dragon".length) // true

/* Operadores logicos, 
 && El ampersand)(And) devuelve true si ambos valores son verdaderos
 || El pipe (Or) devuelve true si al menos uno de los dos valores son verdaderos
 ! el operador ! niega el valor de la expresión
*/

// && ejemplo de operador ampersand

console.log(4 > 3 && 10 > 5); // true && true -> true
console.log(4 > 3 && 10 < 5); // true && false -> false
console.log(4 < 3 && 10 < 5); // false && false -> false

// || ejemplo de operador pipe

console.log(4 > 3 || 10 > 5); // true  || true -> true
console.log(4 > 3 || 10 < 5); // true  || false -> true
console.log(4 < 3 || 10 < 5); // false || false -> false

//! ejemplos de negación

console.log(4 > 3); // true
console.log(!(4 > 3)); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true

// Operadores de incremento y decremento

// Operador de pre-incremento ++variable
let i = 0;
console.log(++i); // 1
console.log(i);   // 1

// Operador de post-incremento variable++

let j = 0;
console.log(j++); // 0
console.log(j); // 1

// Operador de pre-decremento --variable

let k = 1;
console.log(--k); // 0
console.log(k); // 0

//Operador de post-decremento variable--

let l = 1;
console.log(l--); // 1
console.log(l); // 0

// Operadores ternarios

let num = 5;

num > 0
? console.log(`${num} es mayor que 0`) : console.log(`${num} es menor que 0`); // 5 es mayor que 0

num = -5;

num > 0
? console.log(`${num} es mayor que 0`) : console.log(`${num} es menor que 0`) // -5 es menor que 0

// alert(message) -> muestra un mensaje en una ventana emergente

// prompt(valor1, valor2) -> muestra un mensaje en una ventana emergente con un campo para que el usuario ingrese un valor

// confirm(message) -> muestra un mensaje en una ventana emergente con dos botones, aceptar y cancelar, devueleve true o false




