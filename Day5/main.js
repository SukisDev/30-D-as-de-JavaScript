import { countries } from "./countries.js";

if (countries.includes("Ethiopia") == true){
    console.log("ETHIOPIA")
}else{
    console.log("Ethiopia no existe en el array")
    console.log("Agregando...")
    countries.push("Ethiopia")
    countries.sort()
    console.log(countries)
}

