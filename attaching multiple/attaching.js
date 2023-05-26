let p1 = new Promise ((resolve,reject)=>{
     setTimeout(()=>{
   alert("hey i am not resolved")
  resolve(1)
     },2000)
})

p1.then(()=>{
    console.log(" love you")
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
     resolve(4)
        },5000)

  }).then((value)=>{
    console.log(value)
  })
})
p1.then(()=>{
  console.log("congratulation this promise is now resoled")
})

p1.then(()=>{
    console.log("miss you")
  })


  
