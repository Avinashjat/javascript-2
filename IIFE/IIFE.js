let p = ()=>{
    return new Promise((resolve ,reject)=>{
      setTimeout (()=>{
   resolve(576)
     

},2000)

})
}
( async()=>{

let b = await p()
console.log(b)
let c = await p()
console.log(b)
let d = await p()
console.log(b)

})()

// f()
