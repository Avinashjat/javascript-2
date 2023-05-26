async function avi(){

let kotaweather =new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve("45 deg")
      },1500)
})

let jaipurweather =new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve("40 deg")
    },7000)
})
kotaweather.then(alert)
jaipurweather.then(alert)
}

console.log("welcome to the weather control room")
avi()
