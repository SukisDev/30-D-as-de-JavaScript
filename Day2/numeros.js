// Declaraciones de tipos de datos númericos

let edad = 20;
const gravedad = 9.8; // se utiliza const para valores que no cambian, la gravedad es una constante
let masa = 72; // masa en kg
const PI = 3.1416; // Constante geométrica

const puntoEbullicion = 100;
const temperaturaCuerpo = 37;

// ahora vienen objetos matematicos

const P = Math.PI

console.log(P)

//Math.round() redondea los números decimales, teniendo en cuenta la regla del 0.5
console.log(Math.round(P))

console.log(Math.round(9.87))

console.log(Math.floor(P)) // Redondea hacia abajo

console.log(Math.ceil(P)) // Redondea hacia arriba

console.log(Math.min(-5,4,2,1,0,9)) // La función Math.min() devuelve el valor menor

console.log(Math.max(-5,4,2,1,0,9)) // La función Math.max() devuelve el valor mayor

const randNum = Math.random() //Math.random() devuelve un número entre 0 y 0,999999
console.log(randNum)

// ahora vamos a crear un número random entre 0 y 10

const randomNum = Math.floor(Math.random() * 11) // se utiliza la función Math.floor() para que no tome números decimales
console.log(randomNum)

console.log(Math.abs(-20)) // Funcion MAth.abs() devuelte el valor absoluto

console.log(Math.sqrt(64)) // Función Math.sqrt() devuelve la raíz cuadrada de un número

console.log(Math.pow(3,2)) // Función Math.pow() devuelve la potencia de un número

console.log(Math.E) //Devuelve el valor de un euler

console.log(Math.pow(2,Math.E)) 

// Logaritmos 

console.log(Math.log(2))
console.log(Math.log(10))

console.log(Math.LN2) // Devuelve el logaritmo natural de 2
console.log(Math.LN10) // Devuelve el logaritmo natural de 10

//Trigonometria
console.log(Math.sin(60))
console.log(Math.cos(60))


