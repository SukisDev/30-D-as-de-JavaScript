const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let iteración = Math.floor(Math.random() * caracteres.length);
let resultado = ""

for(let i = 0; i < iteración; i++){
    let randomChar = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres.charAt(randomChar)
}
console.log(resultado)

const caracteresHex = '0123456789ABCDEF';
let resultadoHex = '#'

for(let i = 0; i <= 6; i++){
    let randomHex = Math.floor(Math.random() * caracteresHex.length)
    resultadoHex += caracteresHex.charAt(randomHex)
}
console.log(resultadoHex)

let colores = []
for (let i = 0; i < 3; i++){
    let rgb = Math.floor(Math.random() * 256)
    colores.push(rgb)
}
console.log(`rgb(${colores[0]},${colores[1]},${colores[2]})`)

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Iceland",
    "Japan",
    "Kenya",
  ];
  
const countriesMayus = [] 
const longitudCountry = []
for (capital of countries){
    countriesMayus.push(capital.toUpperCase())
    longitudCountry.push(capital.length)
}
console.log(countriesMayus,longitudCountry)

const inicialCountry = []
for(short of countriesMayus){
    inicialCountry.push(short.substring(0,3))
}

const arrayCountry = []
for(let i = 0; i < countries.length;i++){
    arrayCountry.push([countries[i],inicialCountry[i],longitudCountry[i]])
}
console.log(arrayCountry)

const landCountries =[]
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes("land") == true){
        landCountries.push(countries[i])
    }
}if(landCountries.length < 1){
    console.log("Todos estos países no tienen la palabra land");
}
console.log(landCountries)

const iaCountry = []
for(let i = 0; i < countries.length; i++){
    if(countries[i].endsWith("ia") == true){
        iaCountry.push(countries[i])
    }
}
if(iaCountry.length < 1){
  console.log("Estos países no terminan con ia");
}
console.log(iaCountry)

let maxLongitud = "";
for(let i = 0; i < countries.length; i++){
    if(maxLongitud.length < countries[i].length){
        maxLongitud = countries[i]
    }
}
console.log(maxLongitud)

const fiveLetters = []
for(let i = 0; i < countries.length; i++){
  if(countries[i].length == 5){
    fiveLetters.push(countries[i])
  }
}
console.log(fiveLetters)


const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "Express",
    "MongoDB",
  ];
  
let maxLenWeb = ""
const webLen = []
for(let i = 0; i < webTechs.length; i++){
    if(maxLenWeb.length < webTechs[i].length){
        maxLenWeb = webTechs[i]
    }
    webLen.push(webTechs[i].length)
}
console.log(maxLenWeb)

const webArray = []
for(let i = 0; i < webTechs.length; i++){
    webArray.push([webTechs[i],webLen[i]])
}
console.log(webArray)

const mernStack = ["MongoDB", "Express", "React", "Node"]
let mern = ""
for(mernStck of mernStack){
    mern += mernStck.substring(0,1).toUpperCase()
}
console.log(mern)

for(web of webTechs){
    console.log(web)
}

const frutas = ["banana", "orange", "mango", "lemon"]
for(let i = frutas.length - 1; i >= 0; i--){
    console.log(frutas[i])
}

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];

let tech = "";
for(let i = 0; i < fullStack.length; i++){
    tech += fullStack[i]
}
console.log(tech.split(","))