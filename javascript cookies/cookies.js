console.log(document.Cookie)
document.cookie ="name=avijat2743"
document.cookie ="name2=avijat275443"
document.cookie ="name=avijat"

let key = prompt("enter your key ")
let value = prompt("enter your value ")
document.cookie = `${key}=${value}`
console.log(document.Cookie)