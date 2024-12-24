/* 
Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

Ingrese su edad: 30
Tiene la edad suficiente para conducir.

Ingrese su edad:15
Te faltan 3 años para conducir.
Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

Ingrese su edad: 30
Eres 5 años mayor que yo.
Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

Usando if else
operador ternario.
let a = 4;
let b = 3;
  4 es mayor que 3
Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

Ingrese un número: 2
2 es un número par

Ingrese un número: 9
9 es un número impar
*/

let edadUsuario = prompt("Introduzca su edad para comprobar si puede conducir:");

if(edadUsuario <= 0 || edadUsuario >= 110){
    alert(`${edadUsuario} no es una edad válida`)
} else if (edadUsuario >= 18){
    alert("Usted tiene la edad suficiente para conducir")
} else if (edadUsuario < 18 && edadUsuario > 16) {
    alert(`Le falta ${18 - edadUsuario} año para poder conducir`)
} else if(edadUsuario <= 16){
    alert(`Le faltan ${18 - edadUsuario} años para poder conducir`) 
} else { 
    alert(`${edadUsuario} no es un edad correcta`)
}

let myAge = 20;
let yourAge = prompt("Introduce tu edad:");
let menor = Math.abs(myAge - yourAge)

if (myAge == yourAge){
    alert("Tenemos la misma edad")
} else if(myAge > yourAge) {
    alert(`Soy ${myAge - yourAge} años mayor que tú.`)
} else {
    alert(`Soy ${menor} años menor que tú.`)
}


let a = 4;
let b = 3;

if (a == b){
    console.log(`${a} es igual que ${b}`)
} else if(a > b){
    console.log(`${a} es mayor que ${b}`)
} else{
    console.log(`${a} es menor que ${b}`)
}

a > b ? console.log(`${a} es mayor que ${b}`) : console.log(`${a} es menor que ${b}`)

let numero = prompt("Introduzca un número:")


if (numero % 2 == 0){
    alert(`${numero} es un número par`)
} else {
    alert(`${numero} es un número impar`)
}




