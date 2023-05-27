const loadscript = async (src)=>{
    return new Promise((resolve,reject)=>{

let script = document.createElement("script")
script.src =src
script.onload=()=>{
    resolve("loaded src = "+src)
}
document.head.append(script)
})
}

let a =loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
a.then((value)=>{
    console.log(value)
})

// const hello = async()=>{
//     console.log(new Date().getSeconds)
// let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
// console.log(a)
// }

// hello()