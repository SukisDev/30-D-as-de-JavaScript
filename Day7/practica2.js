function printArray(arr){
    for(element of arr){
        console.log(element)
    }
}
const array = ["MongoDB", "Express", "React", "Nodejs"]
printArray(array)

function showDateTime(){
    let date = new Date()
    console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)
}
showDateTime()

function swapValues(){
    const reverso = []
    for(let i = arguments.length; i <= 0; i--){
        reverso.push(arguments[i])
    }
}
console.log(swapValues(3, 4))

function swapValues(x, y){   
    return [y, x];
}
console.log(swapValues(3, 4))

function reverseArray(array){
    const reverso = []
    for (let i = array.length - 1; i >= 0; i--) {
      reverso.push(array[i]);
    }
    console.log(reverso)
  }
  reverseArray([1, 3, 4, 5, 6])

  
function capitalizeArray(array){
   const capitalArray = []
   for(capital of array){
       capitalArray.push(capital.toUpperCase())
   }
    return capitalArray
}

const items =["Ordenador", "Escritorio", "Silla"]
function addItem(item){
  items.push(item);
  return items
}
console.log(addItem("Controller"))


const charArr = [1, 2, 3, 4, 5, 6];
function removeItem(index){
    charArr.splice(index, 1);
    console.log(charArr)
}
removeItem(2)

function sumOfNumbers(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += i
    }
    console.log(sum)
}
sumOfNumbers(5)

function sumOfOdds(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        if(i % 2 != 0){
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(7))

function sumOfEven(num){
    let sum = 0;
    for(let i = 0; i <= num; i++){
        if(i % 2 == 0){
            sum += i
        }
    }
    return sum
}
console.log(sumOfEven(10))

function evensAndOdds(num){
    if(num >= 0){
     let sumPar = 0
     let sumImpar = 0
       for(let i = 0; i <= num; i++){
         if(i % 2 == 0){
            sumPar++;
         }else if(i % 2 != 0){
           sumImpar++;
         }
       }
       console.log(`El número de impares son ${sumImpar}.`);
       console.log(`El número de pares son ${sumPar}.`)
    }
 }
 evensAndOdds(100)