// for loop

for (let i = 0; i <= 5; i++){
    console.log(i)
}

for (let i = 5; i >= 0; i--){
    console.log(i)
}

for (let i = 1; i <= 9; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ["Finlandia", "Suecia", "Dinamarca", "Noruega", "Islandia"]
const newCountries = []

for (let i = 0; i < countries.length; i++){
    newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries)


const numeros = [1,2,3,4,5]
let sum = 0
for (let i = 0; i < numeros.length; i++){
    sum += numeros[i];
}
console.log(sum)

// const numeros = [1,2,3,4,5]
const newNumeros =[]

for (let i = 0; i < numeros.length; i++){
    newNumeros.push(numeros[i] ** 2);
}
console.log(newNumeros); //[1, 4, 9, 16, 25]


// while loop

let i = 0;
while (i <= 5){
    console.log(i);
    i++;
}

// do while loop
 
// let i = 0;
do{
    console.log(i);
    i++;
} while (i <= 5);


// for of loop

// const numeros = [1,2,3,4,5]

for (num of numeros){
    console.log(num)
} // 1 2 3 4 5 

for (num of numeros){
    console.log(num * num)
} // 1 4 9 16 25

// let sum = 0

for (num of numeros){
    sum += num;
}
console.log(sum)

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

  
for (tech of webTechs){
    console.log(tech.toUpperCase());
}

for (tech of webTechs){
    console.log(tech[0]); // Solo imprime la primera letra de cada elemento en cada iteración
} 

// const countries = ["Finlandia", "Suecia", "Dinamarca", "Noruega", "Islandia"]
const newcontry = []

for (country of countries){
    newcontry.push(country.toUpperCase())
}
console.log(newcontry)


// break
for (let i = 0; i <= 5; i++){
    if(i == 3){
        break;
    }
    console.log(i)
} // 0 1 2

// continue
for (let i = 0; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
} // 0 1 2 4 5