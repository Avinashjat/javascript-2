let key = prompt("enter your key ")
let value = prompt("enter your value ")

localStorage.setItem(key,value)
// console.log(localStorage.getItem(key))

console.log(`the value of ${key} is ${localStorage.getItem(key)}`)


if(key=="red" || key =="blue"){
localStorage.removeItem(key)
}

if(key==0){
localStorage.clear()
}