class myrailway {

    constructor(username,trainnumber){
            this.name = username
            this.trainnumber = trainnumber 

            console.log("constructor called ::"+username+ " "+trainnumber)
         }

    
    submit(){
        alert(this.name +":from is submitted for train no ->" +this.trainnumber)
     }
     cancel(){
        alert(this.name  +": from submitted cancel train no ->" + this.trainnumber)
     }
   
}

let harry = new  myrailway("harry",233424)
let avi = new  myrailway("avi",542524)

// harry.fillfrom("harry",233424)
// avi.fillfrom("avi",542524)


harry.submit()
avi.submit()
avi.cancel()