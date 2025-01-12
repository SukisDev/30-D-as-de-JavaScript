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