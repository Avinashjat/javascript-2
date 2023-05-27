let p1 = async()=>{ 
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
         reject(new Error("this is error"))
            },3000)
}) 
  
}

let a = async()=>{
    try{
let c = await p1()
console.log(c)
    }
    catch(error){
        console.log(error)
    }
}

a()

