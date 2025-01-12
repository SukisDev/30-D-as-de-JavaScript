// delclaramos funciones con la palabra reservada *function*

// funcion sin parametros
function fuctionName(){

}
fuctionName(); // llamado de la función por su nombre y con parentesis

// Fuciones sin parametros y return

function cuadrado(){
    let num = 2;
    let sqr = num * num;
    console.log(sqr)
}
cuadrado(); // 4

function addTwoNumbers(){
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;
    console.log(sum);
}
addTwoNumbers() // 30
// las funcionas para deben ser llamadas por su nombre para ser ejecutadas

/* function printFullName(){
    let firstname = "Jean";
    let lastName = "Gómez";
    let space = " ";
    let fullname = firstname + space + lastName;
    console.log(fullname)
}
printFullName();*/


// Función que retorna un valor

function printFullName(){
    let firstname = "Jean";
    let lastName = "Gómez";
    let space = " ";
    let fullName = firstname + space + lastName;
    return fullName;
}
printFullName(printFullName());

/* 
function addTwoNumbers() {
    let numOne = 2;
    let numTwo = 3;
    let total = numOne + numTwo;
    return total;
}
  
console.log(addTwoNumbers());
*/

// funcion con parametros

function functionWithParam(param1){
    // ...
}
functionWithParam(param1) // durante la llamada es necesario un argumento

function areaOfCircle(r){
    let area = Math.PI * r * r;
    return area
}
console.log(areaOfCircle(10)) // 314.159...

function square(number){
    return number * number;
}
console.log(square(5)) // 25

// Función con dos parametros

function sumTwoNumbers(num1, num2){
    return num1 + num2;
}
console.log(sumTwoNumbers(10, 20));

function nombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`;
}
console.log(nombreCompleto("Jean", "Gómez")); // Jean Gómez

// Funciones con muchos parametros

function sumArrayValues(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}
const arr = [1, 2, 3, 4, 5]

console.log(sumArrayValues(arr))

const areaOfCircle = (radius) =>{
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(10))

// Funciones con número ilimitado de parámetros

// función regular con parámetros ilimitados

function sumAllNums(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAllNums(1, 2, 3, 4, 5)) // 15
console.log(sumAllNums(10, 20, 30, 40)) // 100

// Función flecha con parámetros ilimitados

const sumAllNumbers = (...args) => {
    let sum = 0;
    for(elemnts of args){
      sum += elemnts
    }
    return sum;
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)) // 15
console.log(sumAllNumbers(10, 20, 30, 40)) // 100

// Función anónima

const anonymousFun = function () {
    console.log("Soy una función anonima y mi valor se encuentra en anonimousFun");
};

// functión de expresión

const squareTwo = function(n){
    return n * n;
}
console.log(squareTwo(2)) // 4

// Funciones de autoinvocación
(function(n) {
    console.log(n * n);
})(2) // 4, Esta funciones no necesitan ser invocadas pero no almacenan datos
// para almacenar datos hacemos lo siguiente

let squaredNum = (function (n){
    return n * n;
})(10)

console.log(squaredNum);

// Función Flecha

const square = (number) =>{
    return number * number;
}
console.log(square(5))

// si tenemos una sola linea en el bloque de código podemos escribirlo de la siguiente manera:
const sqr = (n) => n * n;

const changeToUpperCase = (arr) => {
    const newArr = [];
    for(element of arr){
        newArr.push(element.toUpperCase());
    }
    return newArr;
}
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries))

const fullName = (fName, lName) => {
    return `${fName} ${lName}`
} 
console.log(fullName("Jean", "Gómez"))

// como la función anterior solo tiene un return se puede escribir de la siguiente manera:
const fullNames = (fName, lName) => `${fName} ${lName}`;

console.log(fullNames("Jean", "Gómez"));

// Función por parámetro por defecto

function greetings(name = "Invitado"){
    return `${name}, welcome to 30 days to JavaScript!`;
}
console.log(greetings())
console.log(greetings("Missel"))

function weightObject(mass, gravity = 9.81){
    let weight = mass * gravity + "N";
    return weight;
}
console.log(weightObject(100))
console.log(weightObject(100,1.62))

function calculateAge(birthYear, currentYear = 2025){
    let age = currentYear - birthYear;
    return age;
}
console.log("Age: ",calculateAge(2004, 2024))

// ahora veamos como funcionan con las funciones flecha

const nombreCompleto = (nombre = "Jean", apellido = "Gómez") => `${nombre} ${apellido}`;

console.log(nombreCompleto("Missel", "Almanza"))
console.log(nombreCompleto())