let url = "https://kontests.net/api/v1/all"

let response = fetch(url)
response.then((v)=>{
       return v.json()
}).then((contests)=>{

    console.log(contests)
    ihtml = ""
    for(item in contests){
        console.log(contests[item])
       
        ihtml += `
        
        div  class="card" >
        <img src="https://objectstore.e2enetworks.net/hansmigration/feeds/2021/02/04/1028994-coding-skills.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">  </p>
          <P> start at : ${contests[item].start_time} </P>
          <P> start at : ${contests[item].end_time} </P>
          <a href="${contests[item].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      

        `
    }
    cartcontainer.innerHTML = ihtml
})

 
