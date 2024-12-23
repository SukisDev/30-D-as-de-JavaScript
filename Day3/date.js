//Objeto Date

// Crear un objeto de tiempo Date()
let time = new Date()
console.log(time) // Sun Dec 22 2024 16:05:16 GMT-0500 (Eastern Standard Time)

// obtener el año completo
console.log(time.getFullYear()); // 2024

// Obtener el mes
console.log(time.getMonth()); // 11(diciembre), porque va del 0-11

// Obtener el fecha
console.log(time.getDate()); // 22

// Obtener dia
console.log(time.getDay()); // 0 (domingo)

// Obtener horas
console.log(time.getHours()); // 16

// Obtener Minutos
console.log(time.getMinutes()); // 19

// Obtener Segundos
console.log(time.getSeconds()); // 38

//Obtener tiempo en milisegundos a partir del 1 de enero de 1970, se conoce como tiempo Unix
console.log(time.getTime());

// Vamos a formatear estos valores para hacerlos leibles para los humanos

const date = new Date();

const año = date.getFullYear();
const mes = date.getMonth() + 1;
const dia = date.getDate();
const hora = date.getHours();
const minutos = date.getMinutes();

console.log(`${dia}/${mes}/${año} ${hora}:${minutos}`) //22/12/2024 16:47
