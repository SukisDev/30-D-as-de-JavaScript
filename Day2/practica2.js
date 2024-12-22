/*
    Usando console.log() imprima la siguiente declaración:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Usando console.log() imprima la siguiente cita de la Madre Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.

Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.

Verifique si 'on' se encuentra tanto en Python como en la jerga

Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.

Genere un número aleatorio entre 0 y 100 inclusive.

Genere un número aleatorio entre 50 y 100 inclusive.

Genere un número aleatorio entre 0 y 255 inclusive.

Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.

Use console.log() y caracteres de escape para imprimir el siguiente patrón.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
*/


let oracion = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.\
' by John Holmes teaches us to help one another."
console.log(oracion);

let oracion2 = "Love is not patronizing and charity isn't about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(oracion2);

let ten = "10"
let diez = 10

console.log(ten == diez) // true

let floatNumber = Math.round(parseFloat("9.8"))
let intNumber = 10

console.log(floatNumber == intNumber)

let python = "python"
console.log(python.includes("on"))

console.log(python.includes("jargon"))

console.log(Math.floor(Math.random() * 101))

console.log(Math.floor(Math.random() * 51) + 50)

console.log(Math.floor(Math.random() * 256))

let cadena = "JavaScript"
let randomCaracter = Math.floor(Math.random() * cadena.length)

console.log(cadena[randomCaracter])

console.log("1\t1\t1\t1\t1")
console.log("2\t1\t2\t4\t8")
console.log("3\t1\t3\t9\t27")
console.log("4\t1\t4\t16\t64")
console.log("5\t1\t5\t25\t125")

// la utlima no sé como hacerlo