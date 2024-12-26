// Como declarar arrays vacios: 
//const arr = Array();
/* let arr = new Array();
     y la forma mas recomendada:
    const arr = [];
*/

// Como declarar arrays con valores

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array de números
const fruits = ["banana", "naranja", "mango", "limón"] // array de strings, frutas
const webTechs = [
    "HTML", 
    "CSS", 
    "JS", 
    "React", 
    "Redux", 
    "Node", 
    "MongoDB"
] // array de string, web technologies

// impresión del array y su longitud
console.log(`Numeros: ${numbers}`);
console.log(`Cantidad de números: ${numbers.length}`);
console.log("Frutas: ", fruits);
console.log("Cantidad de frutas: ", fruits.length)
console.log(`Tecnologias: ${webTechs}`);
console.log(`Número de tecnologias: ${webTechs.length}`)

// los arrays puede contener distintos tipos de datos

const arr =[
    "SukiDev",
    20,
    true,
    {pais: "Panamá", ciudad: "Santiago"},
    {skills: ["Python", "PHP", "SQL", "FastAPI"]},
] // arr contiene distintos tipos de datos
console.log(arr)

// creando arrays con split()

let js = "JavaScript";
const caracteresDeJavaScript = js.split("")
console.log(caracteresDeJavaScript) // ["J", "a", "v", "a", "S", "c", "r","i","p","t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
const companies = companiesString.split(",")
console.log(companies) // ["Facebook", " Google", " Microsoft"...]

let txt = "Me gusta estudiar de las nuevas tecnologias, quiero aprender de todo"
const words = txt.split(" ")
console.log(words) // ["Me", "gusta", "estudiar", "de"...]

// accediendo a los elementos de un arrays a traves de su indice

// const fruits = ["banana", "naranja", "mango", "limón"]
let primeraFruta = fruits[0]
console.log(primeraFruta) // banana

let segundaFruta = fruits[1]
console.log(segundaFruta) // naranja

let terceraFruta = fruits[2]
console.log(terceraFruta) // mango

// Esta es una forma de calcular el ultimo indice
lastIndex = fruits.length - 1
let ultimaFruta = fruits[lastIndex]
console.log(ultimaFruta) // limón

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]

console.log(numbers.length) // 6
console.log(numbers[0]) // 0
console.log(numbers[5]) // 100
console.log(numbers[numbers.length - 1]) // 100

// Modificar los elementos de arrays

const numeros = [1, 2, 3, 4, 5];
numeros[0] = 10; // 1 => 10, cambiando el valor del indice 0 que es 1 a 10
numeros[1] = 20; // 2 => 20, cambiando el valor del indice 1 que es 2 a 20
console.log(numeros) // [10, 20, 3, 4, 5]

const paises =[
    "Albania",
    "Bolivia", 
    "Canada",
    "Finlandia",
    "Japan",
    "kenya"
]
paises[0] = "Afghanistan"; // [0] = "Albania" => [0] "Afghanistan"
let ultimoIndex = paises.length - 1;
paises[ultimoIndex] = "Panamá"; // [5] = "Kenya"  => [5] = "Panamá"
console.log(paises) // ["Afghanistan", "Bolivia", "Canada",..., "Panamá"]

// Métodos para manipular arrays

// Constructor de arrays
// Array() para crear / declarar arrays

//const arr = Array();
//console.log(arr)

const EmptyArray = Array(8)
console.log(EmptyArray) // (8) []

// Creando valores estaticos con fill()

//const arr = Array(); // array vacio
//console.log(arr)

const eightXValues = Array(8).fill("X");
console.log(eightXValues) // ["X", "X", "X", "X", "X", "X", "X", ...]

const eightCeroValues = Array(8).fill(0);
console.log(eightCeroValues) // [0, 0, 0, 0, 0, 0, 0]

const four4Values = Array(4).fill(4);
console.log(four4Values) // [4, 4, 4, 4]

// concatenación de listas concat()

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const lista3 = lista1.concat(lista2)
console.log(lista3) // [1, 2, 3, 4, 5, 6]

const frutas = ["banana", "naranja", "mango", "limón"];
const vegetales = ["tomate", "patata", "cebolla", "zanahoria"];
const frutasAndVegetales = frutas.concat(vegetales)
console.log(frutasAndVegetales) // ["banana", "naranja", "mango", "limón", "tomate", "patata", "cebolla", "zanahoria"]

// obtener la longitud de un array usando array.length

const numerosList = [1, 2, 3, 4, 5]
console.log(numerosList.length) // 5

// Obtener el indice de un elemento dentro un array usando indexOf()

// const numerosList = [1, 2, 3, 4, 5]
console.log(numerosList.indexOf(3)); // 2
console.log(numerosList.indexOf(7)); // -1
console.log(numerosList.indexOf(1)) // 0
console.log(numerosList.indexOf(0)) // -1

// vamos a comprobar si un elemento se encuentra en el array indexOf()

// const frutas = ["banana", "naranja", "mango", "limón"];
let index = frutas.indexOf("banana") // 0

if (index === -1){
    console.log("Esta fruta no se encuentra en el array");
} else {
    console.log("Esta fruta se encuentra en el array");
}
// Esta fruta se encuentra en el array


// Obtener el ultimo indice lastIndexOf()
const nums = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(nums.lastIndexOf(1)) // 6
console.log(nums.lastIndexOf(6)) // -1
console.log(nums.lastIndexOf(2)) // 7
console.log(nums.lastIndexOf(0)) // -1

// Comprobar un elemento se encuentra en el array, includes()

// const numerosList = [1, 2, 3, 4, 5]
console.log(numerosList.includes(1)) // true
console.log(numerosList.includes(6)) // false
console.log(numerosList.includes(5)) // true
console.log(numerosList.includes(0)) // false

/*const webTechs = [
    "HTML", 
    "CSS", 
    "JS", 
    "React", 
    "Redux", 
    "Node", 
    "MongoDB"
]*/
console.log(webTechs.includes("C")) // false
console.log(webTechs.includes("Node")) // true

// comprobar un array

const array = [1, 2, 3, 4, 5];
console.log(Array.isArray(array)); // true

const falseArray = 120;
console.log(Array.isArray(falseArray)) // false


// Convertir un Array a un String
const numetosToString = [1, 2, 3, 4, 5];
console.log(numetosToString.toString()); // 1,2,3,4,5

const nombres = ["Jean", "Paul", "Missel", "Almanza"];
console.log(nombres.toString()); // Jean,Paul,Missel,Almanza

// unir elementos de un array join()

// const nombres = ["Jean", "Paul", "Missel", "Almanza"];
console.log(nombres.join()); // Jean,Paul,Missel,Almanza
console.log(nombres.join(", ")); // Jean, Paul, Missel, Almanza
console.log(nombres.join(" # ")); // Jean # Paul # Missel # Almanza


// Cortar los elementos de un array slice()

// const numerosList = [1, 2, 3, 4, 5]
console.log(numerosList.slice()); // [1, 2, 3, 4, 5]
console.log(numerosList.slice(0)); // [1, 2, 3, 4, 5]
console.log(numerosList.slice(0, numerosList.length)); // [1, 2, 3, 4, 5]
console.log(numerosList.slice(1, numerosList.length - 1))// [2, 3, 4]

// Método splice() para cortar, toma 3 parametros, splice(posición inicial, números de elementos a eliminar, cantidad de elementos que se agregaran)
 
//const nums = [1, 2, 3, 4, 5];
console.log(nums.splice()); // Elimina todo
console.log(nums.splice(1, 3)) // [2, 3, 4]Elimina el primer indice y de ja la cantidad de elementos que se colocan en el segundo paramentro

// agregar elementos utilizando push() al final

const arrays = ["item1", "item2", "item3"];
arrays.push("new item");
console.log(arrays); // ["item1", "item2", "item3", "new item"]

//const nums = [1, 2, 3, 4, 5];
nums.push(6)
console.log(nums) // [1, 2, 3, 4, 5, 6]

// const frutas = ["banana", "naranja", "mango", "limón"];
frutas.push("manzana")
console.log(frutas); // ["banana", "naranja", "mango", "limón", "manzana"];

// Eliminar el ultimo elemento

//const nums = [1, 2, 3, 4, 5, 6];
nums.pop();
console.log(nums) // [1, 2, 3, 4, 5];


// Eliminar el primer elemento shift()

// const nums = [1, 2, 3, 4, 5];
nums.shift()
console.log(nums); // [2, 3, 4, 5];

// agregar un elemento al inicio unshift()

// const nums = [1, 2, 3, 4, 5];
nums.unshift(0)
console.log(nums); // [0, 1, 2, 3, 4, 5];

// invertir un array reverse()

// const nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // [5, 4, 3, 2, 1];

nums.reverse();
console.log(nums); //[1, 2, 3, 4 ,5];

// Ordenar los array sort()

/*const webTechs = [
    "HTML", 
    "CSS", 
    "JS", 
    "React", 
    "Redux", 
    "Node", 
    "MongoDB"
]*/

webTechs.sort();
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// después de ordernarlo podemos invertirlo
webTechs.reverse()
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array de Arrays

const frontEnd = ["HTML", "CSS", "JavaScript", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd]
console.log(fullStack); //[["HTML", "CSS", "JavaScript", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]); //["HTML", "CSS", "JavaScript", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]