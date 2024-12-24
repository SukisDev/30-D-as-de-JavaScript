/* 
Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

Septiembre, Octubre o Noviembre, la temporada es Otoño.
Diciembre, Enero o Febrero, la temporada es Invierno.
Marzo, Abril o Mayo, la temporada es Primavera
Junio, Julio o Agosto, la temporada es Verano
Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.

    ¿Qué día es hoy? Sábado
    El sábado es fin de semana.

    ¿Qué día es hoy? sábAdo
    El sábado es fin de semana.

    ¿Qué día es hoy? Viernes
    El viernes es un día laborable.

    ¿Qué día es hoy? ViErNes
    El viernes es un día laborable.
*/

let nota = prompt("Introduzca su puntaje de la nota:")

switch(true){
    case nota <= 100 && nota >= 80:
        alert(`Puntaje: ${nota}. Felicidades usted sacó A.`);
        break;
    case nota < 80 && nota >= 70:
        alert(`Puntaje: ${nota}. Usted sacó B.`);
        break;
    case nota < 70 && nota >= 60:
        alert(`Puntaje: ${nota}. Usted sacó C.`);
        break;
    case nota < 60 && nota >= 50:
        alert(`Puntaje: ${nota}. Usted sacó D.`);
        break;
    case nota < 50 && nota >= 0:
        alert(`Puntaje: ${nota}. Usted sacó F.`);
        break;
    case nota > 100 || nota < 0:
        alert("introduzca una puntaje valido")    
}

let otoño = ["septiembre", "octubre", "noviembre"];
let invierno = ["diciembre", "enero", "febrero"];
let Primavera =["marzo", "abril", "mayo"];
let verano = ["junio", "julio", "agosto"];

let temporada = prompt("¿En qué temporada estamos?")
let temp = temporada.toLowerCase()

switch (true){
    case otoño.includes(temp) == true:
        alert(`${temp} es otoño.`);
        break;
    case invierno.includes(temp) == true:
        alert(`${temp} es invierno.`);
        break;
    case Primavera.includes(temp) == true:
        alert(`${temp} es primavera.`)
        break;
    case verano.includes(temp) == true:
        alert(`${temp} es verano.`)
        break;
    default:
        alert("No esta en ninguna estación del año")
}

let diaLaborable = ["lunes", "martes", "miercoles", "jueves", "viernes"];
let finDeSemana = ["sábado", "domingo"];

let day = prompt("¿Qué día es hoy?");
let dia = day.toLowerCase()

switch (true){
    case diaLaborable.includes(dia) == true:
        alert(`El ${dia} es un día laborable.`);
        break;
    case finDeSemana.includes(dia) == true:
        alert(`El ${dia} es fin de semana.`);
        break;
    default:
        alert(`${dia} no es un día de la semana.`)
        break;
}