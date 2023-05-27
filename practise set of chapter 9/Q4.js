let p1 = async()=>{
    return new Promise ((reslove,reject)=>{
        setTimeout(()=>{
            reslove(9)
        },3000)
    })
}

let p2 = async()=>{
    return new Promise ((reslove,reject)=>{
        setTimeout(()=>{
            reslove(10)
        },2000)
    })
}

let p3 = async()=>{
    return new Promise ((reslove,reject)=>{
        setTimeout(()=>{
            reslove(11)
        },1000)
    })
}


const run = async()=>{
  
    //  let b = await p1()
    //  console.log(b)
    //  let c= await p2()
    //  console.log(c)
    //  let d = await p3()
    //  console.log(d)
    console.time("run")
    let b=p1()
    let c=p2()
    let d=p3()
    let time1 = await Promise.all([b,c,d])
    console.log(time1)
     console.timeEnd("run")
}

run()

// let prom = Promise.all([p1,p2,p3])
// prom.then((value)=>{
//     console.log(value)
// })