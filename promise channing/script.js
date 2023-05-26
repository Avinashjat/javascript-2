let p1 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        console.log("resolved after two seconds")
        reslove(56)
    },2000)
})

p1.then((value)=>{
      console.log(value)
      let p2 = new Promise((resolve ,reject)=>{
        setTimeout(()=>{
          resolve("promise 2")
        },2000) 
      })
      return p2
}).then((value)=>{
       console.log("we are done")
       return 2
    }).then((value)=>{
        console.log(" done done done")
    })


