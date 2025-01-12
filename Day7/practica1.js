function fullName(){
    let fisrtName = "Jean";
    let lastName = "gómez"
    console.log(`${fisrtName} ${lastName}`);
}
fullName()

function myFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(myFullName("Jean", "Gómez"))

function addNumbers(num1,num2){
    return num1 + num2;
}

function areaOfRectangle(length, width){
    return length * width;
}

function perimeterOfRectangle(length, width){
    return 2 * (length + width)    
}

function volumeOfRectPrism(length, width, height){
    return length * width * height;
}

function areaOfCircle(radius){
    return Math.PI * radius ** 2;
}

function circumOfCircle(radius){
    return 2 * Math.PI * radius;
}

function density(mass, volume){
    return mass / volume;
}

function speed(totalDistance, time){
    return totalDistance / time;
}

function weight(mass, gravity = 9.81){
    return mass * gravity
}

function convertCelsiusToFahrenheit(c){
    return (c * 9/5) + 32;
}

function IMC(peso,altura){
    let imc = peso / (altura ** 2);
    if(imc <= 0 || imc >= 100){
        console.log("Su IMC no es valido")
    }else if(imc < 18.5){
        console.log(`Peso bajo: IMC inferior a 18,5. Su IMC: ${imc}`)
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log(`Peso normal: IMC de 18,5 a 24,9. Su IMC: ${imc}`)
    }else if(imc >= 25 && imc <= 29.9){
        console.log(`Peso sobrepeso: IMC de 25 a 29,9. Su IMC: ${imc}`)
    }else if(imc >= 30){
        console.log(`Obeso: IMC es 30 o más. Su IMC: ${imc}`)
    }
}

function checkSeason(mes){
    let otoño = ["septiembre", "octubre", "noviembre"];
    let invierno = ["diciembre", "enero", "febrero"];
    let Primavera =["marzo", "abril", "mayo"];
    let verano = ["junio", "julio", "agosto"];
    let temp = mes.toLowerCase()

    switch (true){
        case otoño.includes(temp) == true:
            console.log(`${temp} es otoño.`);
            break;
        case invierno.includes(temp) == true:
            console.log(`${temp} es invierno.`);
            break;
        case Primavera.includes(temp) == true:
            console.log(`${temp} es primavera.`)
            break;
        case verano.includes(temp) == true:
            console.log(`${temp} es verano.`)
            break;
        default:
            console.log("No esta en ninguna estación del año")
    }
}

function findMax(){
    let numMax = 0;
    for(let i = 0; i < arguments.length; i++){
        if(numMax < arguments[i]){
            numMax = arguments[i]
        }
    }
    return numMax;
}
console.log(findMax(0, 10, 5)) // 10