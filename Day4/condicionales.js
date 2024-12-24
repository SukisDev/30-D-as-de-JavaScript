// if 

let num = 3
if (num > 0){
    console.log(`¡${num} es un número positvo!`)
}

let isRaining = true;

if(isRaining){
    console.log("Recuerda llevar un impermeable")
}

// Else

//let num = 3
if (num > 0){
    console.log(`¡${num} es un número positivo!`)
} else {
    console.log(`¡${num} no es número negativo!`)
} // ¡3 es un número positivo!

num = -3
if (num > 0){
    console.log(`¡${num} es un número positivo!`)
} else {
    console.log(`¡${num} no es número negativo!`)
} // ¡-3 es un número negativo!


///let isRaining = true;
if(isRaining){
    console.log("Recuerda llevar un impermeable")
} else {
    console.log("No es necesario que lleves impermeable")
} // Recuerda llevar un impermeable

isRaining = false
if(isRaining){
    console.log("Recuerda llevar un impermeable")
} else {
    console.log("No es necesario que lleves impermeable")
} // No es necesario que lleves impermeable

// Else if

let a = 0

if(a > 0){
    console.log(`${a} es un número positivo.`)
} else if(a < 0) {
    console.log(`${a} es un número negativo.`)
} else if(a == 0){
    console.log(`${a} es cero.`)
} else {
    console.log(`${a} no es un número`)
} // 0 es cero


// Switch


let weather = "cloudy";

switch (weather){
    case "rainy":
        console.log("Necesitas un impermeable");
        break;
    case "cloudy":
        console.log("Puede que haga frio, necesitas una chaqueta");
        break;
    case "sunny":
        console.log("Sal tranquilo.")
        break;
    default:
        console.log("No hay necesidad de un impermeable")
} // Necesitas un impermeable

let dayOfWeek = prompt("¿Qué dias es hoy?");
let day = dayOfWeek.toLowerCase();

switch (day){
    case "lunes":
        alert("Hoy es lunes")
        break
    case "martes":
        alert("Hoy es martes")
        break
    case "miercoles":
        alert("Hoy es miercoles")
        break
    case "jueves":
        alert("Hoy es jueves")
        break
    case "viernes":
        alert("Hoy es viernes")
        break
    case "sabado":
        alert("Hoy es sabado")
        break
    case "domingo":
        alert("Hoy es domingo")
        break
    default:
        alert("No es un dia de la semana")
        break
}

// Switch con condiciones If

let n = prompt("Introduzca un número")
let numero = parseInt(n)

switch (true){
    case numero > 0:
        alert(`${numero} es un número positivo`)
        break
    case numero < 0:
        alert(`${numero} es un número negativo`)
        break
    case numero == 0:
        alert(`${numero} es cero`)
        break
    default:
        alert(`${numero} no es un número!!`)
        break
}

// Operadores ternarios (Ya visto anteriormente)

isRaining
  ? console.log("Necesitas un impermeable.")
  : console.log("No hay necesidad de un impermeable.");

  