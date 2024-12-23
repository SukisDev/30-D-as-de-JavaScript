let date = new Date()

let año = date.getFullYear()
let mes = String(date.getMonth() + 1).padStart(2,'0')
let dia = String(date.getDate()).padStart(2,'0')
let hora = String(date.getHours()).padStart(2,'0')
let minuto = String(date.getMinutes()).padStart(2,'0')

console.log(`${año}-${mes}-${dia} ${hora}:${minuto}`);