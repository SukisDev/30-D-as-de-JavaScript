const emptyArray = [];
console.log(emptyArray)

const fiveValues = [1,2,3,4,5];
console.log(fiveValues)
console.log(fiveValues.length)

let middleValue = Math.floor(fiveValues.length/2)
console.log(fiveValues[0] , fiveValues[middleValue] , fiveValues[fiveValues.length - 1])

const mixedDataType = [1, "dos", true, [], {}]
if ( mixedDataType.length >= 5){
  console.log("El array contiene 5 elementos o más")
} else {
  console.log(`El array no contiene los elementos necesarios, elementos faltantes ${ 5 - mixedDataType.length}.`)
}

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies)
console.log(`Número de empresas: ${itCompanies.length}`)

const middleCompanie = Math.floor(itCompanies.length/2)
console.log(`Primera empresa: ${itCompanies[0]}, empresa del medio: ${itCompanies[middleCompanie]}, ultima empresa: ${itCompanies[itCompanies.length - 1]}`)

console.log(`Empresas: ${itCompanies.join(", ")}`)

/*itCompanies[0] = "FACEBOOK"
itCompanies[1] = "GOOGLE"
itCompanies[2] = "MICROSOFT"
itCompanies[3] = "APPLE"
itCompanies[4] = "IBM"
itCompanies[5] = "ORACLE"
itCompanies[6] = "AMAZON"
console.log(itCompanies)*/

let companies = itCompanies.slice(0,itCompanies.length-1)
console.log(`${companies.join(", ")} y ${itCompanies[itCompanies.length-1]} son grandes empresas TI`)

let searchCompanie = "Google"
if (itCompanies.includes(searchCompanie) == true){
  console.log(`${searchCompanie} Existe en el array`)
} else {
  console.log(`${searchCompanie} no existe dentro del array`)
}

const resultado = [];
if ((itCompanies[0].split('o').length - 1) > 1) resultado.push(itCompanies[0]);
if ((itCompanies[1].split('o').length - 1) > 1) resultado.push(itCompanies[1]);
if ((itCompanies[2].split('o').length - 1) > 1) resultado.push(itCompanies[2]);
if ((itCompanies[3].split('o').length - 1) > 1) resultado.push(itCompanies[3]);
if ((itCompanies[4].split('o').length - 1) > 1) resultado.push(itCompanies[4]);
console.log(resultado); 

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

console.log(itCompanies.splice(3))

console.log(itCompanies.slice(0, itCompanies.length - 3))

console.log(itCompanies.slice(itCompanies.length/2, Math.floor(itCompanies.length/2 + 1)))

itCompanies.shift()
console.log(itCompanies)

// Intermedio ???

itCompanies.pop()
console.log(itCompanies)

console.log(itCompanies.splice())