class employee{
       login(){
        console.log(`employee is logged in`)
       }

       logout(){
        console.log(`employee is logout in`)
       }

       requestleave(leaves){
        console.log(`request for leave  ${leaves} days`)
       }

}

class programmer extends employee{
    requestcoffe(x){
        console.log(`request  for ${x} coffes`)
       }

       requestleave(leaves){

        super.requestleave(4)
    //     console.log(`request for leave  ${leaves+1} days (one for gift)`)
      }

}

let e = new programmer()
e.login()
e.requestleave(3)