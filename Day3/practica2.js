/*
    Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

Ingrese base: 20
Ingrese altura: 10
El área del triángulo es: 100
Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

Ingrese lado a: 5
Ingrese lado b: 4
Ingrese lado c: 3
El perimetro del triangulo es: 12
Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2

La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

Compare la pendiente de las dos preguntas anteriores.

Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

Ingrese horas: 40
Introduce la tarifa por hora: 28
Su ganancia semanal es 1120
Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.

Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

let firstName = "Asabeneh";
let lastName = "Yetayeh";
Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.
Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.

let myAge = 250;
let yourAge = 25;
Soy 225 años mayor que tú.
Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

Introduzca el año de nacimiento: 1995
Tienes 25 años. Tienes la edad suficiente para conducir.

Introduzca el año de nacimiento: 2005
Tienes 15 años. Podrás conducir después de 3 años.
Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

Ingrese el número de años de vida: 100
 Viviste 3153600000 segundos.
Cree un formato de hora legible por humanos usando el objeto Date.

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/

let base = prompt("Introduzca la base del triangulo","Escriba aquí")
let altura = prompt("Introduzca la altura del triangulo","Escriba aquí")
alert(`El area del triangulo es: ${0.5 * base * altura}`)

let ladoA = parseInt(prompt("Introduzca el lado A del triangulo","Escriba aquí"))
let ladoB = parseInt(prompt("Introduzca el lado B del triangulo","Escriba aquí"))
let ladoC = parseInt(prompt("Introduzca el lado C del triangulo","Escriba aquí"))
alert(`El perimetro del triangulo es: ${ladoA + ladoB + ladoC}`)

let largo = parseInt(prompt("Introduzca el largo del rectangulo:"))
let ancho = parseInt(prompt("Introduzca el ancho del rectangulo:"))

let areaRectangulo = largo * ancho
let perimetroRectangulo = 2 * (largo + ancho)

alert(`El area del rectangulo es ${areaRectangulo} y el perimetro del rectangulo es ${perimetroRectangulo}`)

let radio = parseInt(prompt("Introduzca el radio del circulo:"))
const pi = Math.PI
let areaCirculo = Math.round((pi * radio ** 2) * 100) / 100
let circunferenciaCirculo = Math.round((2 * pi * radio) * 100) / 100

alert(`El area del circulo es: ${areaCirculo}, la circunferencia: ${circunferenciaCirculo}.`)




