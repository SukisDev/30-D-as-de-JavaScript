// voy a copiar la diferencia entre los tipos de datos primitivos y los No primitivos (Int, float, string, null, undefined, boolean)

let numero = 10;
let numero2 = 10;

console.log(numero == numero2); //True

//pero si lo hacemos con tipos de datos que no son primitivos (Objetos, funciones, arrays, etc) su comparación no es por valor sino por referencia

let array = [1,2,3];
let array2 = [1,2,3];

//Comparación por valor

console.log(array == array2); //False

//pero si lo comprarmos por referencia

console.log(array[0] == array2[0]); //True