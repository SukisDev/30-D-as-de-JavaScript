import { webTechs } from "./web_techs.js";

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let arrText = text.split(" ")
console.log(arrText)
console.log(arrText.length)

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
let honeyAlergic = false

if (shoppingCart.includes("Meat") == false){
    shoppingCart.unshift("Meat")
}

if (shoppingCart.includes("Sugar") == false){
    shoppingCart.push("Sugar")
}

if (honeyAlergic == true){
    shoppingCart.splice(shoppingCart.indexOf("Honey"))
}

let indexOfTea = shoppingCart.indexOf("Tea");
shoppingCart[indexOfTea] = "Green Tea";

console.log(shoppingCart)

// está en el main.js la otra parte

if (webTechs.includes("Sass") == true){
    console.log("Sass es un preproceso de CSS")
} else {
    webTechs.push("Sass")
    webTechs.sort()
    console.log(webTechs)
}

const frontEnd = ["HTML", "CSS", "JavaScript", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);

