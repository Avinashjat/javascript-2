class myrailway {

    constructor(username,trainnumber,address){
    
        console.log("constructor called ::"+username+ " "+trainnumber+ " "+address)
        this.name = username
        this.trainnumber = trainnumber 
        this.address = address
    }

            
  preview(){
        alert(this.name +":from is submitted for train no ->" +this.trainnumber + "and your address is :"+this.address )
  }
    
    submit(){
        alert(this.name +":from is submitted for train no ->" +this.trainnumber )
     }
     cancel(){
        alert(this.name  +": from submitted cancel train no ->" + this.trainnumber)
        this.trainnumber = 0
     }
 
}


let avifrom = new myrailway("avinash",135242,"sitapura ,jaipur 302022")

let chinkifrom = new myrailway("khushi",135242,"bus-stand ,kuraj 313328")

avifrom.preview()
avifrom.submit()
chinkifrom.submit()
chinkifrom.cancel()