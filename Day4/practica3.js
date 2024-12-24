/*
Escribe un programa que diga el número de días en un mes.
  Introduce un mes: Enero
  Enero tiene 31 días.

  Introduce un mes: ENERO
  enero tiene 31 dias

  Introduce un mes: Febrero
  Febrero tiene 28 días.

  Introduce un mes: FEbrero
  Febrero tiene 28 días.
Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.
*/

let mes = {
    1:"enero",
    2:"febrero",
    3:"marzo",
    4:"abril",
    5:"mayo",
    6:"junio",
    7:"julio",
    8:"agosto",
    9:"septiembre",
    10:"octubre",
    11:"noviembre",
    12:"diciembre"
}

let año = prompt("introduzca el año:"); 

entradaUser = prompt("introduzca un mes:").toLowerCase()
let numeroMes = null;

switch (entradaUser) {
    case "enero":
        numeroMes = 1;
        break;
    case "febrero":
        numeroMes = 2;
        break;
    case "marzo":
        numeroMes = 3;
        break;
    case "abril":
        numeroMes = 4;
        break;
    case "mayo":
        numeroMes = 5;
        break;
    case "junio":
        numeroMes = 6;
        break;
    case "julio":
        numeroMes = 7;
        break;
    case "agosto": 
        numeroMes = 8;
        break;
    case "septiembre":
        numeroMes = 9;
        break;
    case "octubre":
        numeroMes = 10;
        break;
    case "noviembre":
        numeroMes = 11;
        break;
    case "diciembre":
        numeroMes = 12;
        break;
    default:
        numeroMes = null;
}

if (numeroMes == null){
    console.log("Dato no valido")
} else {
    let diasPorMes = new Date(año, numeroMes , 0).getDate();
    console.log(`Días en el mes de ${mes[numeroMes]}: ${diasPorMes}`)
}

