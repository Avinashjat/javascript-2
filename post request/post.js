let createtodo = async (todo) => {

    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify(todo)
       

    }
let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const gettodo = async(id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1'+id)
  let r= response.json()
   return r
}

const mainfunc= async()=> {
    let todo ={
            title: 'avi',
            body: 'jat',
            userId: 1,
    }
  let todor = await createtodo(todo)
  console.log(todor)

  console.log(await gettodo(5))
}



mainfunc ()



