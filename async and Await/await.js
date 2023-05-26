
async function avi(){
    let kotaweather =new Promise ((resolve,reject)=>{
          setTimeout(()=>{
            resolve("45 deg")
          },2000)
    })
    
    let jaipurweather =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
          resolve("40 deg")
        },7000)
    })
 console.log("kota weather please wait ...")
    let kotaw = await kotaweather
    console.log("kota weather  =" +kotaw)
    console.log("jaipur weather please wait ...")
    let jaipurw = await jaipurweather
    console.log("dehli weather  = " +jaipurw)
    return [kotaw,jaipurw]


    }

    const chinki = async()=>{
   console.log("hey i am a function ")
    }
    
    const hello = async()=>{
        
    console.log("welcome to the weather control room")
   let a = await avi()
   let b = await chinki()
//    a.then((value)=>{
//     console.log(value)
//    })
}
hello ()