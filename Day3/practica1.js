/*
Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.

Verifique si typeof '10' es igual a 10

Verifique si parseInt('9.8') es igual a 10

Verifique cualquier valor booleano true o false.

Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
No hay 'on' tanto en dragon como en python
Utilice el objeto Date para realizar las siguientes actividades

¿Qué año es hoy?
¿Qué mes es hoy con un número?
¿Qué fecha es hoy?
¿Qué día es hoy con un número?
¿Cuál es la hora actual?
¿Cuántos minutos hay actualmente?
Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
*/

let firstName = "Jean"
let lastName = "Gómez"
let country = "Panamá"
let city = "Santiago"
let age = 20
let isMarried = false

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

console.log(typeof '10' == 10) // false

console.log((parseInt(9.8) == 10)) // false

console.log(4 == "4")
console.log(true == [1])
console.log(1 === 1)

console.log("23" === 23)
console.log(true != true)
console.log(1 !== 1)

console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) //true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 !='4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false
// Todo correcto

let python = "python"
let jargon = "jargon"

console.log(python.length !== jargon.length)

console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!false) //true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true

let py = "python"
let drg = "dragon"
console.log(!(py.includes("on") && drg.includes("on"))) // false

let time = new Date()

console.log(`Estamos en el año ${time.getFullYear()}`)

console.log(`Estamos en el mes ${time.getMonth() + 1}`)

console.log(`La fecha de hoy: ${time.getDate()}`)

console.log(`El día de hoy es ${time.getDay()}`)

console.log(`Hora: ${time.getHours()}`)

console.log(`Minutos: ${time.getMinutes()}`)

console.log(`Han pasado ${time.getTime()} segundos desde el 1 de enero de 1970`)






