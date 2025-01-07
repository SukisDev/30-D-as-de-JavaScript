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
    "Japan",
    "Kenya",
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  
  const mernStack = ["MongoDB", "Express", "React", "Node"];


for(let i = 0; i <= 10; i++){
    console.log(i)
}

let i = 0
while(i <=10){
    console.log(i)
    i++;
}

do{
    console.log(i)
    i++;
} while(i <= 0);

for(let i = 10; i >= 0; i--){
    console.log(i)
}

let j = 10
while(j >= 10){
    console.log(j);
    j--;
}

do{
    console.log(j);
    j--
}while(j >= 0);

let n = 5
for(let i = 0; i <= n; i++){
    console.log(i)
}

let char = "#"
let caracter = []
for(let i = 0; i < 7; i++){
    caracter += char
    console.log(caracter)
}

for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

console.log("i    i^2    i^3")
for(let i = 0; i <= 10; i++){
    console.log(`${i}    ${i**2}    ${i**3}`)
}

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

for(let i = 0; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

for(let num = 2; num <= 100; num++){
    let esPrimo = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            esPrimo = false;
            break;
        }
    }
    if(esPrimo){
        console.log(num)
    }
}

let suma = 0
for(let i = 0; i <= 100; i++){
    suma += i;
}
console.log(`La suma de los números de 0 a 100 es ${suma}`)


let sumPar = 0
let sumImpar = 0
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        sumPar += i;
    } else {
        sumImpar += i;
    }
}
console.log(`La suma de todos los pares de 0 a 100 es ${sumPar}. Y la suma de todos los impares de 0 a 100 es ${sumImpar}`)
console.log([sumPar, sumImpar])

