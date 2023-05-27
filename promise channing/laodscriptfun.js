const loadscript = (src)=>{

let script =document.createElement("script")
return new Promise ((resolve , reject )=>{
script.type ="text/javascript"
script.src=src
document.body.appendChild(script)
script.onload= ()=>{
   resolve("script is loaded== " + src)
}
script.onerror=()=>{
    reject(0)
}
})
}

let p1= loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")

p1.then((value)=>{
console.log(value)
return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("second script")  
}).catch

p1.catch((error)=>{
  console.log("sorry error if not find....")
})
