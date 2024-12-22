/*
    'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.
     Cuente el número de palabras amor en esta oración.

Usa match() para contar el número de todos los porque en la siguiente oración:
'No puedes terminar una oración con porque porque porque es una conjunción'

Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting 
  &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate 
  yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";


Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 
'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
*/


let cadena = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.'
let pattern = /amor/gi;

console.log(cadena.match(pattern).length)

let string = 'No puedes terminar una oración con porque porque porque es una conjunción'
let buscar = /porque/gi

console.log(string.match(buscar).length)

// El tercero no lo pude hacer 

let txt = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.' 
let regEx = /\d+/g;
let salarioAnual = txt.match(regEx)
let salarioAnualSuma = salarioAnual[0] * 12 + parseInt(salarioAnual[1]) + salarioAnual[2] * 12
console.log(`Gana ${salarioAnual[0]} de euros por mes, bono anual de ${salarioAnual[1]} euros y cursos en lines de ${salarioAnual[2]}
            euros por mes, teniendo eso en cuenta, tiene un salario anual de ${salarioAnualSuma} anuales.`)


